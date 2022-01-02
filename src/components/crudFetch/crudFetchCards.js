import React from 'react';
import CrudFetchCard from './crudFetchCard';

const CrudFetchCards = ({data, setEditData, deleteData}) => {
    return (
        <div>
            <div className="ct-cards">
                {data.map((el, index) => <CrudFetchCard key={index} el={el} setEditData={setEditData} deleteData={deleteData}/>)}        
            </div>
        </div>
    )
}

export default CrudFetchCards;
