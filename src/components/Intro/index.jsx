'use client';
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'

export default function Index() {

    const backgroundImage = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect ( () =>
    {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline(
            {
                scrollTrigger:
                {
                    trigger: document.documentElement,
                    start: "top",
                    end: "+=500px",
                    scrub: true,
                    // markers: true
                }
            }
        )
        timeline
            .from(backgroundImage.current, {clipPath: "inset(15%)"})
            .to(introImage.current, {height: "200px"}, 0)
    }, [])

    return (
        <div className={styles.intro}>
            <div ref={backgroundImage} className={styles.backgroundImage}>
                <Image
                    src={'/images/background.jpg'}
                    fill={true}
                    alt="backgroundImage"
                />
            </div>
            <div className={styles.introContainer}>
                <div ref={introImage} data-scroll data-scroll-speed="0.3" className={styles.introImage}>
                    <Image
                        src={'/images/img1.jpg'}
                        fill={true}
                        alt="backgroundImage"
                    />
                </div>
                <div  data-scroll data-scroll-speed="0.7" className={styles.centerText}>
                    <h2>welcome to</h2>
                    <h1>brasov</h1>
                </div>
            </div>
        </div>
    )
}
