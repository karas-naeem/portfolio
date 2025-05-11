import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProjectsContext } from "./context/projectsContext";

export default function Projects() {

    const { ProjectId } = useParams();

    const projects = useContext(ProjectsContext).find((project) => {
        console.log(project.id, ProjectId);
        return +project.id === +ProjectId
    });

    if (projects) {
        return (
            <div>
                {projects.componet}
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