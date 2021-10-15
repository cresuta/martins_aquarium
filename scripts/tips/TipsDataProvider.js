const tipsCollection = [
    {
        id: 1,
        title: "Properly condition your water",
        description: "The properties of your tank’s water is crucial to the long-term well-being of your fish. Remember that tap water contains many properties, such as minerals that need to be balanced out. Otherwise, it will not be able to support your pet fish and aquatic plants. You must condition your water by using biological agents or supplements that clear out these properties." 
    },
    {
        id: 2,
        title: "Acclimate your fish to the water",
        description: "Acclimation is an essential part of introducing your fish to their new home. Many fish species are delicate and thus, without proper acclimation, they may go through shock. You can ask our Pet counselors on the best acclimation methods for your pet fish. They may advise you to test the water chemistry before you begin the process. Once you arrive home, make sure to test the water based on the appropriate chemical levels. If your tank levels differ, you will need to acclimate your fish a little longer."
    },
    {
        id: 3,
        title: "Float fish in their bag",
        description: "You will also need to acclimate your fish to the water temperature in your aquarium. For this process, you will need to float your fish in their sealed bag for at least 15-20 minutes. Every five minutes, you will need to add at least a quarter cup of aquarium water into the sealed bag until full.  After you finish this process, remove some of the water from the bag and lower it into the water to let your fish swim freely. This process combines the chemistry and temperature of your aquarium together, making the acclimation process much easier."
    },
    {
        id: 4,
        title: "Maintain pH balance and other chemical levels",
        description: "pH levels measure the balance of acidity and alkalinity in your aquarium’s water. You can monitor your tank’s pH  levels by purchasing a pH test kit. Freshwater fish typically do well in aquariums with pH levels between 6.6 and 6.8. You will also need to regularly check your tank for the right levels of nitrate, nitrite, and ammone."
    },
    {
        id: 5,
        title: "Make sure water temperature is right",
        description: "Your tank’s water temperature should be comfortable enough to sustain aquatic life. Any major changes to your tank’s temperature can be fatal to your fish. Avoid placing your tank in an area that receives a lot of sunlight or near cooling vents. Freshwater fish need a constant water temperature between 72°F – 82°F."
    },
    {
        id: 6,
        title: "Change water regularly",
        description: "Changing 25 percent of your aquarium’s water every month keeps your tank clean and stabilizes nitrate concentrations. You also get rid of other debris and waste products left by increased phosphate levels. Leaving these levels high puts extra stress on your fish, which can make them very sick. Consistent water temperatures allows your fish and aquatic life to stay strong and healthy."
    },
    {
        id: 7,
        title: "Clean tank glass and other structures",
        description: "Seeing a little green in your tank isn’t usually cause for alarm, but too much of it can be detrimental. Algae buildup gives your tank a murky, swampy look, and reduces the amount of oxygen in the water. This can cause a potential loss in fish and aquatic plants in your tank."
    },
    {
        id: 8,
        title: "Choose the right size for your tank",
        description: "It’s tempting to keep a large group of pet fish, but overcrowding your tank isn’t exactly a great idea. Overcrowding can lead to low oxygen levels, leading your fish vulnerable to disease. It can also cause excessive debris, wastes, and fatalities—all of which can reduce the quality in your water."
    },
    {
        id: 9,
        title: "Pick compatible fish species",
        description: "Many fish species can coexist with each other under certain environments. As long as they have adequate space, food, and other necessities, fish species usually leave each other alone. Some fish species, however, tend to be quite territorial or aggressive when it comes to their homes. That’s why we suggest researching fish that can live peacefully with each other."
    },
    {
        id: 10,
        title: "Avoid overfeeding your fish",
        description: "This one is a cardinal rule in maintaining an aquarium. Overfeeding your fish can cause a variety of problems, including increasing the amount of waste and debris in your tank. Most fish do not need to be fed a huge amount of food to survive. Overfeeding can also encourage algae growth, further depleting your water quality and oxygen. Maintain a consistent feeding schedule and provide an appropriate amount of food."
    }
]

export const useTips = () => {
    return tipsCollection.slice();
}