"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "الباقة الأساسية",
    price: "0",
    description: "ابدأ رحلتك مع المجتمع الإبداعي",
    features: [
      "الوصول إلى مجتمع إنوفولوجيا المجاني",
      "تفاعل مع مبدعين ومبتكرين",
      "محتوى مجاني وتحفيزي",
      "فرص للمشاركة في نقاشات",
    ],
    highlighted: false,
    gradient: "from-white/10 to-white/5",
  },
  {
    name: "الباقة المتقدمة",
    price: "47",
    description: "للمحترفين الجادين",
    features: [
      "الوصول الكامل للمجتمع الاحترافي",
      "تواصل مباشر مع الخبراء",
      "محتوى حصري ومتقدم",
      "فعاليات مغلقة وجلسات خاصة",
    ],
    highlighted: true,
    gradient: "from-[#551FBD]/30 to-[#53FBA1]/30",
  },
  {
    name: "باقة النخبة",
    price: "197",
    description: "الأفضل للعاملين بجد",
    features: ["كل مميزات الباقة المتقدمة", "دورة واحدة مجانية كل فترة", "تعلم عملي ومكثف", "شهادة عند إتمام الدورة"],
    highlighted: false,
    gradient: "from-[#FFD900]/20 to-orange-500/20",
  },
]

export default function CommunitiesSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">انضم إلى مجتمع المبدعين</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            اختر الباقة المناسبة لك والانضم إلى مجتمع يؤمن أن الأفكار تغيّر الواقع
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={plan.highlighted ? { scale: 1.05 } : {}}
              className="relative group h-full"
            >
              {plan.highlighted && (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-3xl blur-2xl opacity-30`}
                />
              )}

              <div
                className={`relative p-8 rounded-3xl border backdrop-blur transition-all h-full flex flex-col ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-[#551FBD]/20 to-[#53FBA1]/20 border-[#551FBD]/50"
                    : "bg-white/5 border-white/20"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#551FBD] to-[#53FBA1] text-white text-xs font-bold">
                    الأكثر شهرة
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#53FBA1]">${plan.price}</span>
                    <span className="text-white/60">/شهرياً</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex gap-3"
                    >
                      <Check className="w-5 h-5 text-[#53FBA1] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className={`w-full rounded-full font-semibold py-3 ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-[#551FBD] to-[#53FBA1] text-white"
                        : "border border-white/30 text-white hover:bg-white/10"
                    }`}
                  >
                    اشترك الآن
                  </Button>
                </motion.div>

                <p className="text-white/50 text-xs text-center mt-4">No contracts - cancel anytime</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
