import { useMediaQuery, AppBar, Stack, Link, Avatar, Divider } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Link as ReactRouterDomLink } from "react-router-dom";


export default function ProjectAppBar() {
    const isMobile = useMediaQuery("(max-width:425px)");
    const isLight = useMediaQuery('(prefers-color-scheme: light)');
    const Modes = [
        isLight ? "#FFF" : "#1f1f2f",
        isLight ? "#FFF" : "#010409",
        isLight ? [blue[500]] : ["#FFFFFF", blue[500]],
    ];

    const isSmallPhones = useMediaQuery("(max-width:330px)");

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
                    <Stack direction="row" spacing={isMobile ? 1 : 2} borderRadius="5px" border={isSmallPhones?`${blue["400"]} 2.5px solid`:"0"}  maxWidth={isSmallPhones?"50vw":"100vw"} overflow="auto" padding="2.5px" display="flex" alignItems="center">
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
                    </Stack>
                </Stack>
            </AppBar>
        </>
    );
}
