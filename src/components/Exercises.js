import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { exerciseApiUrl, exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, selectedBodyPart }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const exercisesPerPage = 9;

	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
	const currentExercises = exercises.slice(
		indexOfFirstExercise,
		indexOfLastExercise
	);

	const onPageChange = (event, value) => {
		setCurrentPage(value);
		window.scrollTo({ top: 1750, behavior: "smooth" });
	};

  
	useEffect(() => {
    const fetchExerciseData = async () => {
			let exerciseData = [];

			if (selectedBodyPart === "all") {
				exerciseData = await fetchData(exerciseApiUrl, exerciseOptions);
			} else {
				exerciseData = await fetchData(
					exerciseApiUrl + "/bodyPart/" + selectedBodyPart,
					exerciseOptions
				);
			}

			setExercises(exerciseData);
		};

		fetchExerciseData();
	}, [selectedBodyPart, setExercises]);

	return (
		<Box
			id="exercises"
			sx={{
				mt: { lg: "110px" },
			}}
			mt="50px"
			p="20px"
		>
			<Typography variant="h3" mb="46px">
				Showing Results
			</Typography>
			<Stack
				direction="row"
				sx={{
					gap: { xs: "50px", lg: "110px" },
				}}
				flexWrap="wrap"
				justifyContent="center"
			>
				{currentExercises.map((exercise, index) => (
					<ExerciseCard key={`exercise-${index}-${exercise}`} data={exercise} />
				))}
			</Stack>
			<Stack mt="100px" alignItems="center">
				{exercises.length > exercisesPerPage && (
					<Pagination
						color="standard"
						shape="rounded"
						size="large"
						defaultPage={1}
						count={Math.ceil(exercises.length / exercisesPerPage)}
						page={currentPage}
						onChange={onPageChange}
					/>
				)}
			</Stack>
		</Box>
	);
};

export default Exercises;
