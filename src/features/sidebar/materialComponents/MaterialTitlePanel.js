import PropTypes from "prop-types";
import React from "react";

const styles = {
	root: {
		fontFamily:
			'"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
		fontWeight: 300
	},
	header: {
		backgroundColor: "#016462",
		color: "white",
		padding: "16px",
		fontSize: "1.5em"
	}
};


MaterialTitlePanel.propTypes = {
	style: PropTypes.object,
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	children: PropTypes.object
};

export default function MaterialTitlePanel(props) {
	const rootStyle = props.style ? { ...styles.root, ...props.style } : styles.root;
	return (
		<div style={rootStyle}>
			<div style={styles.header}>{props.title}</div>
			{props.children}
		</div>
	);
};
