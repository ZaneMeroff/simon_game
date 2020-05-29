# The Game of Simon 🎮
a virtual recreation on the classic 1978 game by Milton Bradley

#### link to live app:
https://zanemeroff.github.io/simon_game

#### Introduction
This game is a virtual recreation of the electronic handheld game by Milton Bradley. I built this project for fun shortly after graduating from the Turing School of Software and Design. It is written using ReactJS and includes snapshot render tests for every component using Jest with Enzyme. Feel free to reach out with any suggestions or comments —Good luck!

#### Screenshot
![screenshot](https://user-images.githubusercontent.com/53405028/83286817-d42edd80-a19d-11ea-87e9-5f02c5549554.png)

#### Directions for Use
- It's you against Mr. Simon! Upon clicking the "START GAME" button, Mr. Simon will make his first move indicated by the glowing light.
- While it's Mr. Simon's turn, the game board will display "MY TURN!" and the colored light buttons will be disabled.
- It's the player's turn when the game board displays "YOUR TURN!" and the colored light buttons are enabled.
- Match Mr. Simon's color pattern by clicking on the colored light buttons in the exact order Mr. Simon did.
- Each round Mr. Simon's color pattern will grow by one.
- You've won the game once you complete round 10 without any mistakes.
- Upon winning, the player will see a "YOU WIN!" message appear on the game board.

#### Technologies Used
- ReactJS
- CSS
- Jest
- Enzyme

#### How to run on a local machine with NPM
1. shut down any live servers you currently have running (`control` + `c`)
2. clone down this repo to desired location
3. `cd` into the directory where the cloned repo exists
4. run `npm install`
5. run `npm start`
6. you should now be able to run the app within your browser from the url: `http://localhost:3000`

#### This project was created by:
Zachary Nemeroff https://github.com/ZaneMeroff
