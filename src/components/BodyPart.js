import React from "react";
import {Stack,Typography} from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({item,setBodypart,bodypart}) => {
	return (
        <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            borderTop:bodypart===item? "4px solid #D76B2D" : "",
            backgroundColor:'#fff',
            borderBottomLeftRadius:"20px",
            width:"270px",
            height:"280px",
            cursor:"pointer",
            gap:"47px"
        }}
        >
            <img src={Icon} alt="dumbbel" style ={{width:"100px",height:"100px"}}/>
        </Stack>
    );
};

export default BodyPart;
