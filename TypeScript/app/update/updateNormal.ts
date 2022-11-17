import { Item } from "@/gilded-rose";
import { values } from "./updateItem";

const updateNormal = (item: Item): Item => {
  if (item.quality > values.quality.MIN_VALUE) {
    item.quality--;
  }

  item.sellIn--;

  if (
    item.sellIn < values.sellIn.MIN_VALUE &&
    item.quality > values.quality.MIN_VALUE
  ) {
    item.quality--;
  }
  return item;
};

export default updateNormal;
