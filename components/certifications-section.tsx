"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

const certifications = [
  { name: "GInI Certified", color: "from-[#551FBD] to-purple-600" },
  { name: "Innovation Expert", color: "from-[#53FBA1] to-green-600" },
  { name: "Design Thinking", color: "from-[#FFD900] to-yellow-600" },
  { name: "Creative Leader", color: "from-pink-500 to-rose-600" },
]

export default function CertificationsSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">شهاداتنا العالمية</h2>
          <p className="text-white/60 text-lg">احصل على شهادات معتمدة من معهد الابتكار العالمي</p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-opacity`}
              />
              <div
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${cert.color} border border-white/20 flex flex-col items-center justify-center gap-4 h-40 cursor-pointer transform transition-all`}
              >
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}>
                  <Award className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-white font-bold text-center text-sm sm:text-base">{cert.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
