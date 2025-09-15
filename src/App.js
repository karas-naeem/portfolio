import {Stack} from '@mui/material';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import NotFound from './NotFound'
import Projects from "./Projects";
import Info from './Info';
import ProjectAppBar from './ProjectAppBar';
import {ProjectsContext} from './context/projectsContext';
import Project from './Project';
import Reference from './reference';
import ToDoList from "./projects/tarmez-academy/ToDoList/ToDoList.js"
import Roadmap from "./roadmap"
import {ModesFunc} from './modes'
import Weather from "./projects/tarmez-academy/Weather/Components/Weather";
import BirdOS from './projects/my/birdos/birdos.jsx';

function App() {

	const Modes = ModesFunc();

	return (
			<ProjectsContext.Provider value={
				[
					// Tarmez Academy Projects
					{ id:1 , name:"مهامي" , description:"مهامي هو تطبيق للمهام",component:<ToDoList/>,type:"learning video",source:"tarmez-academy"},
					{ id:2 , name:"weather" , description:"weather is app this idea get the weather",component:<Weather/>,type:"learning video",source:"tarmez-academy"},
					// MY project
					{ id:3 , name:"Bird OS",description:"An UI For Bird OS",component:<BirdOS/>,type:"my"}
				]
			}>



				<div className="App" style={{background:Modes[0]}} onKeyDown={e => {

				}}	>
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
									<Roadmap/>
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

