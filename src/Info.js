import { Grid,Typography,Avatar,useMediaQuery } from "@mui/material"
import {ModesFunc} from "./modes";

export default function Info()
{

    const Modes = ModesFunc();

    const isMobile = useMediaQuery("(max-width:425px)");

    const isSmallPhones = useMediaQuery("(max-width:330px)");

    return(
        <Grid>
                <Grid xs={12} width="80vw" margin="auto" display="flex" flexDirection="column" justifyContent="center" alignItems="center" color={Modes[3]}>
                    <Typography sx={{fontSize:isSmallPhones?"45px":"50px",letterSpacing:"10px"}} variant="h1">
                        <Avatar alt="my logo on github" src="favicon.png" sx={{width:"10%",height:"10%",marginTop:"50px"}}>
                            <img loading="lazy" aria-label="my logo on github" alt="my logo on github" src="favicon.png" sx={{height:"10%",marginLeft:isMobile ? "20px" : 0,marginTop:"20px"}}/>
                        </Avatar>
                        hi , i'm <br/> karas naeem
                    </Typography>
                </Grid>            
        </Grid>
    )
}
