<?php

// Récupération des données du formulaire
$name = $_POST['name'] ?? '';
$telephone = $_POST['telephone'] ?? '';
$email = $_POST['email'] ?? '';
$sujet = $_POST['sujet'] ?? '';
$message = $_POST['message'] ?? '';


// Adresse qui recevra les messages
$destinataire = "gaia.escapades@gmail.com";


// Sujet de l'e-mail
$objet = "Nouveau message - Gaïa Escapades : " . $sujet;


// Contenu de l'e-mail
$contenu = "Nouveau message reçu depuis le site Gaïa Escapades.\n\n";

$contenu .= "Nom et prénom : " . $name . "\n";
$contenu .= "Téléphone : " . $telephone . "\n";
$contenu .= "Email : " . $email . "\n";
$contenu .= "Sujet : " . $sujet . "\n\n";
$contenu .= "Message :\n" . $message;


// En-têtes
$headers = "From: Gaïa Escapades <gaia.escapades@gmail.com>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";


// Envoi
if (mail($destinataire, $objet, $contenu, $headers)) {

    echo "Votre message a bien été envoyé.";

} else {

    echo "Une erreur est survenue lors de l'envoi du message.";

}

?>