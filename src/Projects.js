import { Container, Grid, Typography , Avatar, useMediaQuery } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useLocation, useParams } from "react-router-dom";
import Info from "./Info";

export default function Projects() {

    const Modes = [
		useMediaQuery('(prefers-color-scheme: light)') ? "#FFF" : "#1f1f2f",
		useMediaQuery('(prefers-color-scheme: light)') ? "#FFF" : "#010409",
		useMediaQuery('(prefers-color-scheme: light)') ? "#" : "#FFFFFF",
	];

    const ShowMain = useLocation() != `${useLocation().pathname}'/${useParams()}`;

    
    if(ShowMain)
    {        
        return (<> 
            <Container style={{marginTop:"50px"}}>        

                <Grid spacing={10} direction="column" container sx={{color:Modes[2]}}>
                    <Info/>
                    <Grid margin="50px auto" direction="row" display="flex" flexDirection="row" >
                        <Grid sx={6}>
                            <iframe loading="lazy" src="/1" style={{width:"18em",borderRadius:"25px",height:"20em"}}>

                            </iframe>
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
                    ////     </Grid> */}
                        </Grid>
                </Grid>
            </Container>
        </>);
    }
    else{
        return (
            <>
                e
            </>
        );
    }
}