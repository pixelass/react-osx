
/*!
 * @author Gregor Adams <greg@pixelass.com>
 * @name @react-osx/focus-ring
 * @version 0.0.0
 * @see git+https://github.com/dekk-app/react-osx.git
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

const focus = styled.keyframes `
	from {
		box-shadow: 0 0 0 16px hsl(215, 88%, 58%, 0);
	}
	to {
		box-shadow: 0 0 0 4px hsl(215, 88%, 58%, 0.6);
	}
`;
const StyledFocusRing = styled__default.span `
	animation: noop 0.2s ease-in-out forwards;
	border-radius: inherit;
	bottom: 1px;
	left: 1px;
	pointer-events: none;
	position: absolute;
	right: 1px;
	top: 1px;
`;

const FocusRing = () => React.createElement(StyledFocusRing, null);

exports.FocusRing = FocusRing;
exports.StyledFocusRing = StyledFocusRing;
exports.focus = focus;
