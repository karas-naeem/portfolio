import { Typography , Avatar } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useLocation, useParams } from "react-router-dom";

import { Container, Grid, useMediaQuery } from "@mui/material";
import Info from "./Info";
import ProjectAppBar from "./ProjectAppBar";
import { useContext } from "react";
import {ProjectsContext} from "./context/projectsContext";

export default function Projects() {

    const Modes = [
        useMediaQuery('(prefers-color-scheme: light)') ? "#FFF" : "#1f1f2f",
        useMediaQuery('(prefers-color-scheme: light)') ? "#FFF" : "#010409",
        useMediaQuery('(prefers-color-scheme: light)') ? "#" : "#FFFFFF",
    ];

    function ReturnTitle(id)
    {
        const info = useContext(ProjectsContext).map(
            project => {
                if (project.id == id) {
                    return `
                            name:${project.name}\ndescription:${project.description}
                        `;
                }
            }              
        )
        return info;
    }

    
    const projects = useContext(ProjectsContext).map(
        project => {
            return (
                <div title={ReturnTitle(project.id)} onMouseEnter={E => {console.log(E.currentTarget.title)}} key={project.id} style={{ margin: "auto", padding: "10px", borderRadius: "25px", background: Modes[0], width: "18em", height: "20em"}}>
                    <div style={{width:"100px",height:"100px"}}>
                            
                        <iframe loading="lazy" src={`projects/${project.id}`} style={{ width: "18em",pointerEvents:"none",borderRadius: "25px", height: "20em" }}>

                        </iframe>
                    </div>
                </div>
            )
        }
    )

    return (<>
        <Container style={{ marginTop: "50px" }}>
            <Grid spacing={10} direction="column" container sx={{ color: Modes[2] }}>
                <Info />
                <Grid margin="50px auto" direction="row" display="flex" flexDirection="row">
                    <Grid sx={6}>
                        {projects}
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
