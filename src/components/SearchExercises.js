import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { exerciseApiUrl, exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({
	setExercises,
	selectedBodyPart,
	setSelectedBodyPart,
}) => {
	const [search, setSearch] = useState("");
	const [bodyParts, setBodyParts] = useState([]);

	useEffect(() => {
		const fetchExercisesData = async () => {
			const bodyPartData = await fetchData(
				exerciseApiUrl + "/bodyPartList",
				exerciseOptions
			);
			setBodyParts(["all", ...bodyPartData]);
		};

		fetchExercisesData();
	}, []);

	const handleSearch = async () => {
		if (!search) return;

		const exerciseData = await fetchData(exerciseApiUrl, exerciseOptions);

		const searchedExercises = exerciseData.filter(
			(exercise) =>
				exercise.name.toLowerCase().includes(search) ||
				exercise.target.toLowerCase().includes(search) ||
				exercise.equipment.toLowerCase().includes(search) ||
				exercise.bodyPart.toLowerCase().includes(search)
		);

		setSearch("");
		setExercises(searchedExercises);
	};

	return (
		<Stack alignItems="center" mt="37px" p="20px" justifyContent="center">
			<Typography
				fontWeight="700"
				sx={{
					fontSize: { xs: "30px", lg: "44px" },
				}}
				mb="50px"
				textAlign="center"
			>
				Awesome Exercises You Should Know
			</Typography>
			<Box position="relative" mb="72px">
				<TextField
					sx={{
						input: {
							fontWeight: "700",
							border: "none",
							borderRadius: "4px",
						},
						width: { xs: "350px", lg: "800px" },
						backgroundColor: "#fff",
						borderRadius: "40px",
					}}
					height="76px"
					value={search}
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
					placeholder="Search Exercises"
					type="text"
				/>
				<Button
					className="search-btn"
					sx={{
						backgroundColor: "#FF2625",
						color: "#fff",
						textTransform: "none",
						width: { xs: "80px", lg: "175px" },
						fontSize: { xs: "14px", lg: "20px" },
						height: "56px",
						justifyContent: "center",
						alignItems: "center",
						position: "absolute",
						right: "0",
					}}
					onClick={handleSearch}
				>
					Search
				</Button>
			</Box>
			<Box
				sx={{
					position: "relative",
					width: "100%",
					p: "20px",
				}}
			>
				<HorizontalScrollBar
					data={bodyParts}
					selectedBodyPart={selectedBodyPart}
					setSelectedBodyPart={setSelectedBodyPart}
					showBodyParts
				/>
			</Box>
		</Stack>
	);
};

export default SearchExercises;
