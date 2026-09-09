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

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    private increaseQuality(originalQuality: number, change: number) {
        return Math.max(originalQuality, Math.min(originalQuality + change, 50));
    }

    updateQuality() {
        for (const item of this.items) {
            if (item.name === 'Sulfuras, Hand of Ragnaros') {
                continue;
            }
            if (item.name == 'Aged Brie') {
                if (item.sellIn > 0) {
                    item.quality = this.increaseQuality(item.quality, 1);
                } else {
                    item.quality = this.increaseQuality(item.quality, 2);
                }
            } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.sellIn > 10) {
                    item.quality = this.increaseQuality(item.quality, 1);
                } else if (item.sellIn > 5) {
                    item.quality = this.increaseQuality(item.quality, 2);
                } else if (item.sellIn > 0) {
                    item.quality = this.increaseQuality(item.quality, 3);
                } else {
                    item.quality = 0;
                }
            } else {
                if (item.quality > 0) {
                    item.quality -= 1;
                }
                if (item.sellIn <= 0) {
                    if (item.quality > 0) {
                        item.quality -= 1;
                    }
                }
            }
            item.sellIn -= 1;
        }

        return this.items;
    }
}
