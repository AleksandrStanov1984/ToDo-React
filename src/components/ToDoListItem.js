import React from 'react';

import './ToDoListItem.css';

const ToDoListItem = ({label, important = false}) => {

    const style = {
        color: important ? '#ff5900' : '#000000'
    };

    return (
        <div className="my-table">
            <tr>
                <td className="todo-list-item">
                    <span style={style}>{label}</span>
                </td>
                <td>
                    <button type="button" className="btn-del">
                        <i className="fa fa-trash"/>
                    </button>
                    <button type="button" className="btn">
                        <i className="fa fa-bars"/>
                    </button>
                </td>
            </tr>
            <table>

            </table>
        </div>
    );
};

export default ToDoListItem;