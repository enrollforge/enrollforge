"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, Zap, Video, TrendingUp, Globe } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#2043A8] to-[#1CC7B2] rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">EnrollForge</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link href="/case-studies" className="text-gray-600 hover:text-gray-900 transition-colors">
              Case Studies
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
              Sign in
            </Link>
            <Button className="bg-[#2043A8] hover:bg-[#1a3687] text-white rounded-full px-6">
              Book a Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#2043A8] via-[#2856b8] to-[#1CC7B2] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                Forging the Future of Enrollment
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                The AI Enrollment Engine for Modern Institutions
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Real-time analytics, higher-intent leads, and friction-free student access. 
                Built to help your team prove impact—not just activity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-[#2043A8] hover:bg-gray-100 rounded-full px-8 text-lg">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 text-lg">
                  See Platform
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">Dashboard Overview</span>
                    <span className="text-xs text-white/50">Last 30 days</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-sm text-white/70 mb-1">Visitors</div>
                      <div className="text-3xl font-bold">12,540</div>
                      <div className="text-xs text-green-300 mt-1">↑ 23%</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-sm text-white/70 mb-1">Leads</div>
                      <div className="text-3xl font-bold">1,128</div>
                      <div className="text-xs text-green-300 mt-1">↑ 18%</div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-sm text-white/70 mb-2">Inquiry Rate</div>
                    <div className="text-4xl font-bold">8.9%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 mb-8">Trusted by leading institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <div className="text-2xl font-bold text-gray-400">UNIVERSITY</div>
            <div className="text-2xl font-bold text-gray-400">COLLEGE</div>
            <div className="text-2xl font-bold text-gray-400">ACADEMY</div>
            <div className="text-2xl font-bold text-gray-400">INSTITUTE</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything you need to grow enrollment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A fully integrated suite of tools designed to attract, engage, and convert prospective students.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Real-Time Analytics",
                description: "Track visitor behavior, lead quality, and conversion metrics in real-time with AI-powered insights."
              },
              {
                icon: Users,
                title: "Smart Lead Management",
                description: "Capture, score, and nurture leads automatically. Sync seamlessly with your CRM."
              },
              {
                icon: Video,
                title: "Interview Hub",
                description: "Schedule and conduct virtual interviews with integrated Zoom and Calendly support."
              },
              {
                icon: Zap,
                title: "AI-Powered Insights",
                description: "Get actionable recommendations on programs, regions, and campaigns that drive results."
              },
              {
                icon: TrendingUp,
                title: "Webinar Management",
                description: "Host engaging webinars and automatically convert attendees into qualified leads."
              },
              {
                icon: Globe,
                title: "Geographic Heatmaps",
                description: "Visualize where your highest-intent prospects are coming from and optimize outreach."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#2043A8] to-[#1CC7B2] rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#2043A8] to-[#1CC7B2] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to transform your enrollment strategy?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of institutions using EnrollForge to attract and enroll more students.
          </p>
          <Button size="lg" className="bg-white text-[#2043A8] hover:bg-gray-100 rounded-full px-8 text-lg">
            Book a Demo Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#2043A8] to-[#1CC7B2] rounded-lg"></div>
                <span className="text-xl font-bold text-white">EnrollForge</span>
              </div>
              <p className="text-sm">Forging the Future of Enrollment</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            © 2025 EnrollForge. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
