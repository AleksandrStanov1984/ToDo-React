import React, {Component} from 'react';
import './AddItem.css';
import '../search-panel/SearchPanel.css';

export default class AddItem extends Component {
    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value.toUpperCase()
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.OnAddItem(this.state.label);
        this.setState({label: ''});
    };

    render() {
        const {OnAddItem} = this.props;
        return (
            <form className="addItem d-flex"
            onSubmit={this.onSubmit}>
                <input type="text" className="form-control search-input radius"
                       placeholder=" What needs to be done"
                       value={this.state.label}
                       onChange={this.onLabelChange}
                />
                <button className="btn btn-outline-secondary my-button-color">
                    Add Item
                </button>
            </form>
        );
    }
}