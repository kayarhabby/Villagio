<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VillaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_villa'=>$this->id_villa,
            'id_lieu'=>$this->id_lieu,
            'Titre'=>$this->Titre,
            'Description'=>$this->Description,
            'Image'=>$this->Image,
            'Adultes'=>$this->Adultes,
            'Enfants'=>$this->Enfants,
            'Equipements'=>$this->Equipements,
            'Vue'=>$this->Vue,
            'Superficie'=>$this->Superficie,
            'Prix'=>$this->Prix,
            'Statut'=>$this->Statut,
            'Date_debut_disponible'=>$this->Date_debut_disponible,
            'Date_fin_disponible'=>$this->Date_fin_disponible,
        ];
    }
}
