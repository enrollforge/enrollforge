"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, Video, Zap, TrendingUp, Globe, Mail, Database, Shield, Webhook } from "lucide-react";
import { motion } from "motion/react";

export default function Features() {
  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Analytics Dashboard",
      description: "Track every visitor, lead, and conversion in real-time. See which programs, pages, and campaigns drive the most engagement.",
      benefits: [
        "Live visitor tracking with session replay",
        "Lead quality scoring and segmentation",
        "Conversion funnel analysis",
        "Custom KPI dashboards"
      ]
    },
    {
      icon: Users,
      title: "Smart Lead Management",
      description: "Capture, score, and nurture leads automatically. Never miss a high-intent prospect again.",
      benefits: [
        "Automatic lead capture from all sources",
        "AI-powered lead scoring",
        "CRM sync (HubSpot, Salesforce, Slate)",
        "Lead assignment and routing"
      ]
    },
    {
      icon: Video,
      title: "Interview Hub",
      description: "Schedule and conduct virtual interviews seamlessly. Students can request interviews, and you can invite prospects directly.",
      benefits: [
        "Integrated Calendly scheduling",
        "Zoom meeting automation",
        "AI-generated meeting summaries",
        "Follow-up task automation"
      ]
    },
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Get actionable recommendations from 'Forge Analyst' - your AI enrollment strategist.",
      benefits: [
        "Program trend analysis",
        "Geographic opportunity identification",
        "Campaign performance recommendations",
        "Predictive enrollment forecasting"
      ]
    },
    {
      icon: TrendingUp,
      title: "Webinar Management",
      description: "Host engaging webinars and automatically convert attendees into qualified leads.",
      benefits: [
        "Zoom/Google Meet integration",
        "Automated registration pages",
        "Attendee tracking and engagement scoring",
        "Recording retrieval and distribution"
      ]
    },
    {
      icon: Globe,
      title: "Geographic Heatmaps",
      description: "Visualize where your highest-intent prospects are coming from and optimize your outreach strategy.",
      benefits: [
        "State and regional heatmaps",
        "Lead density visualization",
        "Market opportunity analysis",
        "Territory planning tools"
      ]
    },
    {
      icon: Database,
      title: "CRM Integration",
      description: "Sync seamlessly with your existing CRM. No data silos, no manual exports.",
      benefits: [
        "Two-way sync with major CRMs",
        "Custom field mapping",
        "Real-time data updates",
        "Duplicate prevention"
      ]
    },
    {
      icon: Mail,
      title: "Automated Reporting",
      description: "Get weekly and monthly reports delivered to your inbox automatically.",
      benefits: [
        "Customizable report templates",
        "PDF export and email delivery",
        "Scheduled report automation",
        "Executive summary dashboards"
      ]
    },
    {
      icon: Webhook,
      title: "Webhooks & API",
      description: "Connect EnrollForge to your existing tech stack with our powerful API and webhooks.",
      benefits: [
        "RESTful API access",
        "Real-time webhook notifications",
        "Custom integrations",
        "Developer documentation"
      ]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, SSO, and role-based access control.",
      benefits: [
        "SOC 2 Type II certified",
        "SSO and SAML support",
        "Role-based permissions",
        "Data encryption at rest and in transit"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#2043A8] to-[#1CC7B2] rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">EnrollForge</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-[#2043A8] font-semibold">
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#2043A8] to-[#1CC7B2] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Everything you need to grow enrollment
            </h1>
            <p className="text-xl text-white/90 mb-8">
              A fully integrated suite of tools designed to attract, engage, and convert prospective students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#2043A8] to-[#1CC7B2] rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#1CC7B2]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[#1CC7B2]"></div>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#2043A8] to-[#1CC7B2] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to see EnrollForge in action?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a personalized demo and see how EnrollForge can transform your enrollment strategy.
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
