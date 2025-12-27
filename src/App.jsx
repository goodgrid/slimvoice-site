import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white font-[Inter,system-ui,sans-serif] text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Slimvoice" className="h-24" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#hoe-het-werkt" className="text-gray-600 hover:text-gray-900 transition-colors">Hoe het werkt</a>
            <a href="#voor-wie" className="text-gray-600 hover:text-gray-900 transition-colors">Voor wie</a>
            <a href="#veiligheid" className="text-gray-600 hover:text-gray-900 transition-colors">Veiligheid</a>
            <a href="https://app.slimvoice.nl" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">Meld je aan</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Zie in één oogopslag welke bonnetjes je nog moet aanleveren
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Slimvoice maakt van je banktransacties een duidelijke to-dolijst voor je bonnen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="px-8 py-4 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200 transition-colors font-medium text-lg">
              Bekijk demo
            </a>
            <a href="https://app.slimvoice.nl" className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium text-lg shadow-lg shadow-blue-600/25">
              Meld je aan
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Het probleem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Je accountant ziet wat ontbreekt. Jij niet.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Banktransacties zijn compleet</h3>
              <p className="text-gray-600">Je bank houdt alles netjes bij. Elke transactie staat geregistreerd.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Bonnen zitten verspreid</h3>
              <p className="text-gray-600">In je mail, op je bureau, in een la. Overal behalve op één plek.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Je levert "wat je denkt dat alles is"</h3>
              <p className="text-gray-600">En hoopt dat het klopt. Maar je weet het eigenlijk niet zeker.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">De oplossing</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
            Slimvoice maakt van je banktransacties een duidelijke to-dolijst voor je bonnen.
          </h2>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white mt-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg">
              <span className="flex items-center gap-2">
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Upload je transacties
              </span>
              <svg className="w-6 h-6 hidden md:block opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="flex items-center gap-2">
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Koppel bonnen
              </span>
              <svg className="w-6 h-6 hidden md:block opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="flex items-center gap-2">
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Klaar!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="hoe-het-werkt" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Hoe het werkt</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              In vier simpele stappen
            </h2>
          </div>
          <div className="space-y-6">
            {[
              { num: 1, title: "Importeer je bank- en creditcardtransacties", desc: "Upload eenvoudig je transactieoverzicht. Slimvoice ondersteunt alle gangbare formaten." },
              { num: 2, title: "Slimvoice herkent welke bonnen waarschijnlijk passen", desc: "Slimme matching op basis van bedrag, datum en omschrijving." },
              { num: 3, title: "Bevestig of koppel handmatig", desc: "Controleer de suggesties en voeg ontbrekende bonnen toe." },
              { num: 4, title: "Download één pakket voor je accountant", desc: "Alles netjes gebundeld in één ZIP-bestand, klaar om te versturen." }
            ].map((step) => (
              <div key={step.num} className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-gray-200">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you see Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Wat je ziet</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Overzicht in plaats van chaos
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "📅", title: "Een tijdlijn per week", desc: "Bekijk je transacties chronologisch geordend" },
              { icon: "✅", title: "Welke transacties compleet zijn", desc: "Direct zien wat al in orde is" },
              { icon: "⚠️", title: "Welke nog een bon missen", desc: "Nooit meer iets over het hoofd zien" },
              { icon: "➖", title: "Wat geen bon nodig heeft", desc: "Markeer transacties die geen bewijs nodig hebben" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-6 bg-gray-50 rounded-2xl">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For who Section */}
      <section id="voor-wie" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Voor wie</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">
                Perfect voor jou als...
              </h2>
              <ul className="space-y-4">
                {[
                  "Ondernemers met een accountant",
                  "ZZP / kleine BV",
                  "Mensen die overzicht willen, geen boekhouding"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Wat het niet is</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">
                Slimvoice is geen...
              </h2>
              <ul className="space-y-4">
                {[
                  "Boekhoudpakket",
                  "Vervanging van je accountant",
                  "Ingewikkelde administratie"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Privacy Section */}
      <section id="veiligheid" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Veiligheid & Privacy</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Jouw data blijft van jou
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Volledige datascheiding</h3>
              <p className="text-gray-600">Elke gebruiker heeft een volledig gescheiden database. Jouw gegevens zijn nooit vermengd met die van anderen.</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% data-portabiliteit</h3>
              <p className="text-gray-600">Stop je met Slimvoice? Dan krijg je je volledige database met alle bonnen opgeleverd. Geen lock-in, geen gedoe.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Europese data residency
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-blue-600">OCR</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Mindee</p>
                  <p className="text-gray-500">Europees bedrijf voor data-extractie uit bonnen</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-blue-600">Auth</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Auth0</p>
                  <p className="text-gray-500">Authenticatie met Europese data residency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div>
                <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Export naar je accountant</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                  Eén ZIP-bestand, alles erin
                </h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Transacties + bonnen gekoppeld
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Direct in te lezen
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Geen gedoe meer met losse bestanden
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Rust in je administratie
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Weet altijd of je alles hebt aangeleverd.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors font-medium text-lg">
              Bekijk demo
            </a>
            <a href="https://app.slimvoice.nl" className="px-8 py-4 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors font-medium text-lg border border-blue-500">
              Meld je aan
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Slimvoice" className="h-20" />
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Slimvoice · Een product van{' '}
            <a href="https://www.goodgrid.nl" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              Goodgrid
            </a>
            , Nederlands IT ontwerpbureau
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
