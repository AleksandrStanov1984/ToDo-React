import React from 'react';
import ReactDom from 'react-dom';

import SearchPanel from "./components/SearchPanep";
import AppHeader from "./components/AppHeader";
import ToDoList from "./components/ToDoList";

const App = () => {
    return(
        <div>
            <AppHeader/>
            <SearchPanel/>
            <ToDoList/>
        </div>
    );
}

ReactDom.render(<App/>, document.getElementById('root'));
