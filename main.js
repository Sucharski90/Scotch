console.log('hooked up');
let index = 0;
var islays = [
    {"name": "Ardbeg 10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    },
    {name: "Ardbeg 10",
    "age": "12",
    "distillary": "Ardbeg",
    "image": ""
    },
    {name: "Ardbeg 10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    },
    {name: "Ardbeg 10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    },
    {name: "Ardbeg 10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    }
]
var campbeltown = [
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
    },
    {"name": "Ardbeg 10",
    "age": "10",
    "distillary": "Ardbeg",
    "image": ""
    }
]

// modal for types page
let islay = document.querySelector('#islay')
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.closeBtn');

// open modal
let openModal = () => {
        modal.style.display = 'block';
        let currentScotch = islays[index];
        let name = document.querySelector('#name');
        let age = document.querySelector('#age');
        let distillary = document.querySelector('#distillary');
        name.innerHTML = `Name: ${currentScotch.name}`; 
        age.innerHTML = `Name: ${currentScotch.age}`;
        distillary.innerHTML = `Name: ${currentScotch.distillary}`;
};
islay.addEventListener('click', openModal);

// grab next and back btn
const next = document.querySelector('.next');
const back = document.querySelector('.back');

// moves to next scotch
let nextScotch = () => {
    islays[index++];
    console.log('working');
    openModal();
}
next.addEventListener('click', nextScotch);

// close modal on x click
function closeModal() {
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