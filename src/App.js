import { Avatar, Divider, Link, Stack, useMediaQuery } from '@mui/material';
import './App.css';
import {Routes,Route, useParams, useLocation} from 'react-router-dom'
import NotFound from './NotFound'
import { Link as ReactRouterDomLink } from 'react-router-dom';
import Projects from "./Projects";
import { blue } from '@mui/material/colors';
import Info from './Info';
import ProjectAppBar from './ProjectAppBar';
import { ProjectsContext } from './context/projectsContext';
import Project from './Project';
import { lazy, Suspense } from 'react';

import { CircularProgress } from '@mui/material';


function App() {

	const lazyProjectContext = lazy(() => import('./context/projectsContext'));
	const lazyProject = lazy(() => import('./Project'));
	const lazyProjects = lazy(() => import('./Projects'));
	const lazyInfo = lazy(() => import('./Info'));
	const lazyProjectAppBar = lazy(() => import('./ProjectAppBar'));
	const lazyNotFound = lazy(() => import('./NotFound'));

	const isLight = useMediaQuery('(prefers-color-scheme: light)');
	const Modes = [
		isLight ? "#FFF" : "#1f1f2f",
		isLight ? "#FFF" : "#010409",
		isLight ?  [blue[500]] : ["#FFFFFF",blue[500]],
	];


	return (
		<Suspense fallback={<h1>loading</h1>}>
			<ProjectsContext.Provider value={
				[
					{ id: 1, name: "project 1", description: "this is project 1",componet:<>hello world</>}
				]
			}>
				
				<div className="App" style={{background:Modes[0]}}>
					<Stack direction="column" spacing={5}>
						<Routes>
								<Route index element={<>
									<ProjectAppBar />
									<Info/>
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
		</Suspense>
	);

}


export default App;

