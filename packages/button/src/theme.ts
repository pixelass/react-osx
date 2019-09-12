import {colors} from "@react-osx/colors";

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
				color: colors.grey[500]
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
					color: colors.blue[300]
				},
				boxShadow: `inset 0 0.5px 0.5px 0 ${colors.blue[200]}, ${decoration.shadow[1]}`,
				color: colors.white,
				background: {
					image: `linear-gradient(0deg, ${colors.blue[500]}, ${colors.blue[450]})`,
					color: colors.blue[450]
				}
			}
		},
		monochrome: {
			border: {
				color: colors.grey[500]
			},
			boxShadow: `inset 0 0.5px 0.5px 0 ${colors.grey[200]}, ${decoration.shadow[1]}`,
			color: colors.white,
			background: {
				image: "none",
				color: colors.grey[600]
			},
			active: {
				border: {
					color: colors.grey[450]
				},
				boxShadow: `inset 0 0.5px 0.5px 0 ${colors.grey[150]}, ${decoration.shadow[1]}`,
				color: colors.white,
				background: {
					image: "none",
					color: colors.grey[550]
				}
			}
		},
		active: {
			border: {
				color: colors.blue[500]
			},
			boxShadow: `inset 0 0.5px 0.5px 0 ${colors.blue[200]}, ${decoration.shadow[1]}`,
			color: colors.white,
			background: {
				image: "none",
				color: colors.blue[500]
			},
			active: {
				border: {
					color: colors.blue[250]
				},
				boxShadow: `inset 0 0.5px 0.5px 0 ${colors.blue[200]}, ${decoration.shadow[1]}`,
				color: colors.white,
				background: {
					image: `linear-gradient(0deg, ${colors.blue[500]}, ${colors.blue[450]})`,
					color: colors.blue[450]
				}
			}
		},
		selected: {
			border: {
				color: colors.grey[300]
			},
			boxShadow: `inset 0 0.5px 0.5px 0 ${colors.grey[100]}, ${decoration.shadow[1]}`,
			color: colors.black,
			background: {
				image: "none",
				color: colors.grey[200]
			},
			active: {
				border: {
					color: colors.grey[250]
				},
				boxShadow: `inset 0 0.5px 0.5px 0 ${colors.white}, ${decoration.shadow[1]}`,
				color: colors.black,
				background: {
					image: "none",
					color: colors.grey[150]
				}
			}
		}
	}
};
