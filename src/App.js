import { Stack, useMediaQuery } from '@mui/material';
import './App.css';
import {Routes,Route, useParams} from 'react-router-dom'
import NotFound from './NotFound'
import Projects from "./Projects";
import { blue } from '@mui/material/colors';
import Info from './Info';
import ProjectAppBar from './ProjectAppBar';
import { ProjectsContext } from './context/projectsContext';
import Project from './Project';
import Reference from './reference';
import ToDoList from "./projects/tarmez academy/ToDoList/ToDolist"
import { useEffect } from 'react';

function App() {

	const isLight = useMediaQuery('(prefers-color-scheme: light)');
	const Modes = [
		isLight ? "#FFF" : "#1f1f2f",
		isLight ? "#FFF" : "#010409",
		isLight ?  [blue[500]] : ["#FFFFFF",blue[500]],
	];


	return (
			<ProjectsContext.Provider value={
				[
					// Tarmez Academy Projects
					{ id:1 , name:"مهامي" , description:"مهامي هو تطبيق للمهام",component:<ToDoList/>,type:"learning video",source:"tarmez academy"},
					// My Projects
					{ id:2, name: "kraspedia", description: "kraspedia is information",component:<></>,type:"my"},
				]
			}>
				
				<div className="App" style={{background:Modes[0]}}>
					<Stack direction="column" spacing={5}>
						<Routes>
								<Route index element={<>
									<ProjectAppBar />
									<Stack direction="column" spacing={10} justifyContent="center" alignItems="center">
										<Info/>
										<Reference/>	
									</Stack>
								</>} />
								<Route path='/roadmap' element={
								<>
									<ProjectAppBar/>
								</>} />
								<Route path='/projects' element={<>
									<ProjectAppBar />
									<Projects />
								</>
								} />
							<Route path='/projects/:projectId' element={<Project/>}/>
								<Route path="*" element={<NotFound/>} />
						</Routes>
					</Stack>
				</div>
			</ProjectsContext.Provider>
	);

}


export default App;

