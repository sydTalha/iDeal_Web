export class User{
    constructor(firstName, lastName, userName, email, contactNumber, province,city,zip,profilePicture) {
        this.firstName=firstName;
        sessionStorage.setItem("firstName", firstName);
        this.lastName=lastName;
        sessionStorage.setItem("lastName", lastName);
        this.userName=userName;
        sessionStorage.setItem("userName", userName);
        this.email=email;
        sessionStorage.setItem("email", email);
        this.contactNumber=contactNumber;
        sessionStorage.setItem("contactNumber", contactNumber);
        this.province=province;
        sessionStorage.setItem("province",province);
        this.city=city;
        sessionStorage.setItem("city",city);
        this.zip=zip;
        sessionStorage.setItem("zip",zip);
        this.profilePicture=profilePicture;
        sessionStorage.setItem("profilePicture", profilePicture);
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
    get userProvince(){
        return this.province;
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
    set userProvince(province){
        this.province=province;
    }
}