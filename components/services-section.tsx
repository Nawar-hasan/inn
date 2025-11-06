"use client"

import { motion } from "framer-motion"
import { BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: BookOpen,
    title: "برنامج تدريبي متكامل",
    items: [
      "دورة أونلاين (6 أسابيع) تؤهلك للحصول على شهادات معهد الابتكار العالمية",
      "مفاهيم جديدة كليًا عن طرق التفكير الإبداعي",
      "تدريبات تطبيقية، تمارين ذهنية، وبنك أسئلة",
    ],
    gradient: "from-[#551FBD] to-purple-600",
  },
  {
    icon: Users,
    title: "استشارات احترافية",
    items: [
      "جلسات فردية لتقييم قدراتك وتحفيزها",
      "توجيه شخصي مبني على فهم شخصيتك وهدفك المهني",
      "متابعة مستمرة من فريق مختص لتحقيق أهدافك",
    ],
    gradient: "from-[#53FBA1] to-green-600",
  },
]

export default function ServicesSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">ما الذي ستحصل عليه؟</h2>
          <p className="text-white/60 text-lg">خدمات متكاملة مصممة خصيصاً لنجاحك</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 rounded-3xl blur-2xl group-hover:opacity-30 transition-opacity`}
                />
                <div className="relative p-8 rounded-3xl bg-white/5 border border-white/20 backdrop-blur group-hover:border-white/40 transition-all overflow-hidden">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 flex items-center justify-center`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-6">{service.title}</h3>
                  <ul className="space-y-4 mb-8">
                    {service.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-3 text-white/80"
                      >
                        <span
                          className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 bg-gradient-to-r ${service.gradient}`}
                        />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className={`w-full bg-gradient-to-r ${service.gradient} text-white rounded-full font-semibold`}
                    >
                      احجز الآن
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
