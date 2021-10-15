import { useLocations } from "../locations/LocationDataProvider.js";
import { location } from "../locations/Location.js";

export const locationList = () => {
    const locationList = document.querySelector(".carousel-inner");
    const locations = useLocations();

    let locationHTMLRepresentation = "";

    for(let i = 0; i < locations.length; i++) {
        locationHTMLRepresentation += location(locations[i],i);
    }
    
    locationList.innerHTML += `${locationHTMLRepresentation}`;
}
