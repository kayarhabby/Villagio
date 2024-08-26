<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
//use Illuminate\Database\Eloquent\Model;

class Client extends Authenticatable
{
    protected $table = 'client';//Spécifier le nom de la table
    protected $primaryKey = 'id_client';
    public $incrementing = true; //Activation de l'auto-incrémentation

    protected $fillable = [
        'nom',
        'prenom',
        'contact',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
    ];

    //Relation 1 à plusieurs avec la table réservation
    public function reservation()
    {
        return $this->hasMany(Reservation::class, 'id_client');
    }

    //Relation 1 à plusieurs avec la table paiement
    public function paiement()
    {
        return $this->hasMany(Paiement::class, 'id_client');
    }

    //Relation 1 à plusieurs avec la table avis
    public function avis()
    {
        return $this->hasMany(Avis::class, 'id_client');
    }

    //Relation 1 à plusieurs avec la table notification
    public function notification()
    {
        return $this->hasMany(Notification::class, 'id_client');
    }
}
