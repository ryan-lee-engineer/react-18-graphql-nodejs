import React from 'react';

const Table = () => {
    return (
        <div style={{padding: '2em', backgroundColor: 'blue'}}>
            <div style={{"display": "flex", backgroundColor: 'red', padding: '1em', justifyContent: "space-evenly"}}>
                <div style={{backgroundColor: 'yellow'}}>Title</div>
                <div style={{backgroundColor: 'yellow'}}>First</div>
                <div style={{backgroundColor: 'yellow'}}>Last</div>
            </div>
            <div style={{"display": "flex", backgroundColor: 'red', padding: '1em', justifyContent: "space-evenly"}}>
                <div style={{backgroundColor: 'yellow'}}>Title</div>
                <div style={{backgroundColor: 'yellow'}}>First</div>
                <div style={{backgroundColor: 'yellow'}}>Last</div>
            </div>
        </div>
    );
};

export default Table;
