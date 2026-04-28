import { useState } from "react"
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

const guideSteps = [
  { step: "01", emoji: "📖", title: "Читай про угрозу", desc: "Нажми на карточку угрозы и узнай, как именно работает эта схема — без сложных слов." },
  { step: "02", emoji: "🔍", title: "Учись распознавать", desc: "В каждом окне — список признаков. Запомни их, чтобы вовремя заметить опасность." },
  { step: "03", emoji: "🛡️", title: "Защищайся", desc: "Следуй советам из блока «Как защититься» — и ты будешь в безопасности." },
]

type Threat = typeof threats[0]

function ThreatModal({ threat, onClose }: { threat: Threat; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border shadow-2xl"
        style={{ borderTopColor: threat.color, borderTopWidth: 3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 border border-border flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Icon name="X" size={16} className="text-muted-foreground" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">{threat.emoji}</span>
            <div>
              <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-montserrat)", color: threat.color }}>
                {threat.title}
              </h2>
              <p className="text-muted-foreground text-sm font-mono">{threat.subtitle}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {/* How it works */}
            <div className="bg-background/60 rounded-2xl p-5 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Zap" size={15} style={{ color: threat.color }} />
                <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: threat.color }}>
                  Как работает
                </span>
              </div>
              <p className="text-foreground text-sm leading-relaxed">{threat.howItWorks}</p>
            </div>

            {/* Signs */}
            <div className="bg-background/60 rounded-2xl p-5 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Eye" size={15} style={{ color: threat.color }} />
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
            <div className="bg-background/60 rounded-2xl p-5 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="ShieldCheck" size={15} style={{ color: threat.color }} />
                <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: threat.color }}>
                  Как защититься
                </span>
              </div>
              <p className="text-foreground text-sm leading-relaxed">{threat.howToProtect}</p>
            </div>

            {/* Meme */}
            <div
              className="rounded-2xl px-5 py-4 border text-sm font-mono flex items-center gap-3"
              style={{ borderColor: threat.color + "44", background: threat.color + "11" }}
            >
              <span className="text-2xl">😂</span>
              <span className="text-muted-foreground italic">{threat.meme}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Index = () => {
  const [activeThreat, setActiveThreat] = useState<Threat | null>(null)

  return (
    <div className="w-full min-h-screen py-0 bg-background">
      {/* Modal */}
      {activeThreat && <ThreatModal threat={activeThreat} onClose={() => setActiveThreat(null)} />}

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

        {/* Threats — card grid */}
        <section id="threats" className="mx-4 md:mx-0 mb-8">
          <div className="text-center mb-6">
            <p className="text-muted-foreground text-sm font-mono">Нажми на карточку — откроется подробное окно</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {threats.map((threat, index) => (
              <button
                key={threat.id}
                onClick={() => setActiveThreat(threat)}
                className="relative rounded-3xl border border-border bg-card overflow-hidden text-left group cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                style={{
                  backgroundImage: `
                    linear-gradient(var(--border) 1px, transparent 1px),
                    linear-gradient(90deg, var(--border) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              >
                {/* Top color bar */}
                <div className="absolute top-0 left-0 w-full h-1" style={{ background: threat.color }} />

                <div className="p-7">
                  <div className="text-xs font-mono text-muted-foreground mb-3">Угроза #{index + 1}</div>
                  <div className="text-5xl mb-4">{threat.emoji}</div>
                  <h3
                    className="text-2xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-montserrat)", color: threat.color }}
                  >
                    {threat.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-mono mb-6">{threat.subtitle}</p>

                  <div
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)]"
                    style={{ color: threat.color, borderColor: threat.color + "55", background: threat.color + "11" }}
                  >
                    Узнать подробнее <Icon name="ArrowUpRight" size={13} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Quick tips */}
        <section
          className="relative rounded-4xl py-12 mx-4 md:mx-0 mb-8 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border"
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
                { text: "Уникальный пароль для каждого сайта", emoji: "🔑" },
                { text: "Двухфакторная аутентификация везде", emoji: "📱" },
                { text: "Проверяй адрес сайта перед вводом данных", emoji: "🔍" },
                { text: "Не верь «срочным» сообщениям о призах", emoji: "🚨" },
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
