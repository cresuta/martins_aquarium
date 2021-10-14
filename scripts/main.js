import { useFish } from "./FishDataProvider.js";
import { fishList } from "./FishList.js";
import { fish } from "./Fish.js";

const allFish = useFish();

for(let fish of allFish) {
   console.log(fish);
}

fishList();