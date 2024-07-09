<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use App\Http\Resources\AdminResource;

class AdminController extends Controller
{

    public function store(Request $request)
    {
        //Validation des données entrantes
        $request->validate([
            'pseudo'=>'required|string|max:255',
            'password'=>'required|string|min:8',
        ]);

        //Création de la ressource dans la base de données
        $admin = Admin::create([
            'pseudo'=>$request->pseudo,
            'password'=>bcrypt($request->password),
        ]);

        //Retourner la ressource créée dans AdminResource
        return new AdminResource($admin);
    }

    //La méthode index permet de récupérer toutes les ressources
    public function index()
    {
        return AdminResource::collection(Admin::all());
    }

    //La méthode show permet de récupérer une ressource spécifique
    public function show(Admin $admin)
    {
        return new AdminResource($admin);
    }


}
