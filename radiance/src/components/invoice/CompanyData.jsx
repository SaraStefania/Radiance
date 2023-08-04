
import PropTypes from 'prop-types';
import Title from '../shared/Title';
export default function CompanyData({company}) {
  return (
    <div>
    <Title title='Company data' className='font-bold'/>

    <ul>
        <li>{company.name}</li>
        <li>{company.fiscalNumber}</li>
    </ul>
</div>
  )
}

CompanyData.propTypes = {
    company: PropTypes.string,
}
