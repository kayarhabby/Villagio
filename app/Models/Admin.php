<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
//use Illuminate\Database\Eloquent\Model;

class Admin extends Authenticatable
{
    use HasApiTokens;

    protected $table = 'admin'; // Nom de la table

    protected $primaryKey = 'id_admin'; // Spécifiez la clé primaire

    public $incrementing = true; // Activation de l'auto-incrémentation

    protected $fillable = [
        'Pseudo',
        'Password',
    ];
    protected $hidden = [
        'Password',
    ];
}
