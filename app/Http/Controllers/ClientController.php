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

            'Nom'=>'required|string',
            'Prenom'=>'required|string',
            'Contact'=>'required|string',
            'Email'=>'required|string|email|unique:client,Email',
            'Password'=>'required|string|min:8',
        ]);

        //Création d'un nouveau client dans la BDD
        $client = Client::create([
            'Nom'=>$request->Nom,
            'Prenom'=>$request->Prenom,
            'Contact'=>$request->Contact,
            'Email'=>$request->Email,
            'Password'=>bcrypt($request->Password),
        ]);

        //Retourner la ressource créée
        return new ClientResource($client);
    }

    //Modification d'un client
    public function update(Request $request, Client $client)
    {
        //Validation des données
        $request->validate([

            'Nom'=>'sometimes|required|string',
            'Prenom'=>'sometimes|required|string',
            'Contact'=>'sometimes|required|string',
            'Email'=>'sometimes|required|string|email|unique:client,Email',
            'Password'=>'sometimes|required|string|min:8',
        ]);

        //Mis à jour de la ressource dans la base de données
        if($request->has('Nom')){
            $client->Nom = $request->Nom;
        }

        if($request->has('Prenom')){
            $client->Prenom = $request->Prenom;
        }

        if($request->has('Contact')){
            $client->Contact = $request->Contact;
        }

        if($request->has('Email')){
            $client->Email = $request->Email;
        }

        if($request->has('Password')){
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
