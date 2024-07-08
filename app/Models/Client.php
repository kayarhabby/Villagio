<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $primaryKey = 'id_client';

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
