import React from 'react';

import './ToDoListItem.css';

const ToDoListItem = ({label, important = false}) => {

    const style = {
        color: important ? 'tomato' : 'black'
    };

    return(
        <span className="todo-list-item"
        style={style}>{label}</span>
    );
};

export default ToDoListItem;