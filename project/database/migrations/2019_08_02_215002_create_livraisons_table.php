<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLivraisonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('livraisons', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('transit_id');
            $table->unsignedInteger('lieux_livraison_id');
            $table->unsignedInteger('etats_livraison_id');
            $table->integer('nombreJourDeStationnementSubi');
            $table->integer('nombreJourDeSuresSubi');
            $table->string('commentaires');
            $table->dateTime('dateLivrDemandeeParBB');
            $table->dateTime('dateReportApresEchecDeLivr');
            $table->dateTime('dateConfirmationFournisseur');
            $table->dateTime('dateLivrEffectiveBB');
            $table->dateTime('dateDebStationnement');
            $table->dateTime('dateDebSures');
            $table->integer('delaiDateArrDateLivr');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('livraisons');
    }
}
