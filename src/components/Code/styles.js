import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
	whiteText: {
		color: "white",
		fontSize: 20,
	},
	greenText: {
		color: "green",
		fontSize: 20,
	},
	board: {
		backgroundColor: "#202020",
		borderRadius: 5,
		width: "100%",
		padding: 20,
		display: "flex",
		flexDirection: "column",
	},
}));

export default styles;
