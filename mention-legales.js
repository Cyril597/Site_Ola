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

            for (let y = 0; y <= 16; y++) {
                listes.push(document.getElementById(`list_${y}`));
            }
            
            
            
            function funcMl() {
                textes[0].innerHTML = data.textes[0]
                if (textes[0].style.display === "none") {
                    textes[0].style.display = "block";
                  } else {
                    textes[0].style.display = "none";
                  }
            }
            legalMentionBtn.addEventListener('click',funcMl);
            
          function funcPs() {
            textes[1].innerHTML = data.textes[1];
            if (textes[1].style.display === "none") {
                textes[1].style.display = "block";
              } else {
                textes[1].style.display = "none";
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
              } else {
                textes[2].style.display = "none";
              }
        };
        cguBtn.addEventListener('click',funcCgu);

        function funcServices() {
            textes[3].innerHTML = data.textes[3];
            if (textes[3].style.display === "none") {
                textes[3].style.display = "block";
              } else {
                textes[3].style.display = "none";
              }
        };
        servicesBtn.addEventListener('click',funcServices);

        function funcPic() {
            textes[4].innerHTML = data.textes[4];
            if (textes[4].style.display === "none") {
                textes[4].style.display = "block";
              } else {
                textes[4].style.display = "none";
              }
        };
        picBtn.addEventListener('click',funcPic);

        function funcLimitData() {
            textes[5].innerHTML = data.textes[5];
            if (textes[5].style.display === "none") {
                textes[5].style.display = "block";
              } else {
                textes[5].style.display = "none";
              }
        };
        limitDataBtn.addEventListener('click',funcLimitData);

        function funcGestData() {
            textes[6].innerHTML = data.textes[6];
            if (textes[6].style.display === "none") {
                textes[6].style.display = "block";
              } else {
                textes[6].style.display = "none";
              }
        };
        gestDataBtn.addEventListener('click',funcGestData);

        function funcLimitation() {
            textes[7].innerHTML = data.textes[7];
            if (textes[7].style.display === "none") {
                textes[7].style.display = "block";
              } else {
                textes[7].style.display = "none";
              }
        };
        limitationBtn.addEventListener('click',funcLimitation);

        function funcLinkCookies() {
            textes[8].innerHTML = data.textes[8];
            if (textes[8].style.display === "none") {
                textes[8].style.display = "block";
              } else {
                textes[8].style.display = "none";
              }
        };
        linkCookiesBtn.addEventListener('click',funcLinkCookies);
        
        function funcLegalright() {
            textes[9].innerHTML = data.textes[9];
            if (textes[9].style.display === "none") {
                textes[9].style.display = "block";
              } else {
                textes[9].style.display = "none";
              }
        };
        legalrightBtn.addEventListener('click',funcLegalright);

        function funcLaw() {
            textes[10].innerHTML = data.textes[10];
            if (textes[10].style.display === "none") {
                textes[10].style.display = "block";
              } else {
                textes[10].style.display = "none";
              }
        };
        lawBtn.addEventListener('click',funcLaw);

        function funcLexicon() {
            textes[11].innerHTML = data.textes[11];
            if (textes[11].style.display === "none") {
                textes[11].style.display = "block";
              } else {
                textes[11].style.display = "none";
              }
        };
        lexiconBtn.addEventListener('click',funcLexicon);
    })