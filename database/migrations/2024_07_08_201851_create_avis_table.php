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
        Schema::create('avis', function (Blueprint $table) {
            $table->id('id_avis');
            $table->unsignedBigInteger('id_client');
            $table->unsignedBigInteger('id_villa');
            $table->integer('Notes');
            $table->text('Commentaire');
            $table->timestamps();

            $table->foreign('id_client')->references('id_client')->on('client')->onDelete('cascade');
            $table->foreign('id_villa')->references('id_villa')->on('villa')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('avis');
    }
};
