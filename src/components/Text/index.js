import React from "react";
import styles from "./styles";

const Title = ({ text, style }) => {
	const classes = styles();
	return (
		<h2 className={classes.title} style={style}>
			{text}
		</h2>
	);
};

const Subtitle = ({ text, style }) => {
	const classes = styles();
	return (
		<h3 className={classes.subtitle} style={style}>
			{text}
		</h3>
	);
};

const H3 = ({ text, style }) => {
	const classes = styles();
	return (
		<h3 className={classes.h3} style={style}>
			{text}
		</h3>
	);
};

const Body = ({ text, style }) => {
	const classes = styles();
	return (
		<p className={classes.body} style={style}>
			{text}
		</p>
	);
};

export { Title, Subtitle, Body, H3 };
