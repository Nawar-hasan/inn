"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "/about-us" },
    { label: "دوراتنا", href: "/courses" },
    { label: "المدونة", href: "/blog" },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2"
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#551FBD] to-[#53FBA1] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IN</span>
              </div>
              <span className="text-white font-bold text-lg hidden sm:inline">Innovologia</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="relative text-white font-semibold text-base group cursor-pointer"
                >
                  <span className="relative z-10 bg-gradient-to-r from-white via-[#53FBA1] to-white bg-clip-text text-transparent group-hover:from-[#53FBA1] group-hover:via-[#FFD900] group-hover:to-[#551FBD] transition-all duration-300">
                    {item.label}
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#551FBD] via-[#53FBA1] to-[#FFD900] rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#551FBD]/20 via-[#53FBA1]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-[#551FBD] to-[#53FBA1] hover:from-[#551FBD] hover:to-[#53FBA1] text-white rounded-full px-6 shadow-lg shadow-[#551FBD]/50 hover:shadow-[#53FBA1]/50 transition-shadow duration-300">
                دخول
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 flex flex-col gap-4 pb-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-[#551FBD] to-[#53FBA1] w-full text-white rounded-full">
              دخول
            </Button>
          </motion.div>
        )}
      </div>
    </header>
  )
}
