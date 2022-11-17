import { Item } from "@/gilded-rose";
import updateBrie from "./updateBrie";
import updateNormal from "./updateNormal";
import updateConjured from "./updateConjured";
import updateBackStage from "./updateBackStage";

export enum ItemTypes {
  BRIE = "Aged Brie",
  BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS = "Sulfuras, Hand of Ragnaros",
  CONJURED = "Conjured",
}

export const values = {
  quality: { MAX_VALUE: 50, MIN_VALUE: 0 },
  sellIn: { MAX_VALUE: 50, MIN_VALUE: 0 },
};

const updateItem = (item: Item): Item => {
  if (item.name === ItemTypes.BRIE) {
    return updateBrie(item);
  }

  if (item.name === ItemTypes.BACKSTAGE) {
    return updateBackStage(item);
  }

  if (item.name === ItemTypes.SULFURAS) {
    return item;
  }

  if (item.name === ItemTypes.CONJURED) {
    return updateConjured(item);
  }

  return updateNormal(item);
};

export default updateItem;
