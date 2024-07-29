# Tic Tac Toe

This is a simple Tic Tac Toe game built with React, using Vite as the build tool and SWC for JavaScript transformation. Custom hooks are utilized to manage the game's state and logic.

### Table of Contents
- Features
- Installation
- Usage
- Project Structure

### Features
- Reactive Interface: The user interface is built with React, allowing for an interactive and dynamic user experience.
- Fast Build: Utilizes Vite for faster development and build times.
- Code Transformation: SWC is used to transform JavaScript code, providing performance improvements.
- Custom Hooks: State management and game logic are handled through custom hooks, making the code more modular and reusable.

### Installation

To run this project locally, follow these steps:

1 .Clone the repository:

```java
git clone https://github.com/JUANDGG/tic-tac-toe.git

```

2 .enter the folder with the source code :
```
cd tic-tac-toe
```

3 .Install the dependencies:
```
npm install
```

4 .Start the development server:
```
npm run dev
```

### Usage
To play Tic Tac Toe, open your browser and go to http://localhost:3000. Select a cell to make your move and play against an opponent (either another player or yourself).


### Project struture

The project structure is as follows:

```
📦public
 ┗ 📜image_tic_tac_toe.png
📦src
 ┣ 📂assets
 ┃ ┣ 📂js
 ┃ ┃ ┗ 📜modals.js
 ┃ ┗ 📂stylesheets
 ┃ ┃ ┣ 📜App.css
 ┃ ┃ ┣ 📜Board.css
 ┃ ┃ ┣ 📜Header.css
 ┃ ┃ ┗ 📜global.css
 ┣ 📂components
 ┃ ┣ 📂Board
 ┃ ┃ ┣ 📜Board.jsx
 ┃ ┃ ┗ 📜Item.jsx
 ┃ ┣ 📂Header
 ┃ ┃ ┗ 📜Header.jsx
 ┃ ┗ 📜App.jsx
 ┣ 📂hooks
 ┃ ┣ 📜useBoard.js
 ┃ ┣ 📜useGame.js
 ┃ ┣ 📜usePaintItem.js
 ┃ ┗ 📜useTurn.js
 ┗ 📜main.jsx
 ┣📜.eslintrc.cjs
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜vite.config.js
```

### Previews

in game :
![preview image 1 in the game](/docs/images/preview1.png)

when someone wins :
![preview image 1 in the game for the winner](/docs/images/preview2.png)

when they tie:
![preview image 3 in the game for the tied](/docs/images/preview3.png)