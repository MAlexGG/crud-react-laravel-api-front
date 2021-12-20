import React from 'react';
import CrudCard from './crudCard';

const CrudCards = ({data, setEditData, deleteData}) => {
    return (
        <div>
            <div className="ct-cards">
                {data.map(el => <CrudCard key={el.id} el={el} setEditData={setEditData} deleteData={deleteData}/>)}        
            </div>
        </div>
    )
}

export default CrudCards;
