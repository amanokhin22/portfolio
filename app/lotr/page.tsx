"use client"
import styles from "../../styles/lotr.module.scss";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import {Swiper as SwiperType, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export interface slidesItems {
    name: string;
    image: string
}

const slides: slidesItems[] = [
    {name: "Frodo", image: "/frodo.jpg"},
    {name: "Gandalf", image: "/gandalf.jpg"},
    {name: "Sam", image: "/sam.png"},
    {name: "Merry", image: "/merry.png"},
    {name: "Pippin", image: "/pippin.png"},
    {name: "Aragorn", image: "/aragorn.jpg"},
    {name: "Boromir", image: "/boromir.jpg"},
    {name: "Legolas", image: "/legolas.jpg"},
    {name: "Gimli", image: "/gimli.jpg"},
];

export default function Lotr() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const swiperNavRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            document.body.style.setProperty('--scrollTop', `${window.scrollY}px`);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSlideChange = () => {
        setCurrentIndex(swiperNavRef.current?.realIndex || 0);
    };
    return (
        <section className={styles.wrapper}>
            <div className={styles.content}>
                <header className={styles.mainHeader}>
                    <div className={styles.layers}>
                        <div className={styles.layerHeader}>
                            <div className={styles.layersImage}><Image width={39} height={39} src="/ring.png"
                                                                       alt="ring"/></div>
                            <div className={styles.layersCaption}> One to rule them all</div>
                            <div className={styles.layersTitle}> Middle Earth</div>
                        </div>
                        <div className={styles.layer}>
                            <div className={styles.layersBase}></div>
                            <div className={styles.layersMiddle}></div>
                            <div className={styles.layersFront}></div>
                        </div>
                    </div>
                </header>
                <article className={styles.mainArticle}>
                    <div className={styles.mainArticleContent}>
                        <h2 className={styles.mainArticleHeader}>The Lord of the Rings</h2>
                        <p className={styles.mainArticleParagraph}>The Lord of the Rings is an epic high-fantasy novel
                            by the English
                            author and scholar J. R. R. Tolkien. Set in Middle-earth, the story
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            began as a sequel to Tolkien's 1937 children's book The Hobbit, but
                            eventually developed into a much larger work. Written in stages between
                            1937 and 1949, The Lord of the Rings is one of the best-selling books
                            ever written, with over 150 million copies sold.</p>
                    </div>
                    <div className={styles.copy}>© Amano</div>
                </article>
                <div className={styles.videoWrapper}>
                    <video className={styles.video} autoPlay muted loop id="myVideo" src="/ring.webm"></video>
                    <div className={"row " + styles.videoContent}>
                        <div className={"col-lg-5 " + styles.videoCol}>
                            <h3 className={styles.videoTitle}>The Fellowship of the Ring</h3>
                            <p>Bilbo celebrates his eleventy-first (111th) birthday and leaves the Shire suddenly,
                                passing the
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Ring to Frodo Baggins, his cousin[e] and heir. Neither hobbit is aware of the Ring's
                                origin, but
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                the wizard Gandalf suspects it is a Ring of Power. Seventeen years later, in "The Shadow
                                of the
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Past", Gandalf confirms to Frodo that the Ring is the one lost by the Dark Lord Sauron
                                long ago
                                and counsels Frodo to take it away from the Shire. Gandalf leaves, promising to return
                                by
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Frodo's birthday and accompany Frodo on his journey, but fails to do so...</p>
                            <div className={styles.portfolio}>
                                <Link href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings">
                                    <span className={styles.descr}>About story</span></Link>
                                <Image width={420} height={280} className={styles.videoImg} src="/fellowship.jpg"
                                       alt="alt"/>
                            </div>
                        </div>
                        <div className={"col-lg-5 " + styles.videoCol}>
                            <h3 className={styles.videoTitle}>The Two Towers</h3>
                            <p>A party of large Orcs, Uruk-hai, sent by Saruman, and other Orcs sent by Sauron and led
                                by Grishnákh, attack the Fellowship.
                                Boromir tries to protect Merry and Pippin from the Orcs, but
                                they kill him and capture the two hobbits. Aragorn, Gimli and Legolas decide to pursue
                                the Orcs
                                taking Merry and Pippin. In the kingdom of Rohan, the Orcs are killed by Riders of
                                Rohan, led by Éomer. Merry and Pippin escape into Fangorn Forest, where they are
                                befriended by
                                Treebeard, the oldest of the tree-like Ents. Aragorn, Gimli and Legolas track the
                                hobbits to
                                Fangorn...</p>
                            <div className={styles.portfolio}>
                                <Link href="https://en.wikipedia.org/wiki/The_Two_Towers">
                                    <span className={styles.descr}>About story</span></Link>
                                <Image width={420} height={280} className={styles.videoImg} src="/towers.jpg"
                                       alt="alt"/>
                            </div>
                        </div>
                        <div className={"col-lg-5 " + styles.videoCol}>
                            <h3 className={styles.videoTitle}>The Return of the King</h3>
                            <p>Sauron sends a great army against Gondor. Gandalf arrives at Minas Tirith to warn
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Denethor of the attack, while Théoden musters the Rohirrim to ride to Gondor's aid. Minas Tirith is
                                besieged;
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                the Lord of the Nazgûl uses a spell-wound battering ram to destroy the city's gates.
                                Denethor,
                                deceived by Sauron, falls into despair. He burns himself alive on a pyre; Pippin and
                                Gandalf
                                rescue his son Faramir from the same fate...</p>
                            <div className={styles.portfolio}>
                                <Link href="https://en.wikipedia.org/wiki/The_Return_of_the_Kings">
                                    <span className={styles.descr}>About story</span></Link>
                                <Image width={420} height={280} className={styles.videoImg} src="/king.png" alt="alt"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.showCase}>
                    <h2 className={styles.showCaseHeader}>The Fellowship of the <span>Ring</span></h2>
                    <div className={styles.showcaseContentWrapper}>
                        <div className={styles.showCaseContent}>
                            <div className={styles.showCaseCarousel}>
                                <Swiper
                                    modules={Autoplay}
                                    loop={true}
                                    slidesPerView={3}
                                    spaceBetween={10}
                                    speed={500}
                                    autoplay={{delay: 3000}}
                                    centeredSlides={true}
                                    navigation={{
                                        prevEl: ".showcaseNavigationPrev",
                                        nextEl: ".showcaseNavigationNext",
                                    }}
                                    onBeforeInit={(swiper: SwiperType | null) => {
                                        swiperNavRef.current = swiper;
                                    }}
                                    onSlideChange={handleSlideChange}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                        },
                                        576: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                        },
                                        992: {
                                            slidesPerView: 1,
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                >
                                    {slides.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className={styles.showCaseCarouselItem}>
                                                <div className={styles.showCaseCarouselImageWrapper}>
                                                    <Image className={styles.showCaseCarouselImage} priority={true} src={item.image} width={360} height={400} alt="alt"></Image></div>
                                                <p>{item.name}</p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className={styles.showCaseNavigation}>
                                <div className={styles.showCaseNavigationPrev}
                                     onClick={() => swiperNavRef.current?.slidePrev()}></div>
                                <div className={styles.showCaseNavigationNext}
                                     onClick={() => swiperNavRef.current?.slideNext()}></div>
                            </div>
                        </div>
                    </div>
                    <video id="smoke" src="/smoke-background-optimized.mp4" autoPlay loop muted
                           className={styles.showCaseVideo}></video>
                </div>
            </div>
        </section>
    )
}
