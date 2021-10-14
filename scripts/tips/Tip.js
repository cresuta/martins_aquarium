import { useTips } from "./TipsDataProvider.js";

export const tip = (tip) => {
    return `
        <h3>${tip.title}</h3>
        <p>${tip.description}</p>
    `
}