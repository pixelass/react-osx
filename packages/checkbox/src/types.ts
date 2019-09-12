import React from "react";

export namespace OSXCheckbox {
	export interface Props {
		autoFocus?: boolean;
		disabled?: boolean;
		fullWidth?: boolean;
		label?: string;
		checked?: boolean;
		onMouseDown?: (e: React.MouseEvent<HTMLInputElement>) => void;
		onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
		onKeyDown?: (e: React.MouseEvent<HTMLInputElement>) => void;
		onChange?: (e: React.MouseEvent<HTMLInputElement>) => void;
	}
}
