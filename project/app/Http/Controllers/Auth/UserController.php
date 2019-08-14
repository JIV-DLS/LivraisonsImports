<?php

namespace App\Http\Controllers\Auth;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\User;
use Validator;
use App\Http\Resources\Auth\UsersResource;

class UserController extends Controller
{
    /**
     * Protect update and delete methods, only for authenticated users.
     *
     * @return Unauthorized
     */
    public function __construct()
    {
      //$this->middleware('auth:api')->except(['index']);
    }


        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/users",
     *     tags={"Users"},
     *     summary="List Users",
     *     @SWG\Response(
     *          response=200,
     *          description="Success: List all Users",
     *          @SWG\Schema(ref="#/definitions/User")
     *      ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *   )
     * ),
     */
    public function index()
    {
        // dd(Auth::check());
        if (Auth::guest()||Auth::user()->profil_id !==1) {
            return response()->json(['error' => 'You are not authorised to do this operation.'], 403);
        }
        $listUsers = User::all();
        return $listUsers;

        // Using Paginate method
        // return UsersResource::collection(User::all());
        // Using Paginate method
        // return UsersResource::collection(User::with('ratings')->paginate(10));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Get(
     *     path="/api/users/{id}",
     *     tags={"Users"},
     *     summary="Get User by Id",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Display the specified user by id.",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the User",
     *          @SWG\Schema(ref="#/definitions/User")
     *      ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *   )
     * ),
     */
    public function show($id)
    {
        return (Auth::check())?
        (Auth::user()->profil_id ==1 || Auth::user()->id == $id)?
        new UsersResource(User::with('Employe')->findOrFail($id))
        :
        response()->json(['error' => 'You can only check your own account.'], 403)
        :
        response()->json(['error' => 'Sorry you are not allow to do this operation.'], 403);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Put(
     *     path="/api/users/{id}",
     *     tags={"Users"},
     *     summary="Update User",
     *     @SWG\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          type="integer",
     *          description="Update the specified user by id.",
     * 		),
     *     @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/User"),
     * 			description="Json format",
     * 		),
     *     @SWG\Response(
     *          response=200,
     *          description="Success: Return the User updated",
     *          @SWG\Schema(ref="#/definitions/User")
     *      ),
     *     @SWG\Response(
     *          response="422",
     *          description="Missing mandatory field"
     *     ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *   )
     * ),
     */
    public function update(Request $request, User $user)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'profil_id' => 'required',
            'employe_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // check if currently authenticated user is the user owner
        if(Auth::guest())return response()->json(['error' => 'You are not authorised to do this operation.'], 403);
        if ($request->user()->profil_id !==1 && $request->user()->id !== $user->id) {
            return response()->json(['error' => 'You can only edit your own account.'], 403);
        }

        $request['password']= Hash::make($request['password']);
        if($user->profil_id !==1)
        $user->update($request->only(['email', 'name', 'password']));
        else
        $user->update($request->all());

        return new UsersResource($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     *     @SWG\Delete(
     *     path="/api/users/{id}",
     *     tags={"Users"},
     *     summary="Delete user",
     *     description="Delete the specified user by id",
     *     @SWG\Parameter(
     *         description="User id to delete",
     *         in="path",
     *         name="id",
     *         required=true,
     *         type="integer",
     *         format="int64"
     *     ),
     *     @SWG\Response(
     *         response=404,
     *         description="Not found"
     *     ),
     *     @SWG\Response(
     *         response=204,
     *         description="Success: successful deleted"
     *     ),
     * )
     */
    public function destroy($id)
    {
        if (Auth::user()->profil_id !==1) {
            return response()->json(['error' => 'You are not authorised to do this operation.'], 403);
        }
        $deleteUserById = User::find($id)->delete();
        return response()->json([], 204);
    }

}
