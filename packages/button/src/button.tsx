import {FocusRing} from "@react-osx/focus-ring";
import React from "react";
import {OSXButton} from "./types";
import {StyledButton, StyledButtonGroup, StyledGroupButton} from "./styled-button";

/**
 * Mac OS X button.
 * ### Variations:
 * - small
 * - medium
 * - large
 * - huge
 * @param children
 * @param variation
 * @param onMouseDown
 * @param props
 * @constructor
 */
export const Button: React.FC<OSXButton.Props> = ({children, variation, onMouseDown, ...props}) => {
	// Prevent focus on mousedown.
	const handleMouseDown = React.useCallback(e => {
		e.preventDefault();
		onMouseDown && onMouseDown(e);
	}, [onMouseDown]);
	return (
		<StyledButton variation={variation} {...props} onMouseDown={handleMouseDown}>
			<FocusRing/>
			{children}
		</StyledButton>
	);
};

Button.defaultProps = {
	variation: "small",
	kind: "default"
};

export const ButtonGroup: React.FC = ({children, ...props}) => {
	return <StyledButtonGroup {...props}>{children}</StyledButtonGroup>;
};


export const GroupButton: React.FC = ({children, ...props}) => {
	return <StyledGroupButton {...props}>{children}</StyledGroupButton>;
};
