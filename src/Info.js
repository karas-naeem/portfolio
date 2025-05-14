import { Grid,Typography,Avatar,useMediaQuery } from "@mui/material"

export default function Info()
{

    const isMobile = useMediaQuery("(max-width:425px)");

    const isSmallPhones = useMediaQuery("(max-width:330px)");

    const isVerySmallPhones = useMediaQuery("(max-width:310px)");

    console.log(isSmallPhones);

    return(
        <Grid>
                <Grid xs={12}>
                    <Typography  sx={{fontSize:isSmallPhones?"45px":"50px",marginRight:isVerySmallPhones ? "50px" : "0px"}} variant="h1">
                        <Avatar alt="my logo on github" src="favicon.png" sx={{width:"10%",height:"10%",marginLeft:isMobile ? "20px" : 0,marginTop:"20px"}}>
                            <img loading="lazy" aria-label="my logo on github" alt="my logo on github" src="favicon.png" sx={{width:isVerySmallPhones ? "20%" :"10%",height:"10%",marginLeft:isMobile ? "20px" : 0,marginTop:"20px"}}/>
                        </Avatar>
                        hi , i'm <br/> karas <br/> naeem
                    </Typography>
                </Grid>            
        </Grid>
    )
}
