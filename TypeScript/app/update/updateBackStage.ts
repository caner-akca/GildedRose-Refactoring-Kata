import { Item } from "@/gilded-rose";
import { values } from "./updateItem";

const updateBackStage = (item: Item): Item => {
  if (item.quality < values.quality.MAX_VALUE) {
    item.quality++;

    if (item.sellIn < 11 && item.quality < values.quality.MAX_VALUE) {
      item.quality++;
    }
    if (item.sellIn < 6 && item.quality < values.quality.MAX_VALUE) {
      item.quality++;
    }
  }
  item.sellIn--;
  if (item.sellIn < values.sellIn.MIN_VALUE) {
    item.quality = 0;
  }
  return item;
};

export default updateBackStage;
