import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { youtubeSearchUrl } from "../utils/fetchData";
import Loader from "./Loader";

const ExerciseVideos = ({ data, name }) => {
	return (
		<Box
			sx={{
				marginTop: { xs: "20px", lg: "200px" },
			}}
			p="20px"
		>
			<Typography variant="h4" mb="35px">
				Watch
				<span style={{ color: "#FF2625", textTransform: "capitalize" }}>
					{" " + name + " "}
				</span>
				exercise videos
			</Typography>
			<Stack
				justifyContent="flex-start"
				flexWrap="wrap"
				alignItems="center"
				sx={{
					flexDirection: { lg: "row" },
					gap: { xs: "0", lg: "110px" },
				}}
			>
				{data.slice(0, 3).map((item, index) => (
					<a
						key={`video-${index}-${name}`}
						className="exercise-video"
						href={youtubeSearchUrl + item.video.videoId}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={item.video.thumbnails[0].url} alt={item.video.title} />
						<Box>
							<Typography variant="h5" color="#000">
								{item.video.title}
							</Typography>
							<Typography variant="h6" color="#000">
								{item.video.channelName}
							</Typography>
						</Box>
					</a>
				))}
			</Stack>
		</Box>
	);
};

export default ExerciseVideos;
