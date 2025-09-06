# ⚽ Gerenciador de Jogadoras

Este projeto é uma aplicação simples em **JavaScript** para gerenciar uma lista de jogadoras de futebol.  
Ele permite **criar, visualizar, editar, excluir e favoritar** jogadoras, salvando os dados no **LocalStorage** do navegador.

---

## 🚀 Funcionalidades

- **Adicionar jogadora**  
  Cadastro de novas jogadoras com nome, posição, clube, foto, gols, assistências e jogos.

- **Listar jogadoras**  
  Exibe todas as jogadoras cadastradas em formato de cards, com suas estatísticas e imagens.

- **Editar informações**  
  Permite editar atributos específicos da jogadora, como:
  - Nome  
  - Posição  
  - Clube  
  - Jogos  
  - Gols  
  - Assistências  
  - Foto  

- **Excluir jogadora**  
  Remove uma jogadora da lista após confirmação.

- **Favoritar jogadora** ⭐  
  Marca/desmarca a jogadora como favorita.

- **Persistência de dados**  
  Os dados são salvos automaticamente no `localStorage`, garantindo que permaneçam mesmo após atualizar a página.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** → Estrutura da página  
- **CSS3** → Estilização dos cards e formulários  
- **JavaScript (ES6+)** → Manipulação do DOM e lógica de CRUD  
- **LocalStorage** → Armazenamento local dos dados  

---

## 📂 Estrutura de Dados

Cada jogadora é representada como um objeto:

```javascript
{
  nome: "Marta",
  posicao: "ATA",
  clube: "https://link-do-clube.png",
  foto: "https://link-da-foto.png",
  gols: 15,
  assistencias: 10,
  jogos: 28,
  favorita: false
}

```

--- 

## 📸 Interface

- A interface é composta por:

- Um formulário para cadastrar novas jogadoras.

- Uma lista de cards, onde cada jogadora aparece com:

    - Foto da jogadora

    - Nome, posição e clube

    - Estatísticas: jogos, gols e assistências

    - Botões para editar, excluir e favoritar


## Integrantes
- RM564126 - Gabriel Pereira 
- RM563986 - Bruno Henrinque 
