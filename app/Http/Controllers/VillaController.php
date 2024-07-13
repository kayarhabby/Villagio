<?php

namespace App\Http\Controllers;

use App\Models\Villa;
use Illuminate\Http\Request;
use App\Http\Resources\VillaResource;

class VillaController extends Controller
{
    //Récupérer toutes les ressources
    public function index()
    {
        return VillaResource::collection(Villa::all());
    }

    //Récupérer une ressource spécifique
    public function show(Villa $villa)
    {
        return new VillaResource($villa);
    }

    //Création d'une nouvelle ressource
    public function store(Request $request)
    {
        //Validation des données
        $request->validate([
            'id_lieu'=>'required|exists:lieu,id_lieu',
            'Titre'=>'required|string|max:255',
            'Description'=>'required|string',
            'Image'=>'required|string',
            'Adultes'=>'required|integer',
            'Enfants'=>'required|integer',
            'Equipements'=>'required|string',
            'Vue'=>'required|string',
            'Superficie'=>'required|string',
            'Prix'=>'required|numeric',
            'Statut'=>'required|boolean',
            'Date_debut_disponible'=>'required|date',
            'Date_fin_disponible'=>'required|date',
        ]);

        //Créer une ressource dans la BDD
        $villa = Villa::create([
            'id_lieu'=>$request->id_lieu,
            'Titre'=>$request->Titre,
            'Description'=>$request->Description,
            'Image'=>$request->Image,
            'Adultes'=>$request->Adultes,
            'Enfants'=>$request->Enfants,
            'Equipements'=>$request->Equipements,
            'Vue'=>$request->Vue,
            'Superficie'=>$request->Superficie,
            'Prix'=>$request->Prix,
            'Statut'=>$request->Statut,
            'Date_debut_disponible'=>$request->Date_debut_disponible,
            'Date_fin_disponible'=>$request->Date_fin_disponible,
        ]);

        //Retourner la ressource dans VillaResource
        return new VillaResource($villa);
    }

    //Modification de la ressource
    public function update(Request $request, Villa $villa)
    {
        //Validation des données
        $request->validate([
            'id_lieu'=>'sometimes|required|exists:lieu,id_lieu',
            'Titre'=>'sometimes|required|string|max:255',
            'Description'=>'sometimes|required|string',
            'Image'=>'sometimes|required|string',
            'Adultes'=>'sometimes|required|integer',
            'Enfants'=>'sometimes|required|integer',
            'Equipements'=>'sometimes|required|string',
            'Vue'=>'sometimes|required|string',
            'Superficie'=>'sometimes|required|string',
            'Prix'=>'sometimes|required|numeric',
            'Statut'=>'sometimes|required|boolean',
            'Date_debut_disponible'=>'sometimes|required|date',
            'Date_fin_disponible'=>'sometimes|required|date',
        ]);

        //Mis à jour de la villa dans la BDD
        $villa->update($request->all());

        //Retourner la ressource dans VillaResource
        return new VillaResource($villa);
    }

    //Supression de la villa
    public function destroy(Villa $villa)
    {
        $villa->delete();

        //Retourner une réponse vide avec un statut 204 No content
        return response()->json(null, 204);
    }

}
