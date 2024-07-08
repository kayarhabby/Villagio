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
        Schema::create('paiement', function (Blueprint $table) {
            $table->id('id_paiement');
            $table->unsignedBigInteger('id_client');
            $table->decimal('montant', 10, 2);
            $table->string('Methode_paiement');
            $table->date('Date_paiement');
            $table->timestamps();

            $table->foreign('id_client')->references('id_client')->on('client')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('paiement');
    }
};
