<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AvisResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_avis'=>$this->id_avis,
            'id_client'=>$this->id_client,
            'id_villa'=>$this->id_villa,
            'Notes'=>$this->Notes,
            'Commentaire'=>$this->Commentaire,
            'created_at'=>$this->created_at,
        ];
    }
}
