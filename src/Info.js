import { Grid,Typography,Avatar,useMediaQuery } from "@mui/material"

export default function Info()
{
        const isMobile = useMediaQuery("(max-width:425px)");
    return(
        <Grid>
                <Grid sx={12}>
                    <Typography variant="h1">
                        <Avatar alt="my logo on github" src="favicon.png" sx={{width:"10%",height:"10%",marginLeft:isMobile ? "20px" : 0,marginTop:"20px"}}/>
                        hi , i'm karas naeem
                    </Typography>
                </Grid>            
        </Grid>
    )
}