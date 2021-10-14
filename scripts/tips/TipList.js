import { useTips } from "../tips/TipsDataProvider.js";
import { tip } from "../tips/Tip.js";

export const tipList = () => {
    const tipList = document.querySelector(".tipList");
    const tips = useTips();

    let tipsHTMLRepresentation = "";
    for(let singleTipObj of tips) {
        tipsHTMLRepresentation += tip(singleTipObj);
    }
   
    tipList.innerHTML += `
        <aside class="tipList">
            ${tipsHTMLRepresentation}
        </aside>
    `
}