/*************
 * DEFINITIONS 
 * DES
 * FONCTIONS
 * 
 *************/

/**
 * Mise a jour des statuts des boutons
 */
 function updateButtonStatus() {
    //Suppression de la classe 'active' sur bouton courant
    var boutonsActifs = document.getElementsByClassName('active');
    boutonsActifs[0].className = boutonsActifs[0].className.replace("active", "");
    //Ajout sur bouton cliqué
    this.className += "active";
}


/*
 * Fonction de filtrage
 */
function filtrer(caracteristique) {
	let cartes;
	cartes = document.getElementsByClassName("card");
	// itération sur les cartes
	for (let i = 0; i < cartes.length; i++) {
		supprimerClasse(cartes[i], "show");
		// Si on ne filtre pas, ou que la carte possede la caracteristique, on l'affiche
		if (caracteristique === "" || cartes[i].className.indexOf(caracteristique) > -1) {
			ajouterClasse(cartes[i], "show");
		}
	}
}

/**
 * Ajoute la classe 'nom' a l'élément 'element' si celle-ci n'est pas présente
 */
function ajouterClasse(element, nom) {
	let classes = element.className.split(" ");
	if (classes.indexOf(nom) == -1) {
		element.className += " " + nom;
	}
}

/**
 * Supprime la classe 'nom' de l'élément 'element' si celle-ci est présente
 */
function supprimerClasse(element, nom) {
	// SPLIT divise une chaine de catacteres en un tableau. La division est effectuée en utilisant le motif passé en parametre.
	let classesArray = element.className.split(" ");
	while (classesArray.indexOf(nom) > -1) {
		// SPLICE modifie le tableau a l'index passé en parametre 1,  en supprimant le nombre d'élément passé en parametre 2
		classesArray.splice(classesArray.indexOf(nom), 1);
	}
	// JOIN renvoie une chaine de caracteres en concatenant les elements du tableaux separe par le separateur " " passé en parametre
	element.className = classesArray.join(" ");
}


function init() {
//Ajout de listeners
let  boutons = document.getElementsByTagName('button');
for (let i = 0; i < boutons.length; i++) {
	//Ajout d un observateur d'evenement de type "click" sur chaque bouton.
	// En cas de détection d un evenement, la fonction updateButtonStatus est appelée.
    boutons[i].addEventListener("click", updateButtonStatus);
}
// Par defaut, on ne filtre pas
filtrer("");
}


/**
 * MODAL
 */

/**
 * Ouverture de la modal
 */
function openModal(animal) {
	createModal(animal);
	let modal = document.getElementById("modal");
	modal.style.display = "block";

}

/**
 * Fermeture de la modal
 */
function closeModal() {
	let modal = document.getElementById("modal");
	modal.style.display = "none";
}

/**
 * Creation dynamique de la modal
 */
function createModal(nomAnimal) {
	let animal = getDetails(nomAnimal);
	let element = document.getElementById("dynamic-content");
	element.innerHTML = "<h2>" + animal.nom + "</h2>" +
        "<img class='miniature' src='" + animal.image +"'>" + 
		"<ul>" +
		"<li>Nom scientifique : " + animal.nomScientifique + "</li>" +
		"<li>Lieu de vie : " + animal.lieu + "</li>" +
		"<li>Famille : " + animal.famille + "</li>" +
		"<li>Régime alimentaire : " + animal.regime + "</li>" +
		"</ul>";
}

// Recherche des details de l animal en fonction de son nom
function getDetails(nomAnimal) {
	for (let i = 0; i < animaux.length; i++) {
		if (nomAnimal === animaux[i].nom) {
			return animaux[i];
		}
	}
}







/*************
 * INSTRUCTIONS
 * 
 *************/


 var animaux = [
	{
		nom: 'LION', nomScientifique: 'Panthera leo', lieu: 'Savane africaine', famille: 'Félidé', regime: 'Carnivore', image: 'https://www.sciencesetavenir.fr/assets/img/2020/10/08/cover-r4x3w1000-5f7ecee034fc7-lion-3576045-1920.jpg'
	},
	{
		nom: 'ELEPHANT', nomScientifique: 'Loxodonta', lieu: 'dans les flaques d\'eau', famille: 'Eléphantidé', regime: 'Herbivore', image: 'https://i.pinimg.com/originals/32/bc/8c/32bc8ca0a4cd43112e4fa16f4c19edb1.jpg'
	},
	{
		nom: 'HYENE', nomScientifique: 'Crocuta crocuta', lieu: 'Afrique subsaharienne', famille: 'Hyénidé', regime: 'Carnivore', image: 'https://lemagdesanimaux.ouest-france.fr/images/dossiers/2020-04/hyene-1-151727.jpg'
	},
	{
		nom: 'CHIMPANZE', nomScientifique: 'Pan Troglodyte', lieu: 'dans les arbres', famille: 'Hominidé', regime: 'Omnivore', image: 'https://static9.depositphotos.com/1594920/1087/i/600/depositphotos_10879124-stock-photo-young-chimpanzee-simia-troglodytes-6.jpg'
	},
	{
		nom: 'GIRAFE', nomScientifique: 'Girafus', lieu: 'Savane', famille: 'Girafidé', regime: 'Herbivore', image: 'https://img.ohmymag.com/article/girafe/girafe-sa-langue-fait-50cm_078e6bd8e6a5236796c227b3e4ee2ff57f86c6af.jpg'
	},
	{
		nom: 'SURICATE', nomScientifique: 'Suricatoume', lieu: 'SuricatLand', famille: 'SuricatFamily', regime: 'Carnivore', image: 'https://blog.makila.fr/animaux-safari-afrique/wp-content/gallery/suricate/suricate-photo-p-de-wilde.jpg'
	},
]


init();
