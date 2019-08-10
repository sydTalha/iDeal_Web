export class Item {
    constructor(name,image,description,price,featured) {
        this.name = name;
        this.image=image;
        this.description=description;
        this.price=price;
        this.featured=featured;
    }

    get itemName(){
        return this.name;
    }
    get itemImage(){
        return this.image;
    }
    get itemDescription(){
        return this.description;
    }
    get itemPrice(){
        return this.price;
    }
    get itemFeatured(){
        return this.featured;
    }

    set itemName(name){
        this.name=name;
    }
    set itemImage(image){
        this.image=image;
    }
    set itemPrice(price){
        this.price=price;
    }
    set itemDescription(description){
        this.description=description;
    }
    set itemFeatured(featured){
        this.fetured=featured;
    }

}
