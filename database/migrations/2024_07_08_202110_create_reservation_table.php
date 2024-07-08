<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reservation', function (Blueprint $table) {
            $table->id('id_reservation');
            $table->unsignedBigInteger('id_villa');
            $table->unsignedBigInteger('id_client');
            $table->Date('Date_debut_reservation');
            $table->Date('Date_fin_reservation');
            $table->boolean('Statut');
            $table->timestamps();

            $table->foreign('id_villa')->references('id_villa')->on('villa')->onDelete('cascade');
            $table->foreign('id_client')->references('id_client')->on('client')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservation');
    }
};
