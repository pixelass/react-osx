import {StyledFocusRing, focus} from "@react-osx/focus-ring";
import React from "react";
import styled, {css} from "styled-components";
import {OSXButton} from "./types";

export const StyledButton = styled.button<OSXButton.Props>`
	align-content: center;
	align-items: center;
	border: 0 solid;
	display: inline-flex;
	justify-content: center;
	line-height: 1;
	position: relative;
	text-align: center;
	user-select: none;

	&:focus {
		outline: 0;
		z-index: 1;

		${StyledFocusRing} {
			animation-name: ${focus};
		}
	}

	&[disabled] {
		pointer-events: none;
		opacity: 0.5;
	}

	${({theme: {button}, variation, isActive, isSelected, fullWidth, kind}) => css`
		border-radius: ${button.default.borderRadius};
		font-size: ${button[variation].font.size};
		font-family: ${button.default.font.family};
		font-weight: ${button.default.font.weight};
		height: ${button[variation].height};
		padding: ${button[variation].padding};
		width: ${fullWidth ? "100%" : "max-content"};

		${(state => css`
			background-color: ${button[state].background.color};
			background-image: ${button[state].background.image};
			border-color: ${button[state].border.color};
			box-shadow: ${button[state].boxShadow};
			color: ${button[state].color};
			
			&:active {
			background-color: ${button[state].active.background.color};
			background-image: ${button[state].active.background.image};
			border-color: ${button[state].active.border.color};
			box-shadow: ${button[state].active.boxShadow};
			color: ${button[state].active.color};
		}
		`)(isActive ? "active" : isSelected ? "selected" : kind)}
	`};
`;

export const StyledButtonGroup = styled.div`
	display: grid;

	${({theme: {button}, children}) => css`
		grid-template-columns: repeat(${React.Children.count(children)}, max-content);
		grid-gap: ${button.group.gap};
	`};
`;

export const StyledGroupButton = styled.div`
	display: flex;
	width: max-content;

	${StyledButton} {
		border-radius: 0;
		border-right-width: 1px;
	}

	${({theme: {button}}) => css`
		${StyledButton} {
			&:first-child {
				border-radius: ${button.default.borderRadius} 0 0 ${button.default.borderRadius};
			}

			&:last-child {
				border-right: 0;
				border-radius: 0 ${button.default.borderRadius} ${button.default.borderRadius} 0;
			}
		}
	`};
`;
