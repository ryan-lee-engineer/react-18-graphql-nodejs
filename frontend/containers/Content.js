import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../api/UserData';
import Table from '../components/Table';

const Content = () => {
    const [user, setUser] = useState(null);
    // useEffect(() => {
    //     const randomData = async() => {
    //         const data = await fetchUserData();
    //         setUser(data || 'No data');
    //     };
    //     randomData();
    // }, []);

    return (
        <div>
            <Table />
        </div>
    )
};

export default Content;
