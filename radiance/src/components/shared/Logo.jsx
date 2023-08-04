import PropTypes from 'prop-types';
const Logo = ({className}) => {
  return (
    <img className={className} src="src/assets/img/logoRadiance.png" alt="Logo" />
  )
}

Logo.propTypes = {
    className: PropTypes.string,
}
export default Logo;