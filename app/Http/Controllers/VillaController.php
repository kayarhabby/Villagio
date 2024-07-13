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


    // Créer une nouvelle villa
    public function store(Request $request)
    {
        // Validation des données
        $request->validate([
            'id_lieu' => 'required|exists:lieu,id_lieu',
            'Titre' => 'required|string',
            'Description' => 'required|string',
            'Image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'Adultes' => 'required|integer',
            'Enfants' => 'required|integer',
            'Equipements' => 'required|string',
            'Vue' => 'required|string',
            'Superficie' => 'required|string',
            'Prix' => 'required|numeric',
            'Statut' => 'required|boolean',
            'Date_debut_disponible' => 'required|date',
            'Date_fin_disponible' => 'required|date',
        ]);

        // Gestion de l'upload de l'image
        if ($request->hasFile('Image')) {
            $imageName = time() . '.' . $request->Image->extension();
            $request->Image->move(public_path('images'), $imageName);
        }

        // Création de la villa dans la BDD
        $villa = Villa::create([
            'id_lieu' => $request->id_lieu,
            'Titre' => $request->Titre,
            'Description' => $request->Description,
            'Image' => $imageName,
            'Adultes' => $request->Adultes,
            'Enfants' => $request->Enfants,
            'Equipements' => $request->Equipements,
            'Vue' => $request->Vue,
            'Superficie' => $request->Superficie,
            'Prix' => $request->Prix,
            'Statut' => $request->Statut,
            'Date_debut_disponible' => $request->Date_debut_disponible,
            'Date_fin_disponible' => $request->Date_fin_disponible,
        ]);

        // Retourner la ressource créée
        return new VillaResource($villa);
    }

    // Modifier une villa
    public function update(Request $request, Villa $villa)
    {
        // Validation des données
        $request->validate([
            'id_lieu' => 'sometimes|required|exists:lieu,id_lieu',
            'Titre' => 'sometimes|required|string',
            'Description' => 'sometimes|required|string',
            'Image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'Adultes' => 'sometimes|required|integer',
            'Enfants' => 'sometimes|required|integer',
            'Equipements' => 'sometimes|required|string',
            'Vue' => 'sometimes|required|string',
            'Superficie' => 'sometimes|required|string',
            'Prix' => 'sometimes|required|numeric',
            'Statut' => 'sometimes|required|boolean',
            'Date_debut_disponible' => 'sometimes|required|date',
            'Date_fin_disponible' => 'sometimes|required|date',
        ]);

        // Gestion de l'upload de l'image
        if ($request->hasFile('Image')) {
            // Supprimer l'ancienne image si elle existe
            if ($villa->Image) {
                unlink(public_path('images') . '/' . $villa->Image);
            }

            $imageName = time() . '.' . $request->Image->extension();
            $request->Image->move(public_path('images'), $imageName);
            $villa->Image = $imageName;
        }

        // Mise à jour de la villa dans la BDD
        $villa->update($request->except('Image'));

        // Retourner la ressource mise à jour
        return new VillaResource($villa);
    }

    // Supprimer une villa
    public function destroy(Villa $villa)
    {
        // Supprimer l'image associée si elle existe
        if ($villa->Image) {
            unlink(public_path('images') . '/' . $villa->Image);
        }

        // Supprimer la villa
        $villa->delete();

        // Retourner une réponse vide avec un statut 204 No content
        return response()->json(null, 204);
    }
    
}
