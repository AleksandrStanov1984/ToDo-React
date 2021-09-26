import React, {Component} from 'react';
import './ToDoListItem.css';

export default class ToDoListItem extends Component {
    // onLabelClick = () => {
    //     this.setState({done: true});
    // };
    // onLabelClick = () => { // увеличение счетчика
    //     this.setState((state) => {
    //         return {
    //             count: state.count + 1
    //         }
    //     });
    // };

    render() {
        const {label, OnDeleted, onToggleImportant, onToggleDone, done, important} = this.props;

        let classNames = 'todo-list-item';
        if (done)
            classNames += ' done';
        if (important)
            classNames += ' important';

        return (
            <span className={classNames}>
            <span className="todo-list-item-label"
                  onClick={onToggleDone}>{label}
            </span>
            <button type="button" className="btn btn-outline-success btn-sm todo-list-item aa"
                    onClick={onToggleImportant}>
                <i className="fa fa-exclamation"/></button>
            <button type="button" className="btn btn-outline-danger btn-sm todo-list-item a"
                    onClick={OnDeleted}>
                <i className="fa fa-trash-o"/></button>
        </span>
        );
    }
}