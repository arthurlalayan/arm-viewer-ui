import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./MaterialTitlePanel";

const styles = {
	sidebar: {
		width: 256,
		height: "100%"
	},
	sidebarLink: {
		display: "block",
		padding: "16px 0px",
		color: "#757575",
		textDecoration: "none"
	},
	divider: {
		margin: "8px 0",
		height: 1,
		backgroundColor: "#757575"
	},
	content: {
		padding: "16px",
		height: "50%",
		backgroundColor: "white"
	}
};

function SidebarContent(props) {
	const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;
	const product = 0; // todo AL
	return (
		<MaterialTitlePanel title="Menu" style={style}>
			<div style={styles.content}>
				<span style={styles.sidebarLink} onClick={() => props.handleProductChange(product)}>
					Products
				</span>
				<div style={styles.divider}/>
			</div>
		</MaterialTitlePanel>
	);
}

SidebarContent.propTypes = {
	style: PropTypes.object
};

export default SidebarContent;
