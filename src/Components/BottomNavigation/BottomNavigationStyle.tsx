import styled, { StyledComponent } from 'styled-components';

const BottomNavigationStyle: StyledComponent<"div", any, {}, never> = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 7vh;
	border-top: .5px solid grey;
`;

export default BottomNavigationStyle;
