import Link from "next/link"
import { Home, Newspaper, ExternalLink, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ReportagensPage() {
  const categorias = [
    {
      nome: "Notícias e Casos Reais",
      icone: <Newspaper className="w-6 h-6 text-white" />,
      cor: "from-orange-500 to-red-500",
      itens: [
        {
          titulo: "Mulher acusa posto de saúde de entregar medicamento errado",
          descricao: "Caso de erro na dispensação de medicamentos em unidade básica de saúde no Acre.",
          url: "https://g1.globo.com/ac/acre/noticia/2014/09/mulher-acusa-posto-de-saude-de-entregar-medicamento-errado.html",
          fonte: "G1 Acre",
        },
        {
          titulo: "Criança de um ano é internada na UTI após tomar medicação errada em hospital",
          descricao: "Erro de medicação resulta em internação de criança em UTI no Ceará.",
          url: "https://g1.globo.com/ce/ceara/noticia/2023/08/17/crianca-de-um-ano-e-internado-na-uti-apos-tomar-medicacao-errada-em-hospital-no-ceara.ghtml",
          fonte: "G1 Ceará",
        },
        {
          titulo: "Técnico de enfermagem é denunciado após aplicar vacina errada em criança",
          descricao: "Erro na administração de vacina em criança de 3 meses em Minas Gerais.",
          url: "https://g1.globo.com/mg/centro-oeste/noticia/tecnico-de-enfermagem-e-denunciado-apos-aplicar-vacina-errada-em-crianca-de-3-meses-em-mg.ghtml",
          fonte: "G1 Minas Gerais",
        },
        {
          titulo: "Município deve indenizar paciente por erro em diagnóstico de IST",
          descricao: "Paciente diagnosticado equivocadamente com IST em exame feito no posto de saúde.",
          url: "https://www.tjes.jus.br/municipio-deve-indenizar-paciente-diagnosticado-equivocadamente-com-ist-em-exame-feito-no-posto-de-saude/",
          fonte: "TJES",
        },
        {
          titulo: "Estado deve indenizar paciente que teve medicamento trocado",
          descricao: "Caso de troca de medicamento resulta em condenação judicial em São Paulo.",
          url: "https://www.tjsp.jus.br/Noticias/Noticia?codigoNoticia=100902",
          fonte: "TJSP",
        },
        {
          titulo: "Município indenizará paciente por erro médico em posto de saúde",
          descricao: "Erro médico em unidade básica de saúde resulta em indenização.",
          url: "https://www.tjsp.jus.br/Noticias/Noticia?codigoNoticia=12560",
          fonte: "TJSP",
        },
        {
          titulo: "A vida acabou, diz auxiliar de enfermagem que trocou soro por vaselina",
          descricao: "Grave erro de medicação com consequências devastadoras em São Paulo.",
          url: "https://gauchazh.clicrbs.com.br/geral/noticia/2010/12/a-vida-acabou-diz-auxiliar-de-enfermagem-que-trocou-soro-por-vaselina-em-sp-3140153.html",
          fonte: "GaúchaZH",
        },
        {
          titulo: "Morre homem que ficou em estado vegetativo após superdosagem de remédio",
          descricao: "Erro de dosagem resulta em morte de paciente em Porto Alegre.",
          url: "https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/04/28/morre-homem-que-ficou-em-estado-vegetativo-apos-receber-superdosagem-de-remedio-em-hospital-de-porto-alegre.ghtml",
          fonte: "G1 Rio Grande do Sul",
        },
        {
          titulo: "Menino de 2 anos morre em hospital no interior de SP",
          descricao: "Caso de óbito infantil relacionado a falhas na assistência.",
          url: "https://g1.globo.com/sp/sao-jose-do-rio-preto-aracatuba/noticia/2025/05/07/menino-de-2-anos-morre-em-hospital-no-interior-de-sp.ghtml",
          fonte: "G1 São Paulo",
        },
        {
          titulo: "Médico é demitido após receitar ibuprofeno em dose errada",
          descricao: "Erro de prescrição resulta em demissão de profissional na Serra, ES.",
          url: "https://www.folhavitoria.com.br/saude/medico-e-demitido-apos-receitar-ibuprofeno-em-dose-errada-na-serra/",
          fonte: "Folha Vitória",
        },
      ]
    },
    {
      nome: "Artigos e Materiais Educativos",
      icone: <ExternalLink className="w-6 h-6 text-white" />,
      cor: "from-blue-500 to-indigo-600",
      itens: [
        {
          titulo: "Linha histórica e ações de segurança do paciente",
          descricao: "Artigo detalhando a evolução histórica e as ações desenvolvidas no aspecto da segurança do paciente.",
          url: "https://www.epimedsolutions.com/material_educativo/artigo-linha-historica-e-acoesdesenvolvidas-no-aspecto-da-seguranca-do-paciente/",
          fonte: "Epimed Solutions",
        },
        {
          titulo: "História da qualidade em segurança do paciente",
          descricao: "Documento sobre a trajetória da qualidade nos serviços de saúde e segurança do paciente.",
          url: "https://here.abennacional.org.br/here/seguranca_do_paciente.pdf",
          fonte: "ABEn Nacional",
        },
        {
          titulo: "To Err is Human - Building a Safer Health System",
          descricao: "O relatório clássico que transformou a visão sobre erros médicos e segurança no sistema de saúde.",
          url: "https://bfarras.com.br/wp-content/uploads/2022/11/Errar-e%CC%81-Humano-.pdf",
          fonte: "Institute of Medicine",
        },
      ]
    },
    {
      nome: "Protocolos e Documentos Oficiais",
      icone: <AlertTriangle className="w-6 h-6 text-white" />,
      cor: "from-teal-500 to-emerald-600",
      itens: [
        {
          titulo: "Checklist de Cirurgia Segura – OMS",
          descricao: "Ferramenta essencial para reduzir riscos e garantir a segurança em procedimentos cirúrgicos.",
          url: "https://www.who.int/teams/integrated-health-services/patient-safety/research/safe-surgery",
          fonte: "OMS",
        },
        {
          titulo: "Anvisa – Protocolo Cirurgia Segura",
          descricao: "Diretrizes nacionais para a implementação do protocolo de cirurgia segura em unidades de saúde.",
          url: "https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/servicosdesaude/publicacoes/protocolo-cirurgia-segura.pdf",
          fonte: "Anvisa",
        },
      ]
    },
    {
      nome: "Documentos do Ministério da Saúde",
      icone: <Home className="w-6 h-6 text-white" />,
      cor: "from-blue-600 to-blue-800",
      itens: [
        {
          titulo: "Portal da Atenção Primária",
          descricao: "Acesso a informações, diretrizes e recursos específicos para a Atenção Primária à Saúde (SAPS).",
          url: "https://www.gov.br/saude/pt-br/composicao/saps",
          fonte: "Ministério da Saúde",
        },
        {
          titulo: "Cadernos de Atenção Básica",
          descricao: "Coleção de documentos técnicos para orientação das equipes de saúde da família e atenção básica.",
          url: "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/atencao-basica",
          fonte: "Ministério da Saúde",
        },
        {
          titulo: "Protocolos Clínicos e Diretrizes Terapêuticas (PCDT)",
          descricao: "Documentos que estabelecem critérios para diagnóstico e tratamento de doenças no SUS.",
          url: "https://www.gov.br/conitec/pt-br/assuntos/avaliacao-de-tecnologias-em-saude/protocolos-clinicos-ediretrizes-terapeuticas",
          fonte: "CONITEC",
        },
      ]
    },
    {
      nome: "Documentos da Anvisa e Notificações",
      icone: <AlertTriangle className="w-6 h-6 text-white" />,
      cor: "from-purple-500 to-purple-700",
      itens: [
        {
          titulo: "Guia para implantação do NSP – Anvisa",
          descricao: "Orientações para a criação e funcionamento dos Núcleos de Segurança do Paciente.",
          url: "https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/servicosdesaude/publicacoes/guia-para-implantacao-do-núcleo-de-seguranca-do-paciente.pdf",
          fonte: "Anvisa",
        },
        {
          titulo: "Manual de Notificação de Eventos – Anvisa",
          descricao: "Manual para notificação de eventos adversos e monitoramento de segurança em ensaios clínicos.",
          url: "https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/produtos-para-asaude/manuais/manual-para-notificacao-de-eventos-adversos-e-monitoramento-de-seguranca-emensaios-clinicos-envolvendo-dispositivos-medicos-em-investigacao.pdf",
          fonte: "Anvisa",
        },
        {
          titulo: "Notivisa – Sistema Nacional de Notificações",
          descricao: "Sistema para notificação de incidentes, eventos adversos e queixas técnicas de produtos.",
          url: "https://notivisa.anvisa.gov.br/frmLogin.asp",
          fonte: "Anvisa",
        },
      ]
    },
  ]

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
            <div className="bg-orange-500 p-2.5 rounded-lg text-white flex-shrink-0">
              <Newspaper className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 break-words">Reportagens e evidências científicas</h1>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">Casos reais e documentos oficiais para segurança do paciente</p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-8">
          <div className="flex gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-700 mb-2">
                Nesta seção, você encontra notícias reais e evidências científicas sobre falhas na assistência que resultaram em danos aos
                pacientes, prejuízos à credibilidade das unidades de saúde e impactos na vida dos profissionais
                envolvidos.
              </p>
              <p className="text-sm text-gray-700 font-semibold">
                Um espaço para refletir e aprender com situações e estudos que reforçam a importância da segurança do paciente.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {categorias.map((categoria, catIndex) => (
            <div key={catIndex} className="space-y-6">
              <div className="flex items-center gap-3 border-b-2 border-gray-100 pb-2">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${categoria.cor}`}>
                  {categoria.icone}
                </div>
                <h2 className="text-xl font-bold text-gray-800">{categoria.nome}</h2>
              </div>
              
              <div className="grid gap-6">
                {categoria.itens.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
                  >
                    <div className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{item.titulo}</h3>
                          <p className="text-sm text-gray-600 mb-4">{item.descricao}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 font-medium bg-gray-50 px-2 py-1 rounded">Fonte: {item.fonte}</span>
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors"
                            >
                              Acessar conteúdo
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
