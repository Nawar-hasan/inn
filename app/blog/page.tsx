"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Lightbulb } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const featuredPost = {
    title: "كيف تبدأ رحلتك في عالم الابتكار؟",
    excerpt:
      "الابتكار ليس مجرد فكرة عابرة، بل هو منهجية متكاملة تتطلب التخطيط والتنفيذ الصحيح. في هذا المقال، نستعرض الخطوات الأساسية لبدء رحلتك في عالم الابتكار.",
    author: "أسامة بدندي",
    date: "6 نوفمبر 2025",
    category: "الابتكار",
    readTime: "5 دقائق",
  }

  const posts = [
    {
      title: "أهمية التفكير التصميمي في حل المشكلات",
      excerpt: "التفكير التصميمي هو منهجية إبداعية تساعد على حل المشكلات المعقدة بطريقة مبتكرة ومتمحورة حول المستخدم.",
      author: "أسامة بدندي",
      date: "3 نوفمبر 2025",
      category: "التفكير التصميمي",
      readTime: "4 دقائق",
    },
    {
      title: "كيف تبني ثقافة الابتكار في مؤسستك؟",
      excerpt: "بناء ثقافة الابتكار يتطلب التزامًا من القيادة وتوفير بيئة تشجع على التجربة والتعلم من الأخطاء.",
      author: "أسامة بدندي",
      date: "1 نوفمبر 2025",
      category: "القيادة",
      readTime: "6 دقائق",
    },
    {
      title: "دور الذكاء الاصطناعي في تعزيز الابتكار",
      excerpt: "الذكاء الاصطناعي يفتح آفاقًا جديدة للابتكار من خلال تحليل البيانات وتقديم رؤى قيمة لاتخاذ القرارات.",
      author: "أسامة بدندي",
      date: "29 أكتوبر 2025",
      category: "التكنولوجيا",
      readTime: "5 دقائق",
    },
    {
      title: "استراتيجيات الابتكار المفتوح",
      excerpt: "الابتكار المفتوح يعتمد على التعاون مع الشركاء الخارجيين لتطوير حلول مبتكرة وتسريع عملية الابتكار.",
      author: "أسامة بدندي",
      date: "27 أكتوبر 2025",
      category: "الاستراتيجية",
      readTime: "7 دقائق",
    },
    {
      title: "كيف تقيس نجاح مبادرات الابتكار؟",
      excerpt: "قياس نجاح الابتكار يتطلب مؤشرات أداء واضحة تتجاوز المقاييس المالية التقليدية.",
      author: "أسامة بدندي",
      date: "25 أكتوبر 2025",
      category: "إدارة الابتكار",
      readTime: "5 دقائق",
    },
    {
      title: "التحول الرقمي والابتكار: رحلة متكاملة",
      excerpt: "التحول الرقمي والابتكار وجهان لعملة واحدة، حيث يعزز كل منهما الآخر لتحقيق النجاح المؤسسي.",
      author: "أسامة بدندي",
      date: "23 أكتوبر 2025",
      category: "التحول الرقمي",
      readTime: "6 دقائق",
    },
  ]

  const categories = [
    { name: "الابتكار", icon: Lightbulb, count: 12 },
    { name: "القيادة", icon: TrendingUp, count: 8 },
    { name: "التفكير التصميمي", icon: BookOpen, count: 6 },
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
              <BookOpen className="w-5 h-5 text-[#53FBA1]" />
              <span className="text-white font-semibold">مدونة إنڤولوجيا</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">مقالات وأفكار في الابتكار</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
              اكتشف أحدث المقالات والأفكار في عالم الابتكار والتطوير المهني
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#551FBD]/20 to-[#53FBA1]/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300" />
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:border-[#53FBA1]/50 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full bg-gradient-to-br from-[#551FBD] via-purple-600 to-[#53FBA1] flex items-center justify-center">
                  <Lightbulb className="w-24 h-24 text-white/30" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#551FBD] to-[#53FBA1] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    مقال مميز
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-[#53FBA1]/20 text-[#53FBA1] rounded-full px-3 py-1 mb-4 w-fit">
                    <span className="text-sm font-semibold">{featuredPost.category}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">{featuredPost.title}</h2>
                  <p className="text-white/80 text-lg mb-6 text-pretty">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-6 text-white/60 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-[#551FBD] to-[#53FBA1] hover:from-[#551FBD] hover:to-[#53FBA1] text-white rounded-full w-fit group">
                    اقرأ المزيد
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 hover:border-[#53FBA1]/50 transition-all duration-300"
              >
                <category.icon className="w-5 h-5 text-[#53FBA1]" />
                <span className="text-white font-semibold">{category.name}</span>
                <span className="bg-white/20 text-white text-xs rounded-full px-2 py-1">{category.count}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#551FBD]/10 to-[#53FBA1]/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:border-[#53FBA1]/50 transition-all duration-300 h-full flex flex-col">
                  <div className="inline-flex items-center gap-2 bg-[#551FBD]/20 text-[#551FBD] rounded-full px-3 py-1 mb-4 w-fit">
                    <span className="text-sm font-semibold text-white/80">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-balance">{post.title}</h3>
                  <p className="text-white/70 mb-6 flex-grow text-pretty">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-white/60 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-[#53FBA1] hover:text-[#53FBA1] hover:bg-[#53FBA1]/10 w-fit group p-0"
                  >
                    اقرأ المقال
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
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
              <BookOpen className="w-16 h-16 text-[#53FBA1] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">اشترك في نشرتنا البريدية</h2>
              <p className="text-xl text-white/80 mb-8 text-pretty">
                احصل على أحدث المقالات والأفكار في عالم الابتكار مباشرة في بريدك الإلكتروني
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#53FBA1]/50"
                />
                <Button className="bg-gradient-to-r from-[#551FBD] to-[#53FBA1] hover:from-[#551FBD] hover:to-[#53FBA1] text-white rounded-full px-8">
                  اشترك
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
