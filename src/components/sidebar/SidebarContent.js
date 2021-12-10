import PropTypes from "prop-types";
import React from "react";
import Products from "../../components/products/Products";
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

SidebarContent.propTypes = {
	style: PropTypes.object
};

export default function SidebarContent(props) {
	const style = props.style ? { ...styles.sidebar, ...props.style } : styles.sidebar;
	return (
		<MaterialTitlePanel title="Menu" style={style}>
			<div style={styles.content}>
				<Products />
				{/* <div style={styles.divider} /> */}
			</div>
		</MaterialTitlePanel>
	);
}
