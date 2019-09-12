const colors = {
	white: "hsl(0, 0%, 100%)",
	black: "hsl(0, 0%, 0%)",
	blue: {
		600: "hsl(215, 75%, 51%)",
		500: "hsl(215, 85%, 55%)",
		200: "hsl(214, 88%, 69%)",
		100: "hsl(214, 82%, 75%)"
	},
	grey: {
		600: "hsl(0, 0%, 34%)",
		300: "hsl(0, 0%, 43%)",
		200: "hsl(0, 0%, 51%)",
		100: "hsl(60, 1%, 79%)",
		50: "hsl(60, 3%, 88%)"
	}
};

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
				color: colors.grey[200]
			},
			borderRadius: "3px",
			boxShadow: `inset 0 0.5px 0.5px 0 ${colors.grey[200]}, ${decoration.shadow[1]}`,
			font: {
				weight: "normal",
				family: "-apple-system, sans-serif"
			},
			color: colors.white,
			background: {
				image: `linear-gradient(0deg, ${colors.grey[600]}, ${colors.grey[300]})`,
				color: colors.grey[600]
			},
			active: {
				border: {
					color: colors.blue[200]
				},
				boxShadow: `inset 0 0.5px 0.5px 0 ${colors.blue[200]}, ${decoration.shadow[1]}`,
				color: colors.white,
				background: {
					image: `linear-gradient(0deg, ${colors.blue[600]}, ${colors.blue[500]})`,
					color: colors.blue[600]
				}
			}
		}
	}
};
