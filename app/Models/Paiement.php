<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paiement extends Model
{
    protected $table = 'paiement';//Spécifier le nom de la table
    protected $primaryKey = 'id_paiement';
    public $incrementing = true;

    protected $fillable = [
        'id_client',
        'montant',
        'Methode_paiement',
        'Date_paiement',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'id_client');
    }
}
