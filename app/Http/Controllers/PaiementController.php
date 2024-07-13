<?php

namespace App\Http\Controllers;

use App\Models\Paiement;
use Illuminate\Http\Request;
use App\Http\Resources\PaiementResource;

class PaiementController extends Controller
{
    //Récupérer toutes les ressources
    public function index()
    {
        return PaiementResource::collection(Paiement::all());
    }

    //Récupérer une ressource
    public function show(Paiement $paiement)
    {
        return new PaiementRessource($paiement);
    }

    //Créer une nouvelle ressource
    public function store(Request $request)
    {
        //Validation des données
        $request->validate([
            'id_client'=>'required|exists:client,id_client',
            'montant'=>'required|numeric',
            'Methode_paiement'=>'required|string',
            'Date_paiement'=>'required|date',
        ]);

        //Création d'une nouvelle ressource dans la BDD
        $paiement = Paiement::create([
            'id_client'=>$request->id_client,
            'montant'=>$request->montant,
            'Methode_paiement'=>$request->Methode_paiement,
            'Date_paiement'=>$request->Date_paiement,
        ]);
        //Retourner la ressource créée
        return new PaiementRessource($paiement);
    }

    //Modifier une nouvelle ressource
    public function update(Request $request, Paiement $paiement)
    {
        //Validation des données
        $request->validate([
            'id_client'=>'sometimes|required|exists:client,id_client',
            'montant'=>'sometimes|required|numeric',
            'Methode_paiement'=>'sometimes|required|string',
            'Date_paiement'=>'sometimes|required|date',
        ]);

        //Mis à jour des données dans la BDD
        $paiement->update($request->all());

        //Retourner la ressource créée
        return new PaiementRessource($paiement);
    }

    //Supprimer une ressource
    public function destroy(Paiement $paiement)
    {
        $paiement->delete();

        //Retourner une réponse vide avec un statut 204 No content
        return response()->json(null, 204);
    }
}
