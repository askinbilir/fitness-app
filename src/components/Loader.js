import { Stack } from "@mui/material";
import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
	return (
		<Stack
			direction="row"
			justifyContent="center"
			alignItems="center"
			width="100%"
		>
			<Oval color="rgba(0,0,0,0.5)" secondaryColor="rgba(0,0,0,0.4)" />
		</Stack>
	);
};

export default Loader;
