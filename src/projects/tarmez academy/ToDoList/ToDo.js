import { Check, Delete, Edit } from "@mui/icons-material";
import { Card, CardContent, Typography, Grid, IconButton, TextField} from "@mui/material";
import {useContext,useState} from "react";
import { ToDoListsContext } from "./contexts/ToDoListsContext";

// Dialog imports

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//ToDo: create To Do

export default function ToDo({todo})
{

    const {setToDoLists,ToDoLists} = useContext(ToDoListsContext);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const handleClickOpenForDeleteDialog = () => {
            setOpenDeleteDialog(true);
    };

    const handleCloseForDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };

    const [openUpdateDialog, setOpenUpdateDialog] = useState(false);


    const handleClickOpenForUpdateDialog = () => {
        setOpenUpdateDialog(true);        
    }

    const handleCloseForUpdateDialog = () => {
        setOpenUpdateDialog(false);
    }

    const [editDialogData,setEditDialogData] = useState({
        title:todo.title,
        details:todo.details,
    });

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
                            {todo.title}
                        </Typography>
                        <Typography variant="h6" xs={{textAlign:"center"}}>
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
                                    const updatedTodos = ToDoLists.map(e => {
                                    if(e.id === todo.id)
                                        {
                                        return {...e,isCompleted:true}
                                    }
                                    else{
                                        return {...e}
                                    }
                                    })
                                    setToDoLists(updatedTodos)
                                    localStorage.setItem('todos',JSON.stringify(updatedTodos));
                                }
                            }

                            >
                                <Check/>
                            </IconButton>
                            <IconButton onClick={handleClickOpenForUpdateDialog} sx={{height:"46px !important",color:"#1769aa",background:"white",border:"solid 3px #1769aa",":hover":{
                                color:"white",
                                background:"#1769aa"
                            }}}>
                                <Edit/>
                            </IconButton>
                            <IconButton onClick={handleClickOpenForDeleteDialog} sx={{height:"46px !important",color:"#b23c17",background:"white",border:"solid 3px #b23c17",":hover":{
                                color:"white",
                                background:"#b23c17"
                            }}}>
                                <Delete aria-label="delete"/>
                            </IconButton>
                    </Grid>
                    </Grid>

                            
                </CardContent>
                <Dialog
                    open={openDeleteDialog}
                    onClose={handleCloseForDeleteDialog}
                    sx={{direction:"rtl !important"}}
                >
                    <DialogTitle id="alert-dialog-title">
                        هل انت متاكد من رغبتك في حذف المهمه؟
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            لا يمكنك التراجع من حذف بعد اتمامه
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                            <Button onClick={handleCloseForDeleteDialog}>
                                اغلاق
                            </Button>
                            <Button autofocus onClick={() => {
                                const updatedTodos = ToDoLists.filter(
                                    e => e.id !== todo.id
                                )
                                setToDoLists(
                                    updatedTodos
                                );
                                localStorage.setItem('todos',JSON.stringify(updatedTodos));
                            }}>
                                نعم، تاكيد الحذف
                            </Button>
                    </DialogActions>
                </Dialog>          
                <Dialog
                    open={openUpdateDialog}
                    onClose={handleCloseForUpdateDialog}
                    dir="rtl"
                > 
                <DialogTitle>تعديل المهمه</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        placeholder="العنوان"
                        fullWidth
                        variant="standard"
                        value={editDialogData.title}
                        onChange={
                            e => {
                                setEditDialogData({...editDialogData,title:e.target.value})
                            }
                        }
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        placeholder="التفاصيل"
                        fullWidth
                        variant="standard"
                        value={editDialogData.details}
                        onChange={
                            e => {
                                setEditDialogData({...editDialogData,details:e.target.value})
                            }
                        }
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseForUpdateDialog}>الغاء</Button>
                    <Button type="submit" onClick={
                        () => {
                            const updatedTodos = ToDoLists.map(e => {
                                if(e.id === todo.id)
                                {
                                    return {...e,title:editDialogData.title,details:editDialogData.details}
                                    }
                                    else{
                                        return {...e}
                                    }
                                }
                            );
                            setToDoLists(
                                updatedTodos
                            )
                            handleCloseForUpdateDialog();
                            localStorage.setItem('todos',JSON.stringify(updatedTodos));
                        }
                    }>تاكيد</Button>
                </DialogActions>
            </Dialog>
            </Card>
        </>
    );
}