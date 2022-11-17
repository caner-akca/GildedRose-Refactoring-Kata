import { Item, GildedRose } from "@/gilded-rose";
import tests from "../../tests.json";
import { expect } from "chai";

interface Iitem {
  name: string;
  sellIn: number;
  quality: number;
  numberOfSellIn: number;
  outputQuality: number;
}

describe("Gilded Rose", () => {
  for (const test of tests) {
    const { name, sellIn, quality, numberOfSellIn, outputQuality } = test;
    const describeTest: Iitem = {
      name,
      sellIn,
      quality,
      numberOfSellIn,
      outputQuality,
    };
    it(JSON.stringify(describeTest), () => {
      const gildedRose = new GildedRose([new Item(name, sellIn, quality)]);
      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).to.equal(numberOfSellIn);
      expect(items[0].quality).to.equal(outputQuality);
    });
  }
});
