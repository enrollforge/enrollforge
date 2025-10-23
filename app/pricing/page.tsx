"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Pricing() {
  const plans = [
    {
      name: "Access",
      price: "$2,999",
      period: "/year",
      description: "Perfect for small institutions getting started with enrollment intelligence",
      features: [
        "Up to 50,000 visitors/year",
        "Up to 500 leads/year",
        "Real-time analytics dashboard",
        "Lead capture & management",
        "Basic CRM integration",
        "Email support",
        "Monthly reports"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Engage",
      price: "$7,999",
      period: "/year",
      description: "For growing institutions ready to scale their enrollment efforts",
      features: [
        "Up to 200,000 visitors/year",
        "Up to 2,000 leads/year",
        "Everything in Access, plus:",
        "Interview Hub (Calendly + Zoom)",
        "Webinar management",
        "AI-powered insights",
        "Geographic heatmaps",
        "Advanced CRM sync",
        "Priority support",
        "Weekly reports"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Strategic",
      price: "Custom",
      period: "",
      description: "Enterprise-grade solution for large institutions with complex needs",
      features: [
        "Unlimited visitors & leads",
        "Everything in Engage, plus:",
        "Dedicated success manager",
        "Custom integrations",
        "API & webhook access",
        "SSO & SAML support",
        "Advanced security & compliance",
        "Custom reporting",
        "24/7 phone support",
        "Onboarding & training"
      ],
      cta: "Contact Sales",
      popular: false
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
            <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-[#2043A8] font-semibold">
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
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Choose the plan that fits your institution's size and goals. All plans include a 30-day free trial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white border-2 rounded-3xl p-8 ${
                  plan.popular 
                    ? 'border-[#2043A8] shadow-2xl scale-105' 
                    : 'border-gray-200 hover:shadow-xl'
                } transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2043A8] to-[#1CC7B2] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <Button 
                  className={`w-full rounded-full mb-8 ${
                    plan.popular 
                      ? 'bg-[#2043A8] hover:bg-[#1a3687] text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#1CC7B2]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-[#1CC7B2]" />
                      </div>
                      <span className={`text-sm ${
                        feature.includes('Everything in') 
                          ? 'font-semibold text-gray-900' 
                          : 'text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "What&apos;s included in the free trial?",
                a: "All plans include a 30-day free trial with full access to all features. No credit card required to start."
              },
              {
                q: "Can I switch plans later?",
                a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                q: "What happens if I exceed my visitor or lead limits?",
                a: "We'll notify you when you're approaching your limits. You can upgrade to a higher plan or purchase additional capacity."
              },
              {
                q: "Do you offer discounts for multi-year contracts?",
                a: "Yes! Contact our sales team for pricing on 2-year and 3-year contracts."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, ACH transfers, and purchase orders for annual plans."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#2043A8] to-[#1CC7B2] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a demo with our team to find the perfect plan for your institution.
          </p>
          <Button size="lg" className="bg-white text-[#2043A8] hover:bg-gray-100 rounded-full px-8 text-lg">
            Book a Demo
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
