import Link from "next/link"
import { Syringe, AlertTriangle, CheckCircle, Shield, FileText, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function VacinacaoFarmacovigilancia() {
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
              <Syringe className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 break-words">Vacinação e Farmacovigilância</h1>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">Imunizar com segurança é fundamental</p>
        </div>

        <div className="space-y-5">
          {/* Boas práticas na sala de vacina */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-purple-600 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Boas práticas na sala de vacina
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                A sala de vacina é um dos ambientes mais estratégicos da APS para a promoção da saúde e a prevenção de
                doenças. No entanto, erros na vacinação podem gerar riscos graves ao paciente, como eventos adversos,
                falhas vacinais ou até imunizações desnecessárias.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Boas práticas essenciais:
                </h3>
                <ul className="space-y-1.5 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 text-sm">✓</span>
                    <span className="text-sm text-gray-700">
                      Identificar corretamente o paciente (nome, data de nascimento e cartão SUS)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 text-sm">✓</span>
                    <span className="text-sm text-gray-700">
                      Confirmar o histórico vacinal e verificar possíveis contraindicações
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 text-sm">✓</span>
                    <span className="text-sm text-gray-700">Utilizar técnica asséptica na preparação e aplicação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 text-sm">✓</span>
                    <span className="text-sm text-gray-700">Verificar validade, lote e aspecto da vacina</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 text-sm">✓</span>
                    <span className="text-sm text-gray-700">
                      Checar se a vacina foi conservada em temperatura adequada (2°C a 8°C)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 text-sm">✓</span>
                    <span className="text-sm text-gray-700">Aplicar as vacinas com registro imediato e correto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 text-sm">✓</span>
                    <span className="text-sm text-gray-700">
                      Usar o local apropriado (braço, coxa, etc.) conforme idade e tipo de vacina
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 text-sm">✓</span>
                    <span className="text-sm text-gray-700">
                      Manter kit de emergência disponível (adrenalina, algodão, seringa)
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Boas práticas na administração */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-purple-600">Boas práticas na administração de vacinas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                A administração segura de vacinas envolve mais do que a aplicação em si. Requer atenção, técnica e
                cuidado com o paciente em todas as etapas.
              </p>

              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h3 className="font-bold text-blue-900 mb-2 text-sm">Antes da aplicação:</h3>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• Confirmar tipo e dose da vacina</li>
                    <li>• Avaliar febre, reações anteriores ou alergias</li>
                    <li>• Explicar ao paciente o que será feito</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <h3 className="font-bold text-purple-900 mb-2 text-sm">Durante a aplicação:</h3>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• Higienizar as mãos e usar EPIs</li>
                    <li>• Realizar técnica correta (IM, SC, ID)</li>
                    <li>• Estar atento ao comportamento do paciente</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <h3 className="font-bold text-green-900 mb-2 text-sm">Após a aplicação:</h3>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• Observar paciente por 10-15 minutos</li>
                    <li>• Registrar no prontuário e cartão</li>
                    <li>• Orientar sobre possíveis reações</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Eventos adversos */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-purple-600 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Tipos de eventos adversos pós-vacinação (EAPV)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                Eventos Adversos Pós-Vacinação (EAPV) são efeitos indesejados que podem ocorrer após a aplicação de uma
                vacina. Nem todos indicam erro, alguns são esperados e leves, outros podem indicar falhas e precisam ser
                notificados.
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <h3 className="font-bold text-yellow-900 mb-2 text-sm">EAPV mais comuns (leves):</h3>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• Febre baixa</li>
                    <li>• Dor ou vermelhidão no local</li>
                    <li>• Mal-estar leve</li>
                    <li>• Irritabilidade</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <h3 className="font-bold text-red-900 mb-2 text-sm">EAPV graves ou raros:</h3>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• Convulsões</li>
                    <li>• Choque anafilático</li>
                    <li>• Paralisia flácida</li>
                    <li>• Linfadenite supurada (BCG)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-3 rounded-r-lg">
                <p className="text-orange-900 font-medium text-sm">
                  <strong>Quando notificar?</strong> Qualquer reação inesperada, grave, prolongada ou que cause
                  internação deve ser notificada à vigilância epidemiológica e ao sistema de farmacovigilância.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Farmacovigilância */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-purple-600 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Cuidados com a dispensação de medicação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                A farmacovigilância é o conjunto de ações voltadas para a detecção, avaliação e prevenção de efeitos
                adversos relacionados ao uso de medicamentos, especialmente na atenção básica.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-bold text-purple-900 mb-2 text-sm">Boas práticas na dispensação:</h3>
                <ul className="space-y-1.5 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-0.5 text-sm">✓</span>
                    <span className="text-sm text-gray-700">
                      Conferir nome, dose e via da medicação com a prescrição
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-0.5 text-sm">✓</span>
                    <span className="text-sm text-gray-700">
                      Verificar interações medicamentosas e alergias previamente relatadas
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-0.5 text-sm">✓</span>
                    <span className="text-sm text-gray-700">
                      Orientar o paciente sobre a forma de uso, horários e duração
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-0.5 text-sm">✓</span>
                    <span className="text-sm text-gray-700">Esclarecer efeitos colaterais possíveis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-0.5 text-sm">✓</span>
                    <span className="text-sm text-gray-700">
                      Checar validade, aspecto e armazenamento correto do medicamento
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-0.5 text-sm">✓</span>
                    <span className="text-sm text-gray-700">Registrar a dispensação corretamente</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
                <p className="text-blue-900 text-sm">
                  O farmacêutico ou profissional responsável deve manter vigilância ativa sobre medicamentos de alto
                  risco (antibióticos, insulinas, anticoagulantes).
                </p>
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
