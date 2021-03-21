import React from 'react';

import ToDoListItem from "./ToDoListItem";
import './ToDoList.css';

const ToDoList = ({todos}) => {

 const elements = todos.map((item) => {
     const {id, ... itemProps} = item; //Рестуризация, достоем из item все id
     return(
         <li key={id} className="list-group-item">
             {<ToDoListItem {... itemProps}/> /*передаем массив item без id*/}
         </li>
     );
 });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default ToDoList;

