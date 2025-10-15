import Link from "next/link"
import { Home, Droplets, Clock, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HigienizacaoMaos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <header className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-3 py-3 max-w-4xl">
          <div className="flex items-center justify-end">
            <Link href="/">
              <Button variant="secondary" size="sm" className="text-xs">
                <Home className="w-4 h-4 mr-1" />
                Início
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 py-6 max-w-4xl pt-6">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500 p-2.5 rounded-lg text-white flex-shrink-0">
              <Droplets className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 break-words">Higienização das Mãos</h1>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">A medida mais eficaz para prevenir infecções</p>
        </div>

        <div className="space-y-5">
          {/* Importância */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-cyan-600">Importância da higienização das mãos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                A higienização das mãos é a medida mais simples, eficaz e econômica para prevenir infecções relacionadas
                à assistência à saúde (IRAS) e a transmissão de microrganismos entre profissionais e pacientes.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Na APS, mesmo com menor complexidade assistencial que hospitais, a rotatividade de atendimentos e a
                proximidade com a comunidade tornam a higiene das mãos fundamental para proteger pacientes,
                profissionais e familiares.
              </p>

              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                <h3 className="font-bold text-cyan-900 mb-2 text-sm">Previne:</h3>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>• Transmissão cruzada de microrganismos</li>
                  <li>• Infecções em feridas, vias aéreas ou trato urinário</li>
                  <li>• Contaminação de superfícies e instrumentos</li>
                  <li>• Eventos adversos em procedimentos simples</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 5 Momentos */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-cyan-600">Os 5 Momentos da Higienização das Mãos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                Os 5 momentos foram definidos pela OMS para padronizar quando os profissionais de saúde devem higienizar
                as mãos. Eles se aplicam tanto em hospitais quanto em serviços da APS.
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <h3 className="font-bold text-blue-900 text-sm">Antes de tocar o paciente</h3>
                  </div>
                  <p className="text-xs text-gray-700">
                    Protege o paciente de microrganismos presentes nas mãos do profissional
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <h3 className="font-bold text-green-900 text-sm">Antes de procedimento limpo/asséptico</h3>
                  </div>
                  <p className="text-xs text-gray-700">
                    Protege o paciente de microrganismos, inclusive os do próprio paciente
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <h3 className="font-bold text-red-900 text-sm">Após risco de exposição a fluidos corporais</h3>
                  </div>
                  <p className="text-xs text-gray-700">
                    Protege o profissional e o ambiente de microrganismos do paciente
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded-r-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-purple-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <h3 className="font-bold text-purple-900 text-sm">Após tocar o paciente</h3>
                  </div>
                  <p className="text-xs text-gray-700">
                    Protege o profissional e o ambiente de microrganismos do paciente
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-3 rounded-r-lg md:col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-orange-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm">
                      5
                    </div>
                    <h3 className="font-bold text-orange-900 text-sm">Após tocar superfícies próximas ao paciente</h3>
                  </div>
                  <p className="text-xs text-gray-700">
                    Protege o profissional e o ambiente de microrganismos do paciente
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Técnicas */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-cyan-600">Técnicas recomendadas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2 text-sm">
                    <Droplets className="w-4 h-4" />
                    Fricção com preparação alcoólica
                  </h3>
                  <p className="text-xs text-gray-700 mb-2">
                    <strong>Preferencial</strong> quando as mãos não estiverem visivelmente sujas
                  </p>
                  <div className="flex items-center gap-2 bg-white rounded-lg p-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium">Tempo: 20 a 30 segundos</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-bold text-green-900 mb-2 flex items-center gap-2 text-sm">
                    <Droplets className="w-4 h-4" />
                    Lavagem com água e sabão
                  </h3>
                  <p className="text-xs text-gray-700 mb-2">
                    Quando as mãos estiverem visivelmente sujas ou após contato com fluidos
                  </p>
                  <div className="flex items-center gap-2 bg-white rounded-lg p-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-medium">Tempo: 40 a 60 segundos</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Barreiras e estratégias */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-cyan-600 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Barreiras e estratégias para melhoria da adesão
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-bold text-orange-900 mb-2 text-sm">Estratégias eficazes:</h3>
                <ul className="space-y-1.5 ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Dispensadores acessíveis em todos os pontos de atendimento
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Campanhas de sensibilização regulares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Monitoramento e feedback entre profissionais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Cultura de segurança reforçada pela liderança</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium">Segurança na APS - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}
