var kartice = document.getElementsByClassName('glavni-col');

$(document).ready(function() {
    kartice.onclick = function() {
        if (confirm("Da li zelite da idete na drugi stranicu?")) {
            window.location = "katalog.html";
        }
    }
})