import Link from "next/link"
import { BookOpen, FileText, ExternalLink, CheckCircle, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProtocolosCadernos() {
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
            <div className="bg-indigo-500 p-2.5 rounded-lg text-white flex-shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 break-words">Protocolos e Cadernos</h1>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">Instrumentos para padronizar e qualificar o cuidado</p>
        </div>

        <div className="space-y-5">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                O que são protocolos e cadernos na APS?
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                Os protocolos clínicos e cadernos da Atenção Primária à Saúde são instrumentos elaborados pelo
                Ministério da Saúde, estados ou municípios para padronizar condutas, orientar os profissionais e
                garantir cuidado seguro e qualificado ao usuário do SUS.
              </p>

              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-4">
                <h3 className="font-bold text-indigo-900 mb-3">Eles contribuem para:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Reduzir variações na prática clínica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Apoiar o diagnóstico e tratamento correto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Favorecer o uso racional de medicamentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Aumentar a segurança e a efetividade do cuidado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Fortalecer a linha do cuidado com base em evidências científicas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-blue-900">
                  Na APS, esses documentos são fundamentais para orientar abordagens resolutivas, seguras e humanizadas.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                Exemplos de protocolos e cadernos importantes para a APS
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Protocolos Clínicos
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Hipertensão arterial sistêmica</li>
                    <li>• Diabetes mellitus</li>
                    <li>• Saúde mental</li>
                    <li>• Rastreamento de câncer de colo do útero</li>
                    <li>• Pré-natal de risco habitual</li>
                    <li>• Tuberculose e hanseníase</li>
                    <li>• Covid-19 e arboviroses</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Cadernos de Atenção Básica
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Saúde da criança</li>
                    <li>• Saúde do idoso</li>
                    <li>• Saúde da mulher</li>
                    <li>• Doenças crônicas</li>
                    <li>• Saúde bucal</li>
                    <li>• Vigilância em saúde</li>
                    <li>• Práticas integrativas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                Como usar os protocolos na rotina da APS
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-green-900 mb-2">Durante o atendimento:</h3>
                  <p className="text-gray-700 text-sm">
                    Apoiar o diagnóstico, tratamento e acompanhamento com base nas diretrizes
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Nas reuniões de equipe:</h3>
                  <p className="text-gray-700 text-sm">
                    Discutir condutas baseadas nos cadernos para unificar abordagens
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-purple-900 mb-2">Na educação em saúde:</h3>
                  <p className="text-gray-700 text-sm">
                    Utilizar trechos como material educativo para usuários e cuidadores
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-orange-900 mb-2">Na construção de fluxos internos:</h3>
                  <p className="text-gray-700 text-sm">Padronizar condutas com base nos documentos oficiais</p>
                </div>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-pink-900 mb-2">Na capacitação da equipe:</h3>
                  <p className="text-gray-700 text-sm">
                    Estudar os cadernos e protocolos em conjunto, com divisão de temas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                Protocolos locais e personalização
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                Além dos documentos do Ministério da Saúde, cada município ou unidade de saúde pode adaptar seus
                próprios protocolos locais, respeitando sua realidade e estrutura.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-bold text-yellow-900 mb-3">Exemplos de protocolos locais úteis:</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                  <li>• Protocolo de risco de queda</li>
                  <li>• Protocolo de triagem de saúde mental</li>
                  <li>• Protocolo de dispensação de medicamentos</li>
                  <li>• Protocolo de visita domiciliar</li>
                  <li>• Protocolo de acolhimento e escuta qualificada</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-4">
                <p className="text-blue-900">
                  A criação e atualização de protocolos deve envolver profissionais da unidade e coordenação, garantindo
                  que o conteúdo reflita a prática real e atual.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Onde encontrar os documentos oficiais
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-3">
                <a
                  href="https://www.gov.br/saude/pt-br/composicao/saps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-indigo-900">Portal da Atenção Primária</h4>
                      <p className="text-sm text-gray-600">Ministério da Saúde</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-indigo-600" />
                  </div>
                </a>

                <a
                  href="https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/atencao-basica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-indigo-900">Cadernos de Atenção Básica</h4>
                      <p className="text-sm text-gray-600">Publicações oficiais</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-indigo-600" />
                  </div>
                </a>

                <a
                  href="https://www.gov.br/conitec/pt-br/assuntos/avaliacao-de-tecnologias-em-saude/protocolos-clinicos-e-diretrizes-terapeuticas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-indigo-900">
                        Protocolos Clínicos e Diretrizes Terapêuticas (PCDT)
                      </h4>
                      <p className="text-sm text-gray-600">CONITEC</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-indigo-600" />
                  </div>
                </a>
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
