import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import Icon from "@/components/ui/icon"

const threats = [
  {
    id: "phishing",
    emoji: "🎣",
    title: "Фишинг",
    subtitle: "Крадут данные через ложь",
    color: "hsl(220, 90%, 60%)",
    glow: "0 0 30px hsl(220, 90%, 60%, 0.4)",
    howItWorks: "Мошенники создают фейковые сайты — точь-в-точь как ВКонтакте, Сбербанк или игровой магазин. Ты вводишь логин и пароль — и они уходят к злоумышленнику.",
    signs: [
      "Странный адрес сайта (vkontaktee.ru вместо vk.com)",
      "Письмо с угрозой «Аккаунт заблокируют!»",
      "Просят срочно войти по ссылке из сообщения",
    ],
    howToProtect: "Всегда проверяй адрес сайта в строке браузера. Не переходи по ссылкам из сообщений незнакомцев. Включи двухфакторку.",
    meme: "Когда зашёл по ссылке из письма «ВЫ ВЫИГРАЛИ АЙФОН»... 💀",
  },
  {
    id: "hacking",
    emoji: "🔓",
    title: "Взлом аккаунтов",
    subtitle: "Захватывают твой профиль",
    color: "hsl(147, 87%, 52%)",
    glow: "0 0 30px hsl(147, 87%, 52%, 0.4)",
    howItWorks: "Хакеры используют слабые пароли (типа «12345» или «qwerty»), утечки данных с других сайтов или специальные программы-переборщики.",
    signs: [
      "В аккаунте появились странные действия",
      "Друзья говорят, что ты пишешь им странное",
      "Не можешь войти — пароль вдруг не подходит",
    ],
    howToProtect: "Используй длинные уникальные пароли для каждого сайта. Включи двухфакторную аутентификацию. Используй менеджер паролей.",
    meme: "Мой пароль: «пароль123». Хакер: 😂🎉",
  },
  {
    id: "fake-giveaway",
    emoji: "🎁",
    title: "Фейковые розыгрыши",
    subtitle: "Обещают призы — берут данные",
    color: "hsl(35, 100%, 55%)",
    glow: "0 0 30px hsl(35, 100%, 55%, 0.4)",
    howItWorks: "В соцсетях появляются посты «Подпишись и выиграй PlayStation / iPhone!». На самом деле цель — собрать твои данные, деньги «за доставку» или доступ к аккаунту.",
    signs: [
      "Победителей выбирают «прямо сейчас»",
      "Просят скинуть деньги за «доставку приза»",
      "Аккаунт организатора создан неделю назад",
    ],
    howToProtect: "Проверяй аккаунт организатора (дата создания, подписчики). Никогда не плати за «доставку приза». Настоящие розыгрыши не требуют данных карты.",
    meme: "«Ты 1000-й посетитель! Забери iPhone!» — Я и мои 999 других вкладок 💀",
  },
]

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        {/* Intro banner */}
        <section className="mx-4 md:mx-0 mt-6 mb-6 rounded-4xl bg-card border border-border px-8 py-10 flex flex-col md:flex-row items-center gap-6">
          <div className="text-6xl">🛡️</div>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-primary" style={{ fontFamily: "var(--font-montserrat)" }}>
              Интернет — крутое место. Но есть нюансы.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
              Каждый день миллионы школьников сталкиваются с мошенниками в сети, даже не замечая этого.
              Здесь мы разбираем 3 главные угрозы — просто, понятно и с мемами. Прочитай, пока не стало поздно 😎
            </p>
          </div>
        </section>

        {/* Threats */}
        <section id="threats" className="flex flex-col gap-8 mx-4 md:mx-0">
          {threats.map((threat, index) => (
            <div
              key={threat.id}
              className="relative rounded-4xl border border-border bg-card overflow-hidden"
              style={{
                backgroundImage: `
                  linear-gradient(var(--border) 1px, transparent 1px),
                  linear-gradient(90deg, var(--border) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            >
              {/* Glow accent */}
              <div
                className="absolute top-0 left-0 w-full h-1 opacity-80"
                style={{ background: threat.color }}
              />

              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl">{threat.emoji}</span>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-1">Угроза #{index + 1}</div>
                    <h2
                      className="text-3xl md:text-4xl font-bold"
                      style={{ fontFamily: "var(--font-montserrat)", color: threat.color }}
                    >
                      {threat.title}
                    </h2>
                    <p className="text-muted-foreground text-sm font-mono">{threat.subtitle}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* How it works */}
                  <div className="bg-background/50 rounded-2xl p-6 border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Zap" size={16} style={{ color: threat.color }} />
                      <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: threat.color }}>
                        Как работает
                      </span>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">{threat.howItWorks}</p>
                  </div>

                  {/* Signs */}
                  <div className="bg-background/50 rounded-2xl p-6 border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Eye" size={16} style={{ color: threat.color }} />
                      <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: threat.color }}>
                        Признаки
                      </span>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {threat.signs.map((sign, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="mt-1" style={{ color: threat.color }}>▸</span>
                          <span className="text-foreground">{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Protection */}
                  <div className="bg-background/50 rounded-2xl p-6 border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="ShieldCheck" size={16} style={{ color: threat.color }} />
                      <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: threat.color }}>
                        Как защититься
                      </span>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">{threat.howToProtect}</p>
                  </div>
                </div>

                {/* Meme block */}
                <div
                  className="mt-6 rounded-2xl px-6 py-4 border text-sm font-mono flex items-center gap-3"
                  style={{ borderColor: threat.color + "44", background: threat.color + "11" }}
                >
                  <span className="text-2xl">😂</span>
                  <span className="text-muted-foreground italic">{threat.meme}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Quick tips */}
        <section
          className="relative rounded-4xl py-12 mx-4 md:mx-0 mt-8 mb-8 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">+</div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">+</div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>

          <div className="px-8 md:px-16 text-center">
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
              Золотые правила безопасности
            </h2>
            <p className="text-muted-foreground text-sm mb-10 font-mono">Запомни — и будешь в безопасности 99% времени</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "Lock", text: "Уникальный пароль для каждого сайта", emoji: "🔑" },
                { icon: "Smartphone", text: "Двухфакторная аутентификация везде", emoji: "📱" },
                { icon: "Link", text: "Проверяй адрес сайта перед вводом данных", emoji: "🔍" },
                { icon: "AlertTriangle", text: "Не верь «срочным» сообщениям о призах", emoji: "🚨" },
              ].map((tip, i) => (
                <div key={i} className="bg-background/50 rounded-2xl p-6 border border-border flex flex-col items-center gap-3 text-center">
                  <span className="text-3xl">{tip.emoji}</span>
                  <p className="text-foreground text-sm leading-relaxed">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Index
