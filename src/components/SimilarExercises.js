import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ data, title }) => {
	return (
		<Box
			sx={{
				mt: { xs: 0, lg: "100px" },
			}}
		>
			<Typography variant="h3" mb={5}>
				{title}
			</Typography>
			<Stack
				direction="row"
				sx={{
					p: "2",
					position: "relative",
				}}
			>
				{data ? <HorizontalScrollBar data={data} /> : <Loader />}
			</Stack>
		</Box>
	);
};

export default SimilarExercises;
