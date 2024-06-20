interface User {
    id: number;
    name: string;
    email: string;
}

const fetchUserData = async (userId: string): Promise<User> => {
    const response = await fetch('/api/users/${userId}');
    const userData = await response.json();
    return userData;
};

const logUserName = (user: User) => {
    console.log(user.Name);
};

fetchUserData(123).then(logUserName);