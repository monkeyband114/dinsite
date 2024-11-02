"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ArrowRight,
  ShoppingCart,
  Plug,
  Cloud,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Star,
  Menu,
  Brain,
  BarChart,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const rotateIn = {
  hidden: { opacity: 0, rotate: -5 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 0.8 } },
};

const services = [
  {
    name: "E-commerce Solutions",
    description:
      "Custom e-commerce websites using Shopify, WordPress, or built from scratch to suit your unique business needs.",
    icon: <ShoppingCart className="w-6 h-6" />,
  },
  {
    name: "API Integration & Plugin Development",
    description:
      "Seamless API adaptations and custom plugin development to extend your website's functionality.",
    icon: <Plug className="w-6 h-6" />,
  },
  {
    name: "Cloud Integration & Upgrades",
    description:
      "Modernize your web services with cloud integration (AWS, Azure, Oracle) and comprehensive upgrades.",
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    name: "Machine Learning Pipeline",
    description:
      "End-to-end ML solutions from data preprocessing to model deployment and monitoring.",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    name: "Data Analysis",
    description:
      "Comprehensive data analysis services to extract insights and drive informed decision-making.",
    icon: <BarChart className="w-6 h-6" />,
  },
];

const projects = [
  {
    name: "ELPATRON HUB",
    description: "A cutting-edge e-commerce platform for electronics",
    image: "/project1.jpg",
  },
  {
    name: "EcoSmart",
    description: "IoT-based smart home solution with custom plugins",
    image: "/project3.jpg",
  },
  {
    name: "PredictAI",
    description:
      "Advanced machine learning pipeline for predictive analytics in finance",
    image: "/project4.svg",
  },
];

const testimonials = [
  {
    name: " Rohit Patel",
    company: "TechCorp",
    comment:
      "DinStack transformed our online presence. Their expertise in e-commerce solutions helped us increase our sales by 200%.",
    rating: 5,
    image: "/customer1.jpg",
  },
  {
    name: "Anitha Ryan",
    company: "FitLife",
    comment:
      "The team at DinStack delivered a robust fitness app that exceeded our expectations. Their cloud integration skills are top-notch!",
    rating: 5,
    image: "/customer2.jpg",
  },
  {
    name: "Matthew Dover",
    company: "GreenTech",
    comment:
      "DinStack's custom plugin development for our IoT platform was crucial in making our product stand out in the market.",
    rating: 4,
    image: "/customer4.jpg",
  },
];

const developers = [
  {
    name: "Shem Itoya",
    role: "Frontend Developer",
    skills: "React, Next.js, Tailwind CSS",
    image: "/developer1.jpg",
  },
  {
    name: "Jeffrey Omamoke",
    role: "Backend Developer",
    skills: "Node.js, Express, MongoDB",
    image: "/developer2.jpg",
  },
  {
    name: "Lesley Ayemi",
    role: "Full Stack Developer",
    skills: "Python, Django, React, PostgreSQL",
    image: "/developer3.jpg",
  },
];

const bannerImages = [
  "/banner1.jpg",
  "/banner2.jpg",
  "/banner3.jpg",
  "/banner4.jpg",
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [developersRef, developersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length,
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="space-y-24">
        <motion.section
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={stagger}
          className="relative h-screen flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-0">
              <Image
                src={bannerImages[currentImageIndex]}
                alt="Banner background"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="brightness-50"
              />
            </motion.div>
          </AnimatePresence>
          <div
            className="relative z-10 text-center text-white
          ">
            <motion.h1 variants={rotateIn} className="text-5xl font-bold mb-6">
              Elevate Your Business with DinStack
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl mb-8 max-w-2xl mx-auto">
              Unleash the power of professional web solutions and stunning
              designs. Your success story starts here.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button
                asChild
                size="lg"
                className="bg-sky-700 text-white hover:bg-sky-800">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          ref={servicesRef}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={stagger}
          className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-12 text-sky-800">
            Our Premium Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="hover:shadow-lg transition-shadow duration-300 border-sky-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-sky-700">
                      {service.icon}
                      <span className="ml-2">{service.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                    <Button
                      variant="outline"
                      className="mt-4 text-sky-600 border-sky-600 hover:bg-sky-50">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          ref={projectsRef}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
          variants={stagger}
          className="bg-sky-50 py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold text-center mb-12 text-sky-800">
              Our Latest Projects
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-sky-700">
                      {project.name}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={testimonialsRef}
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
          variants={stagger}
          className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-12 text-sky-800">
            What Our Customers Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-lg border border-sky-200">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-sky-700">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          ref={featuresRef}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          variants={stagger}
          className="bg-sky-100 py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold text-center mb-12 text-sky-800">
              Why Choose DinStack?
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={rotateIn} className="text-center">
                <div className="bg-sky-500 text-white rounded-full p-4 inline-block mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2  text-sky-700">
                  Expertise
                </h3>
                <p className="text-gray-600">
                  Our skilled professionals ensure top-notch service delivery.
                </p>
              </motion.div>
              <motion.div variants={rotateIn} className="text-center">
                <div className="bg-sky-500 text-white rounded-full p-4 inline-block mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sky-700">
                  Efficiency
                </h3>
                <p className="text-gray-600">
                  Quick and efficient service to meet your deadlines.
                </p>
              </motion.div>
              <motion.div variants={rotateIn} className="text-center">
                <div className="bg-sky-500 text-white rounded-full p-4 inline-block mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sky-700">
                  Satisfaction
                </h3>
                <p className="text-gray-600">
                  We stand behind our work with a satisfaction guarantee.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={developersRef}
          initial="hidden"
          animate={developersInView ? "visible" : "hidden"}
          variants={stagger}
          className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-12 text-sky-800">
            Meet Our Developers
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {developers.map((developer, index) => (
              <motion.div key={index} variants={fadeIn} className="text-center">
                <Image
                  src={developer.image}
                  alt={developer.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-sky-700">
                  {developer.name}
                </h3>
                <p className="text-gray-600 mb-2">{developer.role}</p>
                <p className="text-sm text-gray-500">{developer.skills}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          ref={ctaRef}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={stagger}
          className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold mb-6 text-sky-800">
            Ready to Take Your Business to the Next Level?
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Join the ranks of satisfied clients who have transformed their
            online presence with DinStack.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button
              asChild
              size="lg"
              className="bg-sky-600 text-white hover:bg-sky-700 mb-4">
              <Link href="/contact">
                Start Your Journey <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}
