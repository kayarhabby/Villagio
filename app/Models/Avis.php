<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Avis extends Model
{
    protected $primaryKey = 'id_avis';

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
