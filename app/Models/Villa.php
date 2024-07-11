<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Villa extends Model
{
    protected $table = 'villa';//Spécification du nom de la table
    protected $primaryKey = 'id_villa';
    public $incrementing = true; //Activation de l'auto-incrémentation

    protected $fillable =[
        'id_lieu',
        'Titre',
        'Description',
        'Image',
        'Adultes',
        'Enfants',
        'Equipements',
        'Vue',
        'Superficie',
        'Prix',
        'Statut',
        'Date_debut_disponible',
        'Date_fin_disponible',
    ];

    //Relation 1 à plusieurs avec la table avis
    public function avis()
    {
        return $this->hasMany(Avis::class, 'id_villa');
    }

    //Relation 1 à plusieurs avec la table reservation
    public function reservation()
    {
        return $this->hasMany(Reservation::class, 'id_villa');
    }

    //Une villa appartient à un lieu
    public function lieu()
    {
        return $this->belongsTo(Lieu::class, 'id_lieu');
    }
}
