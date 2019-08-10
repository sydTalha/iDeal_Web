export class User{
    constructor(firstName, lastName, userName, email, contactNumber, location) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.userName=userName;
        this.email=email;
        this.contactNumber=contactNumber;
        this.location=location;
    }

    get userFirstName(){
        return this.firstName;
    }
    get userLastName(){
        return this.lastName;
    }
    get userUserName(){
        return this.userName;
    }
    get userEmail(){
        return this.email;
    }
    get userContactNumber(){
        return this.contactNumber;
    }
    get userLocation(){
        return this.location;
    }

    set userFirstName(firstName){
        this.firstName=firstName;
    }
    set userLastName(lastName){
        this.lastName = lastName;
    }
    set userUserName(userName){
        this.userName=userName;
    }
    set userEmail(email){
        this.email=email;
    }
    set userContactNumber(contactNumber){
        this.contactNumber=contactNumber;
    }
    set userLocation(location){
        this.location=location;
    }
}