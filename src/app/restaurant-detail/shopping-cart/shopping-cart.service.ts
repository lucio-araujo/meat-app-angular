import { Injectable } from '@angular/core';
import { MenuItem } from './../menu-item/menu.item.model';
import { CartItem } from "./car-item.model"

@Injectable()
export class ShoppingCartService {
    items: CartItem[] = []

    constructor() {}

    addItem(item: MenuItem) {
        let foundItem = this.items.find((nItem) => nItem.menuItem.id === item.id)
        if(foundItem) {
            foundItem.quantity = foundItem.quantity + 1
        }else {
            this.items.push(new CartItem(item))
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
    }

    clear() {
        this.items = []
    }

    total(): number {
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0)
    }
}
