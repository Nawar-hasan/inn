"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs with smoother motion */}
        <motion.div
          animate={{
            x: [0, 120, -50, 0],
            y: [0, 80, -30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#551FBD] opacity-20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, -60, 40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#53FBA1] opacity-20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 0.8, 1],
            opacity: [0.1, 0.25, 0.15, 0.1],
            rotate: [0, 90, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFD900] opacity-10 rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
            <Sparkles size={16} className="text-[#FFD900]" />
            <span className="text-white text-sm font-medium">One spark. Endless creativity.</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-white mb-6">
          هل تريد أن تكون
          <span className="block bg-gradient-to-r from-[#551FBD] via-[#53FBA1] to-[#FFD900] bg-clip-text text-transparent">
            محترفاً للابتكار؟
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          ابدأ رحلتك مع خبير الابتكار والتفكير الإبداعي{" "}
          <span className="text-[#53FBA1] font-semibold">أسامة بدندي</span> وتعلّم المهارات التي ستؤهلك للحصول على شهادات
          الابتكار العالمية.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-[#551FBD] to-[#53FBA1] hover:from-[#551FBD] hover:to-[#53FBA1] text-white rounded-full px-8 py-3 text-base font-semibold flex items-center gap-2">
              ابدأ الآن
              <ArrowRight size={18} />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-3 text-base font-semibold bg-transparent"
            >
              تواصل مع المستشار
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { number: "10+", label: "سنوات خبرة" },
            { number: "500+", label: "متدرب" },
            { number: "12+", label: "سنة تدريب" },
            { number: "100%", label: "معدل النجاح" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#551FBD] to-[#53FBA1] bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
