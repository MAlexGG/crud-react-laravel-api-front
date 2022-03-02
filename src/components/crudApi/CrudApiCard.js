import React from 'react';
import star from "../../assets/ico/star.svg";
import heart from "../../assets/ico/heart.svg";
import eye from "../../assets/ico/eye.svg";
import edit from "../../assets/ico/edit.svg";
import del from "../../assets/ico/delete.svg";
import { serviceApi } from '../../services/serviceApi';
import { Link } from "react-router-dom";

const CrudApiCard = ({card}) => { 

    let { title, image, id } = card; 
    let api = serviceApi();

    const deleteCard = (e) => {
        e.preventDefault();
        api.destroy(id).then((res) => {
            alert(res.data.msg);
            window.location.reload();
        }).catch((error) => {
            alert(`${error.response.status}: ${error.response.statusText}`);
        });
    };

    return (
        <div className='ct-card'>
            <div className="ct-card-img">
                <img className="img-card" src={`http://${api.baseUrl}/storage/${image}`} alt={title} />
            </div>
                <div className="ct-card-info">
                    <div className="ct-icons">
                        <div className="ct-icons-like">
                            <button className="bt-ico"><img className="img-ico" src={star} alt="star value button"/></button>
                            <button className="bt-ico"><img className="img-ico" src={heart} alt="love button"/></button>
                            <button className="bt-ico"><img className="img-ico" src={eye} alt="show button"/></button>
                        </div>
                        <div className="ct-icons-modify">
                        <Link className="bt-ico" to= {`/crud-api-edit-form/${id}`}
                           ><img className="img-ico" src={edit} alt="edit button" /></Link>
                            <button className="bt-ico" onClick={deleteCard}><img className="img-ico" src={del} alt="delete button"/></button>
                        </div>
                    </div>
                <div className="ct-txt">
                    <h6 className="txt-card-title">{title}</h6>
                    <p className="txt-card-user">usuario</p>
                </div>
            </div>
        </div>
    )
}

export default CrudApiCard;
