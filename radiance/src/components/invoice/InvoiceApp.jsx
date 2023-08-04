
import { getInvoce } from '../../services/getInvoice'
import InvoiceData from './InvoiceData';
import ClientData from './ClientData';
import CompanyData from './CompanyData';
import InvoiceProducts from './InvoiceProducts';
const InvoiceApp = () => {
    const {id, name, client, company, items} = getInvoce();

  return (
    
        <div className='container mx-auto mt-10'>

            <InvoiceData id={id} name={name}/>

            <div className='columns-2 mt-10 '>
                <ClientData client={client}/>
                <CompanyData company={company} />
            </div>
            
            <InvoiceProducts items={items}/>

         </div>

  )
}

export default InvoiceApp