var items = document.querySelector("#items");
var photos = document.querySelectorAll("li");

var selectedArray = [];

var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=100",
        alt: "Foggy beach",
        title: "Fog of Wonder",
        cost: 100,
        desc: "Print of a great view of the beach obscured by the fog",
    },
    {
        img: "http://unsplash.it/256/256?image=99",
        alt: "Wheel",
        title: "Mans First Toy",
        cost: 75,
        desc: "Remember when people used to use these? Me neither.",
    },
    {
        img: "http://unsplash.it/256/256?image=36",
        alt: "camera parts",
        title: "The Inner Workings",
        cost: 104,
        desc: "This great piece shows the round about ways of photo creation.",
    },
    {
        img: "http://unsplash.it/256/256?image=49",
        alt: "nice looking houses",
        title: "Cramped Homes",
        cost: 95.21,
        desc: "A great view and probably nice people to bad its a picture.",
    },
    {
        img: "http://unsplash.it/256/256?image=64",
        alt: "Woman looking at camera with flowers",
        title: "Sooo You Next?",
        cost: 47.99,
        desc: "A girl with sunglasses looking at the viewer.",
    },
    {
        img: "http://unsplash.it/256/256?image=81",
        alt: "Hedge Tunnel",
        title: "Tunnel of Horror",
        cost: 12,
        desc: "Staring at this picture can cause increased heart rate. Careful.",
    },
];

function displayItems(arr, objArr){
    for(var i = 0; i < arr.length; i++){
        // console.log(arr[i].alt);
        var item = `
        <li data-sku=${i}>
            <input type="checkbox">
            <img src="${arr[i].img}" alt="${arr[i].alt}">
            <h3>${arr[i].title}</h3>
            <p>$${arr[i].cost}</p>
            <p>${arr[i].desc}</p>
        </li>`;
        items.innerHTML += item;
    }
}

displayItems(itemArray);

// console.log(items.children);

function addListener(arr, objArr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
        arr[i].addEventListener("click", function(evt){
            console.log(this.firstElementChild);
            this.classList.toggle("selected");

            //Turnary operator // aka short if statment.
            (this.firstElementChild.checked == true)?
                this.firstElementChild.checked = false:
                this.firstElementChild.checked = true;

                // console.log(this.innerHTML);
                // selectedArray.push(this.dataset.sku);

                // console.log(selectedArray);

                selectedArray.push(objArr.slice(this.dataset.sku, parseInt(this.dataset.sku) + 1)[0]);
                console.log(selectedArray);
        })
    }
    
}

addListener(items.children, itemArray);