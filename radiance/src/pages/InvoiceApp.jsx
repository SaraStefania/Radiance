
import { getInvoce } from '../services/getInvoice'
import InvoiceData from '../components/invoice/InvoiceData';
import ClientData from '../components/invoice/ClientData';
import CompanyData from '../components/invoice/CompanyData';
import InvoiceProducts from '../components/invoice/InvoiceProducts';
import Total from '../components/invoice/Total';
const InvoiceApp = () => {
    const {id, name, client, company, items, total} = getInvoce();

  return (
    
        <div className='container mx-auto mt-10'>

            <InvoiceData id={id} name={name}/>

            <div className='columns-2 mt-10 '>
                <ClientData client={client}/>
                <CompanyData company={company} />
            </div>
            
            <InvoiceProducts items={items}/>
            <Total className='p-4 bg-electricBlue ' total={total}/>


         </div>

  )
}

export default InvoiceApp