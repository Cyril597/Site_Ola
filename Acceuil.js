// recupérer le fichier JSON 
fetch("Acceuil.json")
// créer une promesse qui utilise le dossier JSON
    .then(response => response.json())
    // récuperer les données du fichier 
        .then(data => {
            // tester si sa marche
            console.log(data);
            // récupérer l'éléments a modifier
            var Titre_1 = document.getElementById("titre1");
            var desc_1 = document.getElementById("desc1");

            var Adresse_desc = document.getElementById("adresse_Desc");
            var Adresse_1 = document.getElementById("adresse_1");

            var Ingredient_1 = document.getElementById("ingredient_1");
            var Ingredient_2 = document.getElementById("ingredient_2");
            var Ingredient_3 = document.getElementById("ingredient_3");
            var Ingredient_4 = document.getElementById("ingredient_4");
            var Ingredient_5 = document.getElementById("ingredient_5");
            var Ingredient_6 = document.getElementById("ingredient_6");
            var Ingredient_7 = document.getElementById("ingredient_7");

            var Bienfait_1 = document.getElementById("bienfait_1");
            var Bienfait_2 = document.getElementById("bienfait_2");
            var Bienfait_3 = document.getElementById("bienfait_3");
            var Bienfait_4 = document.getElementById("bienfait_4");
            var Bienfait_5 = document.getElementById("bienfait_5");
            var Bienfait_6 = document.getElementById("bienfait_6");
            var Bienfait_7 = document.getElementById("bienfait_7");
            
            var Origine_1 = document.getElementById("Origines_1");
            var Origine_2 = document.getElementById("Origines_2");
            var Origine_3 = document.getElementById("Origines_3");
            var Origine_4 = document.getElementById("Origines_4");
            var Origine_5 = document.getElementById("Origines_5");
            var Origine_6 = document.getElementById("Origines_6");
            var Origine_7 = document.getElementById("Origines_7");

            var Video_acceuil = document.getElementById("video_pres");
            var Img_1 = document.getElementById("Logo_2");
            var Img_2 = document.getElementById("bouteille_2");
            var Img_3 = document.getElementById("toki");
            var Img_4 = document.getElementById("houb");

            // modifier ce que l'élément contient
            Titre_1.innerHTML = data.Titre_1;
            desc_1.innerHTML = data.Desc_1;
            Adresse_desc.innerHTML = data.Adresse_1;
            Adresse_1.innerHTML = data.Adresse_2;

            Ingredient_1.innerHTML = data.Ingredient_1;
            Ingredient_2.innerHTML = data.Ingredient_2;
            Ingredient_5.innerHTML = data.Ingredient_5;
            Ingredient_6.innerHTML = data.Ingredient_6;
            Ingredient_7.innerHTML = data.Ingredient_7;

            Bienfait_1.innerHTML = data.bienfait_1;
            Bienfait_2.innerHTML = data.bienfait_2;
            Bienfait_3.innerHTML = data.bienfait_3;
            Bienfait_4.innerHTML = data.bienfait_4;
            Bienfait_5.innerHTML = data.bienfait_5;
            Bienfait_6.innerHTML = data.bienfait_6;
            Bienfait_7.innerHTML = data.bienfait_7;
            
            Origine_1.innerHTML = data.Origine_1;
            Origine_2.innerHTML = data.Origine_2;
            Origine_5.innerHTML = data.Origine_5;
            Origine_6.innerHTML = data.Origine_6;
            Origine_7.innerHTML = data.Origine_7;

            Video_acceuil.setAttribute("src", data.video_pres);
            Img_1.setAttribute("src", data.Image_1);
            Img_2.setAttribute("src", data.Image_2);
            Img_3.setAttribute("src", data.Image_3);
            Img_4.setAttribute("src", data.Image_4);
})