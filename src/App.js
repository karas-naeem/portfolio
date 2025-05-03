import { AppBar,Avatar, Divider, Link, Stack } from '@mui/material';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import NotFound from './NotFound'
import { Link as ReactRouterDomLink } from 'react-router-dom';

function App() {


	return (
		<div className="App">
			<AppBar sx={{padding:"5px"}} color='transparent'>
				<Stack direction="row" spacing={5}>
					<Link href="https://github.com/karas-naeem">
						<div title='my account at github'>
							<Avatar alt='my logo on github' src='logo.png' sx={{border:"2.5px #AAA solid"}}/>
						</div>
					</Link>
					<Stack direction="row" spacing={2} padding="2.5px" display="flex" alignItems="center">
						<Divider orientation='vertical'/>
						<Link underline='none' component={ReactRouterDomLink} to="/roadmap">
							roadmap
						</Link>
						<Link underline='none' component={ReactRouterDomLink} to="/projects">
							projects
						</Link>
					</Stack>
				</Stack>
				
			</AppBar>
			<Routes>
				<Route index element={<></>}/>
				<Route path="*" element={<NotFound/>} />
			</Routes>
		</div>
	);
}


export default App;