
/*!
 * @author Gregor Adams <greg@pixelass.com>
 * @name @react-osx/button
 * @version 0.0.0
 * @see git+https://github.com/dekk-app/react-osx.git
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var focusRing = require('@react-osx/focus-ring');
var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const StyledButton = styled__default.button `
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

		${focusRing.StyledFocusRing} {
			animation-name: ${focusRing.focus};
		}
	}

	&[disabled] {
		pointer-events: none;
		opacity: 0.5;
	}

	${({ theme: { button }, variation, isActive, isSelected, fullWidth, kind }) => styled.css `
		border-radius: ${button.default.borderRadius};
		font-size: ${button[variation].font.size};
		font-family: ${button.default.font.family};
		font-weight: ${button.default.font.weight};
		height: ${button[variation].height};
		padding: ${button[variation].padding};
		width: ${fullWidth ? "100%" : "max-content"};

		${(state => styled.css `
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
const StyledButtonGroup = styled__default.div `
	display: grid;

	${({ theme: { button }, children }) => styled.css `
		grid-template-columns: repeat(${React.Children.count(children)}, max-content);
		grid-gap: ${button.group.gap};
	`};
`;
const StyledGroupButton = styled__default.div `
	display: flex;
	width: max-content;

	${StyledButton} {
		border-radius: 0;
		border-right-width: 1px;
	}

	${({ theme: { button } }) => styled.css `
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
//# sourceMappingURL=styled-button.js.map

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
const Button = (_a) => {
    var { children, variation, onMouseDown } = _a, props = __rest(_a, ["children", "variation", "onMouseDown"]);
    // Prevent focus on mousedown.
    const handleMouseDown = React.useCallback(e => {
        e.preventDefault();
        onMouseDown && onMouseDown(e);
    }, [onMouseDown]);
    return (React.createElement(StyledButton, Object.assign({ variation: variation }, props, { onMouseDown: handleMouseDown }),
        React.createElement(focusRing.FocusRing, null),
        children));
};
Button.defaultProps = {
    variation: "small",
    kind: "default"
};
const ButtonGroup = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return React.createElement(StyledButtonGroup, Object.assign({}, props), children);
};
const GroupButton = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return React.createElement(StyledGroupButton, Object.assign({}, props), children);
};
//# sourceMappingURL=button.js.map

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
const theme = {
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

exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.GroupButton = GroupButton;
exports.theme = theme;
