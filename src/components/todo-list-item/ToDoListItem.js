import React from 'react';
import './ToDoListItem.css';

const ToDoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'steelbkue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={style}>
                {label}
            </span>
            <button type="button"
                    className="btn btn-outline-success btn-sm todo-list-item aa">
                <i className="fa fa-exclamation"/>
            </button>
            <button type="button"
                    className="btn btn-outline-danger btn-sm todo-list-item a">
                <i className="fa fa-trash-o"/>
            </button>
        </span>
    );
};

export default ToDoListItem;