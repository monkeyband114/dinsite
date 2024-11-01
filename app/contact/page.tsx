"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the form data to your backend or a service like EmailJS
    // For this example, we'll just simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-sky-600 text-white py-20">
        <Image
          src="/contact-bg.jpg"
          alt="Contact Us Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 mix-blend-overlay"
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-center">
            We'd love to hear from you. Get in touch with us for any inquiries
            or collaborations.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              ref={formRef}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              variants={stagger}>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={fadeIn}>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full h-32"
                      />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                      <Button
                        type="submit"
                        className="w-full bg-sky-600 text-white hover:bg-sky-700">
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              ref={infoRef}
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
              variants={stagger}
              className="space-y-8">
              <motion.div variants={fadeIn}>
                <h2 className="text-2xl font-bold mb-4 text-sky-800">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-6">
                  Feel free to reach out to us using any of the following
                  methods. We're here to help!
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-sky-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-sky-800">Address</h3>
                  <p className="text-gray-600">
                    123 Web Dev Street, Digital City, 12345
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-sky-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-sky-800">Phone</h3>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-sky-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-sky-800">Email</h3>
                  <p className="text-gray-600">info@dinstack.com.ng</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
