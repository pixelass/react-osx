import React from "react";
import styled, {keyframes} from "styled-components";

export const focus = keyframes`
	from {
		box-shadow: 0 0 0 16px hsl(215, 88%, 58%, 0);
	}
	to {
		box-shadow: 0 0 0 4px hsl(215, 88%, 58%, 0.6);
	}
`;

export const StyledFocusRing = styled.span`
	animation: noop 0.2s ease-in-out forwards;
	border-radius: inherit;
	bottom: 1px;
	left: 1px;
	pointer-events: none;
	position: absolute;
	right: 1px;
	top: 1px;
`;
