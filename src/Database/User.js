class User {

    constructor(name, username, emailAddress) {

        this.name = name;
        this.username = username;
        this.emailAddress = emailAddress;

    } get name() {

        return this.name;

    } set name(name) {

        this.name = name;

    } get username() {

        return this.username;

    } set username(username) {

        this.username = username;

    } get emailAddress() {

        return this.emailAddress;

    } set emailAddress(emailAddress) {

        this.emailAddress = emailAddress; 

    }

}

class Member extends User {

    constructor(name, username, emailAddress, homeHelper, workHelper, status) {
        
        this.homeHelper = homeHelper;
        this.workHelper = workHelper;
        this.status = status; 
        
        super(name, username, emailAddress);
        
    } get homeHelper() { //Returns Helper object

        return this.homeHelper;

    } set homeHelper(homeHelper) { //Stores Helper object

        this.homeHelper = homeHelper; 

    } get workHelper() { //Returns Helper object

        return this.workHelper;

    } set workHelper(workHelper) { //Stores Helper object

        this.workHelper = workHelper;

    } get status() {

        return this.status;

    } set status(status) {

        this.status = status; 

    }

} 

class Helper extends User {

    constructor(name, username, emailAddress, member, helperType) {
        
        this.member = member;
        this.helperType = helperType; 
        
        super(name, username, emailAddress);
        
    } get member() { //Returns Member object

        return this.member;

    } set member(member) { //Stores Member object

        this.member = member;

    } get helperType() {

        return this.member;

    } set helperType(helperType) {

        this.helperType = helperType; 

    }

}