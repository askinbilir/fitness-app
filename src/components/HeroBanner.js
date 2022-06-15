import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
	return (
		<Box
			sx={{
				mt: { xs: "70px", lg: "212px" },
				ml: { sm: "50px" },
			}}
			position="relative"
			p="20px"
		>
			<Typography color="#FF2625" fontWeight="600" fontSize="26px">
				Fitness Club
			</Typography>
			<Typography
				fontWeight="700"
				sx={{
					fontSize: { xs: "40px", lg: "44px" },
				}}
				mt="30px"
				mb="23px"
			>
				Sweat, Smile <br /> and Repeat
			</Typography>
			<Typography fontSize="22px" lineHeight="35px" mb={4}>
				Check out the most effective exercises
			</Typography>
			<Button
				variant="contained"
				color="error"
				sx={{
					backgroundColor: "#FF2625",
					padding: "15px",
				}}
				onClick={() => {
					// scroll to #exercises
					const element = document.getElementById("exercises");
					element.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}}
			>
				Explore Exercises
			</Button>
			<Typography
				fontWeight="600"
				color="#FF2625"
				sx={{
					opacity: 0.1,
					display: { xs: "none", lg: "block" },
				}}
				fontSize="200px"
			>
				Exercise
			</Typography>
			<img src={HeroBannerImage} alt="Banner" className="hero-banner-img" />
		</Box>
	);
};

export default HeroBanner;
