<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    // Inscription du client
    public function inscription(Request $request)
    {
        try {
            $request->validate([
                'FirstName' => 'required|string|max:255',
                'LastName' => 'required|string|max:255',
                'PhoneNumber' => 'required|string|unique:client,Contact', // Nom de la table : client
                'Email' => 'required|string|email|unique:client,Email', // Nom de la table : client
                'Password' => 'required|string|min:8',
            ]);

            $client = Client::create([
                'nom' => $request->FirstName,
                'prenom' => $request->LastName,
                'contact' => $request->PhoneNumber,
                'email' => $request->Email,
                'password' => Hash::make($request->Password),
            ]);

            return response()->json(['success' => true, 'msg' => 'Inscription réussie!']);
        } catch (\Illuminate\Database\QueryException $e) {
            // Erreurs liées à la base de données
            return response()->json(['success' => false, 'msg' => 'Erreur de base de données: ' . $e->getMessage()], 500);
        } catch (\Exception $e) {
            // Autres erreurs
            return response()->json(['success' => false, 'msg' => 'Erreur lors de l\'inscription: ' . $e->getMessage()], 500);
        }
    }

    public function connexion(Request $request)
    {
        // Valider les données reçues
        $credentials = $request->validate([
            'Email' => 'required|email',
            'Password' => 'required|string|min:8',
        ]);

        // Tenter l'authentification
        if (Auth::attempt([
            'email' => $credentials['Email'],
            'password' => $credentials['Password']
        ])) {
            // Regénérer la session
            $request->session()->regenerate();
            $user = Auth::user();

            return response()->json([
                'success' => true,
                'msg' => 'Connexion réussie',
                'user' => $user
            ]);
        }

        // Retourner une réponse d'erreur si l'authentification échoue
        return response()->json(['success' => false, 'msg' => 'Les informations de connexion sont incorrectes'], 401);
    }



    // Déconnexion du client
    public function deconnexion(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['success' => true, 'msg' => 'Déconnexion réussie']);
    }
}
