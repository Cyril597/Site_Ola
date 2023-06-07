// recupérer le fichier JSON 
fetch("Galerie_Ola.json")
// créer une promesse qui utilise le dossier JSON
    .then(response => response.json())
    // récuperer les données du fichier 
        .then(data => {
            // tester si sa marche
            console.log(data);
            console.log(data.description_1)
            // récupérer l'éléments a modifier
            var desc_image_1 = document.getElementById("desc1");
            var desc_image_2 = document.getElementById("desc2");
            var desc_image_3 = document.getElementById("desc3");
            var desc_image_4 = document.getElementById("desc4");
            var desc_image_5 = document.getElementById("desc5");
            var desc_image_6 = document.getElementById("desc6");
            var desc_image_7 = document.getElementById("desc7");
            var desc_image_8 = document.getElementById("desc8");
            var desc_image_9 = document.getElementById("desc9");
            var desc_image_10 = document.getElementById("desc10");
            var desc_image_11 = document.getElementById("desc11");
            var desc_image_12 = document.getElementById("desc12");

            var image1 = document.getElementById("Image1");
            var image2 = document.getElementById("Image2");
            var image3 = document.getElementById("Image3");
            var image4 = document.getElementById("Image4");
            var image5 = document.getElementById("Image5");
            var image6 = document.getElementById("Image6");
            var image7 = document.getElementById("Image7");
            var image8 = document.getElementById("Image8");
            var image9 = document.getElementById("Image9");
            var image10 = document.getElementById("Image10");
            var image11 = document.getElementById("Image11");
            var image12 = document.getElementById("Image12");
            
            // modifier ce que l'élément contient
            desc_image_1.innerHTML = data.description_1;
            desc_image_2.innerHTML = data.description_2;
            desc_image_3.innerHTML = data.description_3;
            desc_image_4.innerHTML = data.description_4;
            desc_image_5.innerHTML = data.description_5;
            desc_image_6.innerHTML = data.description_6;
            desc_image_7.innerHTML = data.description_7;
            desc_image_8.innerHTML = data.description_8;
            desc_image_9.innerHTML = data.description_9;
            desc_image_10.innerHTML = data.description_10;
            desc_image_11.innerHTML = data.description_11;
            desc_image_12.innerHTML = data.description_12;
            
            image1.setAttribute("src", data.Image_1);
            image2.setAttribute("src", data.Image_2);
            image3.setAttribute("src", data.Image_3);
            image4.setAttribute("src", data.Image_4);
            image5.setAttribute("src", data.Image_5);
            image6.setAttribute("src", data.Image_6);
            image7.setAttribute("src", data.Image_7);
            image8.setAttribute("src", data.Image_8);
            image9.setAttribute("src", data.Image_9);
            image10.setAttribute("src", data.Image_10);
            image11.setAttribute("src", data.Image_11);
            image12.setAttribute("src", data.Image_12);
})