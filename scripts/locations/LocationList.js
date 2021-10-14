import { useLocations } from "../locations/LocationDataProvider.js";
import { location } from "../locations/Location.js";

export const locationList = () => {
    const locationList = document.querySelector(".martin-info");
    const locations = useLocations();

    let locationHTMLRepresentation = "";
    for(let singleLocationObj of locations) {
        locationHTMLRepresentation += location(singleLocationObj);
    }
   
    locationList.innerHTML += `
        <div class="row">
            ${locationHTMLRepresentation}
        </div>
    `
}