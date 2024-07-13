<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;
use App\Http\Resources\NotificationResource;

class NotificationController extends Controller
{
    //Récupérer toutes les ressources
    public function index()
    {
        return NotificationResource::collection(Notification::all());
    }

    //Récupérer une seule ressource
    public function show(Notification $notification)
    {
        return new NotificationResource($notification);
    }

    //Créer une nouvelle notification
    public function store(Request $request)
    {
        //Validation des données
        $request->validate([
            'id_client'=>'required|exists:client,id_client',
            'Sujet'=>'required|string',
            'Message'=>'required|string',
        ]);

        //Création d'une nouvelle notification dans la BDD
        $notification = Notification::create([
            'id_client'=>$request->id_client,
            'Sujet'=>$request->Sujet,
            'Message'=>$request->Message,
        ]);

        //Retourner la ressource créée
        return new NotificationResource($notification);
    }

    //Supprimer une ressource
    public function destroy(Notification $notification)
    {
        $notification->delete();

        //Retourner une réponse vide avec un statut 204 No content
        return response()->json(null, 204);
    }
}
