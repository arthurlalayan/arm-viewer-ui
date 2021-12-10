import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { changeProduct } from "../sidebarSlice";
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
	const dispatch = useDispatch();
	const style = props.style ? { ...styles.sidebar, ...props.style } : styles.sidebar;
	return (
		<MaterialTitlePanel title="Menu" style={style}>
			<div style={styles.content}>
				<span style={styles.sidebarLink}>
					Products
				</span>
				<div>
					<button onClick={() => dispatch(changeProduct({product: 1}))}>1</button>
				</div>
				<button onClick={() => dispatch(changeProduct({product: 2}))}>2</button>
				<div style={styles.divider} />
			</div>
		</MaterialTitlePanel>
	);
}
