function alarmetoaccueil (){
    var b = document.getElementById('bod-alarme');
    if(b==null){
        b = document.getElementById('bod-alarmebis');
    }
    b.id = "bod-acc";
}

function couleurtoaccueil (){
    const b = document.getElementById('bod-couleur');
    b.id = "bod-accbis";
}

function accueiltoalarme (){
    var b = document.getElementById('bod-acc');
    if(b==null){
        b = document.getElementById('bod-accbis');
    }
    b.id = "bod-alarmebis";
}

function accueiltocouleur (){
    var b = document.getElementById('bod-acc');
    if(b==null){
        b = document.getElementById('bod-accbis');
    }
    b.id = "bod-couleur";
}