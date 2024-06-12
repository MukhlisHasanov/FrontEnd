//объект физический
const JohnyDepp = {
    height: 180,
    weight: 75, 
    name: 'Johny',
    surname: 'Depp',
    hobbies: ['cricet', 'polo', 'alcohol'],
    films: {
        2000: ['Pirates', 'Edvard'],
        2001: ['Charlie', 'Pirates-2']
    },
    singing: function() {
        console.log("I am singing")
    }
}

//щбъект события (Рикки Мартин)
const RickyMartin20070515Berlin = {
    location: {
        lng: 544343,
        ltd: 489328
    },
    duration: 4,
    visitors: 150000,
}

const arrExample = [1, 2, 3]
console.log(arrExample[0]);
const arrExample2 = {
    0: 1,
    1: 2,
    2: 3,
}

console.log(arrExample2[0]);

const lngVar = 'lng'
console.log(JohnyDepp.height);
console.log(JohnyDepp['height']);
console.log(RickyMartin20070515Berlin['location'][lngVar]);

JohnyDepp['married'] = true;
console.log(JohnyDepp);
JohnyDepp['married'] = false;
console.log(JohnyDepp);

delete JohnyDepp['married'];
console.log(JohnyDepp);


// методы

console.log(Object.keys(JohnyDepp));
console.log(Object.values(JohnyDepp));

console.log(Object.entries(JohnyDepp));
console.table(Object.entries(JohnyDepp));

// проверка наличия свойства
if('height' in JohnyDepp) {
    console.log(JohnyDepp.height)
}

// spread / модификация

const bigGarbagePile = {
    married: true,
    ...JohnyDepp,
    ...RickyMartin20070515Berlin,
}

console.log(bigGarbagePile);