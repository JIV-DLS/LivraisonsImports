<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Tymon\JWTAuth\Contracts\JWTSubject;

/**
 * @SWG\Definition(
 *     definition="User",
 *     required={"name", "email", "password","profil","employe"},
 *     @SWG\Property(
 *          property="name",
 *          type="string",
 *          description="nom d'utilisateur",
 *          example="John Conor"
 *    ),
 *     @SWG\Property(
 *          property="email",
 *          type="string",
 *          description="Addresse Email",
 *          example="john.conor@terminator.com"
 *    ),
 *     @SWG\Property(
 *          property="password",
 *          type="string",
 *          description="Un mot de passe vraiment sécurisé",
 *          example="123456"
 *    ),
 *     @SWG\Property(
 *          property="profil_id",
 *          type="string",
 *          description="profil de l'utilisateur",
 *          example="1"
 *    ),
 *     @SWG\Property(
 *          property="employe_id",
 *          type="string",
 *          description="Employe auquel est associé ce profil",
 *          example="2"
 *    ),
 *     @SWG\Property(
 *          property="etat",
 *          type="string",
 *          description="etat du compte",
 *          example="activé,désactivé"
 *    ),
 *     @SWG\Property(
 *          property="emailVerifiedAt",
 *          type="string",
 *          description="date à laquelle à été vérifiée l'adresse email",
 *          example="12/04/2016"
 *    ),
 * )
 */

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
        'profil_id', 'employe_id', 'etat','emailVerifiedAt',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Get JSON WEB TOKEN methods.
     *
     * @var array
     */
    public function getJWTIdentifier()
    {
      return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
      return [];
    }

    /**
     * Relationship.
     *
     * @var string
     */

    public function bikes()
    {
      return $this->hasMany('App\Bike');
    }

    public function action()
    {
      return $this->hasMany('App\Action');
    }

    public function profil()
    {
      return $this->hasOne('App\Profil');
    }

    public function employe()
    {
      return $this->hasOne('App\Employe');
    }

}
