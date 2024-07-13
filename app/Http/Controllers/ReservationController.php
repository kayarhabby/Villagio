<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use App\Http\Resources\ReservationResource;

class ReservationController extends Controller
{
    //Récupérer toutes les ressources 
    public function index()
    {
        return ReservationResource::collection(Reservation::all());
    }

    //Récupérer une seule ressource 
    public function show(Reservation $reservation)
    {
        return new ReservationResource($reservation);
    }

     //Créer une nouvelle ressource 
     public function store(Request $request)
     {
        //Validation des données
        $request->validate([
            'id_villa'=>'required|exists:villa,id_villa',
            'id_client'=>'required|exists:client,id_client',
            'Date_debut_reservation'=>'required|date',
            'Date_fin_reservation'=>'required|date',
            'Statut'=>'required|boolean',
        ]);

        //Création d'une nouvelle réservation dans la BDD
        $reservation = Reservation::create([
            'id_villa'=>$request->id_villa,
            'id_client'=>$request->id_client,
            'Date_debut_reservation'=>$request->Date_debut_reservation,
            'Date_fin_reservation'=>$request->Date_fin_reservation,
            'Statut'=>$request->Statut,
        ]);

        //Retourner la ressource créée
        return new ReservationResource($reservation);
     }

     //Modifier une ressouce
     public function update(Request $request, Reservation $reservation)
     {
        //Validation des données
        $request->validate([
            'id_villa'=>'sometimes|required|exists:villa,id_villa',
            'id_client'=>'sometimes|required|exists:client,id_client',
            'Date_debut_reservation'=>'sometimes|required|date',
            'Date_fin_reservation'=>'sometimes|required|date',
            'Statut'=>'sometimes|required|boolean',
        ]);

        //Mis à jour de la nouvelle réservation dans la BDD
        $reservation->update($request->all());
        
        //Retourner la ressource modifiée
        return new ReservationResource($reservation);
     }

    //Supprimer une réservation
    public function destroy(Reservation $reservation)
    {
        $reservation->delete();

        //Retourner une réponse vide avec un statut 204 No content
        return response()->json(null, 204);
    }
}
