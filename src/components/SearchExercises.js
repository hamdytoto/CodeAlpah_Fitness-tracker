import React, { useState, useEffect } from "react";
import { Button, Stack, TextField, Box, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar"; 
const SearchExercises = (setExercises,bodyPart,setBodyPart) => {
	const [search, setSearch] = useState("");
	const [bodyParts, setBodyParts] = useState([]);
	useEffect(() => {
		const fetchExercisesData = async () => {
			const bodyPartsData = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
				exerciseOptions
			);
			setBodyParts(["all", ...bodyPartsData]);
		};
		fetchExercisesData();
	}, []);
	const handleSearch = async () => {
		if (search) {
			const exercisesData = await fetchData(
				"https://exercisedb.p.rapidapi.com/exercises",
				exerciseOptions
			);
			// console.log(exerciesData);
			const searchedExercises = exercisesData.filter(
				(exercise) => exercise.name.toLowerCase().includes(search) 
                ||exercise.target.toLowerCase().includes(search) 
                ||exercise.equipment.toLowerCase().includes(search)
                ||exercise.bodyPart.toLowerCase().includes(search)
			);
			setSearch('');
			setExercises(searchedExercises);
		}
	};
	return (
		<Stack alignItems="center" justifyContent="center" mt="37px" padding="20px">
			<Typography
				mb="50px"
				textAlign="center"
				fontWeight={700}
				sx={{ fontSize: { lg: "44px", xs: "30px" } }}
			>
				Awesome exerciese you <br /> should know
			</Typography>
			<Box position="relative" mb="72px">
				<TextField
					sx={{
						input: { fontWeight: "700", border: "none", borderRadius: "4px" },
						width: { lg: "800px", xs: "350px" },
						backgroundColor: "#fff",
						borderRadius: "40px",
					}}
					type="text"
					height="76px"
					value={search}
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
					placeholder="search Exercieses"
				/>
				<Button
					onClick={handleSearch}
					className="search-btn"
					sx={{
						bgcolor: " #ed1c24",
						color: "black",
						textTransform: "none",
						width: { lg: "174px", xs: "80px" },
						fontSize: { lg: "20px", xs: "14px" },
						height: "56px",
						position: "absolute",
						right: "0",
					}}
				>
					Search
				</Button>
			</Box>
			<Box sx={{ position: "relative", width: "100%", padding: "20px" }}>
				<HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
			</Box>
		</Stack>
	);
}; 

export default SearchExercises;
