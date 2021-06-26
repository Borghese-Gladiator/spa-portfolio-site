import styled from 'styled-components';

const IconButton = styled.button`
color: inherit; /* ensure button inherits theme color */
height: 48px;
width: 48px;
border-radius: 50%;
background-color: transparent;
background-repeat: no-repeat;
border: none;

box-shadow: 0 0 1px rgba(0, 0, 0, 0);
transform: perspective(1px) translateZ(0);
transition-property: color;
transition-duration: 0.3s;

&:hover {
  transform: scale(1.2);
}
`

export default IconButton;