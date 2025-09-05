import {ModesFunc} from "./modes";

export default function Roadmap()
{
    const Modes = ModesFunc();

    return (
        <div style={{color:Modes[3],display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:25,padding:10,flexWrap:"wrap"}} >
            <div style={{border:`${Modes[3]} solid 5px`}}>
                <p>DSL's</p>
                <ul style={{listStyle:"none",padding:"10px"}}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                </ul>
            </div>
            <div style={{border:`${Modes[3]} solid 5px`,padding:"5px"}}>
                <p>Programing Languages</p>
                <ul style={{listStyle:"none",padding:"10px"}}>
                    <li>C</li>
                    <li>C++</li>
                    <li>JS</li>
                </ul>
            </div>
            <div style={{border:`${Modes[3]} solid 5px`,padding:"0px 5px"}}>
                <p>Libraries</p>
                <ul style={{listStyle:"none",padding:"10px"}}>
                    <li>React(CRA)</li>
                    <li>React-Router</li>
                    <li>MUI</li>
                </ul>
            </div>
        </div>
    )
}