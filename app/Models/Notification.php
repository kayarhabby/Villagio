<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $primaryKey = 'id_notification';

    //Une notification appartient à un client
    public function client()
    {
        return $this->belongsTo(Client::class, 'id_client');
    }
}
