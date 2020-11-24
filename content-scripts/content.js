chrome.runtime.onMessage.addListener(function(sendResponse) {
    
    var http = new XMLHttpRequest();
    var url = 'https://web.spaggiari.eu/col/app/default/corso.xhr.php';
    var params = "act=regTempo&tipo=vid&durata=777&duratatot=777&lezione=" + $("#player-1").attr('data-video');
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert("Fatto! Ora puoi passare al video successivo! - Estensione creata da gabboxl.ga");
        } else {
            alert("Si è verificato un errore nello skip del video! Ricorda che deve essere eseguito questo strumento per ogni video consecutivamente, senza saltare pagine di video non visualizzati.");
        }
    }
    http.send(params);
    
  sendResponse({ fromcontent: "This message is from content.js" });
});
