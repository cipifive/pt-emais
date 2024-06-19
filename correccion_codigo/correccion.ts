export interface User {
    id: number;
    name: string;
    email: string;
}
const fetchUserData = async (userId: number): Promise<User> => {
    const response = await fetch(`/api/users/${userId}`);
    if(response.ok) {
        const userData = await response.json();
        return userData;
    } else {
        throw new Error("Error obteniendo datos");
    }
    
};
const logUserName = (user: User) => {
    console.log(user.name);
};
fetchUserData(123).then(logUserName);