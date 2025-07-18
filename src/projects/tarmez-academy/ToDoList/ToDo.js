import { Check, Delete, Edit } from "@mui/icons-material";
import { Card, CardContent, Typography, Grid, IconButton} from "@mui/material";
import {useContext} from "react";
import { ToDoListsContext } from "./contexts/ToDoListsContext";

//ToDo: create To Do

export default function ToDo({todo})
{

    const {TodoListDispatch,handleClickOpenForUpdateDialog,handleClickOpenForDeleteDialog,setTodoData,setToast} = useContext(ToDoListsContext);

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
                        <Typography variant="h5" sx={{textAlign:"center",textDecoration:todo.isCompleted?"line-through":""}}>
                            {todo.title}
                        </Typography>
                        <Typography variant="h6" sx={{textAlign:"center"}}>
                            {todo.details}
                        </Typography>
                    </Grid>
                    <Grid xs={4} display='flex' flexDirection="row-reverse" height="100%" gap={0.5}>                     
                            <IconButton aria-label="success" sx={{height:"46px !important",color:todo.isCompleted ? "white" : "#8bc34a",background:todo.isCompleted ? "#8bc34a" : "white",border:"solid 3px #8bc34a",":hover":{
                                color:"white",
                                background:"#8bc34a"
                            }}}
                            
                            onClick={
                                () => {
                                    TodoListDispatch({
                                        type:"SET_COMPLETED_ACTION",
                                        payload:{
                                            Todo:todo,
                                            setToast:setToast,
                                        }
                                    })
                                }
                            }


                            >
                                <Check/>
                            </IconButton>
                            <IconButton onClick={() => {
                                    handleClickOpenForUpdateDialog();
                                    setTodoData({
                                        id: todo.id,
                                        title: todo.title,
                                        details: todo.details,
                                    });
                                }
                            } sx={{height:"46px !important",color:"#1769aa",background:"white",border:"solid 3px #1769aa",":hover":{
                                color:"white",
                                background:"#1769aa"
                            }}}>
                                <Edit/>
                            </IconButton>
                            <IconButton onClick={() => {
                                handleClickOpenForDeleteDialog();
                                setTodoData({
                                    id: todo.id,
                                    title: todo.title,
                                    details: todo.details,
                                });
                            }} sx={{height:"46px !important",color:"#b23c17",background:"white",border:"solid 3px #b23c17",":hover":{
                                color:"white",
                                background:"#b23c17"
                            }}}>
                                <Delete aria-label="delete"/>
                            </IconButton>
                    </Grid>
                    </Grid>

                            
                </CardContent>
            </Card>
        </>
    );
}