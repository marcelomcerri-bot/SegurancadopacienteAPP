"use client"

import Link from "next/link"
import { Home, Brain, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function QuizPage() {
  const [respostas, setRespostas] = useState<Record<number, string>>({})
  const [mostrarResultados, setMostrarResultados] = useState(false)

  const perguntas = [
    {
      numero: 1,
      pergunta:
        "Um dos maiores riscos de erro na Atenção Primária é a falha no seguimento de exames. Qual medida simples reduz esse risco?",
      opcoes: [
        { letra: "A", texto: "Deixar o paciente ligar para saber o resultado." },
        { letra: "B", texto: "Estabelecer rotina de checagem dos exames e contato ativo com o paciente." },
        { letra: "C", texto: "Arquivar resultados apenas no prontuário físico." },
        { letra: "D", texto: "Solicitar novos exames sem verificar os anteriores." },
      ],
      correta: "B",
      feedback: "O seguimento ativo garante que exames alterados não sejam esquecidos e reduz atrasos em diagnósticos.",
    },
    {
      numero: 2,
      pergunta:
        "Na APS, a falha de comunicação entre equipe e paciente é uma das principais causas de eventos adversos. Qual a conduta correta?",
      opcoes: [
        { letra: "A", texto: "Usar termos técnicos complexos para parecer mais profissional." },
        { letra: "B", texto: "Garantir linguagem simples e confirmar se o paciente compreendeu." },
        { letra: "C", texto: "Entregar panfletos e dispensar explicações verbais." },
        { letra: "D", texto: "Presumir que o paciente já entendeu por que não fez perguntas." },
      ],
      correta: "B",
      feedback:
        "Comunicação clara e checagem da compreensão são essenciais para adesão ao tratamento e prevenção de erros.",
    },
    {
      numero: 3,
      pergunta: "O erro de administração de vacinas é frequente. Qual prática segura evita duplicidade de doses?",
      opcoes: [
        { letra: "A", texto: "Confiar apenas na memória dos pais/responsáveis." },
        { letra: "B", texto: "Checar caderneta de vacinação + sistema antes da aplicação." },
        { letra: "C", texto: "Aplicar sempre todas as vacinas indicadas para a idade." },
        { letra: "D", texto: "Registrar só no sistema eletrônico." },
      ],
      correta: "B",
      feedback: "A dupla checagem (caderneta + sistema) é a melhor forma de evitar erros em imunização.",
    },
    {
      numero: 4,
      pergunta: "Qual é o papel do Agente Comunitário de Saúde na prevenção de eventos adversos?",
      opcoes: [
        { letra: "A", texto: "Alterar medicação de acordo com relatos da família." },
        {
          letra: "B",
          texto: "Servir como ponte entre comunidade e equipe, registrando e comunicando informações relevantes.",
        },
        { letra: "C", texto: "Atender consultas de rotina em domicílio." },
        { letra: "D", texto: "Coletar exames laboratoriais." },
      ],
      correta: "B",
      feedback: "O ACS identifica riscos e transmite informações para a equipe, fortalecendo a segurança do paciente.",
    },
    {
      numero: 5,
      pergunta: "Qual é uma prática de segurança do paciente para técnicos de enfermagem ao administrar medicamentos?",
      opcoes: [
        { letra: "A", texto: "Confiar na rotina, sem necessidade de checar todos os passos." },
        {
          letra: "B",
          texto:
            "Seguir os '9 certos' da medicação (paciente, medicamento, via, dose, horário, validade, prescrição, registro, resposta).",
        },
        { letra: "C", texto: "Aplicar a medicação assim que for entregue pelo colega." },
        { letra: "D", texto: "Confirmar apenas o nome do paciente." },
      ],
      correta: "B",
      feedback: "Os 9 certos reduzem drasticamente o risco de erro de medicação.",
    },
    {
      numero: 6,
      pergunta: "Um dos pilares da segurança do paciente na APS é:",
      opcoes: [
        { letra: "A", texto: "Realizar atendimentos rápidos para atender maior demanda." },
        { letra: "B", texto: "Implementar protocolos e checklists de segurança adaptados à realidade da unidade." },
        { letra: "C", texto: "Evitar notificações de eventos adversos para não expor a unidade." },
        { letra: "D", texto: "Reduzir consultas de seguimento para diminuir custos." },
      ],
      correta: "B",
      feedback: "Protocolos e checklists garantem padronização e segurança nos processos assistenciais.",
    },
    {
      numero: 7,
      pergunta: "Qual medida simples reduz infecção cruzada na Atenção Primária?",
      opcoes: [
        { letra: "A", texto: "Higienização das mãos antes e após cada atendimento." },
        { letra: "B", texto: "Uso de luvas em todos os procedimentos, sem trocar entre pacientes." },
        { letra: "C", texto: "Evitar o uso de álcool gel para não ressecar as mãos." },
        { letra: "D", texto: "Higienizar apenas quando houver contato com sangue." },
      ],
      correta: "A",
      feedback: "Higienizar as mãos é a ação mais eficaz e barata para prevenir infecções.",
    },
    {
      numero: 8,
      pergunta: "Sobre o prontuário do paciente, qual prática garante segurança?",
      opcoes: [
        { letra: "A", texto: "Registrar apenas informações essenciais para poupar tempo." },
        { letra: "B", texto: "Fazer registros completos, legíveis e atualizados de cada atendimento." },
        { letra: "C", texto: "Deixar para registrar no final do dia todas as consultas." },
        { letra: "D", texto: "Usar abreviações próprias, mesmo que não sejam padrão." },
      ],
      correta: "B",
      feedback: "O registro completo e atualizado garante continuidade do cuidado e evita falhas.",
    },
    {
      numero: 9,
      pergunta: "Em um atendimento odontológico, qual medida aumenta a segurança do paciente?",
      opcoes: [
        {
          letra: "A",
          texto:
            "Confirmar identidade do paciente com nome completo e data de nascimento antes de qualquer procedimento.",
        },
        { letra: "B", texto: "Chamar apenas pelo primeiro nome na sala de espera." },
        { letra: "C", texto: "Realizar procedimento imediato para não atrasar os demais." },
        { letra: "D", texto: "Presumir que se trata do paciente agendado sem perguntar dados." },
      ],
      correta: "A",
      feedback: "A identificação correta previne erros graves, como procedimentos no paciente errado.",
    },
    {
      numero: 10,
      pergunta: "Por que a notificação de eventos adversos é essencial na APS?",
      opcoes: [
        { letra: "A", texto: "Para punir os responsáveis pelos erros." },
        { letra: "B", texto: "Para ocultar erros da equipe." },
        { letra: "C", texto: "Para aprender com os erros, identificar causas e prevenir novas ocorrências." },
        { letra: "D", texto: "Para aumentar a burocracia do serviço." },
      ],
      correta: "C",
      feedback: "A notificação é uma ferramenta de aprendizado coletivo e melhoria da segurança do paciente.",
    },
  ]

  const handleResposta = (numeroPergunta: number, letra: string) => {
    setRespostas((prev) => ({ ...prev, [numeroPergunta]: letra }))
  }

  const calcularPontuacao = () => {
    let acertos = 0
    perguntas.forEach((pergunta) => {
      if (respostas[pergunta.numero] === pergunta.correta) {
        acertos++
      }
    })
    return acertos
  }

  const handleSubmit = () => {
    setMostrarResultados(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const pontuacao = calcularPontuacao()
  const percentual = (pontuacao / perguntas.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
            <div className="bg-blue-500 p-2.5 rounded-lg text-white flex-shrink-0">
              <Brain className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 break-words">Quiz de Segurança do Paciente</h1>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">Teste seus conhecimentos de forma interativa</p>
        </div>

        {mostrarResultados && (
          <div
            className={`p-6 rounded-xl mb-6 ${
              percentual >= 70 ? "bg-green-50 border-2 border-green-500" : "bg-yellow-50 border-2 border-yellow-500"
            }`}
          >
            <h2 className="text-2xl font-bold mb-2">
              Resultado: {pontuacao} de {perguntas.length} acertos
            </h2>
            <p className="text-lg mb-4">Pontuação: {percentual.toFixed(0)}%</p>
            {percentual >= 70 ? (
              <p className="text-green-800">
                Parabéns! Você demonstrou excelente conhecimento sobre segurança do paciente na APS.
              </p>
            ) : (
              <p className="text-yellow-800">
                Continue estudando! Revise os conteúdos das categorias para melhorar seu desempenho.
              </p>
            )}
          </div>
        )}

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-700">
            Teste seus conhecimentos sobre segurança do paciente com perguntas rápidas e educativas. Aprenda de forma
            interativa e divertida!
          </p>
        </div>

        <div className="space-y-8">
          {perguntas.map((pergunta) => {
            const respostaSelecionada = respostas[pergunta.numero]
            const estaCorreta = respostaSelecionada === pergunta.correta

            return (
              <div key={pergunta.numero} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Pergunta {pergunta.numero}</h3>
                <p className="text-gray-700 mb-6">{pergunta.pergunta}</p>

                <div className="space-y-3">
                  {pergunta.opcoes.map((opcao) => {
                    const estaSelecionada = respostaSelecionada === opcao.letra
                    const eOpcaoCorreta = opcao.letra === pergunta.correta

                    return (
                      <button
                        key={opcao.letra}
                        onClick={() => !mostrarResultados && handleResposta(pergunta.numero, opcao.letra)}
                        disabled={mostrarResultados}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          mostrarResultados
                            ? eOpcaoCorreta
                              ? "border-green-500 bg-green-50"
                              : estaSelecionada
                                ? "border-red-500 bg-red-50"
                                : "border-gray-200 bg-gray-50"
                            : estaSelecionada
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-gray-700">{opcao.letra})</span>
                          <span className="text-gray-700">{opcao.texto}</span>
                          {mostrarResultados && eOpcaoCorreta && (
                            <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                          )}
                          {mostrarResultados && estaSelecionada && !eOpcaoCorreta && (
                            <XCircle className="w-5 h-5 text-red-600 ml-auto" />
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>

                {mostrarResultados && (
                  <div
                    className={`mt-4 p-4 rounded-lg ${
                      estaCorreta ? "bg-green-50 border-l-4 border-green-500" : "bg-blue-50 border-l-4 border-blue-500"
                    }`}
                  >
                    <p className="font-semibold mb-2">
                      {estaCorreta ? "✓ Resposta correta!" : `✓ Resposta correta: ${pergunta.correta}`}
                    </p>
                    <p className="text-gray-700">{pergunta.feedback}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {!mostrarResultados && Object.keys(respostas).length === perguntas.length && (
          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg hover:shadow-xl"
            >
              Ver Resultados
            </button>
          </div>
        )}

        {mostrarResultados && (
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setRespostas({})
                setMostrarResultados(false)
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg hover:shadow-xl"
            >
              Refazer Quiz
            </button>
          </div>
        )}
      </main>

      <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium">Segurança na APS - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}
