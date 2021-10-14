import { useFish } from "../scripts/fish-components/FishDataProvider.js";
import { fishList } from "../scripts/fish-components/FishList.js";
import { fish } from "../scripts/fish-components/Fish.js";

const allFish = useFish();

for(let fish of allFish) {
   console.log(fish);
}

fishList();