import {useState} from 'react';

import { Typography } from '@mui/material';

export default function KeywordsButtonClicks({keysArray}) {

    const [KeysArrayData,SetKeyArrayData] = useState(keysArray);

    // eslint-disable-next-line array-callback-return
    const KeysArrayOutputData = KeysArrayData.map((e,i) => {
        if(i !== KeysArrayData.length - 1)
        {
            return e + "+";
        }
        else
        {
            return e;
        }
    })

    return (
        <>
            <Typography>
                {KeysArrayOutputData}
            </Typography>
        </>
    )
}
