<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_client'=>$this->id_client,
            'nom'=>$this->nom,
            'prenom'=>$this->prenom,
            'contact'=>$this->contact,
            'email'=>$this->email,
            'password'=>$this->password,
        ];
    }
}
