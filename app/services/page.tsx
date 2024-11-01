"use client";

import { motion } from "framer-motion";
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
import {
  ArrowRight,
  Code,
  Palette,
  Globe,
  ShoppingCart,
  Cloud,
  Zap,
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

const services = [
  {
    title: "Web Development",
    description:
      "Custom web applications tailored to your specific business needs.",
    icon: <Code className="w-6 h-6" />,
    features: [
      "Responsive Design",
      "Frontend & Backend Development",
      "API Integration",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Create intuitive and visually appealing interfaces for your digital products.",
    icon: <Palette className="w-6 h-6" />,
    features: ["User Research", "Wireframing & Prototyping", "Visual Design"],
  },
  {
    title: "E-commerce Solutions",
    description:
      "Build and optimize online stores to boost your sales and customer experience.",
    icon: <ShoppingCart className="w-6 h-6" />,
    features: [
      "Custom E-commerce Platforms",
      "Payment Gateway Integration",
      "Inventory Management",
    ],
  },
  {
    title: "Cloud Services",
    description:
      "Leverage cloud technologies to scale your applications and improve performance.",
    icon: <Cloud className="w-6 h-6" />,
    features: ["Cloud Migration", "Serverless Architecture", "DevOps & CI/CD"],
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your website's visibility and ranking on search engines.",
    icon: <Globe className="w-6 h-6" />,
    features: ["On-page SEO", "Technical SEO", "Content Optimization"],
  },
  {
    title: "Performance Optimization",
    description:
      "Enhance your website's speed and efficiency for better user experience.",
    icon: <Zap className="w-6 h-6" />,
    features: [
      "Code Optimization",
      "Caching Strategies",
      "Load Time Reduction",
    ],
  },
  {
    title: "Machine Learning Pipeline",
    description:
      "End-to-end ML solutions from data preprocessing to model deployment and monitoring.",
    icon: <Brain className="w-6 h-6" />,
    features: [
      "Data Preprocessing",
      "Model Development",
      "Deployment & Monitoring",
    ],
  },
  {
    title: "Data Analysis",
    description:
      "Comprehensive data analysis services to extract insights and drive informed decision-making.",
    icon: <BarChart className="w-6 h-6" />,
    features: [
      "Exploratory Data Analysis",
      "Statistical Modeling",
      "Data Visualization",
    ],
  },
];

export default function Services() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={stagger}
        className="relative bg-sky-600 text-white py-20">
        <Image
          src="/services-bg.jpg"
          alt="Services Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 mix-blend-overlay"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Our Services
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl mb-8 max-w-2xl mx-auto text-center">
            Comprehensive web solutions to help your business thrive in the
            digital world.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={stagger}
        className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-sky-700">
                      {service.icon}
                      <span className="ml-2">{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {service.description}
                    </CardDescription>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={stagger}
        className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold mb-6 text-sky-800">
            Ready to Elevate Your Online Presence?
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Let's discuss how our services can help your business grow and
            succeed in the digital landscape.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button
              asChild
              size="lg"
              className="bg-sky-600 text-white hover:bg-sky-700">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
