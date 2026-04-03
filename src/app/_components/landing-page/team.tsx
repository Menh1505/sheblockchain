import { ProfileCard } from "../profile-card";

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
    description: "17 years in Management, Marketing, Product Development and Fundraising. 5 years of experience in Blockchain & Crypto",
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
    <section id="team" className="bg-gray-900 w-full scroll-mt-32 px-10 py-8 sm:px-6 lg:px-8 sm:mt-8 md:mt-14 lg:mt-26">
      <div className="mb-10 text-center">
        <h2 className="text-xl mb-2 font-black uppercase text-cyan-400 sm:text-2xl">Our Team</h2>
        <h2 className="relative inline-block text-4xl font-black uppercase text-white sm:text-5xl">
          Speak With One of Our Experts
          <span className="absolute left-1/2 top-full mt-2 h-1 w-16 -translate-x-1/2 rounded-full bg-cyan-500" />
        </h2>
      </div>

      <div className="-mx-4 overflow-x-auto custom-scrollbar px-4 pb-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="flex min-w-max gap-6">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={`${member.name}-${index}`}
              imageSrc={member.imageSrc}
              name={member.name}
              role={member.role}
              description={member.description}
              className="w-70 shrink-0 sm:w-75 lg:w-[320px]"
              priority={index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
