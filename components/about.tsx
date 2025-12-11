"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const skills = [
    "Strategic Planning",
    "Risk Management",
    "Team Leadership",
    "Budgeting & Cost Control",
    "Agile & Waterfall Methodologies",
    "Stakeholder Management",
    "Process Improvement",
    "Quality Assurance",
]

export default function About() {
    return (
        <section id="about" className="py-24 bg-muted/30 flex justify-center">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted border flex items-center justify-center">
                            <p className="text-muted-foreground">Profile Photo Placeholder</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
                        <p className="text-lg text-muted-foreground">
                            With years of experience in project management, I have successfully led diverse teams to deliver high-impact projects across various industries. My approach combines analytical rigor with emotional intelligence to navigate complex challenges and drive results.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            I am passionate about optimizing workflows and fostering a collaborative culture that empowers team members to perform at their best.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span className="font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
