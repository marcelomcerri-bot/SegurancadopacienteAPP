import Link from "next/link"
import { AlertTriangle, CheckCircle, FileText, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CasosClinicosPage() {
  const casos = [
    {
      numero: 1,
      titulo: "Prescrição sem conferência de alergias",
      situacao:
        "Paciente de 45 anos, hipertenso, consulta por dor de garganta. O médico prescreveu amoxicilina sem revisar o prontuário. O paciente já havia registrado alergia grave a penicilina.",
      risco: "Reação anafilática grave.",
      conduta:
        "Conferir alergias antes de prescrever, confirmar com paciente e prontuário eletrônico, prescrever antibiótico alternativo.",
    },
    {
      numero: 2,
      titulo: "Falha no seguimento de exame alterado",
      situacao:
        "Mulher de 52 anos realizou preventivo (citologia oncótica) que apontou lesão de alto grau. O médico não revisou os exames pendentes no sistema e não chamou a paciente para retorno.",
      risco: "Progressão para câncer de colo uterino sem acompanhamento.",
      conduta:
        "Estabelecer rotina de checagem de exames, garantir contato ativo com paciente em caso de resultados alterados, encaminhar conforme protocolo.",
    },
    {
      numero: 3,
      titulo: "Erro na administração de vacina",
      situacao:
        "Criança de 1 ano recebeu dose duplicada de vacina pentavalente porque a mãe não apresentou a caderneta e o enfermeiro não checou o sistema antes da aplicação.",
      risco: "Reação adversa grave e sobrecarga imunológica.",
      conduta:
        "Conferir sempre caderneta + sistema, registrar todas as doses, orientar responsáveis a trazer documento oficial.",
    },
    {
      numero: 4,
      titulo: "Falha na orientação de curativo domiciliar",
      situacao:
        "Paciente com úlcera venosa foi atendido e o enfermeiro realizou curativo, mas não explicou à família sobre sinais de infecção. Paciente retornou dias depois com piora e celulite.",
      risco: "Infecção e internação hospitalar.",
      conduta:
        "Sempre orientar paciente/família sobre sinais de alerta, registrar orientações no prontuário, reforçar autocuidado.",
    },
    {
      numero: 5,
      titulo: "Administração de medicamento sem checagem correta",
      situacao:
        "Paciente idoso recebeu medicação de outro paciente porque o técnico aplicou sem conferir nome completo e data de nascimento.",
      risco: "Reação adversa, falta de efeito terapêutico.",
      conduta:
        "Conferir 9 certos da medicação (paciente, medicamento, via, dose, horário, validade, prescrição, registro, resposta).",
    },
    {
      numero: 6,
      titulo: "Falha na higienização das mãos",
      situacao:
        "Técnico realizou glicemia capilar em dois pacientes consecutivos sem higienizar as mãos ou trocar luvas.",
      risco: "Transmissão de patógenos, infecção cruzada.",
      conduta: "Cumprir protocolos de higienização das mãos e troca de luvas a cada procedimento.",
    },
    {
      numero: 7,
      titulo: "Perda de informação importante",
      situacao:
        "Durante visita, ACS foi informado pela família que paciente diabético estava sem insulina há 3 dias, mas não registrou nem comunicou à equipe.",
      risco: "Descompensação aguda, hospitalização.",
      conduta: "Registrar informação em ficha, comunicar imediatamente ao enfermeiro/médico, acompanhar desfecho.",
    },
    {
      numero: 8,
      titulo: "Orientação inadequada",
      situacao: "ACS orientou idoso hipertenso a suspender a medicação porque a pressão estava 'normal'.",
      risco: "Descontrole pressórico e AVC.",
      conduta:
        "Nunca alterar conduta médica; reforçar adesão ao tratamento; em caso de dúvidas, encaminhar ao enfermeiro/médico.",
    },
    {
      numero: 9,
      titulo: "Falha na identificação do paciente",
      situacao: "Dentista chamou paciente apenas pelo primeiro nome e realizou exodontia em pessoa equivocada.",
      risco: "Procedimento desnecessário, perda dentária indevida.",
      conduta: "Confirmar sempre nome completo, data de nascimento e prontuário antes de qualquer procedimento.",
    },
    {
      numero: 10,
      titulo: "Falta de registro no prontuário",
      situacao:
        "Após realizar restauração, o dentista não registrou no prontuário. Em visita seguinte, outro profissional repetiu o procedimento no mesmo dente.",
      risco: "Desgaste desnecessário, perda de estrutura dentária.",
      conduta: "Garantir registros completos e legíveis de todos os atendimentos.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
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
              <FileText className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 break-words">Casos Clínicos</h1>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">Situações reais e simuladas para aprendizado</p>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-700">
            Neste espaço, você encontrará situações reais e simuladas que ilustram desafios e boas práticas na segurança
            do paciente na Atenção Primária à Saúde. Os casos abordam falhas comuns, ações corretas e reflexões que
            ajudam a aprimorar o cuidado seguro e humanizado no dia a dia da equipe multiprofissional.
          </p>
        </div>

        <div className="space-y-6">
          {casos.map((caso) => (
            <div
              key={caso.numero}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4">
                <h2 className="text-xl font-bold text-white">
                  Caso {caso.numero} - {caso.titulo}
                </h2>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-600" />
                    Situação
                  </h3>
                  <p className="text-gray-700 pl-7">{caso.situacao}</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Risco
                  </h3>
                  <p className="text-red-800">{caso.risco}</p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Conduta Correta
                  </h3>
                  <p className="text-green-800">{caso.conduta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-3">Reflexão</h3>
          <p className="leading-relaxed">
            Cada caso apresentado representa situações que podem ocorrer no cotidiano da APS. O objetivo não é punir ou
            julgar, mas aprender com os erros e fortalecer a cultura de segurança do paciente. Discuta esses casos com
            sua equipe e identifique oportunidades de melhoria em sua unidade.
          </p>
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
