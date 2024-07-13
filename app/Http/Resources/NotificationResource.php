<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NotificationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_notification'=>$this->id_notification,
            'id_client'=>$this->id_client,
            'Sujet'=>$this->Sujet,
            'Message'=>$this->Message,
        ];
    }
}
