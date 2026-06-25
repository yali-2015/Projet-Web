// Initialisation du tableau des clients
if (!localStorage.getItem("clients")) {
    localStorage.setItem("clients", JSON.stringify([]));
}

// Affiche le nombre de clients
function afficherNombreClients() {
    const clients = JSON.parse(localStorage.getItem("clients")) || [];
    document.getElementById("nombreClients").textContent = clients.length;
}

// Ajoute un client fictif pour tester
function inscrire() {
    const clients = JSON.parse(localStorage.getItem("clients")) || [];

    const nouveauClient = {
        id: Date.now(),
        nom: "Client " + (clients.length + 1)
    };

    clients.push(nouveauClient);

    localStorage.setItem("clients", JSON.stringify(clients));

    afficherNombreClients();
}

// Affichage au chargement de la page
afficherNombreClients();