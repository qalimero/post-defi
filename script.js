console.log('connecté'); 
// Je selectionne & je stock l'emplacement des cercles
const cerclesContainer = document.querySelector('.cercles-container');
console.log(cerclesContainer);
// Je selectionn & stock le titre
let titre = document.querySelector(".banniere-titre");
// Je stock le score au click
let compteur = 0;

//J'ajoute +1 quand je clique
function add(){
    compteur = compteur + 1;
    titre.innerText = compteur;

}

// Créer le tableau contenant tout nos cercles
let cercles = [
    {
        couleur : "blue"
    },
    {
        couleur : "red"
    },
    {
        couleur : "violet"
    },
    {
        couleur : "orange"
    },
    {
        couleur : "brown"
    }
];
console.log(cercles)

cercles.forEach(item =>  {
   
    // Afficher les cercles
    const cercle =
    `
    <div class="cercle">${item.couleur}</div>

    `
    console.log(cercle);
    cerclesContainer.innerHTML += cercle;
});

  //Au clic sur les elements du tableau on ajoute 1
  document.querySelectorAll('.cercle').forEach(item =>{
      item.addEventListener('click', event =>{
          add();
      })
  })
