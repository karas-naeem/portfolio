import {Alert, Snackbar} from "@mui/material"
import {useState} from "react"

export default function Massage({message,type,show})
{
    const [open,setOpen] = useState(show);

    const onClose = (event,reason) => {
        if(reason === 'clickaway') return;
        setOpen(false)
    }

    return (
        <Snackbar autoHideDuration={1200} open={open} onClose={(event,reason) => {onClose(event,reason)}} anchorOrigin={{ vertical:"bottom",horizontal:"left" }} color={type}>
            <Alert color={type} icon=" ">
                {message}
            </Alert>
        </Snackbar>
    )
}