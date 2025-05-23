import { Container,Box , Card, CardContent , Typography , Button, Divider, ToggleButtonGroup, ToggleButton, Stack, TextField} from "@mui/material";
import { useState } from "react";
import './ToDoList.css'

export default function ToDoList()
{

  const [Alignment,SetAlignment] = useState("all")


  const ChangeAlignment = (element,NewAlignment) => {
    SetAlignment(NewAlignment)
  };

    return (
        <div dir="rtl" className="ToDoList2"  style={{background:"#191b1f",display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
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

                              </div>

                            {/*
                                
                                //TODO: INPUT + ADD BUTTON

                            */}
                            <Stack direction="row" display="flex" alignItems="center">
                              <TextField variant="filled" label="عنوان المهمه" sx={{width:"60%",margin:"25px"}}/>
                              <Button color="primary" variant="contained"  sx={{height:"4em",width:"30%",margin:"25px"}}>اضافه</Button>
                            </Stack>
                          </CardContent>
                    </Card>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

