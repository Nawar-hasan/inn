"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "الشركة",
      links: [
        { label: "الرئيسية", href: "#" },
        { label: "من نحن", href: "#" },
        { label: "الدورات", href: "#" },
        { label: "المدونة", href: "#" },
      ],
    },
    {
      title: "الموارد",
      links: [
        { label: "أدوات مجانية", href: "#" },
        { label: "المقالات", href: "#" },
        { label: "الأسئلة الشائعة", href: "#" },
        { label: "الدعم", href: "#" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-black/40 border-t border-white/10 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#551FBD] to-[#53FBA1] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">IN</span>
              </div>
              <span className="text-white font-bold text-xl">Innovologia</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              منصة متخصصة في الإبداع والتفكير الابتكاري لتحويل الأفكار إلى واقع.
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-white font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/60 hover:text-[#53FBA1] transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h3 className="text-white font-bold mb-4">تواصل معنا</h3>
            <p className="text-white/60 text-sm mb-4">
              30 N Gould St Ste R<br />
              Sheridan, WY 82801
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-[#53FBA1] hover:border-[#53FBA1] transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>© {currentYear} Innovologia. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#53FBA1] transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-[#53FBA1] transition-colors">
                شروط الخدمة
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
