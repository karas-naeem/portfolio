// eslint-disable-next-line array-callback-return
/* eslint-disable jsx-a11y/iframe-has-title */
import { Button, Container, Grid, IconButton, ListItemButton, ListItemIcon, ListItemText, useMediaQuery , Collapse} from "@mui/material";
import { useContext, useState } from "react";
import {ProjectsContext} from "./context/projectsContext";
import { Link } from "react-router-dom";
import { ExpandLess, ExpandMore, Folder, RemoveRedEye } from "@mui/icons-material";
// import KeywordsButtonClicks from "./KeywordsButtonClicks";

export default function Projects() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

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
    
    
    const Projects = (conditional,source = undefined) => {

       let Data = useContext(ProjectsContext).map(
           // eslint-disable-next-line array-callback-return
           project => {
            let i = 1;
            if(conditional === "me" ? project.type === "my" : project.type === "learning video" && source === project.source)
            {
                return (
                    <div title={ReturnTitle(+project.id)} key={project.id} style={{ margin: "50px auto", padding: "10px", borderRadius: "25px", background: Modes[0], width: "18em", height: "20em"}}>
                                <p>{i}.{project.name}</p>
                                <iframe loading="lazy" src={`projects/${project.id}`} style={{ width: "13em",pointerEvents:"none",borderRadius: "25px",border:"gray 5px solid", height: "15em" }}>
        
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
        <Container style={{ marginTop: "40px" }}>
            <Grid direction="column" container sx={{ color: Modes[2] }}>
                <Grid margin={"50px auto"} direction="column" display="flex" flexDirection="column">
                    <ListItemButton sx={{width:"18em"}} onClick={handleClick}>
                        <ListItemIcon>
                            <Folder/>
                        </ListItemIcon>
                        <ListItemText primary="tarmez academy"/>
                        {open ? <ExpandMore/> : <ExpandLess/>}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        {Projects("learning video","tarmez academy")}
                    </Collapse>
                </Grid>
            </Grid>
        </Container>
    </>);
}

