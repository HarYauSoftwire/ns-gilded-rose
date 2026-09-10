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
        const newQuality = originalQuality + change;
        const cappedNewQuality = Math.min(newQuality, 50);
        return Math.max(originalQuality, cappedNewQuality);
    }

    private decreaseQuality(originalQuality: number, change: number) {
        const newQuality = originalQuality - change;
        const cappedNewQuality = Math.max(newQuality, 0);
        return Math.min(originalQuality, cappedNewQuality);
    }

    updateQuality() {
        for (const item of this.items) {
            if (item.name === 'Sulfuras, Hand of Ragnaros') {
                continue;
            }
            if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                let qualityChange: number;
                if (item.sellIn > 10) {
                    qualityChange = 1;
                } else if (item.sellIn > 5) {
                    qualityChange = 2;
                } else {
                    qualityChange = 3;
                }
                if (item.sellIn > 0) {
                    item.quality = this.increaseQuality(item.quality, qualityChange);
                } else {
                    item.quality = 0;
                }
            } else {
                let qualityChange: number;
                if (item.sellIn > 0) {
                    qualityChange = 1;
                } else {
                    qualityChange = 2;
                }
                if (item.name == 'Aged Brie') {
                    item.quality = this.increaseQuality(item.quality, qualityChange);
                } else {
                    item.quality = this.decreaseQuality(item.quality, qualityChange);
                }
            }
            item.sellIn -= 1;
        }

        return this.items;
    }
}
