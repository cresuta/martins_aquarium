import { useFish } from "./FishDataProvider.js";

const allFish = useFish();

for(let fish of allFish) {
    console.log(fish);
}