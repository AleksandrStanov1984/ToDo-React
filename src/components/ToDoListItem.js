import React from 'react';

import './ToDoListItem.css';

const ToDoListItem = ({label, important = false}) => {

    const style = {
        color: important ? 'steelbkue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
         <div className="my-table">
            <tr>
                <td className="todo-list-item">
                    <span style={style}>
                        {label}</span>
                </td>
                <td id="div2">
                    <button type="button" className="btn-del"><i className="fa fa-trash"/></button>
                    <button type="button" className="btn-in"><i className="fa fa-exclamation"/></button>
                </td>
            </tr>
         </div>
    );
};

export default ToDoListItem;