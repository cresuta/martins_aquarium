import { useFish } from "../fish/FishDataProvider.js";
import { fish } from "../fish/Fish.js";

export const fishList = () => {
    const fishList = document.querySelector(".fishList");
    const fishes = useFish()

    let fishHTMLRepresentation = "";
    for(let singleFishObj of fishes) {
        fishHTMLRepresentation += fish(singleFishObj);
    }
   
    fishList.innerHTML += `
        <div class="row fishList">
            ${fishHTMLRepresentation}
        </div>
    `
}