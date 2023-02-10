var rouge = 0;
var bleu = 0;
var vert = 0;
var lum = 0;
var heure = 0;
var minute = 0;
var activer = 0;
var rougereveil = 0;
var bleureveil = 0;
var vertreveil = 0;
var lumreveil = 0;
var estAllume = false;

if(lum == 0){
    estAllume = false;
}else{
    estAllume = true;
}

function Luminosite(x){
    lum = x;
}

function Rouge(x){
    rouge = x;
    Backgroud();
}
function Vert(x){
    vert = x;
    Backgroud();
}
function Bleu(x){
    bleu = x;
    Backgroud();
}
function Luminositereveil(x){
    lumreveil = x;
}

function Rougereveil(x){
    rougereveil = x;
}
function Vertreveil(x){
    vertreveil = x;
}
function Bleureveil(x){
    bleureveil = x;
}

function Heure(x){
    heure = x[0];
    minute = x[1];
}

function Activer(){
    if(document.getElementById('activer').checked){
        activer = 1;
    }else{
        activer = 0;
    }
}

function Extend(x){
    if(x<10){
        return "00"+x
    }else if(x<100){
        return "0"+x
    }
    return x
}

function Appliquer(){
    const api_key = "0KOKL2XWUDT2GGT1";
    var url =
      "https://api.thingspeak.com/update?api_key=" +
      api_key +
      "&field1=" +
      lum + Extend(rouge) +
      "&field2=" +
      vert + Extend(bleu) +
      "&field3=" +
      heure +
      "&field4=" +
      minute +
      "&field5=" +
      activer +
      "&field6=" +
      lumreveil + Extend(rougereveil) +
      "&field7=" +
      vertreveil + Extend(bleureveil);

    // Configurez la requête
    var XHR = new XMLHttpRequest();
    XHR.open("GET", url);
    XHR.send();
    XHR.onload = function() {
        Maj();
    }
    document.getElementById('load').style.display = "flex";
    setTimeout(Timer, 30000);
  
}

function Timer(){
    document.getElementById('load').style.display = "none";
}

function Backgroud(){
    document.getElementById('background').style.backgroundColor = 'rgb(' + rouge + ',' + vert + ',' + bleu + ')';
    if(lum == 0){
        estAllume = false;
        document.getElementById('power').style.color = 'rgb(' + rouge + ',' + vert + ',' + bleu + ')';
        document.getElementById('state').style.color = 'rgb(' + rouge + ',' + vert + ',' + bleu + ')';
        document.getElementById('state').innerHTML = "on";
        document.getElementById('swi').style.backgroundColor = "#dadadaa4";
        document.getElementById('swi').style.borderWidth = "0";
    }else{
        estAllume = true;
        document.getElementById('power').style.color = "black";
        document.getElementById('state').style.color = "black";
        document.getElementById('state').innerHTML = "off";
        document.getElementById('swi').style.backgroundColor = 'rgb(' + rouge + ',' + vert + ',' + bleu + ')';
        document.getElementById('swi').style.borderWidth = "5px";
    }

}

function Maj(){
    url = "https://api.thingspeak.com/channels/1036881/feeds.json?api_key=95P3VJFW8AFW5I3B&results=1"
    var XHR = new XMLHttpRequest();
    XHR.open("GET", url,true);
    XHR.responseType = 'json';
    XHR.send();
    XHR.onload = function() {
        let responseObj = XHR.response;
        lum = Math.floor(responseObj.feeds[0].field1 / 1000);
        rouge = responseObj.feeds[0].field1 % 1000;
        vert = Math.floor(responseObj.feeds[0].field2 / 1000);
        bleu = responseObj.feeds[0].field2 % 1000;
        heure = responseObj.feeds[0].field3;
        minute = responseObj.feeds[0].field4;
        activer = responseObj.feeds[0].field5;
        lumreveil = Math.floor(responseObj.feeds[0].field6 / 1000);
        rougereveil = responseObj.feeds[0].field6 % 1000;
        vertreveil = Math.floor(responseObj.feeds[0].field7 / 1000);
        bleureveil = responseObj.feeds[0].field7 % 1000;
        Metro.getPlugin('#luminosite','slider').val(lum);
        Metro.getPlugin('#rouge','slider').val(rouge);
        Metro.getPlugin('#vert','slider').val(vert);
        Metro.getPlugin('#bleu','slider').val(bleu);
        Metro.getPlugin('#lumreveil','slider').val(lumreveil);
        Metro.getPlugin('#rougereveil','slider').val(rougereveil);
        Metro.getPlugin('#vertreveil','slider').val(vertreveil);
        Metro.getPlugin('#bleureveil','slider').val(bleureveil);
        Metro.getPlugin('#timer','timepicker').val(heure + ":" + minute);
        if(activer == 1){
            document.getElementById('activer').checked = true;
        }else{
            document.getElementById('activer').checked = false;
        }
        Backgroud();
    };
}

function Palette(r,v,b){
    rouge = r;
    vert = v;
    bleu = b;
    lum = 100;

    const api_key = "0KOKL2XWUDT2GGT1";
    var url =
      "https://api.thingspeak.com/update?api_key=" +
      api_key +
      "&field1=" +
      lum + Extend(rouge) +
      "&field2=" +
      vert + Extend(bleu) +
      "&field3=" +
      heure +
      "&field4=" +
      minute +
      "&field5=" +
      activer +
      "&field6=" +
      lumreveil + Extend(rougereveil) +
      "&field7=" +
      vertreveil + Extend(bleureveil);

    // Configurez la requête
    var XHR = new XMLHttpRequest();
    XHR.open("GET", url);
    XHR.send();
    XHR.onload = function() {
        Maj();
    }
    document.getElementById('load').style.display = "flex";
    setTimeout(Timer, 30000);
}


function Switch(){
    if(estAllume){
        lum = 0;
        estAllume = false;
    }else{
        lum = 100;
        estAllume = true;
    }
    

    const api_key = "0KOKL2XWUDT2GGT1";
    var url =
      "https://api.thingspeak.com/update?api_key=" +
      api_key +
      "&field1=" +
      lum + Extend(rouge) +
      "&field2=" +
      vert + Extend(bleu) +
      "&field3=" +
      heure +
      "&field4=" +
      minute +
      "&field5=" +
      activer +
      "&field6=" +
      lumreveil + Extend(rougereveil) +
      "&field7=" +
      vertreveil + Extend(bleureveil);

    // Configurez la requête
    var XHR = new XMLHttpRequest();
    XHR.open("GET", url);
    XHR.send();
    XHR.onload = function() {
        Maj();
    }
    document.getElementById('load').style.display = "flex";
    setTimeout(Timer, 30000);
}

Maj();