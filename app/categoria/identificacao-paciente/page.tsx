import Link from "next/link"
import { Home, AlertCircle, CheckCircle2, Users, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function IdentificacaoPacientePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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
        {/* Page Title */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500 p-2.5 rounded-lg text-white flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 break-words">Identificação do Paciente</h1>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            A primeira meta internacional de segurança do paciente
          </p>
        </div>

        <Alert className="mb-6 border-blue-200 bg-blue-50">
          <AlertCircle className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-900">Meta 1 - OMS</AlertTitle>
          <AlertDescription className="text-blue-800">
            Identificar corretamente o paciente é fundamental para prevenir erros graves como administração de
            medicamentos trocados, procedimentos em pessoas erradas e falhas no acompanhamento clínico.
          </AlertDescription>
        </Alert>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-blue-600" />A Importância da Identificação Correta
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              A identificação correta do paciente é uma ação simples, mas fundamental para a segurança em todos os
              níveis de atenção à saúde, inclusive na APS. Garantir que o cuidado prestado seja direcionado ao paciente
              certo evita erros como administração de medicamentos trocados, realização de procedimentos ou exames em
              pessoas erradas e falhas no acompanhamento clínico.
            </p>
            <p className="text-gray-700">
              Na APS, onde há grande proximidade com a comunidade e atendimentos frequentes, é comum que os
              profissionais "conheçam" os pacientes. No entanto, confiar apenas no reconhecimento visual ou no nome pode
              levar a erros, especialmente em famílias com nomes semelhantes ou em situações de sobrecarga.
            </p>
            <Alert className="border-amber-200 bg-amber-50">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-900">
                <strong>Lembre-se:</strong> conhecer o paciente não substitui os critérios formais de identificação!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Como Identificar Corretamente na APS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Mesmo sem pulseiras de identificação, como nos hospitais, é possível garantir segurança com práticas
              simples e sistematizadas. Veja as principais recomendações:
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-3">✅ Utilize pelo menos dois identificadores:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Nome completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Data de nascimento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Cartão do SUS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Nome da mãe (em caso de homônimos)</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-3 italic">
                Evite usar apenas o número do prontuário ou o reconhecimento facial.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-3">
                ✅ Confirme os dados com o próprio paciente ou acompanhante sempre que for realizar:
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Aplicação de vacinas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Administração de medicamentos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Coleta de exames</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Atendimento em visita domiciliar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Entrega de receitas ou encaminhamentos</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2 text-gray-700">
              <p className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>
                  Registre corretamente no prontuário os dados do paciente, com letra legível ou digitação correta, e
                  mantenha informações atualizadas.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>
                  Em vacinação e ações coletivas, é importante usar listas de confirmação, etiquetas com nome e cartão
                  SUS, ou crachás temporários quando possível.
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-600" />
              Desafios na Identificação na APS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>Atendimento domiciliar com múltiplos membros da família</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>Registros incompletos ou desatualizados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>Falta de padrão entre os profissionais</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>Ausência de sistemas informatizados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>
                  Situações de vulnerabilidade social, como pessoas em situação de rua ou com problemas cognitivos
                </span>
              </li>
            </ul>
            <p className="text-gray-600 mt-4 italic">
              Esses desafios mostram a necessidade de protocolos locais e capacitação contínua da equipe.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-purple-600" />O que diz a ANVISA e o Ministério da Saúde?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              A primeira meta internacional de segurança do paciente é "Identificar corretamente o paciente",
              reconhecida em todas as diretrizes nacionais e internacionais. Ela se aplica tanto a hospitais quanto à
              atenção primária.
            </p>
            <p className="text-gray-700">
              Embora a ANVISA foque muito no ambiente hospitalar, os princípios são adaptáveis à APS e devem ser
              promovidos por meio dos Núcleos de Segurança do Paciente.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-900">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Boas Práticas que Podem ser Implantadas na APS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Afixação de quadro de identificação nas salas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Ficha padrão com dados completos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Etiquetas com nome, cartão SUS e data de nascimento para ações em campo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Capacitações sobre a Meta 1 de Segurança do Paciente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Avaliações internas de erros por identificação incorreta (sem punitivismo)</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium">Segurança na APS - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}
