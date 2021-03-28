import React from 'react';

import './SearchPanel.css';

const SearchPanel = () => {
    const Search = '  type to search';
    const All = 'All';
    const Active = 'Active';
    const Done = 'Done';

    return (
        // <div className="box">
        //     <div className="todo-Search search-radius">
        //         <input className="color" placeholder={Search}/>
        //     </div>
        //     <div>
        //         <div>
        //             <button type="button" className="btn btn-info">{All}</button>
        //             {/*<button className="button button-small">{All}</button>*/}
        //         </div>
        //         <div>
        //             <button type="button" className="btn btn-outline-second">{Active}</button>
        //             {/*<button type="button" className="button button-small">{Active}</button>*/}
        //         </div>
        //         <div>
        //             <button type="button" className="btn btn-outline-second">{Done}</button>
        //             {/*<button type="button" className="button button-small">{Done}</button>*/}
        //         </div>
        //     </div>
        // </div>


        <div className="btn-group">
            <button type="button" className="btn btn-info">{All}</button>
            <button type="button" className="btn btn-outline-second">{Active}</button>
            <button type="button" className="btn btn-outline-second">{Done}</button>
        </div>
    );
};

export default SearchPanel;