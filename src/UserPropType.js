import PropTypes from 'prop-types';

export default PropTypes.shape({
    	firstName: PropTypes.string,
      	lastName: PropTypes.string,
      	userName: PropTypes.string.isRequired,
      	noOfGames: PropTypes.number.isRequired
});