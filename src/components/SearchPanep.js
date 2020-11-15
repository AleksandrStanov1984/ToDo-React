import React from 'react';

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