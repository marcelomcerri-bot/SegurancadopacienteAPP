import Link from "next/link"
import { AlertTriangle, CheckCircle2, HomeIcon, Users, ClipboardList, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function PrevencaoQuedasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
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
            <div className="bg-orange-500 p-2.5 rounded-lg text-white flex-shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 break-words">Prevenção de Quedas e Lesões</h1>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">Protegendo a integridade física dos pacientes</p>
        </div>

        {/* Removed the back link as it's now in the header */}
        {/* <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Menu
          </Button>
        </Link> */}

        <Alert className="mb-6 border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertTitle className="text-orange-900">Meta 6 - OMS</AlertTitle>
          <AlertDescription className="text-orange-800">
            Prevenir quedas nos serviços de saúde é uma das seis metas internacionais de segurança do paciente.
          </AlertDescription>
        </Alert>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Por que Prevenir Quedas e Lesões na APS?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              As quedas e lesões estão entre os eventos adversos mais comuns e evitáveis, principalmente em idosos,
              crianças, pessoas com mobilidade reduzida ou condições crônicas.
            </p>
            <p className="text-gray-700">
              Na APS, é fundamental atuar na prevenção e orientação, tanto no ambiente da unidade quanto nas visitas
              domiciliares, para reduzir riscos e proteger a integridade física dos pacientes. A prevenção deve ser
              contínua, individualizada e integrada ao cuidado multiprofissional.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              Fatores de Risco para Quedas e Lesões
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900 mb-3">Fatores físicos e clínicos:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Idade avançada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Alterações no equilíbrio ou na marcha</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Uso de medicamentos sedativos ou anti-hipertensivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Pressão baixa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Déficit visual ou auditivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Demência ou confusão mental</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-900 mb-3">Fatores ambientais (em casa e na unidade):</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Iluminação inadequada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Piso escorregadio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Tapetes soltos ou degraus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Falta de barras de apoio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Calçados inadequados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Leitos sem grades ou sem ajuste de altura</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-3">Fatores sociais e comportamentais:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Medo de cair e restringir-se</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Falta de cuidador</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Falta de orientação após alta ou durante acompanhamento clínico</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              Orientações a Pacientes e Familiares
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-3">✅ Em casa:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Retirar tapetes soltos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Iluminar bem corredores e escadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Instalar barras de apoio no banheiro</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Usar calçados firmes, com solado de borracha</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Evitar móveis com quinas ou mal posicionados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Deixar os itens de uso diário em locais de fácil alcance</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-3">✅ Com medicamentos:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Explicar que certos remédios podem causar tontura</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Orientar a levantar-se devagar da cama ou cadeira</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Incentivar revisão da prescrição em caso de quedas</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-3">✅ Com a família/cuidador:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Envolver os familiares nas orientações</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Incentivar o acompanhamento em consultas e exames</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Fornecer material educativo (folhetos, cartilhas, vídeos)</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HomeIcon className="h-5 w-5 text-teal-600" />
              Cuidados com Quedas Durante o Atendimento na Unidade
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Embora não seja um ambiente hospitalar, a unidade de saúde também precisa garantir segurança física ao
              paciente em todas as etapas do atendimento.
            </p>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <h4 className="font-semibold text-teal-900 mb-3">✅ Boas práticas na unidade:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>Observar risco de queda em idosos, gestantes, pacientes debilitados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>Ajudar o paciente ao se levantar ou se deslocar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>Utilizar cadeiras com apoio de braços</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>Manter os ambientes bem iluminados e com pisos limpos e secos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>Evitar macas altas ou sem apoio lateral</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>Disponibilizar banco de apoio para medição de pressão em pacientes idosos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>Monitorar pacientes com tontura ou fraqueza (ex: após medicação, coleta de exames)</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-blue-600" />
              Checklist para Equipes da APS
            </CardTitle>
            <CardDescription>Durante visitas ou atendimentos, a equipe deve verificar:</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">1.</span>
                  <span>O paciente já sofreu quedas no último ano?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">2.</span>
                  <span>Usa bengala, andador ou outro auxílio de marcha?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">3.</span>
                  <span>Ambiente da casa tem riscos (tapetes soltos, escadas sem corrimão, pouca iluminação)?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">4.</span>
                  <span>
                    Há uso de medicamentos que aumentam risco de quedas (sedativos, anti-hipertensivos,
                    hipoglicemiantes)?
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">5.</span>
                  <span>O paciente tem alterações visuais ou auditivas não corrigidas?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">6.</span>
                  <span>Foi orientado sobre exercícios de equilíbrio e fortalecimento?</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-900">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Resumo para Ação Prática na APS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Avaliar o risco de queda em todos os atendimentos de idosos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Promover orientações escritas e verbais para pacientes e cuidadores</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Identificar e adaptar os ambientes da unidade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Realizar educação em saúde nas visitas domiciliares</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Registrar e compartilhar casos com a equipe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Incentivar práticas corporais e reabilitação com o NASF (se disponível)</span>
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
