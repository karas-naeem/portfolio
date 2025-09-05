import {useMediaQuery} from "@mui/material";
import {blue,yellow} from "@mui/material/colors";

export function ModesFunc()
{
    const isLight = useMediaQuery('(prefers-color-scheme: light)');
    return [
        isLight ? "#FFF" : "#010409",
        isLight ? "#FFF" : "#010409",
        isLight ?  [blue[500]] : ["#FFFFFF",blue[500]],
        isLight ? "#000" : "#FFF",
        isLight ? blue[300] : yellow[300],
    ];
}