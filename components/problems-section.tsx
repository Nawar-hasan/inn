"use client"

import { motion } from "framer-motion"

const problems = [
  {
    icon: "🧠",
    title: "تعتقد أن الإبداع مهارة لا يمكن تعلمها؟",
    description: "الإبداع مهارة تُكتسب بالتدريب والتمرين، مش موهبة فقط.",
    color: "from-[#551FBD] to-purple-600",
  },
  {
    icon: "⚡",
    title: "تخشى الفشل في اختبارات معهد الابتكار؟",
    description: "مع خطة واضحة وتدريب عملي، النجاح بيصير مضمون أكثر.",
    color: "from-[#53FBA1] to-green-600",
  },
  {
    icon: "🔮",
    title: "تتمنى أن ترى الأمور من منظور جديد؟",
    description: "عبر تقنيات التفكير التصميمي، رح تقدر تغير نظرتك لأي مشكلة.",
    color: "from-[#FFD900] to-yellow-600",
  },
  {
    icon: "🎯",
    title: "تفشل في الوصول لحلول مميزة في العمل؟",
    description: "الحلول المميزة تبدأ بفهم جذور المشكلة وليس فقط أعراضها.",
    color: "from-[#551FBD] to-indigo-600",
  },
  {
    icon: "🚀",
    title: "تعتقد أنك ينقصك المعرفة في الابتكار؟",
    description: "هناك أدوات مجربة وخطوات واضحة لتبدأ رحلة الابتكار بثقة.",
    color: "from-[#53FBA1] to-cyan-600",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function ProblemsSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">ما هي المشكلة التي تواجهك اليوم؟</h2>
          <p className="text-white/60 text-lg">نحن نفهم التحديات التي تواجهك وعندنا الحل</p>
        </motion.div>

        {/* Problems Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur hover:border-white/40 transition-all overflow-hidden cursor-pointer"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3 leading-tight">{problem.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{problem.description}</p>
              </div>

              {/* Border Animation */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-20 transition-opacity blur`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
