import { useFish } from "../scripts/fish/FishDataProvider.js";
import { fishList } from "../scripts/fish/FishList.js";
import { useTips } from "../scripts/tips/TipsDataProvider.js";
import { tipList } from "../scripts/tips/TipList.js";
import { useLocations } from "../scripts/locations/LocationDataProvider.js";
import { locationList } from "../scripts/locations/LocationList.js";

const allFish = useFish();
const allTips = useTips();
const allLocations = useLocations();


fishList();
tipList();
locationList();

