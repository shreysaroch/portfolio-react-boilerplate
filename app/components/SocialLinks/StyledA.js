import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledA = styled.a`
  color: ${({ color }) => color || 'inherit'};
  text-decoration: none;

  @supports (display: flex) {
    align-items: center;
    display: flex;
  }
`;

StyledA.propTypes = {
  color: PropTypes.string,
};

export default StyledA;
