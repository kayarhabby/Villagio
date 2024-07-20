<?php

namespace App\Models;

use App\Models\Villa;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Lieu extends Model
{
    protected $table = 'lieu'; //Nom de la table
    protected $primaryKey = 'id_lieu'; //Spécification de la clé primaire
    public $incrementing = true; //Activation de l'incrémentation

    protected $fillable = [
        'Nom',
    ];

    //Relation 1 à plusieurs avec la table villa
    public function villa()
    {
        return $this->hasMany(Villa::class, 'id_lieu');
    }
}
