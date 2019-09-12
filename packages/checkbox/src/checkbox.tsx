import {FocusRing} from "@react-osx/focus-ring";
import React from "react";
import {
	StyledCheckbox,
	StyledCheckboxWrapper,
	StyledBox,
	StyledCheck,
	StyledCheckboxLabel
} from "./styled-checkbox";
import {OSXCheckbox} from "./types";

export const Checkbox: React.FC<OSXCheckbox.Props> = ({label, onMouseDown, onClick, onChange, onKeyDown, checked, ...props}) => {
	const [isChecked, setChecked] = React.useState(checked);
	const handleClick = React.useCallback(
		e => {
			e.preventDefault();
			onClick && onClick(e);
			setChecked(state => !state);
		},
		[onClick]
	);

	const handleKeyDown = React.useCallback(
		e => {
			if (e.which === 32) {
				e.preventDefault();
				setChecked(state => !state);
			}
			onKeyDown && onKeyDown(e);
		},
		[onKeyDown]
	);

	const handleMouseDown = React.useCallback(
		e => {
			e.preventDefault();
			onMouseDown && onMouseDown(e);
		},
		[onMouseDown]
	);

	const handleChange = React.useCallback(
		e => {
			onChange && onChange(e);
		},
		[onChange]
	);
	return (
		<StyledCheckboxWrapper onClick={handleClick} onMouseDown={handleMouseDown}>
			<StyledCheckbox
				{...props}
				checked={isChecked}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			<StyledBox>
				<FocusRing />
				{isChecked && <StyledCheck />}
			</StyledBox>
			{label && <StyledCheckboxLabel>{label}</StyledCheckboxLabel>}
		</StyledCheckboxWrapper>
	);
};

Checkbox.defaultProps = {
	checked: false
};
