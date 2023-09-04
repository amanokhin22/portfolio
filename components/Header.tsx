"use client"
import Link from 'next/link';
import styles from '../styles/header.module.scss';
import Image from "next/image";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap-grid.css';

export const Header = () => {
    const [burgerOpened, setBurgerOpened] = useState(false);
    const [colorAfterScroll, setColorAfterScroll] = useState(false);

    useEffect(() => {
        const changeColorOnScroll = () => {
            if (window.scrollY >= 24) {
                setColorAfterScroll(true);
            } else {
                setColorAfterScroll(false);
            }
        };
        window.addEventListener("scroll", changeColorOnScroll);

        return () => {
            window.removeEventListener("scroll", changeColorOnScroll);
        };
    }, []);
    const closeBurgerMenu = () => {
        setBurgerOpened(false);
    };
    return (
        <header className={styles.headerWrapper + " " + (colorAfterScroll ? styles.headerBg : "")}>
            <div className="container">
                <div className={"row " + styles.header + " " + (burgerOpened ? styles.headerBgBurger : "")}>
                    <div className={styles.headerContainer}>
                        <div className={styles.divIcon}>
                            <Image className={styles.icon} width={35} height={35} src="/wolf.svg" alt="icon"></Image>
                            <span className={styles.myName}>Amano</span>
                        </div>

                        <div className={burgerOpened ? styles.navbar + " " + styles.navbarWrapperShow : styles.navbar}>

                            <Link onClick={closeBurgerMenu} href="/">CV</Link>

                            <Link onClick={closeBurgerMenu} href="/lotr">LoTR</Link>

                            <Link onClick={closeBurgerMenu} href="/witcher">Witcher</Link>

                            <Link onClick={closeBurgerMenu} href="/notes">Notes</Link>

                        </div>
                        <span className={styles.burger} onClick={() => setBurgerOpened(!burgerOpened)}>
                                {burgerOpened
                                    ? <Image width={35} height={35} src="/close.svg" alt="close"/>
                                    : <Image width={35} height={35} src="/burgerMenu.svg" alt="burgerMenu"/>}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};
