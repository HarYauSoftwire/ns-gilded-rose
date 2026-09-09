import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

// Add a master test here

describe('Gilded Rose', function () {

    it ('should correctly process the item Foo', function () {
        const gildedRose = new GildedRose([new Item('Foo', 12, 13)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.eql('Foo');
        expect(items[0].sellIn).to.eql(11);
        expect(items[0].quality).to.eql(12);
    });
    it ('should correctly process the item Bar', function () {
        const gildedRose = new GildedRose([new Item('Bar', 12, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.eql('Bar');
        expect(items[0].sellIn).to.eql(11);
        expect(items[0].quality).to.eql(0);
    });
    it ('should correctly process the item Baz', function () {
        const gildedRose = new GildedRose([new Item('Baz', 0, 100)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.eql('Baz');
        expect(items[0].sellIn).to.eql(-1);
        expect(items[0].quality).to.eql(98);
    });
    it ('should correctly process the item Aged Brie', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 12, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.eql('Aged Brie');
        expect(items[0].sellIn).to.eql(11);
        expect(items[0].quality).to.eql(21);
    });
    it ('should correctly process the item Aged Brie', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', -2, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.eql('Aged Brie');
        expect(items[0].sellIn).to.eql(-3);
        expect(items[0].quality).to.eql(22);
    });
    it ('should correctly process the item Spam', function () {
        const gildedRose = new GildedRose([new Item('Spam', -2, -10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.eql('Spam');
        expect(items[0].sellIn).to.eql(-3);
        expect(items[0].quality).to.eql(-10);
    });
    it ('should correctly process the item Sulfuras, Hand of Ragnaros', function () {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 2, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.eql('Sulfuras, Hand of Ragnaros');
        expect(items[0].sellIn).to.eql(2);
        expect(items[0].quality).to.eql(5);
    });
    it ('should correctly process the item Backstage passes to a TAFKAL80ETC concert', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 14, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.eql('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.eql(13);
        expect(items[0].quality).to.eql(6);
    });
    it ('should correctly process the item Backstage passes to a TAFKAL80ETC concert', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 6, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.eql('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.eql(5);
        expect(items[0].quality).to.eql(7);
    });
    it ('should correctly process the item Backstage passes to a TAFKAL80ETC concert', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.eql('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.eql(2);
        expect(items[0].quality).to.eql(8);
    });
    it ('should correctly process the item Backstage passes to a TAFKAL80ETC concert', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.eql('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.eql(0);
        expect(items[0].quality).to.eql(8);
    });
    it ('should correctly process the item Backstage passes to a TAFKAL80ETC concert', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.eql('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.eql(-1);
        expect(items[0].quality).to.eql(0);
    });
    it ('should correctly process the item Backstage passes to a TAFKAL80ETC concert', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.eql('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.eql(-2);
        expect(items[0].quality).to.eql(0);
    });
    
});
