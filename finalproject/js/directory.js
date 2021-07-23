const requestURL = "https://raw.githubusercontent.com/comfortazuonwu/comfortazuonwu.github.io/master/finalproject/json/directory.json"

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) { 
        const directory = jsonObject["directory"];

        for (let i = 0; i < directory.length; i++) {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let addy = document.createElement("p");
            let link = document.createElement("p");
            let img = document.createElement("img");

            h2.textContent = directory[i].name ;
            addy.textContent =  directory[i].address;
            link.textContent =  directory[i].link;
            img.setAttribute("src", directory[i].logo);
            img.setAttribute("alt",  directory[i].alt);
           
            card.appendChild(h2);
            card.appendChild(addy);
            card.appendChild(link);
            card.appendChild(img);

            document.querySelector("div.cards").appendChild(card);
        }
    });
    