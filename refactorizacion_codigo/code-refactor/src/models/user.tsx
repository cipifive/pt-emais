export interface Address {
    city : string,
    street : string,
    zipcode : string
}

export interface User {
    name : string,
    email : string,
    address : Address
}

export interface UserProfileProps {
    user : User
}