"use client";

import Image from "next/image";
import styles from "./team-section.module.css";

const teamMembers = [
    {
        imageSrc: "/team/jasontran.jpg",
        name: "Jason Tran",
        role: "Founder & CEO of Wallacy",
        description:
            "17 years in Management, Marketing, Product Development and Fundraising. 5 years of experience in Blockchain & Crypto",
    },
    {
        imageSrc: "/team/phongdao.jpg",
        name: "Phong Dao",
        role: "Lawyer",
        description: "Managing lawyer at Investpush Legal. 7 years of experience in Blockchain & Crypto",
    },
    {
        imageSrc: "/team/thuylinh.jpg",
        name: "Thuy Linh",
        role: "Founder of S.H.E Blockchain",
        description: "5 years of experience in Blockchain & Crypto.",
    }
] as const;

export function TeamSection() {
    return (
        <section className={styles.section}>
            <div className={styles.heading}>
                <p className={styles.eyebrow}>Our Team</p>
                <h2 className={styles.h2}>Speak With One of Our Experts</h2>
            </div>

            <div className={styles.scrollWrap}>
                <div className={styles.track}>
                    {teamMembers.map((member, index) => (
                        <article key={member.name} className={styles.card}>
                            <div className={styles.cardImage}>
                                <Image
                                    src={member.imageSrc}
                                    alt={member.name}
                                    fill
                                    style={{ objectFit: "cover", objectPosition: "center top" }}
                                    priority={index < 2}
                                />
                            </div>
                            <div className={styles.cardBody}>
                                <p className={styles.cardName}>{member.name}</p>
                                <p className={styles.cardRole}>{member.role}</p>
                                <p className={styles.cardDesc}>{member.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
