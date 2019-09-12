import {Button, ButtonGroup, GroupButton, theme as buttonTheme} from "@react-osx/button";
import {Checkbox, theme as checkboxTheme} from "@react-osx/checkbox";
import React from "react";
import {ThemeProvider} from "styled-components";

export interface HomeState {
	name?: string;
}

const theme = {
	dark: {
		button: buttonTheme.dark,
		checkbox: checkboxTheme.dark
	},
	light: {}
};

export class Home extends React.Component {
	public render() {
		return (
			<ThemeProvider theme={theme.dark}>
				<div
					style={{
						background: "hsl(120, 1%, 19%)",
						color: "white",
						padding: 100
					}}>
					<h2>Checkbox</h2>
					<Checkbox/>
					<br/>
					<Checkbox label="Body" checked/>
					<br/>
					<Checkbox label="Title"/>
					<h2>Buttons</h2>
					<h3>Small</h3>
					<ButtonGroup>
						<Button isSelected>Selected</Button>
						<Button isActive>Active</Button>
						<Button>Default</Button>
					</ButtonGroup>
					<h3>Medium</h3>
					<ButtonGroup>
						<Button variation="medium" isSelected>
							Selected
						</Button>
						<Button variation="medium" isActive>
							Active
						</Button>
						<Button variation="medium">Default</Button>
					</ButtonGroup>
					<h3>Large</h3>
					<ButtonGroup>
						<Button variation="large" isSelected>
							Selected
						</Button>
						<Button variation="large" isActive>
							Active
						</Button>
						<Button variation="large">Default</Button>
					</ButtonGroup>
					<h3>Huge</h3>
					<div style={{width: 300}}>
						<Button variation="huge" isSelected fullWidth>
							Selected
						</Button>
						<br />
						<br />
						<Button variation="huge" isActive fullWidth>
							Active
						</Button>
						<br />
						<br />
						<Button variation="huge" fullWidth>
							Default
						</Button>
					</div>
					<h3>Grouped</h3>
					<GroupButton>
						<Button variation="medium" kind="monochrome" isActive>
							A
						</Button>
						<Button variation="medium" kind="monochrome" isActive>
							B
						</Button>
						<Button variation="medium" kind="monochrome" isActive>
							C
						</Button>
						<Button variation="medium" kind="monochrome">
							D
						</Button>
						<Button variation="medium" kind="monochrome">
							E
						</Button>
					</GroupButton>
					<br />
					<br />
					<GroupButton>
						<Button variation="medium" kind="monochrome" isSelected>
							Overview
						</Button>
						<Button variation="medium" kind="monochrome">
							Display
						</Button>
						<Button variation="medium" kind="monochrome">
							Storage
						</Button>
						<Button variation="medium" kind="monochrome">
							Support
						</Button>
						<Button variation="medium" kind="monochrome">
							Service
						</Button>
					</GroupButton>
				</div>
			</ThemeProvider>
		);
	}
}
