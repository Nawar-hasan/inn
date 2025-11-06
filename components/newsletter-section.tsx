"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setEmail("")
  }

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Background Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 border border-[#551FBD]/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 border border-[#53FBA1]/20 rounded-full"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <Mail size={16} className="text-[#FFD900]" />
            <span className="text-white text-sm">ابق على اتصال</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">اشترك في نشرتنا الإبداعية</h2>

          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            كن أول من يحصل على الجديد... تحديثات الدورات، أدوات التفكير الإبداعي، وكل ما يساعدك لبناء عقلية الابتكار.
          </p>

          {/* Subscription Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#53FBA1] transition-colors"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#551FBD] to-[#53FBA1] text-white rounded-full px-8 py-3 whitespace-nowrap flex items-center gap-2 justify-center"
              >
                اشترك
                {submitted ? <span>✓</span> : <ArrowRight size={18} />}
              </Button>
            </motion.div>
          </motion.form>

          {/* Success Message */}
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-[#53FBA1] mt-4 text-sm font-medium"
            >
              شكراً لاشتراكك! تابع بريدك الإلكتروني
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
