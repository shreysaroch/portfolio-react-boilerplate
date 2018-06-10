import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';

import { BASE_LINE_HEIGHT } from '../../styles/typography';
import { theme } from '../../styles/theme';
import { svgToURL } from '../../styles/tools';

const { backgroundColor, borderColor } = theme.site.navigation;
const lighterBorderColor = (borderColor && lighten(0.1, borderColor)) || 'inherit';
const arrowSVG = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 848 640"
    preserveAspectRatio="xMaxYMax meet"
    >
    <path stroke="${borderColor}" fill="${borderColor}" d="M423.8,215.6L321.1,0v241.3" />
    <path fill="${lighterBorderColor}" d="M0,321.7l423.8-106.1v265.5" />
    <path fill="${borderColor}" d="M848,640L0,321.7L211.6,640H848z" />
  </svg>
`;

const List = styled.ul.attrs({
  hidden: ({ isExpanded }) => isExpanded ? '"false"' : '"true"',
})`
  display: flex;
  flex-flow: column nowrap;
  height: ${({ isExpanded }) => isExpanded ? 'auto' : 0};
  list-style: none;
  margin: 0;
  margin-top: ${BASE_LINE_HEIGHT}rem;
  position: relative;
  width: ${({ isExpanded }) => isExpanded ? 'auto' : 0};
  z-index: 2;
  border: 0.2rem solid ${borderColor};
  border-radius: 0.5rem;
  border-top-right-radius: 0;
  background-color: ${backgroundColor};
  padding: ${BASE_LINE_HEIGHT}rem;
  padding-left: ${BASE_LINE_HEIGHT * 2}rem;
  transform: scale(${({ isExpanded }) => isExpanded ? 1 : 0});
  transform-origin: right top;
  transition: transform 0.1s ease-in-out;

  @media (max-width: ${({ bigScreenBreakpoint }) => `${bigScreenBreakpoint - 1}px`}) {
    &::before {
      position: absolute;
      content: "";
      height: ${BASE_LINE_HEIGHT}rem;
      left: 0;
      top: -0.15rem;
      transform: translateY(-100%);
      width: 100%;
      z-index: -1;
      background-image: ${() => `url(${svgToURL(arrowSVG)})`};
      background-position: right center;
      background-repeat: no-repeat;
      background-size: contain;
      color: inherit;
    }
  }

  & li:not(:last-child) {
    margin-bottom: ${BASE_LINE_HEIGHT}rem;
  }

  @media (min-width: ${({ bigScreenBreakpoint }) => `${bigScreenBreakpoint}px`}) {
    transform: scale(1);
    background-color: transparent;
    border: 0;
  }
`;

List.propTypes = {
  bigScreenBreakpoint: PropTypes.number.isRequired,
  isExpanded: PropTypes.bool,
};

export default List;
