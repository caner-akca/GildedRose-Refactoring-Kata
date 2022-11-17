import { Item } from "@/gilded-rose";
import { values } from "./updateItem";

const updateBrie = (item: Item): Item => {
  item.sellIn--;
  if (item.quality < values.quality.MAX_VALUE) {
    item.quality++;
  }

  if (
    item.sellIn < values.sellIn.MIN_VALUE &&
    item.quality < values.quality.MAX_VALUE
  ) {
    item.quality++;
  }
  return item;
};

export default updateBrie;
