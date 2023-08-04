
import { getInvoce } from '../services/getInvoice'
import Logo from './shared/Logo';
const InvoiceApp = () => {
    const {id, name, client, company, items} = getInvoce();
    const {name: nameClient, lastName, address} = client;
    const {country, city, street, number} = address;
  return (
    <>
        <div className='grid grid-cols-2 gap-4'>
            <Logo />
            <div>
                <h1>Invoice detail</h1>
                <ul>
                    <li>ID: {id}</li>
                    <li>Name invoice: {name}</li>
                </ul>
            </div>
        </div>
        

         <h2>Datos del cliente</h2>
        <ul>
            <li>{nameClient}</li>
            <li>{lastName}</li>
            <li>{country}</li>
            <li>{city}</li>
            <li>{street} {number}</li>
         </ul>

         <h2>Datos de la empresa</h2>
        <ul>
            <li>{company.name}</li>
            <li>{company.fiscalNumber}</li>
         </ul>

         <h2>Datos de la factura</h2>
        <table>
            <thead>
                <tr>
                    <th>producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({id, product, price, quantity}) => (
                    <tr key={id}>
                        <td>{product}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                    </tr>
                    )
                )}
                
            </tbody>
         </table>
    </>
  )
}

export default InvoiceApp