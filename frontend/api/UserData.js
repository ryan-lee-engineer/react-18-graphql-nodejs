import axios from 'axios';

export const fetchUserData = async() => {
    const {data} = await axios('https://randomuser.me/api');
    return JSON.stringify(data);
};