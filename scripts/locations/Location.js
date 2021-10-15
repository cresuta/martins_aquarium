import { useLocations } from "../locations/LocationDataProvider.js";

export const location = (location,index) => {
    if (index === 0) {
        return `
        <div class="carousel-item active">
                <img src="${location.image}" class="d-block w-100" alt="${location.title}">
                <div class="carousel-caption d-none d-md-block">
                  <h5>${location.title}</h5>
                  <p>"${location.quote}"</p>
                </div>
        </div>
    `
    } else {
        return `
        <div class="carousel-item">
                <img src="${location.image}" class="d-block w-100" alt="${location.title}">
                <div class="carousel-caption d-none d-md-block">
                  <h5>${location.title}</h5>
                  <p>"${location.quote}"</p>
                </div>
        </div>
    `
    }
}