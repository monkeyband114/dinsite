"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const team = [
  {
    name: "Michael Adawaren",
    role: "Machine learning Engineer",
    bio: "Michael is a Ethusiastic ML Enginneer with 5 years of experience in creating Machine learning piplines and intaracting with a wide range of Apis.",
    image: "/developer0.jpg",
  },
  {
    name: "Shem Itoya",
    role: "Frontend Developer",
    bio: "Shem is a passionate frontend developer with 5 years of experience in creating responsive and user-friendly web applications.",
    image: "/developer1.jpg",
  },
  {
    name: "Jeffrey Omamoke",
    role: "Backend Developer",
    bio: "Jeffrey is an experienced backend developer specializing in scalable server-side applications and database management.",
    image: "/developer2.jpg",
  },
  {
    name: "David Kim",
    role: "UI/UX Designer",
    bio: "David brings creativity and user-centric design principles to every project, ensuring intuitive and visually appealing interfaces.",
    image: "/developer5.jpg",
  },
  {
    name: "Lesley Ayemi",
    role: "Full Stack Developer",
    bio: "Lesley is a versatile full stack developer with expertise in both frontend and backend technologies, bridging the gap between design and functionality.",
    image: "/developer3.jpg",
  },
  {
    name: "Ogehuku Chike",
    role: "ML Enginer",
    bio: "Chike is a versatile ML expert and Data Analysist with expertice on a varity of Analysis tool such as powerBI Tableau excel and Python thus being able to bring Insight Required data",
    image: "/developer4.jpg",
  },
  {
    name: "Onos Omuah",
    role: "Frontend Developer",
    bio: "Onos is a passionate frontend developer & Creative Designer Turning Ideas into Engaging Digital Experiences.",
    image: "/developer8.jpg",
  },
];

export default function About() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={stagger}
        className="relative bg-sky-600 text-white py-20">
        <Image
          src="/about-bg.jpg"
          alt="About Us Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 mix-blend-overlay"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About DinStack
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl mb-8 max-w-2xl mx-auto text-center">
            We are a team of passionate developers and designers dedicated to
            creating exceptional web solutions for businesses of all sizes.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        ref={missionRef}
        initial="hidden"
        animate={missionInView ? "visible" : "hidden"}
        variants={stagger}
        className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold mb-8 text-center text-sky-800">
            Our Mission
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl mb-8 max-w-3xl mx-auto text-center text-gray-600">
            At DinStack, we strive to empower businesses with cutting-edge web
            solutions that drive growth, enhance user experiences, and stay
            ahead in the digital landscape.
          </motion.p>
          <motion.div variants={fadeIn} className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-sky-600 text-white hover:bg-sky-700">
              <Link href="/contact">
                Work With Us <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={stagger}
        className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold mb-12 text-center text-sky-800">
            Meet Our Team
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-sky-700">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{member.role}</p>
                    <p className="text-sm text-gray-500">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
