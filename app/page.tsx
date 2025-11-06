"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProblemsSection from "@/components/problems-section"
import ExpertSection from "@/components/expert-section"
import ServicesSection from "@/components/services-section"
import CertificationsSection from "@/components/certifications-section"
import CommunitiesSection from "@/components/communities-section"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <ExpertSection />
      <ServicesSection />
      <CertificationsSection />
      <CommunitiesSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
