import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ data }) => {
	return (
		<Link className="exercise-card" to={`/exercise/${data.id}`}>
			<img src={data.gifUrl} alt={data.name} loading="lazy" />
			<Stack direction="row">
				<CardBadge data={data.bodyPart} color="#FFA9A9" />
				<CardBadge data={data.target} color="#FCC757" />
			</Stack>
			<Typography
				ml="21px"
				color="#000"
                fontSize="22px"
				fontWeight="bold"
				mt="11px"
				pb="10px"
				textTransform="capitalize"
			>
				{data.name}
			</Typography>
		</Link>
	);
};

const CardBadge = ({ data, color }) => (
	<Button
		sx={{
			ml: "21px",
			color: "#fff",
			backgroundColor: color ?? "#FFA9A9",
			fontSize: "14px",
			borderRadius: "20px",
			textTransform: "capitalize",
		}}
	>
		{data}
	</Button>
);

export default ExerciseCard;
