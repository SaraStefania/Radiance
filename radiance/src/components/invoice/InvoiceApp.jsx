
import { getInvoce } from '../../services/getInvoice'

const InvoiceApp = () => {
    const {id, name, client, company, items} = getInvoce();
    const {name: nameClient, lastName, address} = client;
    const {country, city, street, number} = address;
  return (
    <>
        <div className='container mx-auto mt-10'>
    
            <h1 className='font-extrabold text-3xl text-electricBlue'>Invoice detail</h1>
            <ul className='text-base'>
                <li><strong>Fecha</strong></li>
                <li><strong>ID: </strong> {id}</li>
                <li><strong>Name invoice: </strong>{name}</li>
            </ul>

       
        
        <div className='columns-2 mt-10 '>
            <div>
                <h2 className='font-bold'>Client data</h2>
                <ul>
                    <li>{nameClient} {lastName}</li>
                    <li>{country} / {city}</li>
                    <li>{street} {number}</li>
                </ul>
            </div>

            <div>
                <h2 className='font-bold'>Company data</h2>
                <ul>
                    <li>{company.name}</li>
                    <li>{company.fiscalNumber}</li>
                </ul>
            </div>
        </div>



      
        <table className="w-full  mt-6">
            <thead>
                <tr className='bg-electricBlue text-white h-10'>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({id, product, price, quantity}) => (
                    <tr className='h-20 border-b-4 ' key={id}>
                        <td >{product}</td>
                        <td >{price}</td>
                        <td >{quantity}</td>
                    </tr>
                    )
                )}
                
            </tbody>
        </table>

    </div>
    </>
  )
}

export default InvoiceApp