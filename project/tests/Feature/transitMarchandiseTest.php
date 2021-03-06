<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\transitMarchandise\transitMarchandise;
use App\Http\Controllers\API\TransitMarchandiseController\TransitMarchandiseController;

class transitMarchandiseTest extends TestCase
{
    
        //$this->$route = 'http://localhost:8000/api/transitMarchandises';
      
    private $route='http://localhost:8000/api/transitMarchandises';
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $this->assertTrue(true);
    }
        /**
     * A test to check if we can take a transitMarchandise whith the show method
     *
     * @return void
     */
    public function testshowTransitMarchandisebyIdWithShow()
    {
        $route = 'http://localhost:8000/api/transitMarchandises';
        $response=$this->withHeaders([
            'X-Header'=> 'Value'
        ])->json('Get',$route.'/503');
            // dd($response);
        $response
        ->assertStatus(200);
        // ->assertJson([
        //     'created'=>true,
        // ]);
    }
    /**
     * A test to check if we can delete a transitMarchandise whith the delete method
     *
     * @return void
     */
    public function testdeleteTransitMarchandiseWitchNotExistedWithStore()
    {
        $route = 'http://localhost:8000/api/transitMarchandises';
        $response=$this->withHeaders([
            'X-Header'=> 'Value'
        ])->json('delete',$route.'/2');
            // dd($response);
        $response
        ->assertStatus(204);
        // ->assertJson([
        //     'created'=>true,
        // ]);
    }
    /**
     * A test to check if we can add a transitMarchandise whith the store method
     *
     * @return void
     */
    public function testaddTransitMarchandiseWitchNotExistedWithStore()
    {
        $route = 'http://localhost:8000/api/transitMarchandises';
        dump("S'assurer que le le transitMarchandise n'exite");
        $TransitMarchandise=
        [
            'transit_id'=>'2',
            'marchandises'=>[
                [
                    'marchandise_id'=>'2',
            'quantite'=>'22'
                ]
                
            ]
        ];
        $response=$this->withHeaders([
            'X-Header'=> 'Value'
        ])->json('POST',$route,$TransitMarchandise);
            // dd($response);
        $response
        ->assertStatus(201);
        // ->assertJson([
        //     'created'=>true,
        // ]);
    }
    
    /**
     * A test to check if we can add a transitMarchandise whith the store method
     *
     * @return void
     */
    public function testaddTransitMarchandiseWitchExistedWithStore()
    {
        $route = 'http://localhost:8000/api/transitMarchandises';
        $TransitMarchandise=
        [
            'transit_id'=>'2',
            'marchandises'=>[
                [
                    'marchandise_id'=>'2',
            'quantite'=>'22'
                ]
                
            ]
        ];
        $response=$this->withHeaders([
            'X-Header'=> 'Value'
        ])->json('Get',$route.'/transit_id/?id='.$TransitMarchandise['transit_id']);
        // dump(collect($response->original));
        if(collect($response->original)->count()==0)
        {
            dump('desolé cet transitMarchandise n\'existait pas au préalable');
            return;
        }
        $response=$this->withHeaders([
            'X-Header'=> 'Value'
        ])->json('POST',$route,$TransitMarchandise);
            // dd($response);
        $response
        ->assertStatus(200);
        // ->assertJson([
        //     'created'=>true,
        // ]);
    }

    /**
     * A test to check if we can get a transitMarchandise whith the index method
     *
     * @return void
     */
    public function testgetTransitMarchandiseWithIndex()
    {
        $route = 'http://localhost:8000/api/transitMarchandises';
        
        $response=$this->withHeaders([
            'X-Header'=> 'Value'
        ])->json('Get',$route);
            // dd($response);
            // dump($response);
        
        echo("Verification de l'état de la requête de recupération\n");
        $response->assertStatus(200);
        echo("Verification de l'état des marchandises transités\n");
        foreach ($response->getdata() as $key => $value) {
            // dd($value->state=='1');
            $this->assertTrue($value->state=='1',"les Marchandises récupérées ne sont pas tous actives","euih");
        }
        // ->assertJson([
        //     'created'=>true,
        // ]);
    }
    /**
     * A test to check if we can update a transitMarchandise whith the update method
     *
     * @return void
     */
    public function testupdateTransitMarchandiseWithUpdate()
    {
        $route = 'http://localhost:8000/api/transitMarchandises';
        $TransitMarchandise=
        [
            'transit_id'=>'2',
            'marchandises'=>[
                [
                    'marchandise_id'=>'3',
            'quantite'=>'22'
                ],
                [
                'marchandise_id'=>'2',
            'quantite'=>'10'
                ]
                
            ]
        ];
        $response=$this->withHeaders([
            'X-Header'=> 'Value'
        ])->json('Put',$route.'/1',$TransitMarchandise);
        $response
        ->assertStatus(200);
        // ->assertJson([
        //     'created'=>true,
        // ]);
        
    }
    /**
     * A test to check if we can update a transitMarchandise whith the update method
     *
     * @return void
     */
    public function testGetTransitMarchandiseByTransit_id()
    {
        $route = 'http://localhost:8000/api/transitMarchandises/transit_id';
      
        $response=$this->withHeaders([
            'X-Header'=> 'Value'
        ])->json('Get',$route,['id'=>'2']);
        $response
        ->assertStatus(200);
        // ->assertJson([
        //     'created'=>true,
        // ]);
        
    }
}
