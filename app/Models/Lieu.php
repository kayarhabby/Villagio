<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lieu extends Model
{
    protected $table = 'lieu'; //Nom de la table
    protected $primaryKey = 'id_lieu'; //Spécification de la clé primaire
    protected $incrementing = true; //Activation de l'incrémentation

    protected $fillable = [
        'Nom',
    ];
}
