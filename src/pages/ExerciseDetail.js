import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Detail, ExerciseVideos, SimilarExercises } from "../components";
import {
	exerciseDbApi,
	exerciseOptions,
	fetchData,
	youtubeOptions,
	youtubeSearchApi,
} from "../utils/fetchData";

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const [exerciseVideos, setExerciseVideos] = useState([]);
	const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
	const [equipmentExercises, setEquipmentExercises] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchExerciseData = async () => {
			const exerciseDetailData = await fetchData(
				`${exerciseDbApi}/exercises/exercise/${id}`,
				exerciseOptions
			);
			setExerciseDetail(exerciseDetailData);

			const exerciseVideoData = await fetchData(
				`${youtubeSearchApi}/search?query=${exerciseDetailData.name}`,
				youtubeOptions
			);
			setExerciseVideos(exerciseVideoData.contents);

			const targetMuscleExerciseData = await fetchData(
				`${exerciseDbApi}/exercises/target/${exerciseDetailData.target}`,
				exerciseOptions
			);
			setTargetMuscleExercises(targetMuscleExerciseData);

			const equipmentExerciseData = await fetchData(
				`${exerciseDbApi}/exercises/equipment/${exerciseDetailData.equipment}`,
				exerciseOptions
			);
			setEquipmentExercises(equipmentExerciseData);
		};

		fetchExerciseData();
	}, [id]);

	return (
		<Box>
			<Detail data={exerciseDetail} />
			<ExerciseVideos data={exerciseVideos} name={exerciseDetail.name} />
			<SimilarExercises
				data={targetMuscleExercises}
				title="Exercises that target the same muscle group"
			/>
			<SimilarExercises
				data={equipmentExercises}
				title="Exercises that use the same equipment"
			/>
		</Box>
	);
};

export default ExerciseDetail;
