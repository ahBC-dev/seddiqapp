"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Since I haven't created a Badge component yet, I'll use a simple span with classes.

const projects = [
    {
        title: "Enterprise Resource Planning Implementation",
        role: "Lead Project Manager",
        description: "Led the end-to-end implementation of a global ERP system across 5 regional offices, improving operational efficiency by 40%.",
        tags: ["ERP", "Change Management", "Global Teams"],
        year: "2023"
    },
    {
        title: "Infrastructure Modernization",
        role: "Project Manager",
        description: "Managed a $5M infrastructure upgrade project, ensuring zero downtime for critical business operations during the transition.",
        tags: ["Infrastructure", "IT", "Risk Management"],
        year: "2022"
    },
    {
        title: "Digital Transformation Initiative",
        role: "Senior Project Coordinator",
        description: "Coordinated the digitization of legacy processes, resulting in a paperless workflow and 25% cost reduction.",
        tags: ["Digital Transformation", "Process Optimization"],
        year: "2021"
    }
]

export default function Projects() {
    return (
        <section id="experience" className="py-24 flex justify-center">
            <div className="container px-4 md:px-6 flex flex-col justify-center items-center">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Experience & Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of key projects that demonstrate my ability to deliver value and manage complexity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-sm text-muted-foreground font-mono">{project.year}</span>
                                    </div>
                                    <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                                    <CardDescription className="font-medium text-primary">{project.role}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-6">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
