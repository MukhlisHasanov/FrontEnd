let players = [
    { name: "Alex", height: 190, weight: 85, sport: "rugby" },
    { name: "Boris", height: 180, weight: 75, sport: "foot" },
    { name: "Vlad", height: 175, weight: 70, sport: "hockey" },
    { name: "George", height: 185, weight: 80, sport: "rugby" },
    { name: "Dmit", height: 170, weight: 65, sport: "hockey" },
    { name: "Eugene", height: 195, weight: 90, sport: "foot" },
    { name: "Zach", height: 188, weight: 82, sport: "rugby" },
    { name: "Ivan", height: 182, weight: 77, sport: "foot" },
    { name: "Kril", height: 178, weight: 73, sport: "hockey" },
    { name: "Leo", height: 192, weight: 87, sport: "rugby" },
    { name: "Mich", height: 176, weight: 71, sport: "hockey" },
    { name: "Nich", height: 198, weight: 93, sport: "foot" },
    { name: "Oleg", height: 186, weight: 79, sport: "rugby" },
    { name: "Paul", height: 174, weight: 69, sport: "hockey" },
    { name: "Roman", height: 184, weight: 78, sport: "foot" }
];

console.log('\n=====> task_01 <=====\n');
// Надо добавить каждому игроку ключ(свойство) 'goals' и туда записать случайное целое число от 0 до 20.
// При этом должен быть сформирован новый массив.
players = players.map((player) => ({
    ...player,
    goals: Math.round(Math.random() * 20)
}));
console.log(players);

console.log('\n=====> task_02 <=====\n');
// Отфильтровать и вывести в консоль всех игроков, у которых рост выше или равен 180 и вес ниже 80.

const athletes = players.filter(players => players.height >= 180 && players.weight < 80);
console.log(athletes); 

console.log('\n=====> task_03 <=====\n');
// Отсортировать игроков по количеству забитых голов.
const bombardierSort = players.sort((a, b) => b.goals - a.goals);
console.log(bombardierSort);