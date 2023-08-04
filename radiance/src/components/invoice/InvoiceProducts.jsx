import PropTypes from 'prop-types';

export default function InvoiceProducts({items}) {
  return (
    <table className="w-full  mt-6">
    <thead>
        <tr className='bg-electricBlue text-white h-10'>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
        </tr>
    </thead>
    <tbody>
        {items.map(item => (
            <tr className='h-20 border-b-4 ' key={item.id}>
                <td >{item.product}</td>
                <td >{item.price}</td>
                <td >{item.quantity}</td>
            </tr>
            )
        )}
        
    </tbody>
</table>
  )
}

InvoiceProducts.propTypes = {
    items: PropTypes.array,
}
