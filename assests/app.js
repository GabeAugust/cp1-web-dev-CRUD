const jogadoras = [
  {
    "nome": "Andressa Alves",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://example.com/andressa.jpg",
    "gols": 15,
    "assistencias": 10,
    "jogos": 28,
    "favorita": false
  },
  {
    "nome": "Dayana Rodríguez",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://example.com/dayana.jpg",
    "gols": 5,
    "assistencias": 12,
    "jogos": 30,
    "favorita": false
  },
  {
    "nome": "Mariza",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://example.com/mariza.jpg",
    "gols": 2,
    "assistencias": 1,
    "jogos": 32,
    "favorita": false
  },
  {
    "nome": "Thaís Regina",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://example.com/thais.jpg",
    "gols": 1,
    "assistencias": 2,
    "jogos": 25,
    "favorita": false
  },
  {
    "nome": "Letícia Teles",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://example.com/leticia.jpg",
    "gols": 0,
    "assistencias": 0,
    "jogos": 18,
    "favorita": false
  }
]

window.onload = listPlayers();
const button = document.querySelector("#playerPost")
button.addEventListener('click', addPlayer)

const addPlayer = () => {
  const namePlayer = document.querySelector('#namePlayer').value;
  const playerTeam = document.querySelector('#playerTeam').value;
  const playerPicture = document.querySelector('#playerPicture').value;
  const playerAssists = document.querySelector('#playerAssists').value
  const playerGoals = document.querySelector('#playerGoals').value;
  const playerPostion = document.querySelector('#playerPostion').value;
  const favorite = document.querySelector('#favorite').value;
  const playerGames = document.querySelector('#playerGames').value;

  const player = {
    nome: namePlayer,
    posicao: playerPostion,
    clube: playerTeam,
    foto: playerPicture,
    gols: playerGoals,
    assistencias: playerAssists,
    jogos: playerGames,
    favorita: favorite,
  }

  jogadoras.unshift(player);
  document.querySelector("#playerForm").reset();
  listPlayers();
}

//Read
const listPlayers = () => {
  const playersList = document.querySelector(".players-list");
  playersList.innerHTML = "";

  jogadoras.forEach(jogadora => {
    const cardPlayers = document.createElement("div");
    cardPlayers.classList.add('cardJogadora')

    cardPlayers.innerHTML = `
    <img src = "${jogadora.foto}" >
    <p>${jogadora.nome} </p>
    <p>${jogadora.posicao} </p>
    <p>${jogadora.assistencias} </p>
    <p>${jogadora.clube} </p>
    <p>${jogadora.gols} </p>
    <button>Apagar</button> 
    <button>Excluir</button> `

    playersList.append(cardPlayers)
  });
}