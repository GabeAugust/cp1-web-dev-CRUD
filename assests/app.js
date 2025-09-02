const jogadoras = [
  {
    nome: "Andressa Alves",
    posicao: "Meio-campo",
    clube: "Corinthians",
    foto: "https://example.com/andressa.jpg",
    gols: 15,
    assistencias: 10,
    jogos: 28,
    favorita: false,
  },
  {
    nome: "Dayana Rodríguez",
    posicao: "Meio-campo",
    clube: "Corinthians",
    foto: "https://example.com/dayana.jpg",
    gols: 5,
    assistencias: 12,
    jogos: 30,
    favorita: false,
  },
  {
    nome: "Mariza",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/mariza.jpg",
    gols: 2,
    assistencias: 1,
    jogos: 32,
    favorita: false,
  },
  {
    nome: "Thaís Regina",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/thais.jpg",
    gols: 1,
    assistencias: 2,
    jogos: 25,
    favorita: false,
  },
  {
    nome: "Letícia Teles",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/leticia.jpg",
    gols: 0,
    assistencias: 0,
    jogos: 18,
    favorita: false,
  },
];

const addPlayer = () => {
  const namePlayer = document.querySelector("#namePlayer").value;
  const playerTeam = document.querySelector("#playerTeam").value;
  const playerPicture = document.querySelector("#playerPicture").value;
  const playerAssists = document.querySelector("#playerAssists").value;
  const playerGoals = document.querySelector("#playerGoals").value;
  const playerPostion = document.querySelector("#playerPostion").value;
  const favorite = document.querySelector("#favorite").value;
  const playerGames = document.querySelector("#playerGames").value;

  const player = {
    nome: namePlayer,
    posicao: playerPostion,
    clube: playerTeam,
    foto: playerPicture,
    gols: playerGoals,
    assistencias: playerAssists,
    jogos: playerGames,
    favorita: favorite,
  };

  jogadoras.unshift(player);
  document.querySelector("#playerForm").reset();
  listPlayers();
};

//Read
const listPlayers = () => {
  const playersList = document.querySelector(".playersList");
  playersList.innerHTML = " ";

  jogadoras.forEach((jogadora, index) => {
    const cardPlayers = document.createElement("div");
    cardPlayers.classList.add("cardPlayer");

    cardPlayers.innerHTML = `
    
    <div>
      <img src ="${jogadora.foto}"> 
      <button class= "buttonEdit" data-section = "image" data-action="edit" data-index="${index}">
        <i class="fa-solid fa-pen-to-square"></i>
      </button> 
    </div>
    <div class = "cardSections">
      <p>${jogadora.nome} </p> 
      <button class= "buttonEdit" data-section = "nome" data-action="edit" data-index="${index}">
        <i class="fa-solid fa-pen-to-square"></i>
      </button> 
    </div>
    <div class = "cardSections">
      <p>${jogadora.posicao} </p>
      <button class= "buttonEdit" data-section = "posicao" data-action="edit" data-index="${index}">
        <i class="fa-solid fa-pen-to-square"></i>
      </button> 
    </div>
    <div class = "cardSections">
      <p>${jogadora.assistencias} </p>
      <button class= "buttonEdit" data-section = "assistencias" data-action="edit" data-index="${index}">
        <i class="fa-solid fa-pen-to-square"></i>
      </button> 
    </div>
    <div class = "cardSections">
       <p>${jogadora.clube} </p>
      <button class= "buttonEdit" data-section = "clube" data-action="edit" data-index="${index}">
        <i class="fa-solid fa-pen-to-square"></i>
      </button> 
    </div>
    <div class = "cardSections">
      <p>${jogadora.gols} </p>
      <button class= "buttonEdit" data-section = "gols" data-action="edit" data-index="${index}">
        <i class="fa-solid fa-pen-to-square"></i>
      </button> 
    </div>
  
    <button data-action="delete" data-index="${index}"> Apagar </button>`;

    playersList.append(cardPlayers);
  });
};

const handleCardClick = (event) => {
  const clickedElement = event.target.closest("button");

  if (!clickedElement) return;

  const action = clickedElement.dataset.action;
  const index = clickedElement.dataset.index;
  const section = clickedElement.dataset.section;

  if (action === "edit") {
    editPlayer(index, section);
  } else if (action === "delete") {
    deletePlayer(index);
  }
};

const editPlayer = (index, section) => {
  let novoCampo = "";

  switch (section) {
    case "clube":
      novoCampo = prompt("Editar Clube:", jogadoras[index].clube);
      if (novoCampo !== null) {
        jogadoras[index].clube = novoCampo;
        listPlayers();
      }
      break;

    case "nome":
      novoCampo = prompt("Editar Nome:", jogadoras[index].nome);
      if (novoCampo !== null) {
        jogadoras[index].nome = novoCampo;
        listPlayers();
      }

      break;

    case "posicao":
      novoCampo = prompt("Editar Posição:", jogadoras[index].posicao);
      if (novoCampo !== null) {
        jogadoras[index].posicao = novoCampo;
        listPlayers();
      }

      break;

    case "assistencias":
      novoCampo = prompt(
        "Editar N° de Asistencias:",
        jogadoras[index].assistencias
      );
      if (novoCampo !== null) {
        jogadoras[index].assistencias = novoCampo;
        listPlayers();
      }

      break;

    case "gols":
      novoCampo = prompt("Editar N° de gols:", jogadoras[index].gols);
      if (novoCampo !== null) {
        jogadoras[index].gols = novoCampo;
        listPlayers();
      }

      break;

    case "image":
      novoCampo = prompt("Editar imagem(url):", jogadoras[index].foto);
      if (novoCampo !== null) {
        jogadoras[index].foto = novoCampo;
        listPlayers();
      }
      break;

    default:
      alert("Erro");
      break;
  }
};

const deletePlayer = (index) => {
  const confirm = window.confirm("Tem certeza que deseja apagar este post?");

  if (confirm) {
    jogadoras.splice(index, 1);
    listPlayers();
  }
};

window.onload = () => {
  listPlayers();
  document
    .querySelector(".playersList")
    .addEventListener("click", handleCardClick);
};

const button = document.querySelector("#playerPost");
button.addEventListener("click", addPlayer);
