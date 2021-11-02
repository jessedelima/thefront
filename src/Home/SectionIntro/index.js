import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import LayersIcon from "@material-ui/icons/Layers";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CodeIcon from "@material-ui/icons/Code";
import { Title, Body, Subtitle } from "../../components/Text";
import Icon from "../../components/Icon";
import styles from "./styles";

const SectionIntro = () => {
	const classes = styles();

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		buscarDadosBanco();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const buscarDadosBanco = () => {
		const dados = [
			{
				icone: <LayersIcon className={classes.icon} />,
				titulo: "Build accessible React apps with speed",
				texto: "Build a beautiful, modern website with flexible, fully customizable, atomic Material UI components.",
			},
			{
				icone: <FavoriteIcon className={classes.icon} />,
				titulo: "Built for developers",
				texto: "TheFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.",
			},
			{
				icone: <CodeIcon className={classes.icon} />,
				titulo: "Documentation for everything",
				texto: "We've written extensive documentation for components and tools, so you never have to reverse engineer anything.",
			},
		];

		setPosts(dados);
	};

	return (
		<Container maxWidth="lg">
			<Grid container justify="center">
				<Grid item md={6}>
					<Title
						text="Build accessible React apps with speed"
						style={{ textAlign: "center" }}
					/>
					<Body
						text="Build a beautiful, modern website with flexible, fully customizable, atomic Material UI components."
						style={{ textAlign: "center", color: "#718096" }}
					/>
				</Grid>
			</Grid>

			<Grid container justify="center" spacing={8}>
				{posts.map((item) => (
					<Grid item md={4}>
						<Icon component={item.icone} />
						<Subtitle text={item.titulo} />
						<Body text={item.texto} style={{ color: "#718096" }} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default SectionIntro;
