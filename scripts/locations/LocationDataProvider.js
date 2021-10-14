const locationCollection = [
    {
        title: "Summersville Lake - Summersville, West Virginia",
        quote: "There's a fine line between fishing and just standing on the shore like an idiot."
    },
    {
        title: "Jennings Randolph Lake - Garrett County, Maryland",
        quote: "If I fished only to capture fish, my fishing trips would have ended long ago."
    },
    {
        title: "Cheat Lake - Morgantown, West Virginia",
        quote: "Give a man a fish and he will eat for a day. Teach him how to fish, and he will sit in a boat and drink beer all day."
    }
]

export const useLocations = () => {
    return locationCollection.slice();
}