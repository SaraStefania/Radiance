import PropTypes from 'prop-types';
import Title from '../shared/Title';


export default function ClientData({client}) {
  const {
    name: nameClient, lastName,
    address:{
      country, city, street, number
    }
  } = client;

  return (
   <>
   <Title className='font-bold' title='Client data'/>
        <ul>
            <li>{nameClient} {lastName}</li>
            <li>{country} / {city}</li>
            <li>{street} {number}</li>
        </ul>
    </>
  )
}

ClientData.propTypes = {
  client: PropTypes.object,
}



