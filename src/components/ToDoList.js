import React from 'react';

import ToDoListItem from "./ToDoListItem";

const ToDoList = () => {
    return(
        <ul>
            <li><ToDoListItem label = "A"/></li>
            <li><ToDoListItem label = "B"/></li>
            <li><ToDoListItem label = "C"/></li>
        </ul>
    );
};

export default ToDoList;

