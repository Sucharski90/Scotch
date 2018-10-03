console.log('hooked up');
let index = 0;
var islays = [
    {"name": "Ardbeg 10",
    "age": "10 years",
    "distillary": "Ardbeg",
    "image": ""
    },
    {name: "Laphroaig Quarter Cask",
    "age": "About 6 years",
    "distillary": "Laphroaig",
    "image": ""
    },
    {name: "Lagavulin 16",
    "age": "16 yars",
    "distillary": "Lagavulin",
    "image": ""
    },
    {name: "Bunnahabhain 18",
    "age": "18 years",
    "distillary": "Bunnahabhain",
    "image": ""
    },
    {name: "Octomore 6.3",
    "age": "5 years",
    "distillary": "Octomore",
    "image": ""
    }
]
var campbeltowns = [
    {"name": "Ardbeg 1k0",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    },
    {"name": "Ardbeg 10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    },
    {"name": "Ardbeg 10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    },
    {"name": "Ardbeg 10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    },
    {"name": "Ardbeg 10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    }
]
var speysides = [
    {"name": "Ardbeg 1k0",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    },
    {"name": "Ardbeg 10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    },
    {"name": "Ardbeg 10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    },
    {"name": "Ardbeg 10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    },
    {"name": "Ardbeg 10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    }
]
var lowlands = [
    {"name": "Ardbeg 1k0",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    },
    {"name": "Ardbeg 10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    },
    {"name": "Ardbeg 10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    },
    {"name": "Ardbeg 10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    },
    {"name": "Ardbeg 10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    }
]

// modal for types page
let islay = document.querySelector('#islay');
let campbeltown = document.querySelector('#campbeltown');
let speyside = document.querySelector('#speyside');
let lowland = document.querySelector('#lowland');
let highland= document.querySelector('#highland');

let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.closeBtn');

// open modal islay
let openModal = () => {
        modal.style.display = 'block';
        let currentScotch = islays[index];
        let name = document.querySelector('#name');
        let age = document.querySelector('#age');
        let distillary = document.querySelector('#distillary');
        name.innerHTML = `Name: ${currentScotch.name}`; 
        age.innerHTML = `Age: ${currentScotch.age}`;
        distillary.innerHTML = `Distillary: ${currentScotch.distillary}`;
};
islay.addEventListener('click', openModal);

// open modal Camp
let openCamp = () => {
        modal.style.display = 'block';
        let currentCamp = campbeltowns[index];
        let name = document.querySelector('#name');
        let age = document.querySelector('#age');
        let distillary = document.querySelector('#distillary');
        name.innerHTML = `Name: ${currentCamp.name}`; 
        age.innerHTML = `Age: ${currentCamp.age}`;
        distillary.innerHTML = `Distillary: ${currentCamp.distillary}`;
};
campbeltown.addEventListener('click', openCamp);

// open modal Speyside
let openSpey = () => {
        modal.style.display = 'block';
        let currentSpey = speysides[index];
        let name = document.querySelector('#name');
        let age = document.querySelector('#age');
        let distillary = document.querySelector('#distillary');
        name.innerHTML = `Name: ${currentSpey.name}`; 
        age.innerHTML = `Age: ${currentSpey.age}`;
        distillary.innerHTML = `Distillary: ${currentSpey.distillary}`;
};
speyside.addEventListener('click', openSpey);

// open modal islay
let openLow = () => {
        modal.style.display = 'block';
        let currentLow = lowlands[index];
        let name = document.querySelector('#name');
        let age = document.querySelector('#age');
        let distillary = document.querySelector('#distillary');
        name.innerHTML = `Name: ${currentLow.name}`; 
        age.innerHTML = `Age: ${currentLow.age}`;
        distillary.innerHTML = `Distillary: ${currentLow.distillary}`;
};
lowland.addEventListener('click', openLow);

// open modal islay
let openHigh = () => {
        modal.style.display = 'block';
        let currentHigh = highlands[index];
        let name = document.querySelector('#name');
        let age = document.querySelector('#age');
        let distillary = document.querySelector('#distillary');
        name.innerHTML = `Name: ${currentHigh.name}`; 
        age.innerHTML = `Age: ${currentHigh.age}`;
        distillary.innerHTML = `Distillary: ${currentHigh.distillary}`;
};
highland.addEventListener('click', openHigh);




// grab next and back btn
const next = document.querySelector('.next');
const back = document.querySelector('.back');

// moves to next scotch islay
let nextScotch = () => {
    if(index == 4) {
        index = 0
    } else {index++}
    openModal();  
}
next.addEventListener('click', nextScotch);

















// close modal on x click
function closeModal() {
    index = 0;
    modal.style.display = 'none';
}
// close modal on outside click
function outsideClick(e) {
  if(e.target == modal) {
  modal.style.display = 'none';
  }
}
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);