const tipsCollection = [
    {
        title: "Properly condition your water",
        description: "he properties of your tank’s water is crucial to the long-term well-being of your fish. Remember that tap water contains many properties, such as minerals that need to be balanced out. Otherwise, it will not be able to support your pet fish and aquatic plants. You must condition your water by using biological agents or supplements that clear out these properties." 
    },
    {
        title: "Acclimate your fish to the water",
        description: "Acclimation is an essential part of introducing your fish to their new home. Many fish species are delicate and thus, without proper acclimation, they may go through shock. You can ask our Pet counselors on the best acclimation methods for your pet fish. They may advise you to test the water chemistry before you begin the process. Once you arrive home, make sure to test the water based on the appropriate chemical levels. If your tank levels differ, you will need to acclimate your fish a little longer."
    },
    {
        title: "Float fish in their bag",
        description: "ou will also need to acclimate your fish to the water temperature in your aquarium. For this process, you will need to float your fish in their sealed bag for at least 15-20 minutes. Every five minutes, you will need to add at least a quarter cup of aquarium water into the sealed bag until full.  After you finish this process, remove some of the water from the bag and lower it into the water to let your fish swim freely. This process combines the chemistry and temperature of your aquarium together, making the acclimation process much easier."
    },
    {
        title: "Maintain pH balance and other chemical levels",
        description: "pH levels measure the balance of acidity and alkalinity in your aquarium’s water. You can monitor your tank’s pH  levels by purchasing a pH test kit. Freshwater fish typically do well in aquariums with pH levels between 6.6 and 6.8. You will also need to regularly check your tank for the right levels of nitrate, nitrite, and ammone."
    },
    {
        title: "Make sure water temperature is righ",
        description: "Your tank’s water temperature should be comfortable enough to sustain aquatic life. Any major changes to your tank’s temperature can be fatal to your fish. Avoid placing your tank in an area that receives a lot of sunlight or near cooling vents. Freshwater fish need a constant water temperature between 72°F – 82°F."
    }
]

export const useTips = () => {
    return tipsCollection.slice();
}