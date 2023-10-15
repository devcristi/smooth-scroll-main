import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function index()
{
    const [selectedProject, setSelectedProjects] = useState(0);
    const imageContainer = useRef(null);
    const projects=
    [
        {
            title:"Council Square",
            src: "img1.jpg"
        },
        {
            title:"Black Church",
            src: "black-church.jpg"
        },
        {
            title:"Tampa Mountain",
            src: "tampa.jpg"
        },
        {
            title:"Bran Castle",
            src: "bran.jpg"
        }
    ]

    useLayoutEffect( () =>
    {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create(
        {
            trigger: imageContainer.current,
            start:"-=140px",
            end: document.body.offsetHeight,
            pin:true
        })
    }, [])

    return(
        <div className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                <Image
                    src={`/images/${projects[selectedProject].src}`}
                    fill={true}
                    alt="project image"
                    priority={true}
                />
                </div>
                <div className={styles.column}>
                    <p>"Piata Sfatului", also known as the Council Square, is one of the central and most iconic landmarks in Brasov, Romania.The square is surrounded by picturesque buildings featuring a mix of architectural styles. </p>
                </div>
                <div className={styles.column}>
                    <p>This historic square is not only a popular gathering place for both locals and tourists but also a hub of cultural and social activities. The square is lined with numerous cafes and restaurants, making it an excellent place to enjoy Romanian cuisine, pastries, and coffee while taking in the vibrant atmosphere. </p>
                </div>
            </div>
            <div className={styles.projectList}>
                {
                    projects.map((project, index) =>
                    {
                        return <div onMouseOver={() =>{setSelectedProjects(index)}} className={styles.projectEl} key={'p_${index}'}>
                            <p>{project.title}</p>
                            </div>
                    })
                }
            </div>
        </div>
    )
}