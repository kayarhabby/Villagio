<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use App\Http\Resources\ClientResource;

class ClientController extends Controller
{
    //Récupérer toutes les ressources
    public function index()
    {
        return ClientResource::collection(Client::all());
    }

    //Récupérer une ressource spécifique
    public function show(Client $client)
    {
        return new ClientResource($client);
    }

    //Créer un nouveau client
    public function store(Request $request)
    {
        //Valider les données
        $request->validate([

            'nom'=>'required|string',
            'prenom'=>'required|string',
            'contact'=>'required|string|unique:client,Contact',
            'email'=>'required|string|email|unique:client,Email',
            'password'=>'required|string|min:8',
        ]);

        //Création d'un nouveau client dans la BDD
        $client = Client::create([
            'nom'=>$request->nom,
            'prenom'=>$request->prenom,
            'contact'=>$request->contact,
            'email'=>$request->email,
            'password'=>bcrypt($request->password),
        ]);

        //Retourner la ressource créée
        return new ClientResource($client);
    }

    //Modification d'un client
    public function update(Request $request, Client $client)
    {
        //Validation des données
        $request->validate([

            'nom'=>'sometimes|required|string',
            'prenom'=>'sometimes|required|string',
            'contact' => 'sometimes|required|string|unique:client,Contact,' . $client->id,
            'email' => 'sometimes|required|string|email|unique:client,Email,' . $client->id,
            'password'=>'sometimes|required|string|min:8',
        ]);

        //Mis à jour de la ressource dans la base de données
        if($request->has('nom')){
            $client->nom = $request->nom;
        }

        if($request->has('prenom')){
            $client->prenom = $request->prenom;
        }

        if($request->has('contact')){
            $client->contact = $request->contact;
        }

        if($request->has('email')){
            $client->email = $request->email;
        }

        if($request->has('password')){
                $client->Password = bcrypt($request->Password);
        }

    $client->save();

        //Retourner la ressource créée
        return new ClientResource($client);
    }

    //Suppression du client
    public function destroy(Client $client)
    {
        $client->delete();

        //Retourner une réponse vide avec un statut 204 No content
        return response()->json(null, 204);
    }
}
