import { useLocations } from "../locations/LocationDataProvider.js";

export const location = (location) => {
    return `
        <div class="col martin-visited">
            <h3>${location.title}</h3> 
            <p>${location.quote}</p>     
        </div>
    `
}