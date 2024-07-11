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
        Schema::create('villa', function (Blueprint $table) {
            $table->id('id_villa');
            $table->unsignedBigInteger('id_lieu');
            $table->String('Titre');
            $table->text('Description');
            $table->text('Image');
            $table->integer('Adultes');
            $table->integer('Enfants');
            $table->text('Equipements');
            $table->text('Vue');
            $table->text('Superficie');
            $table->decimal('Prix', 10, 2);
            $table->boolean('Statut');
            $table->date('Date_debut_disponible');
            $table->date('Date_fin_disponible');
            $table->timestamps();

            $table->foreign('id_lieu')->references('id_lieu')->on('lieu')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('villa');
    }
};
