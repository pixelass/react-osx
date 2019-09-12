import React from "react";
export declare namespace OSXButton {
    type Variation = "small" | "medium" | "large" | "huge";
    type Kind = "monochrome" | "default";
    interface Props {
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
//# sourceMappingURL=types.d.ts.map