"use client"

import styles from "../../styles/witcher.module.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
// @ts-ignore
import {Swiper as SwiperType, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function Witcher() {

    return (
        <div className={styles.witcherWrapper}>
            <div className={"swiper " + styles.slider}>
                <div className={styles.slider}>
                    <div className={"swiper-wrapper" + styles.sliderWrapper}>
                        <div className={styles.swiperSlide}>
                            <div className={styles.sliderItem}>
                                <div className={styles.sliderLayer}>
                                    <div className={styles.sliderLayerBack}></div>
                                </div>
                                <div className={styles.sliderLayer}>
                                    <div className={styles.sliderLayerMiddle}></div>
                                </div>
                                <canvas className="particles slider__layer" data-swiper-parallax="18%"
                                        data-color="#BE9164"></canvas>
                                <div className={styles.sliderLayer}>
                                    <div className={styles.sliderLayerFront}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.swiperSlide}>
                            <div className={styles.sliderItem}>
                                <div className={styles.sliderLayer}>
                                    <div className={styles.sliderLayerBack2}></div>
                                </div>
                                <div className={styles.sliderLayer}>
                                    <div className={styles.sliderLayerGera2}></div>
                                </div>
                                <div className={styles.sliderLayer}>
                                    <div className={styles.sliderLayerYen2}></div>
                                </div>
                                <canvas className="particles slider__layer" data-swiper-parallax="20%"
                                        data-color="#525A6D"></canvas>
                                <div className={styles.sliderLayer}>
                                    <div className={styles.sliderLayerFront2}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.swiperSlide}>
                            <div className={styles.sliderItem}>
                                <div className={styles.sliderLayer}>
                                    <div className={styles.sliderLayerBack3}></div>
                                </div>
                                <div className={styles.sliderLayer}>
                                    <div className={styles.sliderLayerMiddle3}></div>
                                </div>
                                <div className={styles.sliderLayer}>
                                    <div className={styles.sliderLayerCiri3}></div>
                                </div>
                                <canvas className="particles slider__layer" data-swiper-parallax="25%"
                                        data-color="#938086"></canvas>
                                <div className={styles.sliderLayer}>
                                    <div className={styles.sliderLayerFront3}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
