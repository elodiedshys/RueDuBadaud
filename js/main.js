
var titre = document.getElementById('titre');

var timer= window.setInterval("changeTitre()", 1);

var i = Math.floor(Math.random() * 21);

function changeTitre(){


  switch(i){

    case 0:
      titre.innerHTML = "la rue des thermophyles";
      break;

    case 1:
      titre.innerHTML ="le Quai Javel";
      break;

    case 2:
      titre.innerHTML ="la Rue du moulin vert";
      break;

    case 3:
      titre.innerHTML ="la Place de Breteuil";
      break;

    case 4:
      titre.innerHTML ="la Place de l'Abbé Georgres Hebocque";
      break;

    case 5:
      titre.innerHTML = "la Rue du champ de l'alouette";
      break;

    case 6:
      titre.innerHTML ="la butte aux cailles";
      break;

    case 7:
      titre.innerHTML ="la Rue mouffetard";
      break;

    case 8:
      titre.innerHTML ="la Rue Bièvre";
      break;

    case 9:
      titre.innerHTML ="la Place Octave Chante";
      break;

    case 10:
      titre.innerHTML = "l'Eglise de la trinité";
      break;

    case 11:
      titre.innerHTML ="la Rue norvins";
      break;

    case 12:
      titre.innerHTML ="la Rue Molitor";
      break;

    case 13:
      titre.innerHTML ="la Rue du plâtre";
      break;

    case 14:
      titre.innerHTML ="la Rue Jean Lantier";
      break;

    case 15:
      titre.innerHTML ="la Rue des solitaires";
      break;

    case 16:
      titre.innerHTML ="la Rue de la Grange aux Belles";
      break;

    case 17:
      titre.innerHTML ="le Passage Pivert";
      break;

    case 18:
      titre.innerHTML ="la Rue Pastourelle";
      break;

    case 19:
      titre.innerHTML ="la Rue aux Ours";
      break;

    case 20:
      titre.innerHTML ="la Rue de la Bienfaisance";
      break;

    }
}
