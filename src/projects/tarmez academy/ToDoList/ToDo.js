import { Check, Delete, Edit } from "@mui/icons-material";
import { Card, CardContent, Typography, Grid, IconButton} from "@mui/material";

//ToDo: create To Do

export default function ToDo()
{
    return (
        <>
            <Card sx={{ transition:"all 0.2s !important",minWidth:275 , background:"#283593",color:'white',marginTop:5,":hover":{
                paddingBottom:"20px",
                paddingTop:"20px",
                boxShadow:"0px 7px 7px #00000088"
            }}}>
                <CardContent>
                    <Grid direction="row-reverse" display="flex" justifyContent="center" container spacing={2}>
                    <Grid size={7}>
                        <Typography variant="h5" xs={{textAlign:"center"}}>
                            المهمه الاولي
                        </Typography>
                        <Typography variant="h6" xs={{textAlign:"center"}}>
                            التفاصبل الخاصه بالمهمه الاولي
                        </Typography>
                    </Grid>
                    <Grid xs={4} display='flex' height="100%" gap={0.5}>                     
                            <IconButton aria-label="success" sx={{height:"46px !important",color:"#8bc34a",background:"white",border:"solid 3px #8bc34a",":hover":{
                                color:"white",
                                background:"#8bc34a"
                            }}}>
                                <Check/>
                            </IconButton>
                            <IconButton sx={{height:"46px !important",color:"#1769aa",background:"white",border:"solid 3px #1769aa",":hover":{
                                color:"white",
                                background:"#1769aa"
                            }}}>
                                <Edit/>
                            </IconButton>
                            <IconButton sx={{height:"46px !important",color:"#b23c17",background:"white",border:"solid 3px #b23c17",":hover":{
                                color:"white",
                                background:"#b23c17"
                            }}}>
                                <Delete aria-label="delete" />
                            </IconButton>
                    </Grid>
                    </Grid>
                </CardContent>
    
            </Card>
        </>
    );
}