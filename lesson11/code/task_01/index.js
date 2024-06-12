// const footballPlayers = [
//   { name: "Player 1", position: "Forward", team: "Team A" },
//   { name: "Player 2", position: "Midfielder", team: "Team B" },
//   { name: "Player 3", position: "Defender", team: "Team C" },
//   { name: "Player 4", position: "Goalkeeper", team: "Team D" },
//   { name: "Player 5", position: "Forward", team: "Team E" },
//   { name: "Player 6", position: "Midfielder", team: "Team F" },
//   { name: "Player 7", position: "Defender", team: "Team G" },
//   { name: "Player 8", position: "Goalkeeper", team: "Team H" },
//   { name: "Player 9", position: "Forward", team: "Team I" },
//   { name: "Player 10", position: "Midfielder", team: "Team J" }
// ];

// Написать функцию, которая принимает массив обьектов, и имя свойства.
// И она вернет нам массив значений по этому свойству


const footballPlayers = [
    { name: "Player 1", position: "Forward", team: "Team A" },
    { nameX: "Player 2", position: "Midfielder", team: "Team B" },
    { name: "Player 3", position: "Defender", team: "Team C" },
    { name: "Player 4", position: "Goalkeeper", team: "Team D" },
    { name: "Player 5", position: "Forward", team: "Team E" },
    { name: "Player 6", position: "Midfielder", team: "Team F" },
    { name: "Player 7", position: "Defender", team: "Team G" },
    { name: "Player 8", position: "Goalkeeper", team: "Team H" },
    { name: "Player 9", position: "Forward", team: "Team I" },
    { name: "Player 10", position: "Midfielder", team: "Team J" }
];

const nameP = 'name';

console.log("First element " + footballPlayers[0][nameP]);


function getValues(arr, playerName) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (name in footballPlayers) {
            result.push(arr[i][playerName]);
        }
    }
    return result;
}

const names = getValues(footballPlayers, 'name');
console.log(names); 