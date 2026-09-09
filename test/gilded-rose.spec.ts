import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it('should store the item we supplied it', function() {
        const gildedRose = new GildedRose([ new Item('Foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Foo');
    });

    it ('should lower the sell-in of a normal item by 1', function () {
        const gildedRose = new GildedRose([new Item('Foo', 12, 13)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.eql(11);
    });

    it ('should lower the quality of a normal item with positive quality by 1', function () {
        const gildedRose = new GildedRose([new Item('Foo', 12, 13)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.eql(12);
    });

    it ('should not lower the quality of a normal item with zero quality', function () {
        const gildedRose = new GildedRose([new Item('Foo', 12, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.eql(0);
    });

    it ('should lower the quality of an out-of-date normal item with positive quality by 2', function () {
        const gildedRose = new GildedRose([new Item('Foo', -3, 13)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.eql(11);
    });

    it ('should not lower the quality of an out-of-date normal item with zero quality', function () {
        const gildedRose = new GildedRose([new Item('Foo', -3, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.eql(0);
    });

    it ('should not lower the quality of an out-of-date normal item with 1 quality past zero', function () {
        const gildedRose = new GildedRose([new Item('Foo', -3, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.eql(0);
    });

    it ('should increase the quality of an Aged Brie by 1', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 12, 13)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.eql(14);
    });

    it ('should not increase the quality of an Aged Brie with quality 50', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 12, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.eql(50);
    });

    it ('should increase the quality of an out-of-date Aged Brie by 2', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', -3, 13)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.eql(15);
    });

    it ('should not increase the quality of an out-of-date Aged Brie with quality 50', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', -3, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.eql(50);
    });

    it ('should not increase the quality of an out-of-date Aged Brie with quality 49 past 50', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', -3, 49)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.eql(50);
    });

    it ('should not change the sell-in of a Sulfuras', function () {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 12, 13)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.eql(12);
    });

    it ('should not change the quality of a Sulfuras', function () {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 12, 13)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.eql(13);
    });

    it ('should not change the quality of an out-of-date Sulfuras', function () {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -3, 13)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.eql(13);
    });

});
