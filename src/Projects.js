// eslint-disable-next-line array-callback-return
/* eslint-disable jsx-a11y/iframe-has-title */
import { Button, Container, Grid, IconButton, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import {ProjectsContext} from "./context/projectsContext";
import { Link } from "react-router-dom";
import { RemoveRedEye } from "@mui/icons-material";

export default function Projects() {

    const Modes = [
        useMediaQuery('(prefers-color-scheme: light)') ? "#FFF" : "#1f1f2f",
        useMediaQuery('(prefers-color-scheme: light)') ? "#FFF" : "#010409",
        useMediaQuery('(prefers-color-scheme: light)') ? "#" : "#FFFFFF",
    ];

    function ReturnTitle(id)
    {
        const info = useContext(ProjectsContext).map(
            // eslint-disable-next-line array-callback-return
            project => {
                if (project.id === id) {
                    return `
                            name:${project.name}\ndescription:${project.description}
                        `;
                }
            }              
        )
        return info;
    }
    
    
    const Projects = (conditional) => {

       let Data = useContext(ProjectsContext).map(
        // eslint-disable-next-line array-callback-return
        project => {
            if(conditional)
            {
                return (
                    <div title={ReturnTitle(+project.id)} key={project.id} style={{ margin: "50px auto", padding: "10px", borderRadius: "25px", background: Modes[0], width: "18em", height: "20em"}}>
                                <iframe loading="lazy" src={`/${project.id}`} style={{ width: "18em",pointerEvents:"none",borderRadius: "25px", height: "20em" }}>
        
                                </iframe>
                                <Link to={`/projects/${project.id}`}>
                                    <Button variant="contained">
                                        <IconButton>
                                            <RemoveRedEye sx={{color:"white"}}/>
                                        </IconButton>
                                            open project
                                    </Button>
                                </Link>
                    </div>
                )
            }
        }
    )

    return Data;
}
    return (<>
        <Container style={{ marginTop: "50px" }}>
            <Grid spacing={10} direction="column" container sx={{ color: Modes[2] }}>
                <Grid margin={"50px auto"} direction="row" display="flex" flexDirection="row">
                    <Grid item xs={12} md={6}>
                        {/* <h1></h1> */}
                        {Projects(true)}
                    </Grid>
                    {/*
        //// </Grid>
        ////<Grid margin="auto" direction="row" spacing={6} display="flex" flexDirection="row">
        ////<Grid sx={6}>
        ////    e
        ////</Grid>
        ////<Grid sx={6}>
        ////    e
        ////</Grid>
        ////</Grid>
        ////<Grid margin="auto" direction="row" spacing={6} display="flex" flexDirection="row">
        ////    <Grid sx={6}>
        ////        e
        ////    </Grid>
        ////    <Grid sx={6}>
        ////        e
        ////    </Grid>
        ////</Grid>
        ////<Grid margin="auto" direction="row" spacing={6} display="flex" flexDirection="row">
        ////    <Grid sx={6}>
        ////        e
        ////    </Grid>
        ////     <Grid sx={6}>
        ////         e
        ////     </Grid>
        //// </Grid>
        //// <Grid margin="auto" direction="row" spacing={6} display="flex" flexDirection="row">
        ////     <Grid sx={6}>
        ////         e
        ////     </Grid>
        ////     <Grid sx={6}>
        ////         e
        ////     </Grid>
        */}
                </Grid>
            </Grid>
        </Container>
    </>);
}
