"use client"

import { motion } from "framer-motion"
import { Target, Eye, TrendingUp, Users, Award, Lightbulb, BookOpen, Globe } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutUsPage() {
  const mission = {
    title: "مهمتنا",
    description:
      "نسعى لتمكين الأفراد والمؤسسات من تحقيق التميز والابتكار من خلال توفير برامج تدريبية معتمدة عالميًا، تجمع بين المعرفة النظرية والتطبيق العملي، لتطوير مهارات القيادة والإبداع وحل المشكلات.",
    icon: Target,
  }

  const vision = {
    title: "رؤيتنا",
    description:
      "أن نكون المنصة الرائدة في العالم العربي لتطوير القدرات الابتكارية والمهنية، ونساهم في بناء جيل من القادة والمبتكرين القادرين على إحداث تغيير إيجابي في مجتمعاتهم ومؤسساتهم.",
    icon: Eye,
  }

  const goals = [
    {
      title: "تقديم برامج تدريبية معتمدة",
      description: "نوفر دورات تدريبية معتمدة من معهد الابتكار العالمي، تغطي مجالات الابتكار، القيادة، وحل المشكلات.",
      icon: Award,
    },
    {
      title: "تطوير المهارات العملية",
      description: "نركز على التطبيق العملي من خلال ورش عمل تفاعلية ومشاريع حقيقية تعزز من قدرات المشاركين.",
      icon: Lightbulb,
    },
    {
      title: "بناء مجتمع من المبتكرين",
      description: "نخلق بيئة تعليمية تشجع على التعاون وتبادل الأفكار بين المشاركين من مختلف الخلفيات والتخصصات.",
      icon: Users,
    },
    {
      title: "دعم التطوير المهني المستمر",
      description: "نقدم موارد ومحتوى تعليمي مستمر لمساعدة الأفراد على مواكبة أحدث الاتجاهات في مجالاتهم.",
      icon: TrendingUp,
    },
    {
      title: "تعزيز ثقافة الابتكار",
      description: "نساهم في نشر ثقافة الابتكار والإبداع في المؤسسات والمجتمعات من خلال برامجنا التدريبية.",
      icon: BookOpen,
    },
    {
      title: "الوصول العالمي",
      description: "نسعى لتوفير برامجنا التدريبية لأكبر عدد ممكن من المشاركين في العالم العربي وخارجه.",
      icon: Globe,
    },
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">من نحن</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
              إنڤولوجيا هي منصة تعليمية متخصصة في تقديم دورات تدريبية معتمدة للتحضير لشهادات معهد الابتكار العالمي
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[mission, vision].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#551FBD]/20 to-[#53FBA1]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-[#53FBA1]/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#551FBD] to-[#53FBA1] rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{item.title}</h2>
                  <p className="text-white/80 text-lg leading-relaxed text-pretty">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">أهدافنا</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto text-pretty">
              نعمل على تحقيق مجموعة من الأهداف الاستراتيجية لتمكين الأفراد والمؤسسات
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#551FBD]/10 to-[#53FBA1]/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#53FBA1]/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#551FBD] to-[#53FBA1] rounded-lg flex items-center justify-center mb-4">
                    <goal.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{goal.title}</h3>
                  <p className="text-white/70 leading-relaxed text-pretty">{goal.description}</p>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">انضم إلى مجتمع المبتكرين</h2>
              <p className="text-xl text-white/80 mb-8 text-pretty">
                ابدأ رحلتك في عالم الابتكار والتطوير المهني مع إنڤولوجيا
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-[#551FBD] to-[#53FBA1] hover:from-[#551FBD] hover:to-[#53FBA1] text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-[#551FBD]/50 hover:shadow-[#53FBA1]/50 transition-all duration-300">
                  استكشف دوراتنا
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg bg-transparent"
                >
                  تواصل معنا
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
