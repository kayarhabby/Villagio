-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 16 juil. 2024 à 13:50
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `villagiobd`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `id_admin` bigint(20) UNSIGNED NOT NULL,
  `Pseudo` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `avis`
--

CREATE TABLE `avis` (
  `id_avis` bigint(20) UNSIGNED NOT NULL,
  `id_client` bigint(20) UNSIGNED NOT NULL,
  `id_villa` bigint(20) UNSIGNED NOT NULL,
  `Notes` int(11) NOT NULL,
  `Commentaire` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id_client` bigint(20) UNSIGNED NOT NULL,
  `Nom` varchar(255) NOT NULL,
  `Prenom` varchar(255) NOT NULL,
  `Contact` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `lieu`
--

CREATE TABLE `lieu` (
  `id_lieu` bigint(20) UNSIGNED NOT NULL,
  `Nom` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `lieu`
--

INSERT INTO `lieu` (`id_lieu`, `Nom`, `created_at`, `updated_at`) VALUES
(1, 'AOSTA VALLEY', '2024-07-15 14:59:18', '2024-07-15 14:59:18'),
(2, 'LAZIO', '2024-07-15 14:59:51', '2024-07-15 15:00:09'),
(3, 'LE MARCHE', '2024-07-15 15:01:04', '2024-07-15 15:01:04');

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_07_08_140347_create_client_table', 1),
(6, '2024_07_08_140433_create_admin_table', 1),
(7, '2024_07_08_140526_create_lieu_table', 1),
(8, '2024_07_08_140545_create_notification_table', 1),
(9, '2024_07_08_140604_create_paiement_table', 1),
(10, '2024_07_08_140648_create_villa_table', 1),
(11, '2024_07_08_201851_create_avis_table', 1),
(12, '2024_07_08_202110_create_reservation_table', 1);

-- --------------------------------------------------------

--
-- Structure de la table `notification`
--

CREATE TABLE `notification` (
  `id_notification` bigint(20) UNSIGNED NOT NULL,
  `id_client` bigint(20) UNSIGNED NOT NULL,
  `Sujet` text NOT NULL,
  `Message` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `paiement`
--

CREATE TABLE `paiement` (
  `id_paiement` bigint(20) UNSIGNED NOT NULL,
  `id_client` bigint(20) UNSIGNED NOT NULL,
  `montant` decimal(10,2) NOT NULL,
  `Methode_paiement` varchar(255) NOT NULL,
  `Date_paiement` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `id_reservation` bigint(20) UNSIGNED NOT NULL,
  `id_villa` bigint(20) UNSIGNED NOT NULL,
  `id_client` bigint(20) UNSIGNED NOT NULL,
  `Date_debut_reservation` date NOT NULL,
  `Date_fin_reservation` date NOT NULL,
  `Statut` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `villa`
--

CREATE TABLE `villa` (
  `id_villa` bigint(20) UNSIGNED NOT NULL,
  `id_lieu` bigint(20) UNSIGNED NOT NULL,
  `Titre` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `Image` varchar(255) NOT NULL,
  `Adultes` int(11) NOT NULL,
  `Enfants` int(11) NOT NULL,
  `Equipements` text NOT NULL,
  `Vue` text NOT NULL,
  `Superficie` text NOT NULL,
  `Prix` decimal(10,2) NOT NULL,
  `Statut` tinyint(1) NOT NULL,
  `Date_debut_disponible` date NOT NULL,
  `Date_fin_disponible` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `villa`
--

INSERT INTO `villa` (`id_villa`, `id_lieu`, `Titre`, `Description`, `Image`, `Adultes`, `Enfants`, `Equipements`, `Vue`, `Superficie`, `Prix`, `Statut`, `Date_debut_disponible`, `Date_fin_disponible`, `created_at`, `updated_at`) VALUES
(1, 1, 'Summer Villa Emilia', 'Summer Villa Emilia est un endroit parfait pour le repos de luxe, voyager et goûter la meilleure cuisine régionale en Italie, avec une sensation de renaissance.', 'Summer_villa_emilia.jpg', 4, 2, 'Piscine, Balcon, WiFi, Air conditionné...', 'Beachfront', '160 m²', 561.00, 1, '2024-07-01', '2024-07-31', '2024-07-15 15:16:23', '2024-07-15 15:16:23'),
(2, 1, 'Cottage Monte Bianco', 'Cottage Monte Bianco dans la vallée d\'Aosta est bien décoré, chaud et entièrement fonctionnel. Pays cottage parfait pour vos vacances d\'hiver.', 'Cottage_Monte_Bianco.jpg', 5, 3, 'Balcon, WiFi, Air conditionné...', 'Montagne', '120 m²', 425.00, 1, '2024-07-21', '2024-08-31', '2024-07-15 15:25:44', '2024-07-15 15:25:44'),
(3, 2, 'Seaside Villa Tuscany Maremma', 'Une belle villa dans l\'une des destinations les plus attrayantes de l\'Italie-dans la zone côtière Maremma, dans le nord-ouest de l\'Italie.', 'Seaside_Villa_Tuscany_Maremma.jpg', 4, 0, 'Piscine, Balcon, WiFi, Air conditionné...', 'Bord de mer', '240 m²', 475.00, 1, '2024-08-04', '2024-08-21', '2024-07-15 15:36:09', '2024-07-15 15:36:09'),
(4, 2, 'Beachfront Villa Casa Aurora', 'Une magnifique villa en face de mer entièrement équipée à Lazio, la maison de Rome, où vous pourrez obtenir vos meilleurs souvenirs de vacances.', 'Beachfront_Villa_Casa_Aurora.jpg', 8, 0, 'Piscine, Balcon, WiFi, Air conditionné...', 'Beachfront, Piscine', '340 m²', 675.00, 1, '2024-08-14', '2024-09-21', '2024-07-15 15:45:01', '2024-07-15 15:45:01'),
(5, 3, 'Le marche Etna House', 'Le marche Etna House est une villa entièrement équipée avec de nombreux équipements.', 'Le_marche_Etna_House.jpg', 10, 5, 'Piscine, Balcon, WiFi, Air conditionné...', 'Piscine', '265 m²', 675.00, 1, '2024-08-14', '2024-09-21', '2024-07-15 15:51:04', '2024-07-15 15:59:10'),
(6, 3, 'Villa Bastilicata Grande', 'Il s\'agit d\'une villa parfaite avec centre de spa et bain à remous pour le repos privé, familial et corporatif dans la région du Marche en Italie, avec les meilleures vues de la nature.', 'Villa_Bastilicata_Grande.jpg', 8, 0, 'Piscine, Balcon, WiFi, Air conditionné...', 'Piscine', '180 m²', 635.00, 1, '2024-09-14', '2024-09-21', '2024-07-15 15:57:21', '2024-07-15 15:57:21');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`),
  ADD UNIQUE KEY `admin_pseudo_unique` (`Pseudo`);

--
-- Index pour la table `avis`
--
ALTER TABLE `avis`
  ADD PRIMARY KEY (`id_avis`),
  ADD KEY `avis_id_client_foreign` (`id_client`),
  ADD KEY `avis_id_villa_foreign` (`id_villa`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id_client`),
  ADD UNIQUE KEY `client_contact_unique` (`Contact`),
  ADD UNIQUE KEY `client_email_unique` (`Email`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `lieu`
--
ALTER TABLE `lieu`
  ADD PRIMARY KEY (`id_lieu`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id_notification`),
  ADD KEY `notification_id_client_foreign` (`id_client`);

--
-- Index pour la table `paiement`
--
ALTER TABLE `paiement`
  ADD PRIMARY KEY (`id_paiement`),
  ADD KEY `paiement_id_client_foreign` (`id_client`);

--
-- Index pour la table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id_reservation`),
  ADD KEY `reservation_id_villa_foreign` (`id_villa`),
  ADD KEY `reservation_id_client_foreign` (`id_client`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Index pour la table `villa`
--
ALTER TABLE `villa`
  ADD PRIMARY KEY (`id_villa`),
  ADD KEY `villa_id_lieu_foreign` (`id_lieu`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `avis`
--
ALTER TABLE `avis`
  MODIFY `id_avis` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id_client` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `lieu`
--
ALTER TABLE `lieu`
  MODIFY `id_lieu` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `notification`
--
ALTER TABLE `notification`
  MODIFY `id_notification` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `paiement`
--
ALTER TABLE `paiement`
  MODIFY `id_paiement` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id_reservation` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `villa`
--
ALTER TABLE `villa`
  MODIFY `id_villa` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `avis`
--
ALTER TABLE `avis`
  ADD CONSTRAINT `avis_id_client_foreign` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`) ON DELETE CASCADE,
  ADD CONSTRAINT `avis_id_villa_foreign` FOREIGN KEY (`id_villa`) REFERENCES `villa` (`id_villa`) ON DELETE CASCADE;

--
-- Contraintes pour la table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `notification_id_client_foreign` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`) ON DELETE CASCADE;

--
-- Contraintes pour la table `paiement`
--
ALTER TABLE `paiement`
  ADD CONSTRAINT `paiement_id_client_foreign` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`) ON DELETE CASCADE;

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_id_client_foreign` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`) ON DELETE CASCADE,
  ADD CONSTRAINT `reservation_id_villa_foreign` FOREIGN KEY (`id_villa`) REFERENCES `villa` (`id_villa`) ON DELETE CASCADE;

--
-- Contraintes pour la table `villa`
--
ALTER TABLE `villa`
  ADD CONSTRAINT `villa_id_lieu_foreign` FOREIGN KEY (`id_lieu`) REFERENCES `lieu` (`id_lieu`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
