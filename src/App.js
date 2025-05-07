import { Avatar, Divider, Link, Stack, useMediaQuery } from '@mui/material';
import './App.css';
import {Routes,Route, useParams, useLocation} from 'react-router-dom'
import NotFound from './NotFound'
import { Link as ReactRouterDomLink } from 'react-router-dom';
import Projects from './Projects';
import { blue } from '@mui/material/colors';
import Info from './Info';
import ProjectAppBar from './appBar';


function App() {

	const isMobile = useMediaQuery("(max-width:425px)");
	const isLight = useMediaQuery('(prefers-color-scheme: light)');
	const Modes = [
		isLight ? "#FFF" : "#1f1f2f",
		isLight ? "#FFF" : "#010409",
		isLight ?  [blue[500]] : ["#FFFFFF",blue[500]],
	];

	const Location = useLocation();
	const ShowBars = Location != `projects/${useParams}`;

	return (
		<div className="App" style={{background:Modes[0]}}>
			{ShowBars && <ProjectAppBar/>}
			<Stack direction="column" spacing={5}>
			<Routes>
				<Route path='/' element={<Info/>} />
					<Route path='roadmap' element={<></>}/>
					<Route path='projects' element={<Projects/>}>
						<Route path=':ProjectId' element={<></>}/>
					</Route>
					<Route path="*" element={<NotFound/>} />
			</Routes>
			</Stack>
		</div>
	);

}


export default App;

