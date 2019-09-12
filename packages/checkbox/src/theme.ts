import {colors} from "@react-osx/colors";

const decoration = {
	shadow: {
		1: "0 1px 2px hsla(0, 0%, 0%, 0.2), 0 0 0 1px hsla(0, 0%, 0%, 0.1)",
		2: "1px 1px 2px hsla(0, 0%, 0%, 0.1)"
	}
};

export const theme = {
	dark: {
		check: {
			default: {
				color: colors.white,
				boxShadow: decoration.shadow[2]
			}
		},
		default: {
			border: {
				color: colors.grey[500]
			},
			borderRadius: "3px",
			boxShadow: `inset 0 0.5px 0.5px 0 ${colors.grey[500]}, ${decoration.shadow[1]}`,
			font: {
				size: "12px",
				weight: "normal",
				family: "-apple-system, sans-serif"
			},
			color: colors.white,
			background: {
				image: `linear-gradient(0deg, ${colors.grey[650]}, ${colors.grey[550]})`,
				color: colors.grey[650]
			},
			active: {
				border: {
					color: colors.blue[300]
				},
				boxShadow: `inset 0 0.5px 0.5px 0 ${colors.blue[300]}, ${decoration.shadow[1]}`,
				color: colors.white,
				background: {
					image: `linear-gradient(0deg, ${colors.blue[500]}, ${colors.blue[450]})`,
					color: colors.blue[500]
				}
			}
		}
	}
};
