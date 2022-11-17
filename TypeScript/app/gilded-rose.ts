export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

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
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => updateItem(item));
    return this.items;
  }
}
