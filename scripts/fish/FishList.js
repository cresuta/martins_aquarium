import { useMostHolyFish, useFish, useSoldierFish, useNonHolyFish } from "../fish/FishDataProvider.js";
import { fish, mayanFish } from "../fish/Fish.js";


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

export const mayanFishList = () => {
    const holyFishList = document.querySelector('.holy-fish');
    const soldierFishList = document.querySelector('.soldier-fish');
    const nonHolyFishList = document.querySelector('.nonHoly-fish');

    const holyFish = useMostHolyFish();
    const soldierFish = useSoldierFish();
    const nonHolyFish = useNonHolyFish();

    let holyHTMLRepresentation = "";
    let soldierHTMLRepresentation = "";
    let nonHolyHTMLRepresentation = "";

    for(let singleFishObj of holyFish) {
        holyHTMLRepresentation += mayanFish(singleFishObj)
    }
    for(let singleFishObj of soldierFish) {
        soldierHTMLRepresentation += mayanFish(singleFishObj)
    }
    for(let singleFishObj of nonHolyFish) {
        nonHolyHTMLRepresentation += mayanFish(singleFishObj)
    }

    holyFishList.innerHTML += `
        <div class="holy-fish">
            ${holyHTMLRepresentation}
        </div>
    `

    soldierFishList.innerHTML += `
        <div class="soldier-fish">
            ${soldierHTMLRepresentation}
        </div>
    `
    nonHolyFishList.innerHTML += `
        <div class="nonHoly-fish">
            ${nonHolyHTMLRepresentation}
        </div>
    `

}