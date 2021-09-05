import React from 'react';
import Dropdown from '../common/dropDown';


const Filter =({categoryFilter, onCategoryUpdate}) => {
    const updateAlbumsOnCategory = (select) => {
        onCategoryUpdate(select);
    }
    
    return(<React.Fragment>
        <Dropdown label="Category" updateSelectedCallback={updateAlbumsOnCategory} list={categoryFilter}></Dropdown>
    </React.Fragment>);
}

export default Filter;