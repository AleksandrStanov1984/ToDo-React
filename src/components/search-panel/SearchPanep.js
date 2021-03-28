import React from 'react';

import './SearchPanel.css';

const SearchPanel = () => {
    const Search = '  type to search';
    return (
        <div>
            <div className="todo-Search search-radius">
                <input className="color" placeholder={Search}/>
            </div>

            <div className="btn-group">
                <button type="button" className="btn btn-info">All</button>
                <button type="button" className="btn btn-outline-secondary">Active</button>
                <button type="button" className="btn btn-outline-secondary">Done</button>
            </div>
        </div>
    );
};

export default SearchPanel;