import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

// Add a master test here

describe('Gilded Rose', function () {

    it('should correctly process all these items', function () {
        const gildedRose = new GildedRose([
            new Item('Foo', 12, 13),
            new Item('Bar', 12, 0),
            new Item('Baz', 0, 100),
            new Item('Aged Brie', 12, 20),
            new Item('Aged Brie', -2, 20),
            new Item('Spam', -2, -10),
            new Item('Sulfuras', 2, 5),
            new Item('Backstage passes', 14, 5),
            new Item('Backstage passes', 6, 5),
            new Item('Backstage passes', 3, 5),
            new Item('Backstage passes', 1, 5),
            new Item('Backstage passes', 0, 5),
            new Item('Backstage passes', -1, 5),
        ]);
        const items = gildedRose.updateQuality();
        expect(items).to.equal([
            new Item('Foo', 12, 13),
            new Item('Bar', 12, 0),
            new Item('Baz', 0, 100),
            new Item('Aged Brie', 12, 20),
            new Item('Aged Brie', -2, 20),
            new Item('Spam', -2, -10),
            new Item('Sulfuras', 2, 5),
            new Item('Backstage passes', 14, 5),
            new Item('Backstage passes', 6, 5),
            new Item('Backstage passes', 3, 5),
            new Item('Backstage passes', 1, 5),
            new Item('Backstage passes', 0, 5),
            new Item('Backstage passes', -1, 5),
        ]);
    });

});
