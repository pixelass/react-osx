import {StyledFocusRing, focus} from "@react-osx/focus-ring";
import React from "react";
import styled, {css} from "styled-components";

export const StyledBox = styled.span`
	position: relative;
	display: block;
	height: 12px;
	width: 12px;
	border-radius: 3px;
	${({theme: {checkbox}}) => css`
		background-color: ${checkbox.default.background.color};
		background-image: ${checkbox.default.background.image};
		box-shadow: ${checkbox.default.boxShadow};
		color: ${checkbox.default.color};
	`}
`;

export const StyledCheck = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	height: 8px;
	width: 4px;
	margin-top: -0.7px;
	transform: translate(-50%, -50%) rotate(45deg);
	font-size: 8px;
	${({theme: {checkbox}}) => css`
		box-shadow: inset -2px -2px 0 0 ${checkbox.check.default.color},
			${checkbox.check.default.boxShadow};
	`}
`;

export const StyledCheckbox = styled.input.attrs({
	type: "checkbox"
})`
	position: absolute;
	top: 0;
	right: 100%;
	margin: 0;
	opacity: 0;
	
	&:checked + ${StyledBox} {
		${({theme: {checkbox}}) => css`
			background-color: ${checkbox.default.active.background.color};
			background-image: ${checkbox.default.active.background.image};
			box-shadow: ${checkbox.default.active.boxShadow};
			color: ${checkbox.default.active.color};
		`}
	}

	&:focus {
		+ ${StyledBox} ${StyledFocusRing} {
			z-index: 1;
			animation-name: ${focus};
		}
	}
`;

export const StyledCheckboxWrapper = styled.label`
	position: relative;
	display: inline-flex;
	font-family: -apple-system, sans-serif;
	${({theme: {checkbox}}) => css`
		font-family: ${checkbox.default.font.family};
		font-weight: ${checkbox.default.font.weight};
		font-size: ${checkbox.default.font.size};
	`}
`;

export const StyledCheckboxLabel = styled.span`
	padding: 0 0 0 8px;
`;
