const pokemonData = [
  {
    name: 'Pikachu',
    sayHello: function () {
      document.getElementById('soundPikachu').play();
      alert('Pikachu says hello!');
      document.body.classList.toggle('pikachu');
    },
    styles: {
      backgroundColor: '#f8d030',
      color: 'black',
    },
  },
  {
    name: 'Charizard',
    sayHello: function () {
      document.getElementById('soundCharizard').play();
      alert('Charizard says hello!');
      document.body.classList.toggle('charizard');
    },
    styles: {
      backgroundColor: '#ea913a',
      color: '#f4e17a',
    },
  },
  {
    name: 'Blastoise',
    sayHello: function () {
      document.getElementById('soundBlastoise').play();
      alert('Blastoise says hello!');
      document.body.classList.toggle('blastoise');
    },
    styles: {
      backgroundColor: '#8ea9cf',
      color: '#cacbd7',
    },
  },
  {
    name: 'Meowth',
    sayHello: function () {
      document.getElementById('soundMeowth').play();
      alert('Meowth says hello!');
      document.body.classList.toggle('meowth');
    },
    styles: {
      backgroundColor: '#fffbcd',
      color: '#d78650',
    },
  },
  {
    name: 'SlowPoke',
    sayHello: function () {
      document.getElementById('soundPoke').play();
      alert('SlowPoke says hello!');
      document.body.classList.toggle('poke');
    },
    styles: {
      backgroundColor: '#ef9abb',
      color: '#f3f4d2',
    },
  },
];

const pokemonContainer = document.getElementById('pokemon-cards');

pokemonData.forEach((pokemon) => {
  const card = document.createElement('div');
  card.className = 'card';
  Object.assign(card.style, pokemon.styles);
  const pokemonName = document.createElement('h2');
  pokemonName.innerHTML = pokemon.name;
  pokemonName.className = 'card-title';
  card.appendChild(pokemonName);

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerHTML = 'Choose me!';
  btn.className = 'card-button';
  btn.addEventListener('click', pokemon.sayHello);
  card.appendChild(btn);

  pokemonContainer.appendChild(card);
});
