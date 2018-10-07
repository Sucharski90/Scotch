let islayIndex = 0;
let campbeltownIndex = 0;
let speysideIndex = 0;
let lowlandIndex = 0;
let highlandIndex = 0;

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
    {"name": "Ardbeg aaaa10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    },
    {"name": "Ardbegaaasswwa 10",
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
    {"name": "Ardbeg 1ssssss0",
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
    {"name": "Ardbeg 1ddddd0",
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
var highlands = [
    {"name": "Ardbeg 1ffff0",
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


// grab all modals
let modalIslay = document.querySelector('#simpleIslay');
let modalCamp = document.querySelector('#simpleCamp');
let modalSpey = document.querySelector('#simpleSpey');
let modalLow = document.querySelector('#simpleLow');
let modalHigh = document.querySelector('#simpleHigh');


// open modal islay
let openIslay = () => {
        modalIslay.style.display = 'block';
        let currentScotch = islays[islayIndex];
        let name = document.querySelector('#name');
        let age = document.querySelector('#age');
        let distillary = document.querySelector('#distillary');
        name.innerHTML = `Name: ${currentScotch.name}`; 
        age.innerHTML = `Age: ${currentScotch.age}`;
        distillary.innerHTML = `Distillary: ${currentScotch.distillary}`;
};
islay.addEventListener('click', openIslay);

// open modal Camp
let openCamp = () => {
        modalCamp.style.display = 'block';
        let currentCamp = campbeltowns[campbeltownIndex];
        let nameCamp = document.querySelector('#name-camp');
        let ageCamp = document.querySelector('#age-camp');
        let distillaryCamp = document.querySelector('#distillary-camp');
        nameCamp.innerHTML = `Name: ${currentCamp.name}`; 
        ageCamp.innerHTML = `Age: ${currentCamp.age}`;
        distillaryCamp.innerHTML = `Distillary: ${currentCamp.distillary}`;
};
campbeltown.addEventListener('click', openCamp);

// open modal Speyside
let openSpey = () => {
        modalSpey.style.display = 'block';
        let currentSpey = speysides[speysideIndex];
        let nameSpey = document.querySelector('#name-spey');
        let ageSpey = document.querySelector('#age-spey');
        let distillarySpey = document.querySelector('#distillary-spey');
        nameSpey.innerHTML = `Name: ${currentSpey.name}`; 
        ageSpey.innerHTML = `Age: ${currentSpey.age}`;
        distillarySpey.innerHTML = `Distillary: ${currentSpey.distillary}`;
};
speyside.addEventListener('click', openSpey);

// open modal islay
let openLow = () => {
        modalLow.style.display = 'block';
        let currentLow = lowlands[lowlandIndex];
        let nameLow = document.querySelector('#name-low');
        let ageLow = document.querySelector('#age-low');
        let distillaryLow = document.querySelector('#distillary-low');
        nameLow.innerHTML = `Name: ${currentLow.name}`; 
        ageLow.innerHTML = `Age: ${currentLow.age}`;
        distillaryLow.innerHTML = `Distillary: ${currentLow.distillary}`;
};
lowland.addEventListener('click', openLow);

// open modal islay
let openHigh = () => {
        modalHigh.style.display = 'block';
        let currentHigh = highlands[highlandIndex];
        let nameHigh = document.querySelector('#name-high');
        let ageHigh = document.querySelector('#age-high');
        let distillaryHigh = document.querySelector('#distillary-high');
        nameHigh.innerHTML = `Name: ${currentHigh.name}`; 
        ageHigh.innerHTML = `Age: ${currentHigh.age}`;
        distillaryHigh.innerHTML = `Distillary: ${currentHigh.distillary}`;
};
highland.addEventListener('click', openHigh);




// grab next and back btn islay
const next = document.querySelector('.next');
const back = document.querySelector('.back');

// moves to next scotch islay
let nextScotch = () => {
    if(islayIndex == 4) {
        islayIndex = 0
    } else {islayIndex++}
    openIslay();  
}
next.addEventListener('click', nextScotch);

// grab next and back btn camp
const nextCampBtn = document.querySelector('.next-camp');
const backCampBtn = document.querySelector('.back-camp');

// moves to next scotch islay
let nextCamp = () => {
    if(campbeltownIndex == 4) {
        campbeltownIndex = 0
    } else {campbeltownIndex++}
    openCamp();  
}
nextCampBtn.addEventListener('click', nextCamp);

// grab next and back btn spey
const nextSpeyBtn = document.querySelector('.next-spey');
const backSpeyBtn = document.querySelector('.back-spey');

// moves to next scotch islay
let nextSpey = () => {
    if(speysideIndex == 4) {
        speysideIndex = 0
    } else {speysideIndex++}
    openSpey();  
}
nextSpeyBtn.addEventListener('click', nextSpey);

// grab next and back btn low
const nextLowBtn = document.querySelector('.next-low');
const backLowBtn = document.querySelector('.back-low');

// moves to next scotch islay
let nextLow = () => {
    if(lowlandIndex == 4) {
        lowlandIndex = 0
    } else {lowlandIndex++}
    openLow();  
}
nextLowBtn.addEventListener('click', nextLow);

// grab next and back btn high
const nextHighBtn = document.querySelector('.next-high');
const backHighBtn = document.querySelector('.back-high');

// moves to next scotch islay
let nextHigh = () => {
    if(highlandIndex == 4) {
        highlandIndex = 0
    } else {highlandIndex++}
    openHigh();  
}
nextHighBtn.addEventListener('click', nextHigh);
// close modal on outside click
function outsideClick(e) {
  if(e.target == modalIslay || e.target == modalCamp || e.target == modalSpey || e.target == modalLow || e.target == modalHigh) {
    modalIslay.style.display = 'none';
    modalCamp.style.display = 'none';
    modalSpey.style.display = 'none';
    modalLow.style.display = 'none';
    modalHigh.style.display = 'none';
  }
}
window.addEventListener('click', outsideClick);

