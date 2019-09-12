import React from "react";

export namespace OSXButton {
	export type Variation = "small" | "medium" | "large" | "huge"
	export type Kind = "monochrome" | "default";
	export interface Props {
		autoFocus?: boolean;
		disabled?: boolean;
		fullWidth?: boolean;
		isActive?: boolean;
		isSelected?: boolean;
		onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
		onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void;
		variation?: Variation;
		kind?: Kind;
	}
}
