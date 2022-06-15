import { Box } from "@mui/material";
import React, { useState } from "react";
import { Exercises, HeroBanner, SearchExercises } from "../components";

const Home = () => {
	const [exercises, setExercises] = useState([]);
	const [selectedBodyPart, setSelectedBodyPart] = useState("all");

	return (
		<Box>
			<HeroBanner />
			<SearchExercises
				setExercises={setExercises}
				selectedBodyPart={selectedBodyPart}
				setSelectedBodyPart={setSelectedBodyPart}
			/>
			<Exercises
				exercises={exercises}
				setExercises={setExercises}
				selectedBodyPart={selectedBodyPart}
			/>
		</Box>
	);
};

export default Home;
