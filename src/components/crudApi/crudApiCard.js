import React from 'react';
import star from "../../assets/ico/star.svg";
import heart from "../../assets/ico/heart.svg";
import eye from "../../assets/ico/eye.svg";
import edit from "../../assets/ico/edit.svg";
import del from "../../assets/ico/delete.svg";

const CrudApiCard = ({ el, setEditData, deleteData }) => {
    
    let { imgName, imgUser, imgURL, id } = el; 

    return (
        <>
            <div className='ct-card'>
                <div className="ct-card-img">
                    <img className="img-card" src={require(`../../assets/img/${ imgURL }.jpg`).default} alt={imgURL} />
                </div>
                    <div className="ct-card-info">
                        <div className="ct-icons">
                            <div className="ct-icons-like">
                                <button className="bt-ico"><img className="img-ico" src={star} alt="star value button"/></button>
                                <button className="bt-ico"><img className="img-ico" src={heart} alt="love button"/></button>
                                <button className="bt-ico"><img className="img-ico" src={eye} alt="show button"/></button>
                            </div>
                            <div className="ct-icons-modify">
                                <button className="bt-ico" onClick={() => setEditData(el)}><img className="img-ico" src={edit} alt="edit button"/></button>
                                <button className="bt-ico" onClick={() => deleteData(id)}><img className="img-ico" src={del} alt="delete button"/></button>
                            </div>
                        </div>
                    <div className="ct-txt">
                        <h6 className="txt-card-title">{imgName}</h6>
                        <p className="txt-card-user">{imgUser}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CrudApiCard;
