import React from 'react';
import CrudApiCard from './crudApiCard';

const CrudApiCards = ({data, setEditData, deleteData}) => {
    return (
        <div>
            <div className="ct-cards">
                {data.map((el, index) => <CrudApiCard key={index} el={el} setEditData={setEditData} deleteData={deleteData}/>)}        
            </div>
        </div>
    )
}

export default CrudApiCards;
