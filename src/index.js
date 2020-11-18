import React from 'react';
import ReactDom from 'react-dom';

import SearchPanel from "./components/SearchPanep";
import AppHeader from "./components/AppHeader";
import ToDoList from "./components/ToDoList";

const App = () => {

const todoDate = [
    {label: 'Drink Coffee', important: false, id: 1 },
    {label: 'Make Awesome App', important: true, id: 2 },
    {label: 'Have a lunch', important: false, id: 3 },
];

    return(
        <div>
            <AppHeader/>
            <SearchPanel/>
            <ToDoList todos={todoDate}/>
        </div>
    );
}

ReactDom.render(<App/>, document.getElementById('root'));
