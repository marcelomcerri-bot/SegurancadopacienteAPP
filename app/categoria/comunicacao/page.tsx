import Link from "next/link"
import { Home, MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ComunicacaoPage() {
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
            <div className="bg-purple-500 p-2.5 rounded-lg text-white flex-shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 break-words">Comunicação</h1>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            A base do cuidado seguro e efetivo na Atenção Primária à Saúde.
          </p>
        </div>

        <div className="space-y-5">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-600">Por que a comunicação é essencial?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                A comunicação é a base do cuidado seguro. Na APS, onde o cuidado é contínuo, multidisciplinar e muitas
                vezes realizado em campo (visitas domiciliares, ações coletivas, etc.), falhas na comunicação podem
                gerar atrasos no diagnóstico, duplicidade de exames, medicação incorreta, encaminhamentos perdidos e até
                abandono de tratamento.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                A segunda meta de Segurança do Paciente destaca a importância de "melhorar a comunicação efetiva entre
                os profissionais de saúde". Isso vale tanto para a equipe de saúde quanto para a relação com o paciente
                e sua família.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-600">Comunicação entre profissionais na APS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                A atenção primária envolve uma equipe multiprofissional, incluindo: médicos, enfermeiros, técnicos,
                odontólogos e agentes de saúde. A comunicação entre esses profissionais precisa ser clara, objetiva e
                registrada.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <h4 className="font-semibold text-blue-900 mb-2 text-sm">Boas práticas:</h4>
                <ul className="space-y-1.5 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 text-sm">✔</span>
                    <span className="text-sm text-gray-700">Reuniões de equipe com foco nos casos complexos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 text-sm">✔</span>
                    <span className="text-sm text-gray-700">
                      Registros claros e padronizados no prontuário (escrito ou eletrônico)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 text-sm">✔</span>
                    <span className="text-sm text-gray-700">Encaminhamentos com todos os campos preenchidos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 text-sm">✔</span>
                    <span className="text-sm text-gray-700">
                      Compartilhamento de informações por sistemas integrados (quando disponíveis)
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-600">Referência e Contrarreferência</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                A referência e contrarreferência são os principais instrumentos de comunicação entre a APS e os demais
                níveis do sistema de saúde (secundário e terciário). Quando mal feitas, comprometem a continuidade do
                cuidado.
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <h4 className="font-semibold text-green-900 mb-2 text-sm">Boa Referência:</h4>
                  <ul className="space-y-1.5 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5 text-sm">✔</span>
                      <span className="text-sm text-gray-700">Dados completos do paciente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5 text-sm">✔</span>
                      <span className="text-sm text-gray-700">Diagnóstico e exames</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5 text-sm">✔</span>
                      <span className="text-sm text-gray-700">Justificativa do encaminhamento</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-900 mb-2 text-sm">Boa Contrarreferência:</h4>
                  <ul className="space-y-1.5 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5 text-sm">✔</span>
                      <span className="text-sm text-gray-700">Relatório claro da conduta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5 text-sm">✔</span>
                      <span className="text-sm text-gray-700">Prescrição atualizada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5 text-sm">✔</span>
                      <span className="text-sm text-gray-700">Retorno para seguimento pela APS</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-600">Comunicação com o Paciente e a Família</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                Comunicar-se de forma clara, respeitosa e empática com o paciente é essencial para o sucesso do cuidado.
                O paciente bem informado adere melhor ao tratamento, evita reconsultas desnecessárias e participa das
                decisões sobre sua saúde.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <h4 className="font-semibold text-purple-900 mb-2 text-sm">Boas práticas:</h4>
                <ul className="space-y-1.5 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 text-sm">✔</span>
                    <span className="text-sm text-gray-700">Usar linguagem acessível (sem termos técnicos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 text-sm">✔</span>
                    <span className="text-sm text-gray-700">
                      Confirmar se o paciente entendeu (perguntar de volta com gentileza)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 text-sm">✔</span>
                    <span className="text-sm text-gray-700">Oferecer orientações escritas quando possível</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 text-sm">✔</span>
                    <span className="text-sm text-gray-700">Estimular perguntas e escuta ativa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 text-sm">✔</span>
                    <span className="text-sm text-gray-700">Evitar julgamentos ou pressa durante o atendimento</span>
                  </li>
                </ul>
              </div>

              <Alert>
                <AlertDescription className="text-sm">
                  <strong>Importante:</strong> O ACS tem papel fundamental na tradução das orientações da equipe para a
                  realidade do paciente, atuando como ponte entre o serviço e a comunidade.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-600">Desafios Comuns na APS</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 text-sm">✗</span>
                  <span className="text-sm text-gray-700">Equipes sobrecarregadas ou com alta rotatividade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 text-sm">✗</span>
                  <span className="text-sm text-gray-700">Prontuários desatualizados ou de difícil acesso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 text-sm">✗</span>
                  <span className="text-sm text-gray-700">Falta de integração entre sistemas (e-SUS, SIA, SIAB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 text-sm">✗</span>
                  <span className="text-sm text-gray-700">Barreiras linguísticas ou culturais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 text-sm">✗</span>
                  <span className="text-sm text-gray-700">Uso de abreviações e termos técnicos em excesso</span>
                </li>
              </ul>
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
