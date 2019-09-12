
/*!
 * @author Gregor Adams <greg@pixelass.com>
 * @name @react-osx/focus-ring
 * @version 0.0.0
 * @see git+https://github.com/dekk-app/react-osx.git
 */

import React from 'react';
import styled, { keyframes } from 'styled-components';

const focus = keyframes `
	from {
		box-shadow: 0 0 0 16px hsl(215, 88%, 58%, 0);
	}
	to {
		box-shadow: 0 0 0 4px hsl(215, 88%, 58%, 0.6);
	}
`;
const StyledFocusRing = styled.span `
	animation: noop 0.2s ease-in-out forwards;
	border-radius: inherit;
	bottom: 1px;
	left: 1px;
	pointer-events: none;
	position: absolute;
	right: 1px;
	top: 1px;
`;

const FocusRing = () => React.createElement(StyledFocusRing, null);

export { FocusRing, StyledFocusRing, focus };
