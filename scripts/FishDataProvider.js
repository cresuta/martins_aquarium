const fishCollection = [
    {
        name: "Captain Jack",
        typeOfFish: "Black Moor",
        length: 1,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/Goldfish_BlackMoor.png",
        description: 
    },
    {
        name: "Pacific",
        typeOfFish: "BubbleEye",
        length: 2,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/Goldfish_BlackMoor.png"
    },
    {
        name: "Finley",
        typeOfFish: "Celestial",
        length: 3,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/Goldfish_BlackMoor.png"
    },
    {
        name: "Tin Fin",
        typeOfFish: "Comet",
        length: 3,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/Goldfish_BlackMoor.png"
    },
    {
        name: "Tiny Fin",
        typeOfFish: "Fantail",
        length: 2,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/Goldfish_BlackMoor.png"
    },
    {
        name: "Hulk",
        typeOfFish: "LionHead",
        length: 1,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/Goldfish_BlackMoor.png"
    },
    {
        name: "Flash",
        typeOfFish: "Oranda",
        length: 1,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/Goldfish_BlackMoor.png"
    },
    {
        name: "Mahi Mahi",
        typeOfFish: "Ryukin",
        length: 2,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/Goldfish_BlackMoor.png"
    },
    {
        name: "Floaty",
        typeOfFish: "Shubunkin",
        length: 3,
        locationHarvested: "Pet Smart",
        diet: "Fish Food",
        image: "imgs/Goldfish_BlackMoor.png"
    },
]

export const useFish = () => {
    return fishCollection.slice();
}