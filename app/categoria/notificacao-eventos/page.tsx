import Link from "next/link"
import { AlertTriangle, FileText, Shield, Lock, ExternalLink, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotificacaoEventos() {
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
            <div className="bg-red-500 p-2.5 rounded-lg text-white flex-shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 break-words">Notificação de Eventos Adversos</h1>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">Aprender com os erros para prevenir novos incidentes</p>
        </div>

        <div className="space-y-5">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-600" />
                Cadastro do Núcleo de Segurança do Paciente (NSP)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                O Núcleo de Segurança do Paciente (NSP) é uma instância obrigatória nas unidades de saúde que executam
                ações assistenciais, incluindo Unidades Básicas de Saúde (UBS), com o objetivo de planejar, implementar
                e monitorar práticas que garantam a segurança dos usuários e da equipe.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                <h3 className="font-bold text-blue-900 mb-3">Para cadastrar o NSP:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • Indicar, por portaria interna, os membros do núcleo (coordenador, profissionais da equipe, ACS,
                    apoio)
                  </li>
                  <li>• Elaborar o Plano de Segurança do Paciente da unidade</li>
                  <li>• Cadastrar o núcleo no Sistema de Notificações da Anvisa (Notivisa)</li>
                  <li>• Garantir que o núcleo tenha reuniões regulares, atas e plano de ação</li>
                </ul>
              </div>

              <a
                href="https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/servicosdesaude/publicacoes/modulo-6-implantacao-nucleo-de-seguranca.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <FileText className="w-5 h-5" />
                Guia para implantação do NSP - Anvisa
                <ExternalLink className="w-4 h-4" />
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>O que deve ser notificado?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                A notificação é uma prática fundamental para o aprendizado institucional e prevenção de novos
                incidentes. Deve-se notificar todo tipo de ocorrência que envolva risco ou dano ao paciente, mesmo que
                não tenha causado prejuízo imediato.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-4">
                <h3 className="font-bold text-orange-900 mb-3">Devem ser notificados:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Eventos adversos</strong> (com dano ao paciente)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Incidentes sem dano</strong> (erros que chegaram ao paciente mas não causaram prejuízo)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Quase-erros</strong> (erros interceptados a tempo)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Falhas nos processos</strong> que comprometam a segurança
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-yellow-900">
                  <strong>Exemplos:</strong> troca de vacina, erro de dispensação de medicação, queda em atendimento,
                  perda de prontuário, falha na comunicação, entre outros.
                </p>
              </div>

              <a
                href="https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/produtos-para-a-saude/manuais/manual-para-notificacao-de-eventos-adversos-e-monitoramento-de-seguranca-em-ensaios-clinicos-envolvendo-dispositivos-medicos-em-investigacao.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium mt-4"
              >
                <FileText className="w-5 h-5" />
                Manual de Notificação de Eventos - Anvisa
                <ExternalLink className="w-4 h-4" />
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>O que é evento adverso?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Evento Adverso (EA) é um incidente que resulta em dano ao paciente. Pode ser causado por falha de
                processo, erro humano ou condições do sistema.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-bold text-red-900 mb-3">Exemplos de eventos adversos:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Aplicação de medicamento errado</li>
                  <li>• Ferida causada por curativo mal executado</li>
                  <li>• Queda do paciente durante exame</li>
                  <li>• Reação grave não registrada após vacinação</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-4">
                <p className="text-blue-900">
                  Nem todo erro é evento adverso, mas todo evento adverso exige investigação e plano de ação.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Como notificar?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-blue-900 mb-2">1. Identificação do incidente</h3>
                  <p className="text-sm text-gray-700">Qualquer profissional pode relatar</p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-green-900 mb-2">2. Preenchimento do formulário interno</h3>
                  <p className="text-sm text-gray-700">Com dados objetivos, sem julgamentos</p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-purple-900 mb-2">3. Envio ao NSP</h3>
                  <p className="text-sm text-gray-700">
                    Que irá analisar, classificar e tomar providências (não é função punitiva!)
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-orange-900 mb-2">4. Registro externo (se necessário)</h3>
                  <p className="text-sm text-gray-700">Como no Notivisa (Anvisa) ou sistemas locais/municipais</p>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-red-900 mb-2">5. Discussão em equipe</h3>
                  <p className="text-sm text-gray-700">Para aprendizado e melhoria contínua</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-4">
                <p className="text-yellow-900">
                  A notificação pode ser feita anônima ou nominal, mas nunca deve conter críticas a colegas.
                </p>
              </div>

              <a
                href="https://notivisa.anvisa.gov.br/frmLogin.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                Acesse o Notivisa - Sistema Nacional de Notificações da Anvisa
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-6 h-6 text-green-600" />
                Garantia de sigilo e não punição
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                A cultura da segurança depende de um ambiente onde o profissional se sinta seguro para relatar erros e
                falhas.
              </p>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-green-900 mb-3">Princípios fundamentais da notificação segura:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>O profissional não será punido por relatar incidentes de forma honesta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>O sigilo sobre nomes e dados sensíveis será garantido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>O foco está na melhoria dos processos, não na busca por culpados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>O NSP atua para apoiar, não punir</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-4">
                <p className="text-blue-900 font-medium">
                  Isso é chamado de <strong>cultura justa</strong>: reconhecer que pessoas cometem erros, e que o
                  sistema deve aprender com eles.
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
