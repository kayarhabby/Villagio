<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $table = 'reservation';//Spécifier le nom de la table
    protected $primaryKey = 'id_reservation';
    public $incrementing = true;//Activer l'auto-incrémentation

    protected $fillable = [
        'id_villa',
        'id_client',
        'Date_debut_reservation',
        'Date_fin_reservation',
        'Statut',
    ];

    //Une reservation appartient à un client
    public function client()
    {
        return $this->belongsTo(Client::class, 'id_client');
    }

    //Une reservation appartient à une villa
    public function villa()
    {
        return $this->belongsTo(Villa::class, 'id_villa');
    }
}
