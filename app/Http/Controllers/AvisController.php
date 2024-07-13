<?php

namespace App\Http\Controllers;

use App\Models\Avis;
use Illuminate\Http\Request;
use App\Http\Resources\AvisResource;

class AvisController extends Controller
{
    //Récupérer toutes les ressources
    public function index()
    {
        return AvisResource::collection(Avis::all());
    }

    //Récupérer une seule ressource
    public function show(Avis $avis)
    {
        return new AvisResource($avis);
    }

     //Créer une nouvelle ressource
     public function store(Request $request)
     {
        //Validation des données
        $request->validation([
            'id_client'=>'required|exists:client,id_client',
            'id_villa'=>'required|exists:villa,id_villa',
            'Notes'=>'required|integer',
            'Commentaire'=>'required|string',
        ]);

        //Création d'un avis dans la BDD
        $avis = Avis::create([
            'id_client'=>$request->id_client,
            'id_villa'=>$request->id_villa,
            'Notes'=>$request->Notes,
            'Commentaire'=>$request->Commentaire,
        ]);
        //Retourner la ressource créée
         return new AvisResource($avis);
     }

     //Supprimer un avis
     public function destroy(Avis $avis)
     {
        $avis->delete();

        //Retourner une réponse vide avec un statut 204 No content
        return response()->json(null, 204);
     }
}
