import {Button} from "@mui/material";

export default function MagicForest() {
    return(<div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
        <Button variant="contained" color="info" sx={{width:"20vw"}}>
            Play
        </Button>
        <Button variant="contained" color="success" sx={{width:"20vw"}}>
            Settings
        </Button>
        <Button variant="contained" color="error" sx={{width:"20vw"}}>
            Quit
        </Button>
    </div>);
}