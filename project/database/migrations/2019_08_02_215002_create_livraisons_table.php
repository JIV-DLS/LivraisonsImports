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
            $table->unsignedInteger('transit');
            $table->unsignedInteger('lieuLivr');
            $table->unsignedInteger('etatLivr');
            $table->integer('nombreJourDeStationnementSubi');
            $table->integer('nombreJourDeSuresSubi');
            $table->string('commentaires');
            $table->dateTime('dateLivrDemandeeParBB');
            $table->dateTime('dateReportApresEchecDeLivr');
            $table->dateTime('dateComfirmationFournisseur');
            $table->dateTime('dateLivrEffectiveBB');
            $table->dateTime('dateDebStationnement');
            $table->dateTime('dateDebSures');
            $table->dateTime('delaiDateArrDateLivr');
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
