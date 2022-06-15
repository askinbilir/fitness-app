import { Stack, Typography } from "@mui/material";
import React from "react";

const BodyPart = ({ data, selectedBodyPart, setSelectedBodyPart }) => {
	return (
		<Stack
			type="button"
			alignItems="center"
			justifyContent="center"
			className="bodyPart-card"
			sx={{
				borderTop: selectedBodyPart === data && "4px solid #FF2525",
				backgroundColor: "#fff",
				borderBottomLeftRadius: "20px",
				width: "270px",
				height: "270px",
				cursor: "pointer",
				gap: "47px",
			}}
			onClick={() => {
				setSelectedBodyPart(data);
				window.scrollTo({
					top: 1750,
					left: 100,
					behavior: "smooth",
				});
			}}
		>
			<img
				src={`bodyParts/${data}.png`}
				alt={`${data} Icon`}
				style={{
					width: "100px",
					height: "100px",
					objectFit: "contain",
				}}
			/>
			<Typography
				fontSize="24px"
				fontWeight="bold"
				color="#3A1212"
				textTransform="capitalize"
			>
				{data}
			</Typography>
		</Stack>
	);
};

export default BodyPart;
