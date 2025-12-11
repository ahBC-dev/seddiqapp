"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
            </div>

            <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4 max-w-3xl"
                >
                    <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium text-primary">
                        Professional Project Manager
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                        Turning Vision into <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            Successful Reality
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                        Hi, I'm Seddiq Sheikhi. I help organizations deliver complex projects on time and within budget through strategic planning and effective leadership.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button size="lg" className="text-lg px-8 hover:text-black" asChild>
                        <Link href="#contact">
                            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                        <Link href="#projects">View Projects</Link>
                    </Button>
                </motion.div>

                {/* Placeholder for Image/Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="w-full max-w-4xl mt-12 relative aspect-video rounded-xl border bg-muted/50 overflow-hidden flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                    <p className="text-muted-foreground z-0">Hero Image / Project Dashboard Visual Placeholder</p>
                </motion.div>
            </div>
        </section>
    )
}
