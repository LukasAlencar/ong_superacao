import { Target, Briefcase, MapPin, Phone, Instagram } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="Logo ONG Superação"
              className="w-48 h-48 mx-auto object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            A ONG Superação acredita que o amor transforma vidas
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Quando olhamos com empatia para as diferenças, criamos inclusão, esperança e futuro.
          </p>
          
        </div>
      </header>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Quem Somos</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  A ONG Superação é uma instituição sem fins lucrativos dedicada à inclusão social de crianças, adolescentes e jovens com Transtorno do Espectro Autista (TEA) e outras deficiências.
                </p>
                <p>
                  Nossa missão é defender direitos, melhorar a qualidade de vida e apoiar famílias com amor, respeito e dedicação.
                </p>
                <blockquote className="border-l-4 border-purple-500 pl-6 py-4 italic text-xl text-gray-600 bg-purple-50 rounded-r-lg">
                  "Queremos mostrar a diferença que faz o amor na vida das pessoas. O amor muda tudo e a todos."
                </blockquote>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/salaaut.jpg"
                  alt="Sala de atividades da ONG Superação"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Histórias que Inspiram</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
                <img
                  src="/vulaut.jpeg"
                  alt="Criança com autismo mostrando suas habilidades"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left order-1 md:order-2">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Fazemos questão de dar voz ao amor — compartilhando histórias reais de superação e amor incondicional das mães e famílias que vivem o autismo de perto.
                </p>
                <p className="text-xl font-semibold text-purple-600">
                  Porque quando o amor fala, o preconceito se cala. 💙
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nossos Princípios</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {['Ética', 'Respeito', 'Comprometimento', 'Excelência', 'Bem-estar', 'Alegria'].map((principle) => (
                <div key={principle} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-xl font-semibold text-gray-800">{principle}</p>
                </div>
              ))}
            </div>
            <div className="text-center text-lg text-gray-700 space-y-4">
              <p>
                Acreditamos que o olhar empático é o primeiro passo para aceitar, incluir e transformar.
              </p>
              <p className="font-semibold text-purple-600">
                Quando enxergamos com o coração, enxergamos o melhor de cada pessoa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="bg-gradient-to-r from-purple-100 to-blue-100 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Target className="w-12 h-12 text-purple-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-800">Público-Alvo</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-xl p-8 shadow-lg space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Nosso projeto atua diretamente com a população em situação de vulnerabilidade social, oferecendo suporte e atividades na sede da ONG Superação e em comunidades próximas.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="font-semibold text-lg mb-3">👧👦 Atendemos:</p>
                  <p className="text-lg">
                    Crianças, adolescentes e jovens de até 24 anos com TEA e outras deficiências, além de suas famílias.
                  </p>
                </div>
                <p className="text-lg">
                  Todos os participantes passam por uma triagem feita por profissionais da assistência social, garantindo um atendimento humano e individualizado.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/criancaaut.jpg"
                  alt="Crianças em atividades inclusivas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Briefcase className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-800">O Que Fazemos</h2>
            </div>
            <div className="space-y-6 text-lg text-gray-700">
              <p className="leading-relaxed">
                Oferecemos atividades inclusivas, lúdicas, esportivas e educacionais, além de programas de capacitação profissional para as famílias.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
                <p className="font-bold text-xl mb-4">Nosso objetivo é claro:</p>
                <p className="text-xl text-purple-600 font-semibold">
                  👉 Promover inclusão, dignidade e oportunidades reais no mercado de trabalho.
                </p>
                <p className="mt-4 text-lg font-semibold">
                  Porque ninguém deve ser deixado para trás.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Message Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-semibold leading-relaxed">
              "O Autismo é um espectro com habilidades e limitações, mas se o foco for nas limitações, nunca enxergaremos as possibilidades.
              <br />
              <span className="block mt-6 text-yellow-300">
                Abra a sua mente e enxergue o potencial!"
              </span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Faça Parte Dessa Transformação</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Telefone</p>
                      <p className="text-gray-600">(21) 98817-2366</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Endereço</p>
                      <p className="text-gray-600">Estrada do Dendê, 563 – Tauá, Rio de Janeiro – RJ</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Instagram className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Instagram</p>
                      <a href="https://www.instagram.com/institutohumanosuperacao/" className="text-purple-600 hover:text-purple-700 transition-colors">
                        @institutohumanosuperacao
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-xl shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-6">Doe Agora</h3>
                <p className="text-lg mb-6 leading-relaxed">
                  Cada doação é um passo rumo a um mundo mais empático. Sua contribuição transforma vidas!
                </p>
                <button className="w-full bg-white text-purple-600 font-bold py-4 px-6 rounded-lg hover:bg-gray-100 transition-colors text-lg cursor-pointer">
                  💙 Fazer Doação
                </button>
                <p className="mt-6 text-center text-sm opacity-90">
                  A verdadeira superação nasce do amor. Junte-se a nós!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg">
            💭 O amor muda tudo — e juntos, podemos mudar o mundo.
          </p>
          <p className="mt-4 text-gray-400">
            © 2025 ONG Superação. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
