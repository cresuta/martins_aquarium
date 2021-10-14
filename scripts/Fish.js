import { useFish } from "./FishDataProvider.js"

export const fish = (fish) => {
    return `
        <div class="col">
            <div class="card" style="width: 18rem">
              <img
                src=${fish.image}
                class="card-img-top"
                alt=${fish.name}
              />
              <div class="card-body">
                <h5 class="card-title">${fish.name}</h5>
                <p class="card-text">
                  Unlike other fancy goldfish types, this breed is extremely
                  enduring and can make good pets for new fishkeepers.
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${fish.typeOfFish}</li>
                <li class="list-group-item">${fish.length}</li>
                <li class="list-group-item">${fish.locationHarvested}</li>
                <li class="list-group-item">${fish.diet}</li>
              </ul>
            </div>
          </div>
    `
}