import Link from "next/link"
import { Home, Newspaper, ExternalLink, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ReportagensPage() {
  const reportagens = [
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
            <h1 className="text-2xl font-bold text-gray-800 break-words">Reportagens</h1>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">Casos reais de falhas na assistência</p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
          <div className="flex gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-700 mb-2">
                Nesta seção, você encontra notícias reais sobre falhas na assistência que resultaram em danos aos
                pacientes, prejuízos à credibilidade das unidades de saúde e impactos na vida dos profissionais
                envolvidos.
              </p>
              <p className="text-sm text-gray-700 font-semibold">
                Um espaço para refletir e aprender com situações que reforçam a importância da segurança do paciente.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {reportagens.map((reportagem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Newspaper className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{reportagem.titulo}</h2>
                    <p className="text-gray-600 mb-4">{reportagem.descricao}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-medium">Fonte: {reportagem.fonte}</span>
                      <a
                        href={reportagem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                      >
                        Ler matéria completa
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
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
