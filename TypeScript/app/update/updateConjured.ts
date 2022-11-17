import { Item } from "@/gilded-rose";
import { values } from "./updateItem";

const updateConjured = (item: Item): Item => {
  if (item.quality > values.quality.MIN_VALUE) {
    item.quality = item.quality - 2;
  }

  item.sellIn--;

  if (
    item.sellIn < values.sellIn.MIN_VALUE &&
    item.quality > values.quality.MIN_VALUE
  ) {
    item.quality = item.quality - 2;
  }
  return item;
};

export default updateConjured;
