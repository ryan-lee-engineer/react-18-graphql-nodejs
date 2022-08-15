import React from 'react';
import Content from './containers/Content';
import Nav from './containers/Nav';
import SideBar from './containers/SideBar';

const App = () => {
    return (
        <div>
            <Nav />
            <SideBar />
            <Content />
        </div>
    )
};

export default App;
