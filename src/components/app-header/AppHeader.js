import React from 'react';
import './AppHeader.css';

const AppHeader = ({todo, done}) => {
    return (
        <div className="app-header d-flex">
            <h1>ToDo List</h1>
            <h4 style={{fontFamily: "cursive"}}>{todo} more to do, {done} done</h4>
        </div>
    );
};

export default AppHeader;