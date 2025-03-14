function sayHello() {
    let name = document.getElementById("nameInput").value;
    if (name) {
        document.getElementById("greeting").innerText = "Ciao, " + name + "!";
    } else {
        document.getElementById("greeting").innerText = "Inserisci il tuo nome!";
    }
}

// Service Worker per PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service Worker registrato"))
    .catch(err => console.log("Service Worker errore: ", err));
}