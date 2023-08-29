import styles from "@/styles/footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className={"container"}>
                <div className={"row " + styles.footer}>
                    <div className={"col-lg-12 "}>
                        <div className={"row " + styles.topLine}>
                            <div className={"col-lg-6 col-md-6 col-sm-12 " + styles.firstBlock}>
                                <div className={styles.divIcon}>
                                    <Image className={styles.icon} width={35} height={35} src="/wolf.svg"
                                           alt="icon"></Image>
                                </div>
                                <span className={styles.separateLine}></span>
                                <ul className={styles.footerUl}>
                                    <li className={styles.footerLi}>
                                        <Link href="/">CV</Link>
                                    </li>
                                    <li className={styles.footerLi}>
                                        <Link href="/lotr">LoTR</Link>
                                    </li>
                                    <li className={styles.footerLi}>
                                        <Link href="/witcher">Witcher</Link>
                                    </li>
                                    <li className={styles.footerLi}>
                                        <Link href="/notes">Notes</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={"col-lg-6 col-md-6 col-sm-12 " + styles.secondBlock}>
                                <div className={styles.contacts}>
                                    <a href="tel: +380994615438">+380994615438</a>
                                    <a href="mailto: amanokhin22@gmail.com">amanokhin22@gmail.com</a>

                                </div>
                                <div className={styles.social}>
                                    <Link href={"https://www.linkedin.com/in/artiom-manokhin/"}>
                                        <Image width={35} height={35} src="/linkedin.svg" alt="linkedin"
                                               className={styles.socialDivInst}/>
                                    </Link>
                                    <Link href="https://t.me/ArtiomManokhin">
                                        <Image className={styles.logoTelega} width={35} height={35} src="/telegram.svg"
                                               alt="telegram"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col " + styles.copyright}>Created by ©Amano</div>
                </div>
            </div>
        </footer>
    )
}
