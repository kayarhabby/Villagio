<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use App\Http\Resources\AdminResource;

class AdminController extends Controller
{
    //La méthode index permet de récupérer toutes les ressources
    public function index()
    {
        return AdminResource::collection(Admin::all());
    }

    public function store(Request $request)
    {
        //Validation des données entrantes
        $request->validate([
            'Pseudo'=>'required|string|unique:admin,Pseudo|max:255',
            'Password'=>'required|string|min:8',
        ]);

        //Création de la ressource dans la base de données
        $admin = Admin::create([
            'Pseudo'=>$request->Pseudo,
            'Password'=>bcrypt($request->Password),
        ]);

        //Retourner la ressource créée dans AdminResource
        return new AdminResource($admin);
    }

    //La méthode show permet de récupérer une ressource spécifique
    public function show(Admin $admin)
    {
        return new AdminResource($admin);
    }


    //La méthode update permet de faire la modification d'une ressource
    public function update(Request $request, Admin $admin)
    {
        //Validation des données entrantes
        $request->validate([
            'Pseudo' => 'sometimes|required|string|unique:admin,Pseudo,' . $admin->id . '|max:255',
            'Password' => 'sometimes|required|string|min:8',
        ]);

        //Mis à jour de la ressource dans la base de données
        if($request->has('Pseudo')){
            $admin->Pseudo = $request->Pseudo;
        }

        if($request->has('Password')){
            $admin->Password = bcrypt($request->Password);
        }

        $admin->save();

        //Retourner la ressource mis à jour
        return new AdminResource($admin);
    }

    //La méthode destroy permet de faire la suppression d'une ressourcea
    public function destroy(Admin $admin)
    {
        //Suppression de la ressource
        $admin->delete();

        //Retourner une réponse vide avec un statut 204 No content
        return response()->json(null, 204);
    }


}
