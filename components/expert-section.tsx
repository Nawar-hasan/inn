"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle2 } from "lucide-react"

const expertise = [
  "مدرب معتمد وخبير في الابتكار والتفكير الإبداعي",
  "رئيس رابطة الأردن لمعهد الابتكار العالمي",
  "عضو مؤسس في الرابطة السعودية",
  'مؤلف كتاب "النظر المألوف بطريقة غير مألوفة"',
  "مقيم معتمد من معهد الابتكار العالمي GInI",
]

export default function ExpertSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#551FBD] via-[#53FBA1] to-[#FFD900] opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-48 h-48 border-2 border-white/20 rounded-full"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-32 h-32 border-2 border-[#53FBA1] rounded-full opacity-50"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD900]/20 border border-[#FFD900]/50 mb-4">
                <Award size={16} className="text-[#FFD900]" />
                <span className="text-[#FFD900] font-semibold text-sm">الخبير المعتمد</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                من هو
                <span className="block text-[#53FBA1]">أسامة بدندي؟</span>
              </h2>
            </div>

            <p className="text-white/80 text-lg leading-relaxed mb-8">
              أسامة بدندي لا يقدّم محتوى فقط، بل يقدم رحلة ذهنية داخل عقلك لتعيد بها تشكيل طريقة تفكيرك.
            </p>

            {/* Expertise List */}
            <div className="space-y-4 mb-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#53FBA1] flex-shrink-0 mt-1" />
                  <span className="text-white/90">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.05 }} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-[#551FBD]">10+</div>
                <div className="text-white/70 text-sm">سنوات البحث</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-[#53FBA1]">12+</div>
                <div className="text-white/70 text-sm">سنة التدريب</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
