const formulaire = document.getElementById("formulaire");

formulaire.addEventListener("submit", function(e) {

    e.preventDefault();

    const inscription = {
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        email: document.getElementById("email").value,
        téléphon: document.getElementBYID("téléphone").value,
        
    };

    let inscriptions =
        JSON.parse(localStorage.getItem("inscriptions")) || [];

    inscriptions.push(inscription);

    localStorage.setItem(
        "inscriptions",
        JSON.stringify(inscriptions, null, 2)
    );

    alert("Inscription enregistrée !");

    formulaire.reset();

});

console.log(JSON.parse(localStorage.getItem("inscriptions")));
