import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.jpg";

const HeroBanner = () => {
	return (
		<Box
			sx={{ mt: { lg: "40px", xs: "70px" }, ml: { sm: "50px" } }}
			position="relative"
			p="20px"
		>
			<Typography
				style={{
					color: "red",
					fontSize: "30px",
					fontFamily: "fantasy",
					fontWeight: "600",
				}}
			>
				The Gym
			</Typography>
			<Typography
            mb="23px"
            mt="25px"
				style={{
					fontWeight: "700",
				}}
				sx={{ fontSize: { lg: "44px", xs: "40px" } }}
			>
				Cursh Your Health <br /> And Fitness
			</Typography>
			<Typography
				style={{
					fontSize: "22px",
					lineHeight: "35px",
				}}
				mb={4}
                
			>
				Check out the most effective exercises
			</Typography>
			<Button variant="contained" color="error" href="#exercises" sx={{backgroundColor:"#ed1c24",padding:"10px"}}>
				Explore Exercises
			</Button>
			<Typography
				fontSize="200px"
				fontWeight={600}
				color="#ff2625"
				sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
			>
				Exercises
			</Typography>
			<img  src={HeroBannerImage} alt="banner" className="hero-banner-img" />
		</Box>
	);
};

export default HeroBanner;
