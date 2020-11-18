import React from 'react';

import './SearchPanel.css';

const SearchPanel = () => {

    const Search = 'search...';

    const SearchStyle = {
        backgroundColor: '#FFEFD5',
        fontSize: '20px' };

    return <input
        style={SearchStyle}
        placeholder={Search}/>;
};

export default SearchPanel;