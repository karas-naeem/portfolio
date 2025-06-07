import {Alert, Snackbar} from "@mui/material"
import {useState} from "react"

export default function Massage({show,massage,color,location,hideMassage})
{
    const [open,setOpen] = useState(show);

    return (
            <Snackbar autoHideDuration={1200} open={open} onClose={() => {hideMassage()}} anchorOrigin={location}>
                <Alert icon=" " sx={{color:color}} >
                        {massage}
                </Alert>
            </Snackbar>
    )
}