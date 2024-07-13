<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $table = 'notification';//Spécifier le nom de la table
    protected $primaryKey = 'id_notification';
    public $incrementing = true;//Activer l'auto-incrémentation

    protected $fillable = [
        'id_client',
        'Sujet',
        'Message',
    ];

    //Une notification appartient à un client
    public function client()
    {
        return $this->belongsTo(Client::class, 'id_client');
    }
}
