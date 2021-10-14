import { useFish } from "./FishDataProvider.js";

export const fishList = () => {
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector("insert selector here")
    const fishes = useFish()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <div class="row">
            All fish go here!
        </div>
    `
}