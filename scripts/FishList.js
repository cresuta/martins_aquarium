import { useFish } from "./FishDataProvider.js";
import { fish } from "./Fish.js";

export const fishList = () => {
    const fishList = document.querySelector(".fishList");
    const fishes = useFish()

    let fishHTMLRepresentation = "";
    for(let singleFishObj of fishes) {
        fishHTMLRepresentation += fish(singleFishObj);
        fish(singleFishObj);
    }
   
    fishList.innerHTML += `
        <div class="row fishList">
            ${fishHTMLRepresentation}
        </div>
    `
}