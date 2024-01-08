function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//BURGER-MENU
const burgerMenuIcon = document.querySelector('.burger-menu__icon');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuBg = document.querySelector('.burger-menu__bg');

burgerMenuIcon.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu_active');
  burgerMenuIcon.classList.toggle('burger-menu__icon_active');
  document.querySelector('.burger-menu__bg').classList.toggle('burger-menu__bg_active');
  document.body.classList.toggle('of-hidden');
  burgerMenuBg.addEventListener('click', event => {
      if(event.target !== burgerMenu){
          burgerMenu.classList.remove('burger-menu_active');
          burgerMenuIcon.classList.remove('burger-menu__icon_active');
          document.querySelector('.burger-menu__bg').classList.remove('burger-menu__bg_active');
          document.body.classList.remove('of-hidden');
      }
  })
});



// SLIDER
const petsSectionCards = document.querySelector('.pets__pets-cards');
const nextArrowButton = document.querySelector('.arrow_right');
const prevArrowButton = document.querySelector('.arrow_left');

const names = ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Charly', 'Scarlett', 'Freddie'];

const createPetsCard = (name) => {
  const petsCard = document.createElement('div');
  const petsImg = document.createElement('img');
  const petsName = document.createElement('h4');
  const button = document.createElement('button');
  petsImg.src = `IMG/pets-${name}.png`;
  petsName.textContent = name;
  button.textContent = 'Learn more';
  button.classList.add("button");
  button.classList.add("button_bordered");
  petsCard.classList.add('pets-card');
  petsCard.append(petsImg, petsName, button);
  return petsCard;
}

let curentSet = [];
let nextSet = [];
let prevSet = [];
let cards = shuffle([0, 1, 2, 3, 4, 5, 6, 7]);

for(let i = 0; i < 3; i++){
  curentSet.push(cards.pop());
}

for(let i = 0; i < 3; i++){
  nextSet.push(cards.pop());
}

curentSet.forEach(el => {
  petsSectionCards.append(createPetsCard(names[el]));
});

prevSet = nextSet;

nextArrowButton.addEventListener('click', event => {
  prevSet = curentSet;
  curentSet = nextSet;
  nextSet = [...cards, prevSet[0]]
  if(!isUnique(nextSet)){
    nextSet = [...cards, prevSet[1]]
  }

  if(!isUnique(nextSet)){
    nextSet = [...cards, prevSet[2]]
  }
  
  cards = [prevSet[1], prevSet[2]];

  curentSet.forEach(el => {
    petsSectionCards.append(createPetsCard(names[el]));
  });
  petsSectionCards.scrollBy({left: 990, top: 0, behavior: 'smooth'});
  setTimeout(() => {
    for(let i = 0; i < 3; i++){
      petsSectionCards.firstElementChild.remove();
    }
  }, 1000);
})

prevArrowButton.addEventListener('click', event => {
  nextSet = curentSet;
  curentSet = prevSet;
  prevSet = [...cards, nextSet[0]];
  if(!isUnique(prevSet)){
    prevSet = [...cards, nextSet[1]]
  }
  
  if(!isUnique(prevSet)){
    prevSet = [...cards, nextSet[2]]
  }
  cards = [nextSet[1], nextSet[2]];

  curentSet.reverse().forEach(el => {
    petsSectionCards.prepend(createPetsCard(names[el]));
  });
  petsSectionCards.scrollBy({left: -990, top: 0, behavior: 'smooth'});
  setTimeout(() => {
    for(let i = 0; i < 3; i++){
      petsSectionCards.lastElementChild.remove();
    }
  }, 1000);
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function isUnique(arr){
  let set = new Set();
  arr.forEach(el => {
    set.add(el);
  });
  return set.size === 3;  
}

const nextArrowButtonMobile = document.querySelector('.arrows .arrow_right');
const prevArrowButtonMobile = document.querySelector('.arrows .arrow_left');

const cardsMobile = shuffle([0, 1, 2, 3, 4, 5, 6, 7]);

let curentCard = 0;

petsSectionCards.append(createPetsCard(names[curentCard]));

nextArrowButtonMobile.addEventListener('click', event => {
  curentCard++;
  
  if(curentCard > 7){
    curentCard = 0;
  }
  
  petsSectionCards.append(createPetsCard(names[curentCard]));

  petsSectionCards.scrollBy({left: 300, top: 0, behavior: 'smooth'});
  setTimeout(() => {
    petsSectionCards.firstElementChild.remove();
  }, 500);
})

prevArrowButtonMobile.addEventListener('click', event => {
  curentCard--;
  
  if(curentCard < 0){
    curentCard = 7;
  }
  
  petsSectionCards.prepend(createPetsCard(names[curentCard]));

  petsSectionCards.scrollBy({left: -300, top: 0, behavior: 'smooth'});
  setTimeout(() => {
    petsSectionCards.lastElementChild.remove();
  }, 500);
});


//POPUP
const petsInfo = [
  {
    "name": "Jennifer",
    "img": "./IMG/pets-Jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "./IMG/pets-Sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "./IMG/pets-Woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "./IMG/pets-Scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "./IMG/pets-Katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "./IMG/pets-Timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "./IMG/pets-Freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "./IMG/pets-Charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

const createPopUp = (petInfo) => {
  const popUpWrapper = document.createElement('div');
  popUpWrapper.classList.add('pop-up-wrapper');
  const popUp = document.createElement('div');
  popUp.classList.add('pop-up');  
  const popUpImg = document.createElement('img');
  popUpImg.src = petInfo.img;
  const popUpTextContent = document.createElement('div');
  popUpTextContent.classList.add('pop-up__text-content');
  const popUpName = document.createElement('h3');
  popUpName.textContent = petInfo.name;
  const popUpType = document.createElement('h4');
  popUpType.textContent = `${petInfo.type} - ${petInfo.breed}`;
  const popUpText = document.createElement('h5');
  popUpText.textContent = petInfo.description;
  
  const popUpList = document.createElement('ul');
  const age = document.createElement('li'); 
  const inoculations = document.createElement('li'); 
  const diseases = document.createElement('li'); 
  const parasites = document.createElement('li');
  age.innerHTML = `<span>Age:</span> ${petInfo.age}`;
  
  const petDiseases = petInfo.diseases.join("\, ");
  const petInoculations = petInfo.inoculations.join("\, ");
  const petParasites = petInfo.parasites.join("\, ");
  inoculations.innerHTML = `<span>Inoculations:</span> ${petInoculations}`;
  diseases.innerHTML = `<span>Diseases:</span> ${petDiseases}`;
  parasites.innerHTML = `<span>Parasites:</span> ${petParasites}`; 
  popUpList.append(age, inoculations, diseases, parasites);

  popUpTextContent.append(popUpName, popUpType, popUpText, popUpList);
  popUp.append(popUpImg, popUpTextContent);

  const closeButton = document.createElement('div');
  closeButton.innerHTML = '&#215;';
  closeButton.classList.add('button_round');
  closeButton.classList.add('close-button');

  popUpWrapper.append(closeButton, popUp);
  popUpWrapper.addEventListener('click', event => {
      if(event.target == popUpWrapper || event.target == closeButton){
          popUpWrapper.remove();
          document.body.classList.remove('of-hidden');
      }

  }); 
  return popUpWrapper;
}

const getPetInfo = (name) => {
  for(let item of petsInfo){
      if(item.name == name){
          return item;
      }
  }
}

petsSectionCards.addEventListener('click', event => {
  console.log(event.target.parentElement.classList);
  if(event.target.classList.contains('pets-card')){
    document.body.append(createPopUp(getPetInfo(event.target.querySelector('h4').textContent)));
    document.body.classList.toggle('of-hidden');
  }else if(event.target.parentElement.classList.contains('pets-card')){
    document.body.append(createPopUp(getPetInfo(event.target.parentElement.querySelector('h4').textContent)));
    document.body.classList.toggle('of-hidden');
  }
});
