import React, {useContext, useEffect, useState} from "react";
import {projectsData, projectNav, translationMapping} from "./Data";
import {WorkItems} from "./WorkItems";
import './work.css';
import {DarkModeContext} from "../../context/DarkModeContext";
import {useTranslation} from "react-i18next";

export const Works = () => {
    const [item, setItem] = useState({name: 'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    const { isDarkMode} = useContext(DarkModeContext);
    const [t] = useTranslation("global");
    // const workItems = ["all", "web", "game"];

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
        setItem({ name: translationMapping[e.target.textContent.toLowerCase()] });
        setActive(index);
    }

    return (
        <div>
            <div className='work__filters'>
                {projectNav.map((item, index) => {
                    const textKey = `portfolio.workItemTitle.item${item.id}.title`;
                    return (
                        <span
                            onClick={(e) => {
                                handleClick(e, index);
                            }}
                            className={` ${active === index ? 'active-work-dark-mode' : ''} 
            work__item ${isDarkMode ? 'work__item-dark-mode' : 'work__item-light-mode'}`}
                            key={index}>
                            {/*{item.name}*/}
                            {t(textKey)}
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