<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;

    protected $table = 'admin'; // Nom de la table

    protected $primaryKey = 'id_admin'; // Spécifiez la clé primaire

    public $incrementing = true; // Assurez-vous que l'auto-incrémentation est activée

    protected $fillable = [
        'pseudo',
        'password',
    ];
    protected $hidden = [
        'password',
    ];
}
