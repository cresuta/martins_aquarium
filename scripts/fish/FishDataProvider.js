const fishCollection = [
    {
        name: "Captain Jack",
        typeOfFish: "Black Moor",
        length: 3,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/Goldfish_BlackMoor.png",
        description: "Unlike other fancy goldfish types, this breed is extremely enduring and can make good pets for new fishkeepers."
    },
    {
        name: "Pacific",
        typeOfFish: "BubbleEye",
        length: 5,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/bubble-eye-fish.png",
        description: "One of the most fragile goldfish types and probably the slowest swimmers."
    },
    {
        name: "Finley",
        typeOfFish: "Celestial",
        length: 1,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/Goldfish_Celestial.png",
        description: "Nicknamed “stargazers” because their eyes are locked upward."
    },
    {
        name: "Tin Fin",
        typeOfFish: "Comet",
        length: 3,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/Goldfish_Comet.png",
        description: "Bred in the United States, the Comet goldfish is more playful and active than most other goldfish breeds."
    },
    {
        name: "Tiny Fin",
        typeOfFish: "Fantail",
        length: 5,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/Goldfish_FanTail.png",
        description: "One of the hardiest fancy varieties, Fantail goldfish are recognizable for their split caudal fin.",
    },
    {
        name: "Hulk",
        typeOfFish: "LionHead",
        length: 7,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/Goldfish_LionHead.png",
        description: "Lacking a fin on their back (dorsal fin), Lionheads swim very slowly."
    },
    {
        name: "Flash",
        typeOfFish: "Oranda",
        length: 3,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/Goldfish_Oranda.png",
        description: "Like Lionheads, Orandas also have unique head growth called wen."
    },
    {
        name: "Mahi Mahi",
        typeOfFish: "Ryukin",
        length: 5,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/Goldfish_Ryukin.png",
        description: "These fish are hardy and a good choice for beginners. Ryukins are known for the large hump behind their heads."
    },
    {
        name: "Floaty",
        typeOfFish: "Shubunkin",
        length: 2,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/Goldfish_Shubunkin.png",
        description: "Known for their calico pattern, Shubunkins are very resilient and make a good first pet for new fish owners."
    },
]

export const useFish = () => {
    return fishCollection.slice();
}

export const mostHolyFish = () => {
    const holyFish = [];
    for(let fish of fishCollection) {
        if (fish.length === 3) {
            holyFish.push(fish)
        }
    }
    return holyFish;
}

export const soldierFish = () => {
    const soliderFish = [];
    for(let fish of fishCollection) {
        if (fish.length === 5) {
            soliderFish.push(fish)
        }
    }
    return soldierFish;
}

export const nonHolyFish = () => {
    const regularFish = [];
    for(let fish of fishCollection) {
        if (fish.length !== 3 && fish.length !== 5) {
            regularFish.push(fish);
        }
    }
    return regularFish;
}
