import {ModesFunc} from "./modes";

export default function NotFound()
{
	const Modes = ModesFunc();

	return (
		<>
			<h1 style={{ color:Modes[3] }}>
				404 | This page is not found
			</h1>
		</>
	);
}