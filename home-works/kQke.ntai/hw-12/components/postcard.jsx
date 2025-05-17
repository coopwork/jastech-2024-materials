import React from "react";
import {
   Button,
   Card,
   CardActions,
   CardContent,
   Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ReadMore from "@mui/icons-material/ReadMore";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

const PostCard = ({ id, title, image }) => {
   const navigate = useNavigate();

   const handleRedirect = () => {
      navigate(`/posts/${id}`);
   };

   return (
      <Card 
         sx={{
            height: "20rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
            transition: "transform .3s ease-in-out",
            ":hover": {
               transform: "translateY(-.3rem)",
            },
         }}
      >
         <CardActionArea>
            <CardContent onClick={handleRedirect}>
               <CardMedia component="img" height="140" image={image} />

               <Typography variant="h5" component="div">
                  {title}
               </Typography>
            </CardContent>
         </CardActionArea>
         <CardActions>
            <Button
               onClick={handleRedirect}
               sx={{ width: "100%" }}
               variant="outlined"
            >
               Читать полностью 
               {<ReadMore />}
            </Button>
         </CardActions>
      </Card>
   );
};

export default PostCard;