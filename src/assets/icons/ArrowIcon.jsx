import propTypes from 'prop-types';

const ArrowIcon = ({fill = "none"}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill} className="size-6">
      <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
    </svg>
  )
}

ArrowIcon.propTypes = {
  fill: propTypes.string,
  strokeWidth: propTypes.number
}

export default ArrowIcon;