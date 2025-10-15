import Link from "next/link"
import { Home, Scissors, CheckCircle2, AlertCircle, FileText, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ProcedimentosCirurgicosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
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
            <div className="bg-teal-500 p-2.5 rounded-lg text-white flex-shrink-0">
              <Scissors className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 break-words">Procedimentos Cirúrgicos</h1>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">Segurança em procedimentos ambulatoriais na APS</p>
        </div>

        <Alert className="mb-6 border-teal-200 bg-teal-50">
          <Shield className="h-4 w-4 text-teal-600" />
          <AlertTitle className="text-teal-900">Cirurgia Segura na APS</AlertTitle>
          <AlertDescription className="text-teal-800">
            A cirurgia segura não se aplica apenas a grandes hospitais. Também faz parte da Atenção Primária à Saúde,
            especialmente em procedimentos ambulatoriais e de pequeno porte.
          </AlertDescription>
        </Alert>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-teal-600" />O que é Cirurgia Segura na APS?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              O objetivo é garantir que qualquer procedimento invasivo, mesmo os mais simples, seja realizado com
              técnica adequada, ambiente limpo, paciente identificado, comunicação clara e consentimento informado.
            </p>
            <p className="text-gray-700">
              A segurança começa no planejamento do procedimento, passa pela execução com equipe qualificada e segue no
              acompanhamento pós-procedimento.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Procedimentos Cirúrgicos Permitidos na APS
            </CardTitle>
            <CardDescription>Procedimentos de baixa complexidade</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Na APS, podem ser realizados procedimentos de baixa complexidade, também chamados de procedimentos
              ambulatoriais ou pequenas cirurgias.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-3">✅ Exemplos permitidos:</h4>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Exérese de nevos, cistos, lipomas e verrugas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Drenagem de abscessos superficiais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Sutura de feridas simples</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Retirada de corpos estranhos superficiais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Unha encravada (cantoplastia)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Biópsias de pele</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Cauterizações químicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Inserção e retirada de DIU</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Extração dentária</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900 mb-3">⚠ O que não pode ser feito na APS?</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span>Procedimentos com necessidade de anestesia geral</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span>Cirurgias com risco elevado de sangramento ou infecção</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span>Procedimentos que exijam internação hospitalar</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-3 italic">
                Cada município pode definir limites conforme sua estrutura, equipe e protocolos.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Critérios de Segurança para Realização dos Procedimentos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Antes de qualquer procedimento, a equipe deve garantir que estão reunidas as condições mínimas de
              segurança.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-3">✅ Critérios essenciais:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Identificação correta do paciente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Avaliação prévia com anamnese e alergias</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Verificação do local, tipo de procedimento e materiais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Ambiente limpo e com superfície adequada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Profissional habilitado (médico, enfermeiro ou cirurgião-dentista)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Lavagem das mãos e uso adequado de EPIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Registro completo no prontuário</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Acompanhamento pós-procedimento com orientação</span>
                </li>
              </ul>
            </div>

            <Alert className="border-amber-200 bg-amber-50">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-900">
                A aplicação de um checklist de cirurgia segura, mesmo simplificado, é altamente recomendada.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-purple-600" />
              Consentimento Livre e Esclarecido (CLE)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              O Consentimento Livre e Esclarecido é um direito do paciente e uma exigência ética e legal.
            </p>
            <p className="text-gray-700">
              Antes de qualquer procedimento, o paciente (ou responsável legal) precisa ser informado de forma clara
              sobre:
            </p>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>O que será feito e por que</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Riscos e possíveis complicações</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Benefícios esperados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Alternativas ao procedimento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Como será o pós-operatório e os cuidados necessários</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700">
              Depois dessas explicações, o paciente deve assinar o termo de consentimento, preferencialmente em duas
              vias (uma para o paciente, outra para o prontuário).
            </p>

            <Alert className="border-blue-200 bg-blue-50">
              <AlertCircle className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800">
                O consentimento deve ser colhido de forma livre (sem coerção) e esclarecida (com linguagem
                compreensível).
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="mb-6 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-900">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Resumo Prático: Cirurgia Segura na APS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Avaliar se o procedimento é permitido na estrutura da unidade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Garantir equipe capacitada e materiais adequados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Aplicar critérios de segurança (higiene, identificação, técnica)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Informar o paciente com clareza e colher o consentimento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Monitorar e orientar no pós-procedimento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Registrar tudo no prontuário</span>
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
