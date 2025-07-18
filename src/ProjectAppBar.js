import { useMediaQuery, AppBar, Stack, Link, Avatar, Divider } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Link as ReactRouterDomLink } from "react-router-dom";
import {ModesFunc} from './modes'

export default function ProjectAppBar() {
    const isMobile = useMediaQuery("(max-width:425px)");

    const isSmallPhones = useMediaQuery("(max-width:330px)");

    const Modes = ModesFunc();

    return (
        <>
            <AppBar sx={{ padding: "5px", background: Modes[1]}} color='transparent'>
                <Stack direction="row" spacing={5}>
                    <Link href="https://github.com/karas-naeem">
                        <div title='my account at github'>
                            <Avatar alt='my logo on github' src='logo.png' sx={{ border: "2.5px #AAA solid" }}>

                            </Avatar>
                        </div>
                    </Link>
                    <Stack direction="row" spacing={isMobile ? 1 : 2} borderRadius="5px" border={isSmallPhones?`${blue["400"]} 2.5px solid`:"0"}  maxWidth={isSmallPhones?"50vw":"100vw"} overflow="auto" padding="2.5px" display="flex" alignItems="center" >
                        <Divider orientation='vertical' />
                        <Link underline='none' component={ReactRouterDomLink} to="/" sx={{
                            color: Modes[2][0], ":hover": {
                                color: Modes[2][1]
                            }
                        }}>
                            home
                        </Link>
                        <Link underline='none' component={ReactRouterDomLink} to="/roadmap" sx={{
                            color: Modes[2][0], ":hover": {
                                color: Modes[2][1]
                            }
                        }}>
                            roadmap
                        </Link>
                        <Link underline='none' component={ReactRouterDomLink} to="/projects" sx={{
                            color: Modes[2][0], ":hover": {
                                color: Modes[2][1]
                            }
                        }}>
                            projects
                        </Link>
                        <h6 style={{ color:Modes[3] }}>v 1.0.0</h6>
                    </Stack>
                </Stack>
            </AppBar>
        </>
    );
}
