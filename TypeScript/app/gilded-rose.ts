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
}

const updateNormal = (item: Item): Item => {
  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0 && item.quality > 0) {
    item.quality = item.quality - 1;
  }
  return item;
};

const updateBrie = (item: Item): Item => {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0 && item.quality < 50) {
    item.quality = item.quality + 1;
  }
  return item;
};

const updateBackStage = (item: Item): Item => {
  if (item.quality < 50) {
    item.quality = item.quality + 1;

    if (item.sellIn < 11 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
    if (item.sellIn < 6 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0) {
    item.quality = item.quality - item.quality;
  }
  return item;
};

const update = (item: Item): Item => {
  switch (item.name) {
    case ItemTypes.BRIE:
      return updateBrie(item);

    case ItemTypes.BACKSTAGE:
      return updateBackStage(item);

    case ItemTypes.SULFURAS:
      return item;

    default:
      return updateNormal(item);
  }
};
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => update(item));
    return this.items;
  }
}
