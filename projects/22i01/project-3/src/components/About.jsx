import React from 'react'
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/all"
import AnimatedTitle from "./AnimatedTitle.jsx";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 2,
                pin:true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
    })

    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relativemb-8 mt-36 flex flex-col items-center gap-5">
                <h2 className="font-geneeral text-sm uppercase
                md:text-[10px">Welcome to the Game</h2>

                <AnimatedTitle title="Disc <b>o</b> ver the world's <br/> l <b>a</b> rgest shared adventure"
                containerClass="mt-5 !text-black text-center"
                />

            </div>

            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path about-image">
                    <img src="/img/about.webp"
                         alt="Background"
                    className="absolute left-0 top-0 size-full object-cover"
                    />

                </div>
            </div>

        </div>
    )
}
export default About
