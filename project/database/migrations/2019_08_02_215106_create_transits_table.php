<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transits', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('navire_id');
            $table->unsignedInteger('societe_id');
            $table->unsignedInteger('marchandise_id');
            $table->integer('contenance');
            $table->integer('franchise');
            $table->dateTime('dateArrivee');
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
        Schema::dropIfExists('transits');
    }
}
