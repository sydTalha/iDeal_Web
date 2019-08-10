export class Breadcrumb{
    constructor(links){
        this.links=links;
    }

    get breadcrumbLinks(){
        return this.links;
    }

    set breadcrumbLinks(links){
        this.links=links;
    }

    addLink(link){
        this.links.append(link);
    }
    removeLink(){
        this.links.pop();
    }
}