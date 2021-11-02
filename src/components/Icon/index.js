import React from "react";
import styles from "./styles";

const Icon = ({ component }) => {
	const classes = styles();

	return <div className={classes.container}>{component}</div>;
};

export default Icon;
