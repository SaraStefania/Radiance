import PropTypes from 'prop-types';

export default function Title({title, className}) {
  return (
    <h2 className={className}>{title}</h2>
  )
}

Title.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string
}
