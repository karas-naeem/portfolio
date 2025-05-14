import { Stack, useMediaQuery } from '@mui/material';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import NotFound from './NotFound'
import Projects from "./Projects";
import { blue } from '@mui/material/colors';
import Info from './Info';
import ProjectAppBar from './ProjectAppBar';
import { ProjectsContext } from './context/projectsContext';
import Project from './Project';
import ReCaptcha from './reCaptcha';

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
					{ id: 1, name: "project 1", description: "this is project 1",componet:<>hello world</>,type:"my"},
					{ id: 2, name: "project 2", description: "this is project 2",componet:<>hello world</>,type:"learning video",source:"اكادميه ترميز"}

				]
			}>
				
				<div className="App" style={{background:Modes[0]}}>
					<Stack direction="column" spacing={5}>
						<Routes>
								<Route index element={<>
									<ProjectAppBar />
									<Stack direction="column" spacing={10} justifyContent="center" alignItems="center">
										<Info/>
										<ReCaptcha/>	
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
							<Route path='/projects/:ProjectId' element={<Project/>}/>
								<Route path="*" element={<NotFound/>} />
						</Routes>
					</Stack>
				</div>
			</ProjectsContext.Provider>
	);

}


export default App;

