import PropTypes from 'prop-types';

export default function Total({total, className}) {
  return (
    <div className={className}>
        {total}
    </div>
  )
}

Total.propTypes = {
    total: PropTypes.number,
    className: PropTypes.string,
}