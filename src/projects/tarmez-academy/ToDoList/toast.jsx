import {Snackbar,Alert} from "@mui/material"
import {useContext} from "react";
import {ToastContext} from "./contexts/ToastContext";

export default function Toast() {

    const {toast,setToast} = useContext(ToastContext);

    return (
        <Snackbar open={toast.show} autoHideDuration={2000} onClose={() =>
        {
            setToast({
                show:false,
                alert:"",
                type:"",
            });
        }}
        >
            <Alert severity={toast?.type}>
                {toast.alert}
            </Alert>
        </Snackbar>
    );
}
