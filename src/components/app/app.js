import React, {Component} from 'react';
import ReactDom from 'react-dom';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ToDoList from "../todo-list";
import ItemStatusFilter from "../item-statys-filter";
import AddItem from "../add-item";
import './app.css'

export default class App extends Component {
    maxId = 100;

    state = {
        todoDate: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            done: false,
            important: false,
            id: this.maxId++
        };
    };

    deleteItem = (id) => {
        this.setState(({todoDate}) => {
            const inx = todoDate.findIndex((el) => el.id === id);
            const newTodoDate = [...todoDate.slice(0, inx), ...todoDate.slice(inx + 1)];
            return {
                todoDate: newTodoDate
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({todoDate}) => {
            const newTodoDate = [...todoDate, newItem];
            return {
                todoDate: newTodoDate
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const inx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[inx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, inx),
            newItem,
            ...arr.slice(inx + 1)
        ];
    };

    onToggleImportant = (id) => {
        this.setState(({todoDate}) => {
            return {
                todoDate: this.toggleProperty(todoDate, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoDate}) => {
            return {
                todoDate: this.toggleProperty(todoDate, id, 'done')
            };
        });
    };

    render() {
        const {todoDate} = this.state;
        const doneCount = todoDate.filter((el) => el.done).length;
        const todoCount = todoDate.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>

                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <ToDoList
                    todos={todoDate}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />

                <AddItem OnAddItem={this.addItem}/>
            </div>
        );
    };
};