import React, {Component} from 'react';
import './ToDoListItem.css';

export default class ToDoListItem extends Component {

    state = {
        done: false,
        important: false
    };
    onLabelClick = () => {
        this.setState({done: true});
    };

    onImportantClick = () =>{
        this.setState({important: true});
    };

    render() {
        const {label} = this.props;
        const {done, important} = this.state;


        let classNames = 'todo-list-item';
        if(done){
            classNames += ' done';
        }
        if(important){
            classNames += ' important';
        }

        return (
            <span className={classNames}>
            <span className="todo-list-item-label"
                  onClick={ this.onLabelClick }>{label}
            </span>
            <button type="button" className="btn btn-outline-success btn-sm todo-list-item aa"
                    onClick={ this.onImportantClick }>
                <i className="fa fa-exclamation"/></button>
            <button type="button" className="btn btn-outline-danger btn-sm todo-list-item a">
                <i className="fa fa-trash-o"/></button>
        </span>
        );
    }
}