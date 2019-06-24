class User {

    constructor(firstName, lastName, username, emailAddress) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.emailAddress = emailAddress;

    } get firstName() {

        return this.firstName;

    } set firstName(firstName) {

        this.firstName = firstName;

    } get lastName() {

        return this.lastName;

    } set lastName(lastName) {

        this.lastName = lastName;

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

    constructor(firstName, lastName, username, emailAddress, homeHelper, workHelper, status) {
        
        this.homeHelper = homeHelper;
        this.workHelper = workHelper;
        this.status = status; 
        
        super(firstName, lastName, username, emailAddress);
        
    } get homeHelper() {

        return this.homeHelper;

    } set homeHelper(homeHelper) {

        this.homeHelper = homeHelper; 

    } get workHelper() {

        return this.workHelper;

    } set workHelper(workHelper) {

        this.workHelper = workHelper;
    } get status() {

        return this.status;

    } set status(status) {

        this.status = status; 

    }

} 

class Helper extends User {

    constructor(firstName, lastName, username, emailAddress, member, helperType) {
        
        this.member = member;
        this.helperType = helperType; 
        
        super(firstName, lastName, username, emailAddress);
        
    } get member() {

        return this.member;

    } set member(member) {

        this.member = member;

    } get helperType() {

        return this.member;

    } set helperType(helperType) {

        this.helperType = helperType; 

    }

}