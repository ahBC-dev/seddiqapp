import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-muted/30 border-t pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Seddiq Sheikhi</h3>
                        <p className="text-muted-foreground max-w-xs">
                            Professional Project Manager dedicated to delivering excellence and driving success in every project.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Phone className="h-4 w-4 text-primary" />
                                <a href="tel:+971522688448" className="hover:text-foreground transition-colors">+971 52 268 8448</a>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Phone className="h-4 w-4 text-primary" />
                                <a href="tel:+971521226512" className="hover:text-foreground transition-colors">+971 52 122 6512</a>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Mail className="h-4 w-4 text-primary" />
                                <a href="mailto:contact@seddiqsheikhi.com" className="hover:text-foreground transition-colors">contact@seddiqsheikhi.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>United Arab Emirates</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                            <li><Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                            <li><Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</Link></li>
                            <li><Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        &copy; {new Date().getFullYear()} Seddiq Sheikhi. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
