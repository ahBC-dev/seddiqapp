"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const [activeSection, setActiveSection] = React.useState<string>("home")

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    React.useEffect(() => {
        const ids = navItems.map((n) => n.href.replace('#', ''))

        const handle = () => {
            const triggerY = 100 // approx fixed header height + offset
            const sections = ids
                .map((id) => {
                    const el = document.getElementById(id)
                    if (!el) return null
                    const rect = el.getBoundingClientRect()
                    return { id, rect }
                })
                .filter((x): x is { id: string; rect: DOMRect } => x !== null)

            if (sections.length === 0) return

            const inView = sections.filter(({ rect }) => rect.top <= triggerY && rect.bottom > triggerY)
            if (inView.length > 0) {
                setActiveSection(inView[0].id)
                return
            }

            // Fallback: nearest section top to the trigger line
            const nearest = sections
                .map(({ id, rect }) => ({ id, distance: Math.abs(rect.top - triggerY) }))
                .sort((a, b) => a.distance - b.distance)[0]
            if (nearest) setActiveSection(nearest.id)
        }

        let ticking = false
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handle()
                    ticking = false
                })
                ticking = true
            }
        }

        handle()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                >
                    Seddiq Sheikhi
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors relative group",
                                activeSection === item.href.replace('#','') ? "text-primary" : "hover:text-primary"
                            )}
                        >
                            {item.name}
                            <span
                                className={cn(
                                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                                    activeSection === item.href.replace('#','') ? "w-full" : "w-0 group-hover:w-full"
                                )}
                            />
                        </Link>
                    ))}
                    <Button asChild className="ml-2 hover:text-black">
                        <Link href="#contact">Hire Me</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "text-lg font-medium py-2 border-b border-border/50",
                                        activeSection === item.href.replace('#','') ? "text-primary" : ""
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button className="w-full mt-2" asChild onClick={() => setIsOpen(false)}>
                                <Link href="#contact">Hire Me</Link>
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
