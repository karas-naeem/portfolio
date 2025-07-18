import { Container,Box , Card, CardContent , Typography , Button, Divider, ToggleButtonGroup, ToggleButton, Stack, TextField , Dialog , DialogTitle , DialogContent , DialogContentText , DialogActions} from "@mui/material";
import {useState, useEffect, useMemo , useReducer} from "react";
import './ToDoList.css';
import ToDo from './ToDo'
import { ToDoListsContext } from "./contexts/ToDoListsContext";
import { Theme } from "./themes/theme";
import { ThemeProvider } from "@emotion/react";
import Toast from "./toast"
import {ToastContext} from "./contexts/ToastContext"
import todosReducer from "./reducers/todosReducer";

export default function ToDoList()
{

  function  saveData()
  {
        if(localStorage.getItem("todos"))
        {
            console.log(typeof JSON.parse(localStorage.getItem("todos")));
            return JSON.parse(localStorage.getItem("todos"));
        }
        else {
            console.log(typeof localStorage.getItem("todos"));
            localStorage.setItem("todos", JSON.stringify([]));
            return localStorage.getItem("todos");
        }
  }

  const [ToDoLists,TodoListDispatch] = useReducer(todosReducer,[],saveData);

  console.log(ToDoLists);


  const [alignment,SetAlignment] = useState("all")


  const ChangeAlignment = (element,NewAlignment) => {
    SetAlignment(NewAlignment)
  };


  const [TitleInput,setTitleInput] = useState("");

    // eslint-disable-next-line array-callback-return
    const ToDoListsJsx = ToDoLists.map(ToDos => {
          return <ToDo key={ToDos.id} todo={ToDos}/>
    })

    const CompletedTodos = useMemo(() => {
        return ToDoLists.map(
            todo => {
                if(todo.isCompleted)
                {
                    return <ToDo key={todo.id} todo={todo}/>;
                }
            }
        );
    },[ToDoLists]);

    const NotCompletedTodos = useMemo(() => {
        return ToDoLists.map(
            todo => {
                if(!todo.isCompleted)
                {
                    return <ToDo key={todo.id} todo={todo}/>;
                }
            }
        );
    },[ToDoLists]);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const [todoData,setTodoData] = useState({
        id:0,
        title:"",
        details:"",
    });

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

    const [toast,setToast] = useState({
        show:false,
        alert:"",
        type:"",
    });

    return (
      <ThemeProvider theme={Theme}>     
          <ToDoListsContext.Provider value={{TodoListDispatch,ToDoLists,handleClickOpenForUpdateDialog,handleClickOpenForDeleteDialog,setTodoData,setToast}}>
              <div className="ToDoList2"  style={{direction:"rtl",background:"#191b1f",display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
                  <Container maxWidth="sm">
                      <Box>
                          <Box sx={{ minWidth: 275 }}>
                              <Card variant="outlined">      
                                <CardContent>
                                  <Typography variant="h1">
                                    مهامي
                                    <Divider/>
                                  </Typography>

                                  {/* 

                                    //TODO:Button Filter 
                                    
                                    */}

                                  <ToggleButtonGroup aria-label="text alignment" style={{direction:"ltr",marginTop:"30px"}} value={alignment} exclusive onChange={ChangeAlignment}>
                                    <ToggleButton value="not-completed" color="error">
                                        الغير منجز
                                    </ToggleButton>
                                    <ToggleButton value="completed" color="success">
                                        المنجز
                                    </ToggleButton>
                                    <ToggleButton value="all" color="primary">
                                        الكل
                                    </ToggleButton>
                                  </ToggleButtonGroup>
                                    
                                  <div className="ToDo" style={{
                                    direction:"ltr",
                                    maxHeight:"40vh",
                                    overflow:"auto",
                                  }}>
                                      {
                                          alignment === "all" ? ToDoListsJsx : alignment === "completed" ? CompletedTodos : NotCompletedTodos
                                      }
                                  </div>

                                  {/*
                                      
                                      //TODO: INPUT + ADD BUTTON
                                      
                                      */}
                                  <Stack direction="row" display="flex" alignItems="center">
                                    <TextField variant="filled" label="عنوان المهمه" onChange={e => {
                                      setTitleInput(e.target.value)
                                    }} sx={{width:"60%",margin:"25px"}} value={TitleInput}/>

                                    <Button color="primary" variant="contained"  disabled={TitleInput.length === 0} sx={{height:"4em",width:"30%",margin:"25px"}} onClick={() => {
                                         TodoListDispatch({
                                            type:"ADD_ACTION",
                                            payload:{
                                                TitleInput:TitleInput,
                                                SetTitleInput:setTitleInput,
                                                SetToast:setToast,
                                            }
                                         });
                                      }}>اضافه</Button>
                                  </Stack>
                                </CardContent>
                          </Card>
                          </Box>
                      </Box>
                  </Container>
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
                              value={todoData.title}
                              onChange={
                                  e => {
                                      setTodoData({...todoData,title:e.target.value})
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
                              value={todoData.details}
                              onChange={
                                  e => {
                                      setTodoData({...todoData,details:e.target.value})
                                  }
                              }

                          />
                      </DialogContent>
                      <DialogActions>
                          <Button onClick={handleCloseForUpdateDialog}>الغاء</Button>
                          <Button type="submit" disabled={todoData.title.length === 0} onClick={
                              () => {
                                  TodoListDispatch({
                                      type:"EDIT_ACTION",
                                      payload: {
                                          todo: todoData,
                                          closeDialogFunc:handleCloseForUpdateDialog,
                                          setToast:setToast,
                                      }
                                  });
                              }
                          }>تاكيد</Button>
                      </DialogActions>
                  </Dialog>
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
                              TodoListDispatch({
                                  type:"DELETE_ACTION",
                                  payload:{
                                      todoId:todoData.id,
                                      closeDialogFunc:handleCloseForDeleteDialog,
                                      setToast:setToast,
                                  }
                              })
                          }}>
                              نعم، تاكيد الحذف
                          </Button>
                      </DialogActions>
                  </Dialog>
                  <ToastContext.Provider value={{toast,setToast}}>
                    <Toast/>
                  </ToastContext.Provider>
              </div>
            </ToDoListsContext.Provider>
        </ThemeProvider>
    );
}

