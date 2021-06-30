console.clear();

// DATASET ************************

const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]


// 1 **********************************

const namesOfSuperheroes = superheroes.map(hero => {
    return hero.name;
});

console.log(namesOfSuperheroes);


// 2 **********************************

const lightWeightSuperheroes = superheroes.filter(hero => {
    return hero.weight < 190;
});

const namesOfLightWeightSuperheroes = lightWeightSuperheroes.map(hero => {
    return hero.name;
});

console.log(namesOfLightWeightSuperheroes);


// 3 ***********************************

const heroesOf200 = superheroes.filter(hero => {
    return hero.weight === '200';
})
    .map(hero => {
        return hero.name
    });

console.log(heroesOf200);


// 4 ************************************

const ComicsOfFirstAppearance = superheroes.map(hero => {
    return hero.first_appearance;
});

console.log(ComicsOfFirstAppearance);


// 5 *************************************


const heroesOfDc = superheroes.filter(hero => {
    return hero.publisher === "DC Comics";
});

const heroesOfMarvel = superheroes.filter(hero => {
    return hero.publisher === "Marvel Comics";
});

console.log(heroesOfDc);
console.log(heroesOfMarvel);


// 6 **************************************


const weightsOfDC = heroesOfDc.map(hero => {
    return parseInt(hero.weight);
});

const totalWeightOfDC = weightsOfDC.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(totalWeightOfDC);


//7 ***************************************

const weightsOfMarvel = heroesOfMarvel.map(hero => {
    if (hero.weight !== "unknown") {
        return parseInt(hero.weight);
    }
    else {
        return 0;
    }
});

const totalWeightOfMarvel = weightsOfMarvel.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(totalWeightOfMarvel);

// 8 **************************************

const allWeights = superheroes.map(hero => {
    if (hero.weight !== "unknown") {
        return parseInt(hero.weight);
    }
    else {
        return 0;
    }
});

const mostHeavySuperhero = allWeights.reduce((a, b) => {
    return Math.max(a, b);
});

console.log(mostHeavySuperhero);


