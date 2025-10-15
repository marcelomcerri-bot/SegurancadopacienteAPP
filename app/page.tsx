import Link from "next/link"
import Image from "next/image"
import {
  Shield,
  UserCheck,
  MessageSquare,
  Stethoscope,
  AlertTriangle,
  Syringe,
  Droplets,
  ClipboardCheck,
  Bell,
  FileText,
  GraduationCap,
  Newspaper,
} from "lucide-react"

const categories = [
  {
    id: "seguranca-paciente",
    title: "Segurança do Paciente",
    icon: Shield,
    color: "bg-blue-500",
    href: "/categoria/seguranca-paciente",
  },
  {
    id: "identificacao",
    title: "Identificação do Paciente",
    icon: UserCheck, // Updated to UserCheck icon
    color: "bg-green-500",
    href: "/categoria/identificacao-paciente",
  },
  {
    id: "comunicacao",
    title: "Comunicação",
    icon: MessageSquare,
    color: "bg-purple-500",
    href: "/categoria/comunicacao",
  },
  {
    id: "procedimentos",
    title: "Procedimentos Cirúrgicos",
    icon: Stethoscope,
    color: "bg-red-500",
    href: "/categoria/procedimentos-cirurgicos",
  },
  {
    id: "quedas",
    title: "Prevenção de Quedas",
    icon: AlertTriangle,
    color: "bg-orange-500",
    href: "/categoria/prevencao-quedas",
  },
  {
    id: "vacinacao",
    title: "Vacinação e Farmacovigilância",
    icon: Syringe,
    color: "bg-teal-500",
    href: "/categoria/vacinacao-farmacovigilancia",
  },
  {
    id: "higienizacao",
    title: "Higienização das Mãos",
    icon: Droplets,
    color: "bg-cyan-500",
    href: "/categoria/higienizacao-maos",
  },
  {
    id: "protocolos",
    title: "Protocolos e Cadernos",
    icon: ClipboardCheck,
    color: "bg-indigo-500",
    href: "/categoria/protocolos-cadernos",
  },
  {
    id: "notificacao",
    title: "Notificação de Eventos",
    icon: Bell,
    color: "bg-pink-500",
    href: "/categoria/notificacao-eventos",
  },
]

const additionalSections = [
  {
    id: "casos",
    title: "Casos Clínicos",
    icon: FileText,
    color: "bg-emerald-500",
    href: "/recursos/casos-clinicos",
  },
  {
    id: "quiz",
    title: "Quiz",
    icon: GraduationCap,
    color: "bg-amber-500",
    href: "/recursos/quiz",
  },
  {
    id: "reportagens",
    title: "Reportagens",
    icon: Newspaper,
    color: "bg-rose-500",
    href: "/recursos/reportagens",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Segurança na APS"
                width={150}
                height={150}
                className="rounded-2xl shadow-2xl ring-4 ring-white/40"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 max-w-7xl">
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">Categorias</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Link key={category.id} href={category.href}>
                  <div className="flex flex-col items-center justify-center gap-2 md:gap-3 lg:gap-4 p-3 md:p-6 lg:p-8 bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 min-h-[130px] md:min-h-[160px] lg:min-h-[180px] hover:scale-[1.02] hover:-translate-y-1 group">
                    <div
                      className={`${category.color} p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl text-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}
                    >
                      <Icon className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" strokeWidth={2.5} />
                    </div>
                    <span className="text-xs md:text-base font-semibold text-gray-800 text-center leading-tight text-balance px-2 md:px-2">
                      {category.title}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">Recursos Adicionais</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {additionalSections.map((section) => {
              const Icon = section.icon
              return (
                <Link key={section.id} href={section.href}>
                  <div className="flex flex-col items-center justify-center gap-2 md:gap-3 lg:gap-4 p-3 md:p-6 lg:p-8 bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 min-h-[130px] md:min-h-[160px] lg:min-h-[180px] hover:scale-[1.02] hover:-translate-y-1 group">
                    <div
                      className={`${section.color} p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl text-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}
                    >
                      <Icon className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" strokeWidth={2.5} />
                    </div>
                    <span className="text-xs md:text-base font-semibold text-gray-800 text-center leading-tight text-balance px-2 md:px-2">
                      {section.title}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium">Segurança na APS - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}
