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
		600: "hsl(0, 0%, 39%)",
		300: "hsl(0, 0%, 45%)",
		200: "hsl(0, 0%, 51%)",
		100: "hsl(60, 1%, 79%)",
		50: "hsl(60, 3%, 88%)"

	}
};

const decoration = {
	shadow: {
		1: "0 1px 2px hsla(0, 0%, 0%, 0.2), 0 0 0 1px hsla(0, 0%, 0%, 0.1)"
	}
};

export const theme = {
	dark: {
		small: {
			height: "16px",
			padding: "3px 8px",
			font: {
				size: "11px"
			}
		},
		medium: {
			height: "18px",
			padding: "3px 10px",
			font: {
				size: "12px"
			}
		},
		large: {
			height: "22px",
			padding: "5px 10px",
			font: {
				size: "12px"
			}
		},
		huge: {
			height: "30px",
			padding: "9px 16px",
			font: {
				size: "12px"
			}
		},
		group: {
			gap: "12px"
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
				image: "none",
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
		},
		monochrome: {
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
				image: "none",
				color: colors.grey[600]
			},
			active: {
				border: {
					color: colors.grey[200]
				},
				boxShadow: `inset 0 0.5px 0.5px 0 ${colors.grey[200]}, ${decoration.shadow[1]}`,
				color: colors.white,
				background: {
					image: "none",
					color: colors.grey[300]
				}
			}
		},
		active: {
			border: {
				color: colors.blue[200]
			},
			boxShadow: `inset 0 0.5px 0.5px 0 ${colors.blue[200]}, ${decoration.shadow[1]}`,
			color: colors.white,
			background: {
				image: "none",
				color: colors.blue[600]
			},
			active: {
				border: {
					color: colors.blue[100]
				},
				boxShadow: `inset 0 0.5px 0.5px 0 ${colors.blue[100]}, ${decoration.shadow[1]}`,
				color: colors.white,
				background: {
					image: `linear-gradient(0deg, ${colors.blue[600]}, ${colors.blue[500]})`,
					color: colors.blue[500]
				}
			}
		},
		selected: {
			border: {
				color: colors.grey[600]
			},
			boxShadow: `inset 0 0.5px 0.5px 0 ${colors.grey[50]}, ${decoration.shadow[1]}`,
			color: colors.black,
			background: {
				image: "none",
				color: colors.grey[100]
			},
			active: {
				border: {
					color: colors.grey[500]
				},
				boxShadow: `inset 0 0.5px 0.5px 0 ${colors.white}, ${decoration.shadow[1]}`,
				color: colors.black,
				background: {
					image: "none",
					color: colors.grey[50]
				}
			}
		}
	}
};
