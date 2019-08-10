import {Item} from './Item'
export class Shop{
    constructor(name,bg_image,location,items){
        this.name=name;
        this.bg_image=bg_image;
        this.items=items;
        this.location=location;
    }

    get shopName(){
        return this.name;
    }
    get shopbg_image(){
        return this.bg_image;
    }
    get shopItems(){
        return this.items;
    }
    get shopLocation(){
        return this.location;
    }

    set shopName(name){
        this.name=name;
    }
    set shopbg_image(bg_image){
        this.bg_image=bg_image;
    }
    set shopItems(items){
        this.items=items;
    }
    set shopLocaion(location){
        this.location=location;
    }
}