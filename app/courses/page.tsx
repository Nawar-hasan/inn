"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Clock, CheckCircle, Star } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function CoursesPage() {
  const courses = [
    {
      title: "شهادة أساسيات الابتكار المعتمدة",
      titleEn: "Certified Innovation Foundation (CIF)",
      description: "تعلم المفاهيم الأساسية للابتكار وكيفية تطبيقها في بيئة العمل",
      duration: "16 ساعة",
      level: "مبتدئ",
      modules: 8,
      color: "from-[#551FBD] to-[#7C3AED]",
    },
    {
      title: "شهادة ممارس الابتكار المعتمد",
      titleEn: "Certified Innovation Practitioner (CIP)",
      description: "طور مهاراتك في قيادة مشاريع الابتكار وإدارة التغيير",
      duration: "24 ساعة",
      level: "متوسط",
      modules: 12,
      color: "from-[#53FBA1] to-[#10B981]",
    },
    {
      title: "شهادة قائد الابتكار المعتمد",
      titleEn: "Certified Innovation Leader (CIL)",
      description: "أتقن استراتيجيات القيادة الابتكارية وبناء ثقافة الابتكار",
      duration: "32 ساعة",
      level: "متقدم",
      modules: 16,
      color: "from-[#FFD900] to-[#F59E0B]",
    },
    {
      title: "شهادة محترف الابتكار المعتمد",
      titleEn: "Certified Innovation Professional (CIPRO)",
      description: "احصل على خبرة شاملة في جميع جوانب إدارة الابتكار",
      duration: "40 ساعة",
      level: "خبير",
      modules: 20,
      color: "from-[#EC4899] to-[#BE185D]",
    },
    {
      title: "شهادة مدرب الابتكار المعتمد",
      titleEn: "Certified Innovation Trainer (CIT)",
      description: "تعلم كيفية تدريب الآخرين على مهارات الابتكار والإبداع",
      duration: "48 ساعة",
      level: "خبير",
      modules: 24,
      color: "from-[#06B6D4] to-[#0891B2]",
    },
  ]

  const benefits = [
    "شهادات معتمدة دوليًا من معهد الابتكار العالمي",
    "محتوى تدريبي شامل ومحدث باستمرار",
    "مدربون معتمدون وذوو خبرة عالية",
    "ورش عمل تفاعلية ومشاريع عملية",
    "دعم مستمر بعد انتهاء الدورة",
    "شبكة من المبتكرين والمحترفين",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#551FBD]/20 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <Award className="w-5 h-5 text-[#FFD900]" />
              <span className="text-white font-semibold">دورات معتمدة عالميًا</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">دوراتنا التدريبية</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
              اكتشف برامجنا التدريبية المعتمدة من معهد الابتكار العالمي وابدأ رحلتك نحو التميز والابتكار
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}
                />
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-300 h-full flex flex-col">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>

                  <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 mb-3 w-fit">
                    <span className="text-white/80 text-sm">{course.level}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 text-balance">{course.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{course.titleEn}</p>
                  <p className="text-white/80 mb-6 flex-grow text-pretty">{course.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-white/70">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm">{course.modules} وحدة تدريبية</span>
                    </div>
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 text-white rounded-full`}
                  >
                    اعرف المزيد
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">لماذا تختار دوراتنا؟</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto text-pretty">
              نقدم لك تجربة تعليمية متميزة تجمع بين الجودة والاحترافية
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#53FBA1]/30 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#53FBA1] to-[#10B981] rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-white/90 text-pretty">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#551FBD]/20 to-[#53FBA1]/20 rounded-2xl blur-2xl" />
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-12">
              <Star className="w-16 h-16 text-[#FFD900] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
                ابدأ رحلتك التعليمية اليوم
              </h2>
              <p className="text-xl text-white/80 mb-8 text-pretty">
                انضم إلى آلاف المتدربين الذين طوروا مهاراتهم وحصلوا على شهادات معتمدة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-[#551FBD] to-[#53FBA1] hover:from-[#551FBD] hover:to-[#53FBA1] text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-[#551FBD]/50 hover:shadow-[#53FBA1]/50 transition-all duration-300">
                  سجل الآن
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg bg-transparent"
                >
                  تحدث مع مستشار
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
