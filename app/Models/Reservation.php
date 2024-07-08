<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $primaryKey = 'id_reservation';

    //Une reservation appartient à un client
    public function client()
    {
        return $this->belongsTo(Client::class, 'id_client');
    }

    //Une reservation appartient à une villa
    public function villa()
    {
        return $this->belongsTo(Villa::class, 'id_villa');
    }
}
