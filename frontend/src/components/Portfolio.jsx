import { useEffect, useState } from "react";
import api from "../api";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // fetch portfolio data from backend using axios - created api in '../api'
    useEffect(() => {
        
        api
          .get('/projects')
          .then((response) => {
            setProjects(response.data);
            setLoading(false);
          })
        .catch((err) => {
            setError(`Error fetching project: ${err.message}`);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <PortfolioItem
                        key={project.id}
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.tech_stack}
                        github={project.github}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;