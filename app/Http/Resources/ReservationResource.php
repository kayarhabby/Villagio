<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReservationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_reservation'=>$this->id_reservation,
            'id_villa'=>$this->id_villa,
            'id_client'=>$this->id_client,
            'Date_debut_reservation'=>$this->Date_debut_reservation,
            'Date_fin_reservation'=>$this->Date_fin_reservation,
            'Statut'=>$this->Statut,
            'created_at'=>$this->created_at,
            'updated_at'=>$this->updated_at,
        ];
    }
}
