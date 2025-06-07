import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProjectsContext } from "./context/projectsContext";

export default function Projects() {

    const { projectId } = useParams();

    const project = useContext(ProjectsContext).find((project) => {
        return +project.id === +projectId
    });

    if (project) {
        return (
            <div>
                {project.component}
            </div>
        );

    }

    else {
        return (
            <div>
                <p>404 | page not found</p>
            </div>
        )
    }
}