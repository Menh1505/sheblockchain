"use client";

import Image from "next/image";
import styles from "./team-section.module.css";

const teamMembers = [
    {
        imageSrc: "/team/cris.jpg",
        name: "Cris D Tran",
        role: "Head of Growth, Vietnam",
        description: "Founding Advisor of FLI Vietnam. 8 years of experience in Blockchain & Crypto.",
    },
    {
        imageSrc: "/team/jasontran.jpg",
        name: "Jason Tran",
        role: "Founder & CEO of Wallacy",
        description:
            "17 years in Management, Marketing, Product Development and Fundraising. 5 years of experience in Blockchain & Crypto",
    },
    {
        imageSrc: "/team/pavendo.jpg",
        name: "Paven Do",
        role: "Co-founder & CEO of Octan Network and BrownFi",
        description: "6 years of experience as a blockchain scientist and entrepreneur.",
    },
    {
        imageSrc: "/team/phongdao.jpg",
        name: "Phong Dao",
        role: "Lawyer",
        description: "Managing lawyer at Investpush Legal. 7 years of experience in Blockchain & Crypto",
    },
    {
        imageSrc: "/team/phongnguyen.jpg",
        name: "Phong Nguyen",
        role: "Master of Computer Science",
        description: "Operation Center Manager at Ozitem Group, France. 7 years of experience in Blockchain & Crypto",
    },
    {
        imageSrc: "/team/thuylinh.jpg",
        name: "Thuy Linh",
        role: "Founder of S.H.E Blockchain",
        description: "5 years of experience in Blockchain & Crypto.",
    },
    {
        imageSrc: "/team/ryan.jpg",
        name: "Ryan Pham",
        role: "Co-founder",
        description: "Entrepreneur and product builder. 12 years of experience in Blockchain & Crypto",
    },
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
