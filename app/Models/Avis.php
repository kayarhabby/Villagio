<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Avis extends Model
{
    protected $table = 'avis';//Spécifier le nom de la table
    protected $primaryKey = 'id_avis';
    public $incrementing = true;//Activation de l'auto-incrémentation

    protected $fillable = [
        'id_client',
        'id_villa',
        'Notes',
        'Commentaire',
    ];

    //Un avis appartient à un client
    public function client()
    {
        return $this->belongsTo(Client::class, 'id_client');
    }

    //Un avis appartient à une villa
    public function villa()
    {
        return $this->belongsTo(Villa::class, 'id_villa');
    }
}
