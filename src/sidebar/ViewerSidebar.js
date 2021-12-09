import React from "react";
import Sidebar from "react-sidebar";
import SidebarContent from "./helper/SidebarContent";
import MaterialTitlePanel from "./helper/MaterialTitlePanel";
import Viewer from "../viewer/Viewer";

class ViewerSidebar extends React.Component {

	styles = {
		contentHeaderMenuLink: {
			textDecoration: "none",
			color: "white",
			padding: 8
		},
		content: {
			padding: "16px"
		}
	};

	constructor(props) {
		super(props);
		this.state = {
			product: null, // todo AL
			docked: true,
			open: true,
			transitions: true,
			touch: true,
			shadow: true,
			pullRight: false,
			touchHandleWidth: 20,
			dragToggleDistance: 30
		};
		this.onSetOpen = this.onSetOpen.bind(this);
		this.menuButtonClick = this.menuButtonClick.bind(this);
		this.handleProductChange = this.handleProductChange.bind(this);
	}

	onSetOpen(open) {
		this.setState({open});  // todo AL
	}

	menuButtonClick(ev) {
		ev.preventDefault();
		this.onSetOpen(!this.state.open); // todo AL
	}

	handleProductChange(product) {
		this.setState({product: product}); // todo AL
	}

	render() {
		const sidebar = <SidebarContent handleProductChange={this.handleProductChange}/>;
		const contentHeader = (<span> Arm Viewer</span>);
		const sidebarProps = {
			sidebar,
			docked: this.state.docked,
			sidebarClassName: "custom-sidebar-class",
			contentId: "custom-sidebar-content-id",
			open: this.state.open,
			touch: this.state.touch,
			shadow: this.state.shadow,
			pullRight: this.state.pullRight,
			touchHandleWidth: this.state.touchHandleWidth,
			dragToggleDistance: this.state.dragToggleDistance,
			transitions: this.state.transitions,
			onSetOpen: this.onSetOpen
		};

		return (
			<Sidebar {...sidebarProps}>
				<MaterialTitlePanel title={contentHeader}>
					<div className="App">
						<Viewer center={[40.1, 46]} zoom={8} product={this.state.product}/>
					</div>
				</MaterialTitlePanel>
			</Sidebar>
		);
	}
}

export default ViewerSidebar;
