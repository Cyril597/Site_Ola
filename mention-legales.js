// recupérer le fichier JSON 
fetch("mention-legales.json")
// créer une promesse qui utilise le dossier JSON
    .then(response => response.json())
    // récuperer les données du fichier 
        .then(data => {
            // tester si sa marche
            console.log(data);
            // récupérer l'éléments a modifier

            var legalMentionBtn = document.getElementById("mentionLegal");
            var presentationBtn = document.getElementById("pres_site");
            var cguBtn = document.getElementById("cgu_site");
            var servicesBtn = document.getElementById("desc_serv");
            var picBtn = document.getElementById("pic_site");
            var limitDataBtn = document.getElementById("limitation_donnees");
            var gestDataBtn = document.getElementById("gestion_donnees");
            var limitationBtn = document.getElementById("limite");
            var linkCookiesBtn = document.getElementById("lien_cookies");
            var legalrightBtn = document.getElementById("droit_juridique");
            var lawBtn = document.getElementById("lois");
            var lexiconBtn = document.getElementById("lexique");

            var listArray = document.getElementById("listgroup")



            let textes = [];
            
            for (let i = 0; i <= 11; i++) {
                textes.push(document.getElementById(`text_${i}`));
                
            }
            
            let listes = [];

            for (let y = 0; y <= 17; y++) {
                listes.push(document.getElementById(`list_${y}`));
            }
            
            let polygons = [];

            for (let p = 0; p <= 11; p++) {
                polygons.push(document.getElementById(`polygon_${p}`));
            }
            
            console.log(polygons)
            
            
            function funcMl() {
                textes[0].innerHTML = data.textes[0]
                if (textes[0].style.display === "none") {
                    textes[0].style.display = "block";
                    polygons[0].setAttribute('src', 'Img/Arrow-show.png');
                  } else {
                    textes[0].style.display = "none";
                    polygons[0].setAttribute('src', 'Img/Arrow-hide.png');
                  }
            }
            legalMentionBtn.addEventListener('click',funcMl);
            
          function funcPs() {
            textes[1].innerHTML = data.textes[1];
            if (textes[1].style.display === "none") {
                textes[1].style.display = "block";
                polygons[1].setAttribute('src', 'Img/Arrow-show.png');
              } else {
                textes[1].style.display = "none";
                polygons[1].setAttribute('src', 'Img/Arrow-hide.png');
              }
           
            let index = 0;
            listes.forEach(liste => {
             liste.innerHTML = data.listes[index];
                index++;
            });

            if (listArray.style.display === "none") {
                listArray.style.display = "block";
              } else {
                listArray.style.display = "none";
              }
        };
        presentationBtn.addEventListener('click',funcPs);

        function funcCgu() {
            textes[2].innerHTML = data.textes[2];

            if (textes[2].style.display === "none") {
                textes[2].style.display = "block";
                polygons[2].setAttribute('src', 'Img/Arrow-show.png');
              } else {
                textes[2].style.display = "none";
                polygons[2].setAttribute('src', 'Img/Arrow-hide.png');
              }
        };
        cguBtn.addEventListener('click',funcCgu);

        function funcServices() {
            textes[3].innerHTML = data.textes[3];
            if (textes[3].style.display === "none") {
                textes[3].style.display = "block";
                polygons[3].setAttribute('src', 'Img/Arrow-show.png');
              } else {
                textes[3].style.display = "none";
                polygons[3].setAttribute('src', 'Img/Arrow-hide.png');
              }
        };
        servicesBtn.addEventListener('click',funcServices);

        function funcPic() {
            textes[4].innerHTML = data.textes[4];
            if (textes[4].style.display === "none") {
                textes[4].style.display = "block";
                polygons[4].setAttribute('src', 'Img/Arrow-show.png');
              } else {
                textes[4].style.display = "none";
                polygons[4].setAttribute('src', 'Img/Arrow-hide.png');
              }
        };
        picBtn.addEventListener('click',funcPic);

        function funcLimitData() {
            textes[5].innerHTML = data.textes[5];
            if (textes[5].style.display === "none") {
                textes[5].style.display = "block";
                polygons[5].setAttribute('src', 'Img/Arrow-show.png');
              } else {
                textes[5].style.display = "none";
                polygons[5].setAttribute('src', 'Img/Arrow-hide.png');
              }
        };
        limitDataBtn.addEventListener('click',funcLimitData);

        function funcGestData() {
            textes[6].innerHTML = data.textes[6];
            if (textes[6].style.display === "none") {
                textes[6].style.display = "block";
                polygons[6].setAttribute('src', 'Img/Arrow-show.png');
              } else {
                textes[6].style.display = "none";
                polygons[6].setAttribute('src', 'Img/Arrow-hide.png');
              }
        };
        gestDataBtn.addEventListener('click',funcGestData);

        function funcLimitation() {
            textes[7].innerHTML = data.textes[7];
            if (textes[7].style.display === "none") {
                textes[7].style.display = "block";
                polygons[7].setAttribute('src', 'Img/Arrow-show.png');
              } else {
                textes[7].style.display = "none";
                polygons[7].setAttribute('src', 'Img/Arrow-hide.png');
              }
        };
        limitationBtn.addEventListener('click',funcLimitation);

        function funcLinkCookies() {
            textes[8].innerHTML = data.textes[8];
            if (textes[8].style.display === "none") {
                textes[8].style.display = "block";
                polygons[8].setAttribute('src', 'Img/Arrow-show.png');
              } else {
                textes[8].style.display = "none";
                polygons[8].setAttribute('src', 'Img/Arrow-hide.png');
              }
        };
        linkCookiesBtn.addEventListener('click',funcLinkCookies);
        
        function funcLegalright() {
            textes[9].innerHTML = data.textes[9];
            if (textes[9].style.display === "none") {
                textes[9].style.display = "block";
                polygons[9].setAttribute('src', 'Img/Arrow-show.png');
              } else {
                textes[9].style.display = "none";
                polygons[9].setAttribute('src', 'Img/Arrow-hide.png');
              }
        };
        legalrightBtn.addEventListener('click',funcLegalright);

        function funcLaw() {
            textes[10].innerHTML = data.textes[10];
            if (textes[10].style.display === "none") {
                textes[10].style.display = "block";
                polygons[10].setAttribute('src', 'Img/Arrow-show.png');
              } else {
                textes[10].style.display = "none";
                polygons[10].setAttribute('src', 'Img/Arrow-hide.png');
              }
        };
        lawBtn.addEventListener('click',funcLaw);

        function funcLexicon() {
            textes[11].innerHTML = data.textes[11];
            if (textes[11].style.display === "none") {
                textes[11].style.display = "block";
                polygons[11].setAttribute('src', 'Img/Arrow-show.png');
              } else {
                textes[11].style.display = "none";
                polygons[11].setAttribute('src', 'Img/Arrow-hide.png');
              }
        };
        lexiconBtn.addEventListener('click',funcLexicon);
    })