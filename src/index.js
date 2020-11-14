import React from 'react';
import ReactDom from 'react-dom';

const ToDoList = () => {
    const items = ['Learn React', 'Build Awesome App', 'Next'];
    return(
        <ul>
            <li>{ items[0] }</li>
            <li>{ items[1] }</li>
            <li>{ items[2] }</li>
        </ul>
    );
}

const AppHeader = () => {
    return <h1>Your ToDo List</h1>;
}

const SearchPanel = () => {
    const Search = 'search...';
    return <input placeholder={Search}/>;
}

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
