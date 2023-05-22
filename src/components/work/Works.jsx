import React, {useContext, useEffect, useState} from "react";
import {projectsData, projectNav} from "./Data";
import {WorkItems} from "./WorkItems";
import './work.css';
import {DarkModeContext} from "../../context/DarkModeContext";

export const Works = () => {
    const [item, setItem] = useState({name: 'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    const { isDarkMode} = useContext(DarkModeContext);

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData);
        }
        else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    }

    return (
        <div>
            <div className='work__filters'>
                {projectNav.map((item, index) => {
                    return (
                        <span
                            onClick={(e) => {
                                handleClick(e, index);
                            }}
                            className={` ${active === index ? 'active-work-dark-mode' : ''} 
            work__item ${isDarkMode ? 'work__item-dark-mode' : 'work__item-light-mode'}`}
                            key={index}>
                            {item.name}
                        </span>
                    )
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorkItems
                        item={item}
                        key={item.id}
                    />
                })}
            </div>
        </div>
    )
}