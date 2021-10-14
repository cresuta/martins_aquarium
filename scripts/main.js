import { useFish } from "../scripts/fish/FishDataProvider.js";
import { fishList } from "../scripts/fish/FishList.js";
import { fish } from "../scripts/fish/Fish.js";

import { useTips } from "../scripts/tips/TipsDataProvider.js";
import { tipList } from "../scripts/tips/TipList.js";
import { tip } from "../scripts/tips/Tip.js";

const allFish = useFish();
const allTips = useTips();


fishList();
tipList();

