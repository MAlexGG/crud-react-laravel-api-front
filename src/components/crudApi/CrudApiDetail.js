import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { serviceApi } from '../../services/serviceApi';
import Navbar from '../navbar'

function CrudApiDetail() {

  const [card, setCard] = useState([]);

  let api = serviceApi();
  let params = useParams();

  const cardId = params.id;

  useEffect(() => {
    api.show(cardId).then((res) => {
    setCard(res.data.data);
    }).catch((error) => {
    console.log(error.response.statusText);
    });
  }, [])
  

  return (
      <>
      <Navbar txtColor1="txtColor2" txtColor2="txtColor2" txtColor3="txtColor2" txtColor4="txtColor2" txtColor5="txtColor2" />
      <div className='ct-detail'>
        <div className='ct-detail-img'>
        <img className='img-detail' src={`http://${api.baseUrl}/storage/${card.image}`} alt={card.title} />
      </div>
      <div className='ct-detail-txt'>
          <h2 className='txt-detail-title'>{card.title}</h2>
          <p className='txt-detail-info'>{card.description}</p>
        </div>
      </div>
      
      
          
      </>
  )
}

export default CrudApiDetail