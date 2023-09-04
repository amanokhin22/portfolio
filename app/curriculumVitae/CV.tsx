import styles from "@/styles/home.module.scss";
import Link from "next/link";

export default function CV() {
    return (
        <section className="container p-3">
            <div className={"row " + styles.title}>
                <span className={"col-lg-12 " + styles.major}>Front-end Developer</span>
                <span className={"col-lg-12 " + styles.name}>Artem Manokhin CV`s</span>
            </div>

            <div className={"row " + styles.contacts}>
                <span className="col-lg-4 col-md-4 col-sm-12 ">Kharkiv, Ukraine</span>
                <a className="col-lg-4 col-md-4 col-sm-12 " href="tel: +380994615438">+380994615438</a>
                <a className="col-lg-4 col-md-4 col-sm-12 "
                   href="mailto: amanokhin22@gmail.com">amanokhin22@gmail.com</a>
            </div>
            <div className={"row " + styles.social}>
                <a className="col " href="https://github.com/amanokhin22?tab=repositories">GitHub</a>
                <a className="col " href="https://t.me/ArtiomManokhin">Telegram</a>
                <a className="col " href="https://www.linkedin.com/in/artiom-manokhin/">LinkedIn</a>
            </div>
            <div className={"row " + styles.summary}>
                <div className={"col-12 " + styles.titleDiv}>
                    <h1 className={styles.summaryTitle}>SUMMARY</h1>
                </div>
                <div className={"col-12 " + styles.summaryText}>
                    I am a front-end developer with over a year of freelancing experience and personal projects hosted
                    on <Link className={styles.link}
                             href={"https://github.com/amanokhin22?tab=repositories"}>GitHub</Link>.
                    Ready to work with modern toolsets such as React, Redux Toolkit, Next JS, Git, Jira, etc. Passionate
                    about
                    front-end and web development in general. Motivated to learn and improve my skills. Ready to work
                    with React
                    and related technologies. I have experience in communicating with clients and the team to solve
                    business problems. This is my complete <Link className={styles.link}
                                                                 href={"https://drive.google.com/file/d/1ejK4lXW81NkKW6jXh2SF6mVruvXIVMO9/view?usp=sharing"}>resume.</Link>
                    You can also look at examples of my work on other pages of this project.
                </div>
            </div>
            <div className={"row " + styles.highlights}>
                <div className={"col-lg-4 col-md-4 col-sm-12 " + styles.skills}>
                    <div className={styles.skillsTitle}>TECH SKILLS</div>
                    <ul className={styles.skillsList}>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Next.JS</li>
                        <li>Vue.JS</li>
                        <li>Redux/Redux toolkit</li>
                        <li>HTML</li>
                        <li>CSS/SASS</li>
                        <li>Material UI</li>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                        <li>Postman</li>
                        <li>Axios</li>
                        <li>GIT</li>
                        <li>Jira</li>
                    </ul>
                    <div className={styles.education}>
                        <span className={styles.titleEducation}>EDUCATION</span>
                        <span>Yaroslav Mudryi National Law
                            University (Kharkiv)Master’s
                            Degree, Lawyer, 2011</span>
                        <span>Languages:</span>
                        <div className={styles.language}>
                            <strong>English:</strong>
                            <span>intermediate</span>
                        </div>
                        <div className={styles.language}>
                            <strong>Ukraine:</strong>
                            <span>fluent</span>
                        </div>
                    </div>
                </div>
                <div className={"col-lg-8 col-md-8 col-sm-12 " + styles.highlightsText}>
                    <h2 className={styles.titleHighLights}>HIGHLIGHTS</h2>
                    <ul className={styles.highlightsList}>
                        <li>Writing HTML/CSS using Figma designs</li>
                        <li>Development using React, hooks, Redux, React Routing, Context</li>
                        <li>Development using NextJS, NextJS routing system and layout system</li>
                        <li>Development using Vue and Vuex</li>
                        <li>Development cli scripts with NodeJS</li>
                        <li>Development telegram-bots in JS applications</li>
                        <li>Implementation google map integration</li>
                        <li>Create App with the various API, such as currency exchange, weather forecast</li>
                        <li>Mocking data for JSON server, design data relations</li>
                        <li>Deploying projects to Vercel</li>
                        <li>Trained more than 20 newbies at a previous job</li>
                        <li>CISCO Certified - Introduction to Cybersecurity</li>
                        <li>Took a part in the 5 commercial projects</li>
                        <li>Successfully completed more than 20 education projects</li>
                        <li>Over 2500 hours of web development learning</li>
                    </ul>
                    <div className={styles.experience}>
                        <h2 className={styles.experienceTitle}>EXPERIENCE</h2>
                        <div className={styles.experienceBlock}>
                            <span>Nov 2022 - present</span>
                            <span>Freelance in Maksym Hrom`s team</span>
                            <span>Junior Frontend, React Developer</span>
                        </div>
                        <div className={styles.experienceBlock}>
                            <span>Apr 2022 - Nov 2022</span>
                            <span>Maksym Hrom, Mentorship program</span>
                            <span>Junior Frontend, React Developer Program</span>
                        </div>
                        <div className={styles.experienceBlock}>
                            <span>Jan 2023 – Mar 2023</span>
                            <span>Internship at Lambda Team https://lambda.direct/</span>
                            <span>Junior Frontend, React Developer Program</span>
                        </div>
                        <div className={styles.experienceBlock}>
                            <span>Aug 2011 - Mar 2022</span>
                            <span>Lawyer, Self-employed, full-time</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
