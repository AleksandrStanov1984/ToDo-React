import React from 'react';
import '../search-panel/SearchPanel.css';
import '../item-statys-filter/ItemStatusFilter.css'

const ItemStatusFilter = () => {
    return (
        <div className="btn-group f">
            <button type="button"
                    className="btn btn-outline-secondary color">All
            </button>
            <button type="button"
                    className="btn btn-outline-secondary color">Active
            </button>
            <button type="button"
                    className="btn btn-outline-secondary color">Done
            </button>
        </div>
    );
};

export default ItemStatusFilter;