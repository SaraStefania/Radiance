import PropTypes from 'prop-types';
import Title from '../shared/Title';
 function InvoiceData({id, name}) {

  return (
    <>
       <Title title='Invoice detail' className='font-extrabold text-3xl text-electricBlue'/>
        <ul className='text-base'>
            <li><strong>Fecha</strong></li>
            <li><strong>ID: </strong> {id}</li>
            <li><strong>Name invoice: </strong>{name}</li>
        </ul>
    </>
  )
}

InvoiceData.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
  }
export default InvoiceData