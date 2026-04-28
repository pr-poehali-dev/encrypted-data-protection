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
    memeImg: "https://cdn.poehali.dev/projects/40c783e4-8e7c-494d-b1c8-0c99a6416e31/files/66d58106-97de-465c-ad5f-7a41beedae2e.jpg",
    detail: {
      intro: "Фишинг — одна из самых распространённых угроз в интернете. Само слово происходит от английского fishing (рыбалка): мошенники забрасывают «удочку» и ждут, пока жертва сама клюнет. Только вместо рыбы они ловят твои пароли, номера карт и личные данные.",
      howDeep: [
        {
          title: "Как выглядит фишинговый сайт",
          text: "Такой сайт может быть неотличим от оригинала — тот же логотип, те же цвета, похожий адрес. Например: vk-login.ru, sberbank-online.net, steam-gift.com. Ключевая разница — в адресной строке. Настоящий адрес ВКонтакте всегда vk.com и ничто другое.",
        },
        {
          title: "Фишинг в сообщениях",
          text: "Часто мошенники пишут тебе «от имени» друга или службы поддержки: «Твой аккаунт взломан, срочно подтверди данные!» или «Ты выиграл приз, перейди по ссылке». Это паника — их главный инструмент. Когда человек в панике, он не думает критически.",
        },
        {
          title: "Email-фишинг",
          text: "На почту приходит письмо, якобы от банка или известного сервиса. Оно выглядит официально, но ссылка в нём ведёт на поддельный сайт. Мошенники умеют делать письма очень убедительными: правильные логотипы, «официальный» стиль текста.",
        },
      ],
      stats: "По данным исследований, каждый третий пользователь хотя бы раз переходил по фишинговой ссылке. Среди подростков этот показатель выше — из-за доверчивости и скорости кликов.",
      realCase: "Реальная история: школьник получил сообщение «от друга» со ссылкой на «крутую игру». Перешёл, ввёл логин от ВКонтакте. Через минуту его аккаунт уже рассылал спам всем контактам, а сам он не мог войти обратно.",
      protectDeep: [
        "Всегда смотри на адрес сайта — он должен точно совпадать с официальным",
        "Никогда не переходи по ссылкам из сообщений, даже от «друзей» — аккаунт друга мог быть взломан",
        "Включи двухфакторную аутентификацию: даже если пароль утёк, без кода из смс в аккаунт не войти",
        "Используй антивирус с защитой от фишинга — он умеет блокировать подозрительные сайты автоматически",
        "Если что-то кажется подозрительным — это повод остановиться и подумать, а не кликать быстрее",
      ],
    },
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
    memeImg: "https://cdn.poehali.dev/projects/40c783e4-8e7c-494d-b1c8-0c99a6416e31/files/ed8d2f91-0e38-47f9-b1a1-e6196f811642.jpg",
    detail: {
      intro: "Взлом аккаунтов — это несанкционированный доступ к твоему профилю в соцсети, игре, почте или другом сервисе. После взлома мошенник может писать от твоего имени, красть деньги, шантажировать или просто уничтожить всё что ты годами собирал.",
      howDeep: [
        {
          title: "Перебор паролей (брутфорс)",
          text: "Специальная программа автоматически перебирает тысячи комбинаций в секунду. Пароль «12345» будет взломан за долю секунды. «Qwerty2007» — за несколько минут. Пароль «K#9mPz$vL2» программа будет перебирать тысячи лет.",
        },
        {
          title: "Утечки баз данных",
          text: "Когда какой-то сайт взламывают, в сеть утекают миллионы логинов и паролей. Если ты используешь один пароль везде — после одной утечки под угрозой все твои аккаунты. Хакеры продают такие базы и используют их для автоматических атак.",
        },
        {
          title: "Социальная инженерия",
          text: "Иногда пароль не взламывают — его просто «выманивают». Мошенник притворяется другом, техподдержкой или организатором конкурса и просит тебя самого сообщить код или пароль. Никакая настоящая служба поддержки никогда не попросит твой пароль.",
        },
      ],
      stats: "Пароль «123456» используют более 23 миллионов пользователей по всему миру. Это самый популярный пароль несколько лет подряд — и самый опасный.",
      realCase: "Реальная история: геймер три года прокачивал аккаунт в популярной игре. Использовал один и тот же пароль везде. После утечки с небольшого форума хакер вошёл в игровой аккаунт и продал все предметы. Три года работы — за ноль.",
      protectDeep: [
        "Для каждого сайта — уникальный пароль. Используй менеджер паролей (например, Bitwarden — он бесплатный)",
        "Хороший пароль: минимум 12 символов, буквы разного регистра, цифры и спецсимволы",
        "Включи двухфакторную аутентификацию везде где можно — это самая эффективная защита",
        "Периодически проверяй свою почту на сайте haveibeenpwned.com — он покажет, не утекли ли твои данные",
        "Никому не говори свои пароли — даже друзьям. Даже «техподдержке»",
      ],
    },
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
    memeImg: "https://cdn.poehali.dev/projects/40c783e4-8e7c-494d-b1c8-0c99a6416e31/files/11fa3b72-914b-43b8-a208-0df3400eb781.jpg",
    detail: {
      intro: "Фейковые розыгрыши — один из самых «вкусных» видов мошенничества, потому что они играют на желании получить что-то бесплатно. Бесплатный iPhone, PlayStation, деньги на карту — звучит заманчиво. Но за каждым таким предложением скрывается ловушка.",
      howDeep: [
        {
          title: "Схема «оплати доставку»",
          text: "Тебе «везёт» — ты выиграл! Осталось только оплатить доставку — 500 рублей. Ты платишь. Приз не приходит. Деньги исчезли. Иногда мошенники просят платить несколько раз: сначала за доставку, потом за «таможню», потом за «страховку». Это и есть их доход.",
        },
        {
          title: "Схема кражи аккаунта",
          text: "Для «получения приза» нужно войти на специальный сайт через ВКонтакте или другую соцсеть. Это либо фишинговый сайт, либо запрос доступа к твоему аккаунту. После авторизации мошенники получают контроль над твоим профилем.",
        },
        {
          title: "Схема сбора данных",
          text: "Чтобы «забрать приз», нужно заполнить форму: имя, телефон, адрес, иногда данные карты. Эти данные потом продают или используют для других мошеннических схем — например, звонков от «службы безопасности банка».",
        },
      ],
      stats: "По статистике, подростки 13–17 лет — самая частая аудитория фейковых розыгрышей. Мошенники специально таргетируют молодёжные платформы: TikTok, ВКонтакте, Telegram.",
      realCase: "Реальная история: девочка увидела в TikTok аккаунт «официального» розыгрыша от популярного блогера. Аккаунт был создан 5 дней назад, но выглядел убедительно. Она «выиграла» AirPods, оплатила «доставку» 800 рублей. Деньги ушли — аккаунт исчез.",
      protectDeep: [
        "Проверяй дату создания аккаунта организатора — настоящие бренды существуют годами",
        "Настоящий розыгрыш никогда не просит денег за доставку или «обработку»",
        "Загугли название розыгрыша + слово «развод» — часто уже есть разоблачения",
        "Официальные розыгрыши проводятся на верифицированных аккаунтах с галочкой",
        "Если тебе написали в личку «ты выиграл» — почти наверняка это обман",
      ],
    },
  },
]

const tips = [
  {
    emoji: "🔑",
    text: "Уникальный пароль для каждого сайта",
    why: "Самая частая причина взломов — один пароль на всё",
    explanation: "Когда взламывают один сайт, хакеры получают список паролей и сразу проверяют их на всех популярных сервисах. Если ты используешь один пароль везде — достаточно одной утечки, чтобы потерять всё. Уникальный пароль на каждом сайте делает такую атаку бессмысленной.",
    howTo: [
      "Установи бесплатный менеджер паролей — например, Bitwarden или KeePass",
      "Он сам генерирует сложные пароли и запоминает их — тебе нужно помнить только один мастер-пароль",
      "Начни с самых важных аккаунтов: почта, соцсети, банк",
      "Никогда не сохраняй пароли в заметках или в обычном текстовом файле",
    ],
    fact: "Среднестатистический пользователь имеет 100+ аккаунтов. Запомнить уникальные пароли для всех без менеджера — невозможно.",
  },
  {
    emoji: "📱",
    text: "Двухфакторная аутентификация везде",
    why: "Даже зная пароль, хакер не войдёт без второго подтверждения",
    explanation: "Двухфакторная аутентификация (2FA) — это дополнительный слой защиты. После ввода пароля сервис запрашивает одноразовый код из смс или приложения. Даже если мошенник узнал твой пароль — без доступа к твоему телефону он всё равно не войдёт в аккаунт.",
    howTo: [
      "Зайди в настройки безопасности ВКонтакте, почты, игровых платформ",
      "Найди раздел «Двухфакторная аутентификация» или «Подтверждение входа»",
      "Привяжи номер телефона или установи приложение-аутентификатор (Google Authenticator, Яндекс Ключ)",
      "Включи 2FA хотя бы на почте — это самый важный аккаунт, через который восстанавливаются все остальные",
    ],
    fact: "По данным Microsoft, включение двухфакторки блокирует 99,9% автоматизированных атак на аккаунты.",
  },
  {
    emoji: "🔍",
    text: "Проверяй адрес сайта перед вводом данных",
    why: "Фишинговые сайты выглядят идентично настоящим — разница только в адресе",
    explanation: "Мошенники тратят часы на создание копий популярных сайтов — один в один. Единственное, что они не могут подделать — это адрес в строке браузера. Настоящий сайт ВКонтакте всегда vk.com. Не vk-login.ru, не vkontakte.net, не vk.com.login-secure.ru — только vk.com.",
    howTo: [
      "Перед вводом логина или пароля всегда смотри на адресную строку браузера",
      "Проверяй наличие замочка (https) — это базовая безопасность соединения",
      "Если перешёл по ссылке — сравни адрес с официальным сайтом",
      "Сохрани важные сайты в закладки и заходи только через них",
      "При малейших сомнениях — закрой вкладку и открой сайт вручную",
    ],
    fact: "Большинство фишинговых сайтов существуют меньше 24 часов — мошенники создают их, собирают данные и исчезают.",
  },
  {
    emoji: "🚨",
    text: "Не верь «срочным» сообщениям о призах",
    why: "Срочность и жадность — главные инструменты мошенников",
    explanation: "«Ты выиграл!», «Аккаунт заблокируют через час!», «Только сегодня!» — всё это создаёт панику и спешку. Когда человек торопится, он не думает критически. Мошенники специально создают это давление, чтобы ты не успел остановиться и проверить информацию.",
    howTo: [
      "Если сообщение требует немедленных действий — это красный флаг, притормози",
      "Настоящие призы не исчезают через 5 минут — у тебя будет время всё проверить",
      "Загугли название розыгрыша или компании + слово «мошенники» или «развод»",
      "Спроси взрослого или друга — взгляд со стороны помогает увидеть обман",
      "Помни: бесплатный сыр только в мышеловке. Если что-то кажется слишком хорошим — оно таковым и является",
    ],
    fact: "Исследования показывают: люди в состоянии спешки в 3 раза чаще совершают ошибки при оценке информации в интернете.",
  },
]

type Threat = typeof threats[0]
type Tip = typeof tips[0]

function ThreatModal({ threat, onClose }: { threat: Threat; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border shadow-2xl"
        style={{ borderTopColor: threat.color, borderTopWidth: 3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 border border-border flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Icon name="X" size={16} className="text-muted-foreground" />
        </button>

        <div className="p-8">
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
            <div className="bg-background/60 rounded-2xl p-5 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Zap" size={15} style={{ color: threat.color }} />
                <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: threat.color }}>Как работает</span>
              </div>
              <p className="text-foreground text-sm leading-relaxed">{threat.howItWorks}</p>
            </div>

            <div className="bg-background/60 rounded-2xl p-5 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Eye" size={15} style={{ color: threat.color }} />
                <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: threat.color }}>Признаки</span>
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

            <div className="bg-background/60 rounded-2xl p-5 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="ShieldCheck" size={15} style={{ color: threat.color }} />
                <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: threat.color }}>Как защититься</span>
              </div>
              <p className="text-foreground text-sm leading-relaxed">{threat.howToProtect}</p>
            </div>

            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: threat.color + "44" }}>
              <img src={threat.memeImg} alt="мем" className="w-full object-cover max-h-64" />
              <div
                className="px-5 py-3 text-sm font-mono flex items-center gap-3"
                style={{ background: threat.color + "11" }}
              >
                <span className="text-xl">😂</span>
                <span className="text-muted-foreground italic">{threat.meme}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Index = () => {
  const [activeThreat, setActiveThreat] = useState<Threat | null>(null)
  const [activeTip, setActiveTip] = useState<Tip | null>(null)

  return (
    <div className="w-full min-h-screen py-0 bg-background">
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

        {/* Threat cards — краткое описание, открывают модалку */}
        <section id="threats" className="mx-4 md:mx-0 mb-12">
          <div className="text-center mb-6">
            <p className="text-muted-foreground text-sm font-mono">Нажми на карточку — откроется краткое описание</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {threats.map((threat, index) => (
              <button
                key={threat.id}
                onClick={() => setActiveThreat(threat)}
                className="relative rounded-3xl border border-border bg-card overflow-hidden text-left group cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                style={{
                  backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1" style={{ background: threat.color }} />
                <div className="p-7">
                  <div className="text-xs font-mono text-muted-foreground mb-3">Угроза #{index + 1}</div>
                  <div className="text-5xl mb-4">{threat.emoji}</div>
                  <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-montserrat)", color: threat.color }}>
                    {threat.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-mono mb-6">{threat.subtitle}</p>
                  <div
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)]"
                    style={{ color: threat.color, borderColor: threat.color + "55", background: threat.color + "11" }}
                  >
                    Краткое описание <Icon name="ArrowUpRight" size={13} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Detailed threat sections */}
        <section className="flex flex-col gap-16 mx-4 md:mx-0 mb-12">
          {threats.map((threat, index) => (
            <div key={threat.id} id={threat.id}>
              {/* Section header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: threat.color + "22", border: `1.5px solid ${threat.color}55` }}
                >
                  {threat.emoji}
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground mb-0.5">Подробный разбор · Угроза #{index + 1}</div>
                  <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-montserrat)", color: threat.color }}>
                    {threat.title}
                  </h2>
                </div>
              </div>

              {/* Intro */}
              <p className="text-foreground/80 text-base leading-relaxed mb-8 max-w-3xl">
                {threat.detail.intro}
              </p>

              {/* Deep dive cards */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="text-xs font-mono font-bold uppercase tracking-widest mb-2" style={{ color: threat.color }}>
                  Как это происходит на самом деле
                </div>
                {threat.detail.howDeep.map((item, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-card p-6 flex gap-5">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5"
                      style={{ background: threat.color + "22", color: threat.color }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats + Real case in 2 cols */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="BarChart2" size={15} style={{ color: threat.color }} />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: threat.color }}>Статистика</span>
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{threat.detail.stats}</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="BookOpen" size={15} style={{ color: threat.color }} />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: threat.color }}>Реальный случай</span>
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{threat.detail.realCase}</p>
                </div>
              </div>

              {/* Protection checklist */}
              <div
                className="rounded-2xl p-6 border"
                style={{ borderColor: threat.color + "44", background: threat.color + "0a" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="ShieldCheck" size={16} style={{ color: threat.color }} />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: threat.color }}>
                    Как защититься — чеклист
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
                  {threat.detail.protectDeep.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: threat.color + "33", color: threat.color }}
                      >
                        <Icon name="Check" size={11} />
                      </div>
                      <span className="text-foreground leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meme */}
              <div className="mt-4 rounded-2xl overflow-hidden border" style={{ borderColor: threat.color + "33" }}>
                <img src={threat.memeImg} alt="мем" className="w-full object-cover max-h-72" />
                <div
                  className="px-5 py-3 text-sm font-mono flex items-center gap-3"
                  style={{ background: threat.color + "08" }}
                >
                  <span className="text-xl">😂</span>
                  <span className="text-muted-foreground italic">{threat.meme}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Quick tips */}
        <section
          className="relative rounded-4xl py-12 mx-4 md:mx-0 mb-8 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
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
            <p className="text-muted-foreground text-sm mb-10 font-mono">Нажми на карточку — узнай подробнее</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tips.map((tip, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTip(tip)}
                  className="bg-background/50 rounded-2xl p-6 border border-border flex flex-col items-center gap-3 text-center cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] group"
                >
                  <span className="text-3xl">{tip.emoji}</span>
                  <p className="text-foreground text-sm leading-relaxed">{tip.text}</p>
                  <span className="text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">Подробнее →</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tip modal */}
        {activeTip && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setActiveTip(null)}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <div
              className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-card border-t-[3px] border-border shadow-2xl"
              style={{ borderTopColor: "hsl(var(--primary))" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveTip(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 border border-border flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Icon name="X" size={16} className="text-muted-foreground" />
              </button>
              <div className="p-8">
                <div className="text-5xl mb-4">{activeTip.emoji}</div>
                <h3 className="text-2xl font-bold text-primary mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {activeTip.text}
                </h3>
                <p className="text-muted-foreground text-sm font-mono mb-6">{activeTip.why}</p>

                <div className="flex flex-col gap-4">
                  <div className="bg-background/60 rounded-2xl p-5 border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Info" size={14} className="text-primary" />
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">Что это значит</span>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">{activeTip.explanation}</p>
                  </div>

                  <div className="bg-background/60 rounded-2xl p-5 border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Lightbulb" size={14} className="text-primary" />
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">Как сделать прямо сейчас</span>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {activeTip.howTo.map((step, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon name="Check" size={11} />
                          </div>
                          <span className="text-foreground leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl px-5 py-4 border border-primary/20 bg-primary/5 text-sm font-mono flex items-center gap-3">
                    <span className="text-2xl">💡</span>
                    <span className="text-muted-foreground italic">{activeTip.fact}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Index