import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import BodyPart from "./BodyPart";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import ExerciseCard from "./ExerciseCard";

const LeftArrow = () => {
	const { scrollPrev } = useContext(VisibilityContext);

	return (
		<Typography onClick={() => scrollPrev()} className="left-arrow">
			<img src={LeftArrowIcon} alt="Left Arrow" />
		</Typography>
	);
};

const RightArrow = () => {
	const { scrollNext } = useContext(VisibilityContext);

	return (
		<Typography onClick={() => scrollNext()} className="right-arrow">
			<img src={RightArrowIcon} alt="Right Arrow" />
		</Typography>
	);
};

const HorizontalScrollBar = ({
	data,
	selectedBodyPart,
	setSelectedBodyPart,
	showBodyParts = false,
}) => {
	return (
		<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
			{data.map((item) => (
				<Box
					key={item.id ?? item}
					itemId={item.id ?? item}
					title={item.id ?? item}
					m="0 40px"
				>
					{showBodyParts ? (
						<BodyPart
							data={item}
							selectedBodyPart={selectedBodyPart}
							setSelectedBodyPart={setSelectedBodyPart}
						/>
					) : <ExerciseCard data={item} /> }
				</Box>
			))}
		</ScrollMenu>
	);
};

export default HorizontalScrollBar;
