// import { useFish, mostHolyFish, soldierFish, nonHolyFish } from "../fish/FishDataProvider.js"

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
                <p class="card-text">${fish.description}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Species: ${fish.typeOfFish}</li>
                <li class="list-group-item">Size: ${fish.length}"</li>
                <li class="list-group-item">Harvest Location: ${fish.locationHarvested}</li>
                <li class="list-group-item">Diet: ${fish.diet}</li>
              </ul>
            </div>
          </div>
    `
}

export const mayanFish = (fish) => {
    return `
      <img src=${fish.image} alt=${fish.name}/>
      <h3>${fish.name}</h3>
    `
}