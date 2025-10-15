import Link from "next/link"
import { Home, Shield, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SegurancaPacientePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
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
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 break-words">Segurança do Paciente</h1>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Compreenda os fundamentos, histórico e principais conceitos da segurança do paciente na Atenção Primária à
            Saúde.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-5">
          {/* O que é */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-600">O que é Segurança do Paciente?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                Segurança do paciente é o conjunto de ações que visam prevenir riscos, erros e danos durante o cuidado
                em saúde. Surgiu como prioridade mundial após estudos revelarem que milhões de pessoas sofrem por falhas
                evitáveis no atendimento. No Brasil, esse tema ganhou força com a criação da Política Nacional de
                Segurança do Paciente em 2013.
              </p>
              <div className="space-y-2">
                <a
                  href="https://bvsms.saude.gov.br/bvs/saudelegis/gm/2013/prt0529_01_04_2013.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-blue-600 hover:text-blue-700 text-xs break-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  <span>Resolução 529/2013</span>
                </a>
                <a
                  href="https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2013/rdc0036_25_07_2013.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-blue-600 hover:text-blue-700 text-xs break-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  <span>RDC 36/2013</span>
                </a>
                <a
                  href="https://portal.coren-sp.gov.br/wp-content/uploads/2022/05/Seguranca-do-Paciente-WEB.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-blue-600 hover:text-blue-700 text-xs break-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  <span>Segurança do Paciente: Guia para a Prática</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Contexto Histórico */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-600">Contexto Histórico</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                A discussão sobre segurança do paciente permeia a humanidade há mais de um século, porém apenas ganhou
                destaque após o relatório americano "To Err is Human" (1999), que mostrou que os erros assistenciais
                causavam mais mortes que acidentes de avião. Desde então, o mundo passou a criar políticas e protocolos
                para tornar o cuidado mais seguro e eficiente.
              </p>
              <div className="space-y-2">
                <a
                  href="https://www.epimedsolutions.com/material_educativo/artigo-linha-historica-e-acoes-desenvolvidas-no-aspecto-da-seguranca-do-paciente/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-blue-600 hover:text-blue-700 text-xs break-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  <span>Linha histórica e ações desenvolvidas</span>
                </a>
                <a
                  href="https://here.abennacional.org.br/here/seguranca_do_paciente.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-blue-600 hover:text-blue-700 text-xs break-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  <span>História da qualidade em segurança do paciente</span>
                </a>
                <a
                  href="https://bfarras.com.br/wp-content/uploads/2022/11/Errar-e%CC%81-Humano-.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-blue-600 hover:text-blue-700 text-xs break-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  <span>To Err is Human: Building a Safer Health System</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Metas e Desafios */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-600">Metas e Desafios</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                Como resposta à preocupação global com a segurança do paciente, a Organização Mundial da Saúde (OMS) e a
                Joint Commission International (JCI) passaram a promover ações padronizadas para reduzir riscos e
                prevenir danos.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Em 2008, surgiram as <strong>6 Metas Internacionais de Segurança do Paciente</strong>, que orientam
                práticas simples e eficazes para proteger a vida do paciente em qualquer nível de atenção, inclusive na
                Atenção Primária à Saúde (APS):
              </p>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 text-sm">✔</span>
                  <span className="text-sm text-gray-700">Identificar corretamente os pacientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 text-sm">✔</span>
                  <span className="text-sm text-gray-700">Melhorar a comunicação entre os profissionais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 text-sm">✔</span>
                  <span className="text-sm text-gray-700">Garantir o uso seguro de medicamentos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 text-sm">✔</span>
                  <span className="text-sm text-gray-700">
                    Assegurar cirurgia no local, paciente e procedimento corretos
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 text-sm">✔</span>
                  <span className="text-sm text-gray-700">Reduzir o risco de infecções associadas ao cuidado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 text-sm">✔</span>
                  <span className="text-sm text-gray-700">Prevenir quedas nos serviços de saúde</span>
                </li>
              </ul>
              <p className="text-sm text-gray-700 leading-relaxed mt-3">
                Além das metas, a OMS lançou os <strong>Desafios Globais de Segurança do Paciente</strong>:
              </p>
              <ul className="space-y-1.5 ml-4">
                <li className="text-sm text-gray-700">
                  <strong>1º Desafio (2005):</strong> Clean Care is Safer Care – foco na higienização das mãos
                </li>
                <li className="text-sm text-gray-700">
                  <strong>2º Desafio (2008):</strong> Safe Surgery Saves Lives – foco na segurança cirúrgica
                </li>
                <li className="text-sm text-gray-700">
                  <strong>3º Desafio (2017):</strong> Medication Without Harm – uso seguro de medicamentos
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Principais Conceitos */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-600">Principais Conceitos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                A Organização Mundial da Saúde (OMS) definiu uma linguagem comum para que todos os profissionais de
                saúde possam entender, relatar e aprender com falhas no cuidado. Abaixo, cada conceito com exemplos
                práticos na APS:
              </p>

              <div className="space-y-3">
                <Alert>
                  <AlertDescription className="text-sm">
                    <strong className="text-gray-800">Dano:</strong> Qualquer efeito negativo no corpo, mente ou vida do
                    paciente.
                    <br />
                    <em className="text-xs text-gray-600">
                      Exemplo: Um paciente idoso cai ao sair do consultório devido a um degrau sem sinalização,
                      fraturando o punho.
                    </em>
                  </AlertDescription>
                </Alert>

                <Alert>
                  <AlertDescription className="text-sm">
                    <strong className="text-gray-800">Risco:</strong> Probabilidade de ocorrer um incidente.
                    <br />
                    <em className="text-xs text-gray-600">
                      Exemplo: Prescrever medicamento sem verificar alergias no prontuário aumenta o risco de reação
                      adversa grave.
                    </em>
                  </AlertDescription>
                </Alert>

                <Alert>
                  <AlertDescription className="text-sm">
                    <strong className="text-gray-800">Incidente:</strong> Evento ou situação que pode causar ou causou
                    dano ao paciente.
                    <br />
                    <em className="text-xs text-gray-600">
                      Exemplo: Durante a troca de curativo, foi utilizado um material vencido.
                    </em>
                  </AlertDescription>
                </Alert>

                <Alert>
                  <AlertDescription className="text-sm">
                    <strong className="text-gray-800">Circunstância Notificável:</strong> Evento com potencial para
                    causar dano.
                    <br />
                    <em className="text-xs text-gray-600">
                      Exemplo: Frascos de vacina são encontrados fora da temperatura adequada, mas ainda não foram
                      utilizados.
                    </em>
                  </AlertDescription>
                </Alert>

                <Alert>
                  <AlertDescription className="text-sm">
                    <strong className="text-gray-800">Near Miss (Quase Erro):</strong> Incidente que não atingiu o
                    paciente.
                    <br />
                    <em className="text-xs text-gray-600">
                      Exemplo: A equipe quase aplicou a vacina errada, mas percebeu a tempo ao revisar o cartão vacinal.
                    </em>
                  </AlertDescription>
                </Alert>

                <Alert>
                  <AlertDescription className="text-sm">
                    <strong className="text-gray-800">Incidente sem Lesão:</strong> O paciente foi atingido, mas não
                    houve dano.
                    <br />
                    <em className="text-xs text-gray-600">
                      Exemplo: Foi administrada a vacina errada, mas não causou efeitos adversos.
                    </em>
                  </AlertDescription>
                </Alert>

                <Alert>
                  <AlertDescription className="text-sm">
                    <strong className="text-gray-800">Evento Adverso:</strong> Incidente que resultou em dano ao
                    paciente.
                    <br />
                    <em className="text-xs text-gray-600">
                      Exemplo: Um paciente recebeu uma dose incorreta de insulina e sofreu uma hipoglicemia grave.
                    </em>
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* Hospitalar vs APS */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-600">Segurança do Paciente: Hospitalar e na APS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                A segurança do paciente é essencial em todos os níveis de atenção à saúde, mas as estratégias e riscos
                variam conforme o contexto de cuidado.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <h4 className="font-semibold text-red-800 mb-2 text-sm">No ambiente hospitalar:</h4>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-600 mt-0.5">✔</span>
                    <span>Procedimentos invasivos (cirurgias, sondagens, intubações)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-600 mt-0.5">✔</span>
                    <span>Uso de múltiplos medicamentos e tecnologias</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-600 mt-0.5">✔</span>
                    <span>Longas internações e contato com diversos profissionais</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-600 mt-0.5">✔</span>
                    <span>Infecções associadas à assistência</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 mb-2 text-sm">Na Atenção Primária à Saúde (APS):</h4>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 mt-0.5">✔</span>
                    <span>Prevenção de riscos cotidianos e falhas administrativas</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 mt-0.5">✔</span>
                    <span>Identificação correta do paciente e administração segura de vacinas</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 mt-0.5">✔</span>
                    <span>Boa comunicação entre profissionais, pacientes e cuidadores</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 mt-0.5">✔</span>
                    <span>Prescrição, dispensação e uso correto de medicamentos</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 mt-0.5">✔</span>
                    <span>Acompanhamento adequado de condições crônicas</span>
                  </li>
                </ul>
              </div>

              <Alert>
                <AlertDescription className="text-sm">
                  <strong>Em resumo:</strong> No hospital, o foco é evitar falhas técnicas e procedimentos de alto
                  risco. Na APS, o foco está em prevenir erros cotidianos, garantir continuidade do cuidado e fortalecer
                  o vínculo com o paciente.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Vídeo */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-600">Vídeo – Impacto da Segurança do Paciente</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-3">
                Quer entender por que a segurança do paciente é tão importante?
              </p>
              <a href="https://www.youtube.com/watch?v=8I2Zu8CzEhU" target="_blank" rel="noopener noreferrer">
                <Button className="w-full text-sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Assistir Vídeo
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium">Segurança na APS - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}
