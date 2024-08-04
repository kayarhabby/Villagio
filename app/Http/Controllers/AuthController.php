<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    //Inscription du client
    public function inscription(Request $request)
    {
        $request->validate([
            'Nom'=>'required|string|max:255',
            'Prenom'=>'required|string|max:255',
            'Contact'=>'required|string|unique:client,Contact',
            'Email'=>'required|string|email|unique:client,Email',
            'Password'=>'required|string|min:8',
        ]);

        $client = client::create([
            'Nom'=>$request->Nom,
            'Prenom'=>$request->Prenom,
            'Contact'=>$request->Contact,
            'Email'=>$request->Email,
            'Password'=>Hash::make($request->Password),
        ]);

        $token = $client->createToken('client-token')->plainTextToken;

        return response()->json(['token' => $token], 201);
    }

    // Connexion d'un client existant
    public function connexion(Request $request)
    {
        $credentials = $request->validate([
            'Email' => ['required', 'email'],
            'Password' => ['required'],
        ]);

        if (auth()->attempt($credentials)) {
            $request->session()->regenerate();

            return response()->json(['message' => 'Connexion réussie'], 200);
        }

        return response()->json(['error' => 'Les informations de connexion sont incorrectes'], 401);
    }

    //Déconnexion du client
    public function deconnexion(Request $request)
    {
        auth()->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Déconnexion réussie'], 200);
    }
}
