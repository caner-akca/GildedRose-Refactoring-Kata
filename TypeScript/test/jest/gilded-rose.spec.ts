import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose ", function () {
  describe("Normal Item", function () {
    it("decrease sellIn by 1", function () {
      const gildedRose = new GildedRose([new Item("default", 5, 10)]);
      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(4);
    });

    it("decrease quality by 1 when sellIn > 0", function () {
      const gildedRose = new GildedRose([new Item("default", 5, 10)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(9);
    });

    it("decrease quality by 2 when sellIn <= 0", function () {
      const gildedRose = new GildedRose([new Item("default", 0, 10)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(8);
    });

    it("do not decrease quality when quality = 0", function () {
      const gildedRose = new GildedRose([new Item("default", 0, 0)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
    });
  });

  describe("Aged Brie", function () {
    it("decrease sellIn by 1", function () {
      const gildedRose = new GildedRose([new Item("default", 5, 10)]);
      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(4);
    });

    it("increase quality by 1 when quality <= 50", function () {
      const gildedRose = new GildedRose([new Item("Aged Brie", 5, 10)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(11);
    });

    it("should not increase quality if quality > 50", function () {
      const gildedRose = new GildedRose([new Item("Aged Brie", 5, 50)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(50);
    });

    it("increase quality by 2 when sellIn <= 0", function () {
      const gildedRose = new GildedRose([new Item("Aged Brie", -1, 45)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(47);
    });

    it("never increase quality for Aged Brie over 50 and sellIn < 0", function () {
      const gildedRose = new GildedRose([new Item("Aged Brie", -1, 50)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(50);
    });
  });

  describe("Backstage passes to a TAFKAL80ETC concert", function () {
    it("decrease sellIn by 1", function () {
      const gildedRose = new GildedRose([new Item("default", 5, 10)]);
      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(4);
    });

    it("increase quality by 3 when sellIn < 6 ", function () {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 1, 45),
      ]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(48);
    });

    it("increase quality by 2 when 5 < sellIn < 11", function () {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 6, 22),
      ]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(24);
    });

    it("increase quality by 1 when sellIn > 11 and quality < 50 ", function () {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 12, 49),
      ]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(50);
    });

    it("quality = 0 when sellIn <= 0 ", function () {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", -1, 40),
      ]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
    });
  });

  describe("Sulfuras, Hand of Ragnaros", function () {
    it("quality and sellIn does not change", function () {
      const gildedRose = new GildedRose([
        new Item("Sulfuras, Hand of Ragnaros", 9999, 80),
      ]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(9999);
    });

    it("quality does not change when sellIn < 0", function () {
      const gildedRose = new GildedRose([
        new Item("Sulfuras, Hand of Ragnaros", -1, 40),
      ]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(40);
    });
  });

  describe("Conjured Item", function () {
    it("decrease sellIn by 1", function () {
      const gildedRose = new GildedRose([new Item("Conjured", 5, 10)]);
      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(4);
    });

    it("decrease quality by 2 when sellIn > 0", function () {
      const gildedRose = new GildedRose([new Item("Conjured", 5, 10)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(8);
    });

    it("decrease quality by 4 when sellIn <= 0", function () {
      const gildedRose = new GildedRose([new Item("Conjured", 0, 10)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(6);
    });

    it("do not decrease quality when quality = 0", function () {
      const gildedRose = new GildedRose([new Item("Conjured", 0, 0)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
    });
  });
});
