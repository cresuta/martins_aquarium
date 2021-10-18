import { mostHolyFish, useFish, soldierFish, nonHolyFish } from "../fish/FishDataProvider.js";
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
    const holyFish = mostHolyFish();
    const soldierFish = soldierFish();
    const nonHolyFish = nonHolyFish();

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
            <h2>Holy Fish</h2>
            ${holyHTMLRepresentation}
        </div>
    `

    soldierFishList.innerHTML += `
        <div class="soldier-fish">
            <h2>Soldier Fish</h2>
            ${soldierHTMLRepresentation}
        </div>
    `
    nonHolyFishList.innerHTML += `
        <div class="nonHoly-fish">
            <h2>Non Holy Fish</h2>
            ${nonHolyHTMLRepresentation}
        </div>
    `

}