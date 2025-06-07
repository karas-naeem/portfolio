import { Container,Box , Card, CardContent , Typography , Button, Divider, ToggleButtonGroup, ToggleButton, Stack, TextField} from "@mui/material";
import { useState,useEffect } from "react";
import './ToDoList.css';
import ToDo from './ToDo'
import {v4 as uuid} from "uuid" 
import Massage from "./massage";
import { ToDoListsContext } from "./contexts/ToDoListsContext";
import { Theme } from "./themes/theme";
import { ThemeProvider } from "@emotion/react";

export default function ToDoList()
{
  
  const [Alignment,SetAlignment] = useState("all")

  const ChangeAlignment = (element,NewAlignment) => {
    SetAlignment(NewAlignment)
  };


  const [TitleInput,setTitleInput] = useState("");
  
  const [ToDoLists,setToDoLists] = useState([
  ]);

  useEffect(() => {
    if(localStorage.getItem("todos") !== null)
    {
      setToDoLists(JSON.parse(localStorage.getItem("todos")))
    } 
  },[])

  const [massage,setMassage] = useState({});

  function hideMassage()
  {
    setMassage({})
  }

  const MassageJsx = () => {
    if(massage.massage !== null)
    {
      return <Massage show={massage.show} massage={massage.massage} color={massage.color} location={massage.location} hideMassage={hideMassage}/>
    }
  }
    // eslint-disable-next-line array-callback-return
    const ToDoListsJsx = ToDoLists.map(ToDoList => {
      return <ToDo key={ToDoList.id} todo={ToDoList}/>;
    })

    return (
      <ThemeProvider theme={Theme}>     
          <ToDoListsContext.Provider value={{setToDoLists,setMassage,ToDoLists,hideMassage}}>
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

                                  <ToggleButtonGroup aria-label="text alignment" style={{direction:"ltr",marginTop:"30px"}} value={Alignment} exclusive onChange={ChangeAlignment}>
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
                                    {ToDoListsJsx}
                                  </div>

                                  {/*
                                      
                                      //TODO: INPUT + ADD BUTTON
                                      
                                      */}
                                  <Stack direction="row" display="flex" alignItems="center">
                                    <TextField variant="filled" label="عنوان المهمه" onChange={e => {
                                      setTitleInput(e.target.value)
                                    }} sx={{width:"60%",margin:"25px"}} value={TitleInput}/>

                                    <Button color="primary" variant="contained"  sx={{height:"4em",width:"30%",margin:"25px"}} onClick={() => {
                                      if(TitleInput !== "")
                                        {
                                          const updatedTodos = [...ToDoLists,{id:uuid(),title:TitleInput,details:"",isCompleted:false}]; 
                                          setToDoLists(updatedTodos);
                                          setTitleInput("");
                                          setMassage({
                                            show:true,
                                            massage:"تم انشاء المهمه بنجاح",
                                            color:"green",
                                            location:{vertical:"top",horizontal:"center"},
                                          });
                                          localStorage.setItem('todos',JSON.stringify(updatedTodos));
                                      }
                                      else{
                                        setMassage({
                                          show:true,
                                          massage:"اكتب عنوان المهمه",
                                          color:"red",
                                          location:{vertical:"top",horizontal:"center"},
                                        });
                                      }
                                    }}>اضافه</Button>

                                    <MassageJsx/>
                                  </Stack>
                                </CardContent>
                          </Card>
                          </Box>
                      </Box>
                  </Container>
              </div>
            </ToDoListsContext.Provider>
        </ThemeProvider>
    );
}

