import { Item, GildedRose } from "@/gilded-rose";

type item = {
  name: string;
  sellIn: number;
  quality: number;
  numberOfSellIn: number;
  outputQuality: number;
};

describe("Gilded Rose", () => {
  it("describe behaviour of the legacy code", () => {
    const itemNames = [
      "Normal Item",
      "Aged Brie",
      "Backstage passes to a TAFKAL80ETC concert",
      "Sulfuras, Hand of Ragnaros",
    ];

    const tests: item[] = [];

    const [minSellIn, maxSellIn] = [-1, 12];
    const [minQuality, maxQuality] = [-1, 51];

    for (const name of itemNames) {
      for (let sellIn = minSellIn; sellIn <= maxSellIn; sellIn++) {
        for (let quality = minQuality; quality <= maxQuality; quality++) {
          const gildedRose = new GildedRose([new Item(name, sellIn, quality)]);
          const items = gildedRose.updateQuality();

          const numberOfSellIn = items[0].sellIn;
          const outputQuality = items[0].quality;

          tests.push({
            name,
            sellIn,
            quality,
            numberOfSellIn,
            outputQuality,
          });
        }
      }
    }
  });
});
