/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line array-callback-return
/* eslint-disable jsx-a11y/iframe-has-title */
import { Button, Container, Grid, IconButton, ListItemButton, ListItemIcon, ListItemText, useMediaQuery , Collapse, Avatar} from "@mui/material";
import { useContext, useState } from "react";
import {ProjectsContext} from "./context/projectsContext";
import { Link } from "react-router-dom";
import { ExpandLess, ExpandMore, RemoveRedEye } from "@mui/icons-material";
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
    
    
    const ProjectsData = (conditional,source = undefined,start) => {

       let Data = useContext(ProjectsContext).map(
           // eslint-disable-next-line array-callback-return
           (project) => {
                if(conditional === "my" ? project.type === "my" : project.type === "learning video" && source === project.source)
                {
                    return (
                        <div title={ReturnTitle(+project.id)} key={project.id} style={{ margin: "50px auto", borderRadius: "25px", width: "18em", height: "20em"}}>
                                    <p>{project.name}</p>
                                    <iframe loading="lazy" src={`projects/${project.id}`} style={{ width: "13em",pointerEvents:"none",borderRadius: "25px",border:"gray 5px solid", height: "15em",margin:"" }}>
            
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

function ProjectsList({type,icon,source = "my"}) {

    
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (        
    <Container style={{ marginTop: "40px" }}>
            <Grid direction="column" container sx={{ color: Modes[2] }}>
                <Grid direction="column" display="flex" flexDirection="column">
                    <ListItemButton sx={{width:"18em"}} onClick={handleClick}>
                        <ListItemIcon>
                            <Avatar src={icon} />
                        </ListItemIcon>
                        <ListItemText primary={source}/>
                            {open ? <ExpandMore/> : <ExpandLess/>}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            {ProjectsData(type,source)}
                        </Collapse>
                    </Grid>
                </Grid>
            </Container>
            );
    }

    return (<>
        <ProjectsList type="learning video" source="tarmez-academy" icon="tarmezAcademy.jpg"/>
        <ProjectsList type="my" icon="favicon.png"/>
    </>);
}

