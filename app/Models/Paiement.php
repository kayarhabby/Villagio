<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paiement extends Model
{
    protected $primaryKey = 'id_paiement';

    public function client()
    {
        return $this->belongsTo(Client::class, 'id_client');
    }
}
