<?php

namespace App\Http\Controllers;

use App\Models\Lieu;
use Illuminate\Http\Request;
use App\Http\Resources\LieuResource;
use App\Http\Resources\VillaResource;

class LieuController extends Controller
{
    //Permet de récupérer toutes les ressources
    public function index()
    {
        return LieuResource::collection(Lieu::all());
    }

    //Permet de récupérer une ressource
    public function show(Lieu $lieu)
    {
        return new LieuResource($lieu);
    }

     // Récupérer toutes les villas pour un lieu spécifique
     public function villa($id_lieu)
     {
         $lieu = Lieu::with('villa')->findOrFail($id_lieu);

         return VillaResource::collection($lieu->villa);
     }

    //Création d'une ressource
    public function store(Request $request)
    {
        //Validation des données
        $request->validate([
            'Nom'=>'required|string|max:50',
        ]);

        //Création de la ressource dans la base de données
        $lieu = Lieu::create([
            'Nom'=>$request->Nom,
        ]);

        //Retourner la ressource créée dans LieuResource
        return new LieuResource($lieu);
    }

    //Modification d'une ressource
    public function update(Request $request, Lieu $lieu)
    {
        //Validation des données
        $request->validate([
            'Nom'=>'sometimes|required|string|max:50',
        ]);

        //Mis à jour de la ressource dans la BDD
        if($request->has('Nom')){
            $lieu->Nom = $request->Nom;
        }

        //Enregistrement de la ressource
        $lieu->save();

        //Retourner la ressource créée dans LieuResource
        return new LieuResource($lieu);

    }

    //Suppresion d'une resource
    public function destroy(Lieu $lieu)
    {
        $lieu->delete();

        //Retourner une réponse vide avec un statut 204 No content
        return response()->json(null, 204);
    }


}
