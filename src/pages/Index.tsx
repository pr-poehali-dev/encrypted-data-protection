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
  const [activeTip, setActiveTip] = useState<Tip | null>(null)
  const [showTildaCode, setShowTildaCode] = useState(false)

  const tildaCode = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>КиберЩиток</title>
<script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js"></script>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:#000;color:#fff;font-family:'IBM Plex Mono',monospace}
  .kb-wrap{max-width:1100px;margin:0 auto;padding:40px 20px}
  .kb-hero{position:relative;height:600px;overflow:hidden;margin-bottom:0}
  .kb-hero spline-viewer{position:absolute;inset:0;width:100%;height:100%}
  .kb-hero-text{position:absolute;top:50%;left:40px;transform:translateY(-50%);z-index:10}
  .kb-hero-text h1{font-size:clamp(48px,8vw,96px);font-weight:800;letter-spacing:4px;line-height:1.1;color:#000;-webkit-text-stroke:4px #fff;paint-order:stroke fill}
  .kb-hero-text p{color:#fff;font-size:13px;letter-spacing:3px;margin-top:12px}
  .kb-hero-nav{position:absolute;top:20px;left:40px;right:40px;display:flex;align-items:center;justify-content:space-between;z-index:20}
  .kb-logo{font-size:18px;font-weight:800;letter-spacing:4px;color:#fff}
  .kb-logo span{color:#00cfff}
  .kb-nav-btn{background:#00cfff;color:#000;border:none;border-radius:999px;padding:10px 22px;font-size:13px;font-weight:700;cursor:pointer;letter-spacing:1px;transition:transform .2s,box-shadow .2s}
  .kb-nav-btn:hover{transform:scale(1.05);box-shadow:0 0 20px rgba(0,207,255,.5)}
  .kb-intro{background:#111;border:1px solid #222;border-radius:24px;padding:32px;display:flex;gap:20px;align-items:flex-start;margin-bottom:32px}
  .kb-intro h2{color:#00cfff;font-size:20px;margin-bottom:8px}
  .kb-intro p{color:#aaa;font-size:13px;line-height:1.7}
  .kb-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-bottom:48px}
  .kb-card{background:#111;border:1px solid #222;border-radius:20px;padding:28px;cursor:pointer;transition:transform .2s,box-shadow .2s;position:relative;overflow:hidden}
  .kb-card:hover{transform:scale(1.03);box-shadow:0 0 30px rgba(0,207,255,.15)}
  .kb-card-bar{position:absolute;top:0;left:0;right:0;height:3px}
  .kb-card-num{font-size:11px;color:#666;margin-bottom:10px;letter-spacing:2px}
  .kb-card-emoji{font-size:44px;margin-bottom:12px}
  .kb-card-title{font-size:22px;font-weight:800;margin-bottom:4px}
  .kb-card-sub{font-size:12px;color:#666;margin-bottom:20px}
  .kb-card-btn{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:700;letter-spacing:2px;padding:8px 16px;border-radius:999px;border:1px solid;text-transform:uppercase}
  .kb-section{margin-bottom:60px}
  .kb-section-head{display:flex;align-items:center;gap:16px;margin-bottom:24px}
  .kb-section-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0}
  .kb-section-num{font-size:11px;color:#666;letter-spacing:2px;margin-bottom:4px}
  .kb-section-title{font-size:32px;font-weight:800}
  .kb-section-intro{color:#aaa;font-size:14px;line-height:1.8;margin-bottom:24px;max-width:750px}
  .kb-label{display:flex;align-items:center;gap:8px;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin-bottom:12px}
  .kb-block{background:#111;border:1px solid #222;border-radius:18px;padding:22px;margin-bottom:12px}
  .kb-block h4{font-size:15px;font-weight:700;margin-bottom:8px;color:#fff}
  .kb-block p,.kb-block li{font-size:13px;color:#aaa;line-height:1.7}
  .kb-block ul{list-style:none;display:flex;flex-direction:column;gap:8px}
  .kb-block ul li::before{content:"▸ ";color:inherit}
  .kb-grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:12px}
  .kb-checklist{border-radius:18px;padding:22px;margin-bottom:12px}
  .kb-checklist ul{list-style:none;display:flex;flex-direction:column;gap:10px}
  .kb-checklist li{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:#e0e0e0;line-height:1.6}
  .kb-check{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;font-size:11px}
  .kb-meme{border-radius:14px;padding:14px 18px;font-size:13px;font-style:italic;color:#aaa;display:flex;align-items:center;gap:10px;margin-top:8px}
  .kb-disclaimer{background:#111;border:1px solid #222;border-radius:20px;padding:28px;display:flex;gap:16px;align-items:flex-start;margin-bottom:32px}
  .kb-disclaimer h3{font-size:15px;font-weight:700;margin-bottom:6px}
  .kb-disclaimer p{font-size:13px;color:#aaa;line-height:1.7}
  .kb-tips-title{text-align:center;margin-bottom:8px;font-size:26px;font-weight:800}
  .kb-tips-sub{text-align:center;color:#666;font-size:12px;margin-bottom:28px;letter-spacing:2px}
  .kb-tips-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px}
  .kb-tip{background:#111;border:1px solid #222;border-radius:18px;padding:22px;text-align:center;cursor:pointer;transition:transform .2s,border-color .3s}
  .kb-tip:hover{transform:scale(1.04);border-color:#00cfff55}
  .kb-tip-emoji{font-size:30px;margin-bottom:10px}
  .kb-tip p{font-size:13px;color:#e0e0e0;line-height:1.5}
  .kb-modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.75);backdrop-filter:blur(6px);z-index:1000;align-items:center;justify-content:center;padding:16px}
  .kb-modal-overlay.open{display:flex}
  .kb-modal{background:#111;border-radius:24px;max-width:640px;width:100%;max-height:90vh;overflow-y:auto;position:relative;padding:36px}
  .kb-modal-close{position:absolute;top:14px;right:14px;background:#000;border:1px solid #333;border-radius:50%;width:34px;height:34px;cursor:pointer;color:#aaa;font-size:18px;display:flex;align-items:center;justify-content:center}
  .kb-modal h2{font-size:28px;font-weight:800;margin-bottom:4px}
  .kb-modal-sub{font-size:12px;color:#666;margin-bottom:24px;letter-spacing:2px}
  .kb-footer{border-top:1px solid #222;padding:40px 0 20px;text-align:center}
  .kb-footer-title{font-size:36px;font-weight:700;line-height:1.3;margin-bottom:20px}
  .kb-footer p{font-size:13px;color:#aaa;line-height:1.7;margin-bottom:8px}
  .kb-authors{display:flex;flex-wrap:wrap;gap:16px;justify-content:center;margin:32px 0}
  .kb-author{background:#111;border:1px solid #222;border-radius:18px;padding:18px 28px;display:flex;align-items:center;gap:14px;min-width:220px}
  .kb-author-avatar{width:48px;height:48px;border-radius:50%;background:#00cfff18;border:2px solid #00cfff33;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
  .kb-author-name{font-size:16px;font-weight:700}
  .kb-author-role{font-size:11px;color:#00cfff;letter-spacing:2px;text-transform:uppercase}
  .kb-author-grade{font-size:11px;color:#666}
  .kb-copy{font-size:12px;color:#444;margin-top:24px}
</style>
</head>
<body>
<div class="kb-wrap">

  <!-- HERO -->
  <div class="kb-hero">
    <div class="kb-hero-nav">
      <div class="kb-logo">КИБЕР<span>ЩИТОК</span></div>
      <button class="kb-nav-btn" onclick="document.getElementById('threats').scrollIntoView({behavior:'smooth'})">Узнать угрозы ↗</button>
    </div>
    <spline-viewer url="https://prod.spline.design/l8gr6AhxxCqDIdBx/scene.splinecode"></spline-viewer>
    <div class="kb-hero-text">
      <h1>КИБЕР<br>ЩИТОК</h1>
      <p>УЧИМСЯ ЗАЩИЩАТЬСЯ<br>В ИНТЕРНЕТЕ — ПРОСТО И КРУТО</p>
    </div>
  </div>

  <!-- INTRO -->
  <div class="kb-intro">
    <div style="font-size:48px">🛡️</div>
    <div>
      <h2>Интернет — крутое место. Но есть нюансы.</h2>
      <p>Каждый день миллионы школьников сталкиваются с мошенниками в сети, даже не замечая этого. Здесь мы разбираем 3 главные угрозы — просто, понятно и с мемами. Прочитай, пока не стало поздно 😎</p>
    </div>
  </div>

  <!-- CARDS -->
  <div style="text-align:center;margin-bottom:16px;font-size:12px;color:#555;letter-spacing:2px">НАЖМИ НА КАРТОЧКУ — КРАТКОЕ ОПИСАНИЕ</div>
  <div class="kb-cards">
    <div class="kb-card" onclick="openModal('m1')">
      <div class="kb-card-bar" style="background:hsl(220,90%,60%)"></div>
      <div class="kb-card-num">УГРОЗА #1</div>
      <div class="kb-card-emoji">🎣</div>
      <div class="kb-card-title" style="color:hsl(220,90%,60%)">Фишинг</div>
      <div class="kb-card-sub">Крадут данные через ложь</div>
      <div class="kb-card-btn" style="color:hsl(220,90%,60%);border-color:hsl(220,90%,60%,0.4);background:hsl(220,90%,60%,0.1)">Краткое описание ↗</div>
    </div>
    <div class="kb-card" onclick="openModal('m2')">
      <div class="kb-card-bar" style="background:hsl(147,87%,52%)"></div>
      <div class="kb-card-num">УГРОЗА #2</div>
      <div class="kb-card-emoji">🔓</div>
      <div class="kb-card-title" style="color:hsl(147,87%,52%)">Взлом аккаунтов</div>
      <div class="kb-card-sub">Захватывают твой профиль</div>
      <div class="kb-card-btn" style="color:hsl(147,87%,52%);border-color:hsl(147,87%,52%,0.4);background:hsl(147,87%,52%,0.1)">Краткое описание ↗</div>
    </div>
    <div class="kb-card" onclick="openModal('m3')">
      <div class="kb-card-bar" style="background:hsl(35,100%,55%)"></div>
      <div class="kb-card-num">УГРОЗА #3</div>
      <div class="kb-card-emoji">🎁</div>
      <div class="kb-card-title" style="color:hsl(35,100%,55%)">Фейковые розыгрыши</div>
      <div class="kb-card-sub">Обещают призы — берут данные</div>
      <div class="kb-card-btn" style="color:hsl(35,100%,55%);border-color:hsl(35,100%,55%,0.4);background:hsl(35,100%,55%,0.1)">Краткое описание ↗</div>
    </div>
  </div>

  <!-- SECTION 1: ФИШИНГ -->
  <div class="kb-section" id="phishing">
    <div class="kb-section-head">
      <div class="kb-section-icon" style="background:hsl(220,90%,60%,0.15);border:1.5px solid hsl(220,90%,60%,0.3)">🎣</div>
      <div><div class="kb-section-num">ПОДРОБНЫЙ РАЗБОР · УГРОЗА #1</div><div class="kb-section-title" style="color:hsl(220,90%,60%)">Фишинг</div></div>
    </div>
    <p class="kb-section-intro">Фишинг — одна из самых распространённых угроз в интернете. Само слово происходит от английского fishing (рыбалка): мошенники забрасывают «удочку» и ждут, пока жертва сама клюнет. Только вместо рыбы они ловят твои пароли, номера карт и личные данные.</p>
    <div class="kb-label" style="color:hsl(220,90%,60%)">⚡ КАК ЭТО ПРОИСХОДИТ НА САМОМ ДЕЛЕ</div>
    <div class="kb-block"><div style="width:28px;height:28px;border-radius:50%;background:hsl(220,90%,60%,0.2);color:hsl(220,90%,60%);display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;margin-bottom:10px">1</div><h4>Как выглядит фишинговый сайт</h4><p>Такой сайт может быть неотличим от оригинала — тот же логотип, те же цвета, похожий адрес. Например: vk-login.ru, sberbank-online.net, steam-gift.com. Ключевая разница — в адресной строке. Настоящий адрес ВКонтакте всегда vk.com.</p></div>
    <div class="kb-block"><div style="width:28px;height:28px;border-radius:50%;background:hsl(220,90%,60%,0.2);color:hsl(220,90%,60%);display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;margin-bottom:10px">2</div><h4>Фишинг в сообщениях</h4><p>Часто мошенники пишут тебе «от имени» друга или службы поддержки: «Твой аккаунт взломан, срочно подтверди данные!». Это паника — их главный инструмент.</p></div>
    <div class="kb-block"><div style="width:28px;height:28px;border-radius:50%;background:hsl(220,90%,60%,0.2);color:hsl(220,90%,60%);display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;margin-bottom:10px">3</div><h4>Email-фишинг</h4><p>На почту приходит письмо якобы от банка. Оно выглядит официально, но ссылка ведёт на поддельный сайт.</p></div>
    <div class="kb-grid2">
      <div class="kb-block"><div class="kb-label" style="color:hsl(220,90%,60%)">📊 СТАТИСТИКА</div><p>Каждый третий пользователь хотя бы раз переходил по фишинговой ссылке. Среди подростков показатель выше.</p></div>
      <div class="kb-block"><div class="kb-label" style="color:hsl(220,90%,60%)">📖 РЕАЛЬНЫЙ СЛУЧАЙ</div><p>Школьник получил сообщение «от друга» со ссылкой на «крутую игру». Ввёл логин от ВКонтакте — и потерял аккаунт.</p></div>
    </div>
    <div class="kb-checklist" style="border:1px solid hsl(220,90%,60%,0.3);background:hsl(220,90%,60%,0.05)">
      <div class="kb-label" style="color:hsl(220,90%,60%)">✅ КАК ЗАЩИТИТЬСЯ — ЧЕКЛИСТ</div>
      <ul>
        <li><div class="kb-check" style="background:hsl(220,90%,60%,0.2);color:hsl(220,90%,60%)">✓</div>Всегда смотри на адрес сайта — он должен точно совпадать с официальным</li>
        <li><div class="kb-check" style="background:hsl(220,90%,60%,0.2);color:hsl(220,90%,60%)">✓</div>Никогда не переходи по ссылкам из сообщений, даже от «друзей»</li>
        <li><div class="kb-check" style="background:hsl(220,90%,60%,0.2);color:hsl(220,90%,60%)">✓</div>Включи двухфакторную аутентификацию</li>
        <li><div class="kb-check" style="background:hsl(220,90%,60%,0.2);color:hsl(220,90%,60%)">✓</div>Используй антивирус с защитой от фишинга</li>
        <li><div class="kb-check" style="background:hsl(220,90%,60%,0.2);color:hsl(220,90%,60%)">✓</div>Если что-то кажется подозрительным — остановись и подумай</li>
      </ul>
    </div>
    <div class="kb-meme" style="border:1px solid hsl(220,90%,60%,0.2);background:hsl(220,90%,60%,0.05)"><span style="font-size:22px">😂</span>Когда зашёл по ссылке из письма «ВЫ ВЫИГРАЛИ АЙФОН»... 💀</div>
  </div>

  <!-- SECTION 2: ВЗЛОМ -->
  <div class="kb-section" id="hacking">
    <div class="kb-section-head">
      <div class="kb-section-icon" style="background:hsl(147,87%,52%,0.15);border:1.5px solid hsl(147,87%,52%,0.3)">🔓</div>
      <div><div class="kb-section-num">ПОДРОБНЫЙ РАЗБОР · УГРОЗА #2</div><div class="kb-section-title" style="color:hsl(147,87%,52%)">Взлом аккаунтов</div></div>
    </div>
    <p class="kb-section-intro">Взлом аккаунтов — несанкционированный доступ к твоему профилю. После взлома мошенник может писать от твоего имени, красть деньги, шантажировать или уничтожить всё что ты годами собирал.</p>
    <div class="kb-label" style="color:hsl(147,87%,52%)">⚡ КАК ЭТО ПРОИСХОДИТ НА САМОМ ДЕЛЕ</div>
    <div class="kb-block"><div style="width:28px;height:28px;border-radius:50%;background:hsl(147,87%,52%,0.2);color:hsl(147,87%,52%);display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;margin-bottom:10px">1</div><h4>Перебор паролей (брутфорс)</h4><p>Специальная программа перебирает тысячи комбинаций в секунду. Пароль «12345» взломают мгновенно. «K#9mPz$vL2» — тысячи лет.</p></div>
    <div class="kb-block"><div style="width:28px;height:28px;border-radius:50%;background:hsl(147,87%,52%,0.2);color:hsl(147,87%,52%);display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;margin-bottom:10px">2</div><h4>Утечки баз данных</h4><p>Когда сайт взламывают, в сеть утекают миллионы паролей. Если ты используешь один пароль везде — одной утечки достаточно.</p></div>
    <div class="kb-block"><div style="width:28px;height:28px;border-radius:50%;background:hsl(147,87%,52%,0.2);color:hsl(147,87%,52%);display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;margin-bottom:10px">3</div><h4>Социальная инженерия</h4><p>Мошенник притворяется другом или техподдержкой и просит сообщить пароль. Никакая настоящая служба поддержки никогда не попросит твой пароль.</p></div>
    <div class="kb-grid2">
      <div class="kb-block"><div class="kb-label" style="color:hsl(147,87%,52%)">📊 СТАТИСТИКА</div><p>Пароль «123456» используют более 23 миллионов пользователей. Самый популярный — и самый опасный.</p></div>
      <div class="kb-block"><div class="kb-label" style="color:hsl(147,87%,52%)">📖 РЕАЛЬНЫЙ СЛУЧАЙ</div><p>Геймер три года прокачивал аккаунт. Использовал один пароль везде. Хакер продал все предметы. Три года — за ноль.</p></div>
    </div>
    <div class="kb-checklist" style="border:1px solid hsl(147,87%,52%,0.3);background:hsl(147,87%,52%,0.05)">
      <div class="kb-label" style="color:hsl(147,87%,52%)">✅ КАК ЗАЩИТИТЬСЯ — ЧЕКЛИСТ</div>
      <ul>
        <li><div class="kb-check" style="background:hsl(147,87%,52%,0.2);color:hsl(147,87%,52%)">✓</div>Уникальный пароль для каждого сайта. Используй Bitwarden — бесплатный менеджер паролей</li>
        <li><div class="kb-check" style="background:hsl(147,87%,52%,0.2);color:hsl(147,87%,52%)">✓</div>Минимум 12 символов, буквы разного регистра, цифры и спецсимволы</li>
        <li><div class="kb-check" style="background:hsl(147,87%,52%,0.2);color:hsl(147,87%,52%)">✓</div>Включи двухфакторную аутентификацию везде где можно</li>
        <li><div class="kb-check" style="background:hsl(147,87%,52%,0.2);color:hsl(147,87%,52%)">✓</div>Проверь свою почту на haveibeenpwned.com</li>
        <li><div class="kb-check" style="background:hsl(147,87%,52%,0.2);color:hsl(147,87%,52%)">✓</div>Никому не говори пароли — даже «техподдержке»</li>
      </ul>
    </div>
    <div class="kb-meme" style="border:1px solid hsl(147,87%,52%,0.2);background:hsl(147,87%,52%,0.05)"><span style="font-size:22px">😂</span>Мой пароль: «пароль123». Хакер: 😂🎉</div>
  </div>

  <!-- SECTION 3: РОЗЫГРЫШИ -->
  <div class="kb-section" id="giveaway">
    <div class="kb-section-head">
      <div class="kb-section-icon" style="background:hsl(35,100%,55%,0.15);border:1.5px solid hsl(35,100%,55%,0.3)">🎁</div>
      <div><div class="kb-section-num">ПОДРОБНЫЙ РАЗБОР · УГРОЗА #3</div><div class="kb-section-title" style="color:hsl(35,100%,55%)">Фейковые розыгрыши</div></div>
    </div>
    <p class="kb-section-intro">Фейковые розыгрыши играют на желании получить что-то бесплатно. Бесплатный iPhone, PlayStation, деньги на карту — звучит заманчиво. Но за каждым предложением скрывается ловушка.</p>
    <div class="kb-label" style="color:hsl(35,100%,55%)">⚡ КАК ЭТО ПРОИСХОДИТ НА САМОМ ДЕЛЕ</div>
    <div class="kb-block"><div style="width:28px;height:28px;border-radius:50%;background:hsl(35,100%,55%,0.2);color:hsl(35,100%,55%);display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;margin-bottom:10px">1</div><h4>Схема «оплати доставку»</h4><p>Ты «выиграл»! Оплати доставку — 500 рублей. Платишь. Приз не приходит. Иногда просят несколько раз: доставка, таможня, страховка.</p></div>
    <div class="kb-block"><div style="width:28px;height:28px;border-radius:50%;background:hsl(35,100%,55%,0.2);color:hsl(35,100%,55%);display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;margin-bottom:10px">2</div><h4>Схема кражи аккаунта</h4><p>Для «получения приза» нужно войти на специальный сайт. Это фишинг — мошенники получают доступ к твоему профилю.</p></div>
    <div class="kb-block"><div style="width:28px;height:28px;border-radius:50%;background:hsl(35,100%,55%,0.2);color:hsl(35,100%,55%);display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;margin-bottom:10px">3</div><h4>Схема сбора данных</h4><p>Заполни форму: имя, телефон, адрес, данные карты. Эти данные продают или используют для других схем.</p></div>
    <div class="kb-grid2">
      <div class="kb-block"><div class="kb-label" style="color:hsl(35,100%,55%)">📊 СТАТИСТИКА</div><p>Подростки 13–17 лет — самая частая аудитория. Мошенники таргетируют TikTok, ВКонтакте, Telegram.</p></div>
      <div class="kb-block"><div class="kb-label" style="color:hsl(35,100%,55%)">📖 РЕАЛЬНЫЙ СЛУЧАЙ</div><p>Девочка «выиграла» AirPods в TikTok. Оплатила доставку 800 рублей. Деньги ушли — аккаунт исчез.</p></div>
    </div>
    <div class="kb-checklist" style="border:1px solid hsl(35,100%,55%,0.3);background:hsl(35,100%,55%,0.05)">
      <div class="kb-label" style="color:hsl(35,100%,55%)">✅ КАК ЗАЩИТИТЬСЯ — ЧЕКЛИСТ</div>
      <ul>
        <li><div class="kb-check" style="background:hsl(35,100%,55%,0.2);color:hsl(35,100%,55%)">✓</div>Проверяй дату создания аккаунта организатора</li>
        <li><div class="kb-check" style="background:hsl(35,100%,55%,0.2);color:hsl(35,100%,55%)">✓</div>Настоящий розыгрыш никогда не просит денег за доставку</li>
        <li><div class="kb-check" style="background:hsl(35,100%,55%,0.2);color:hsl(35,100%,55%)">✓</div>Загугли название розыгрыша + «развод»</li>
        <li><div class="kb-check" style="background:hsl(35,100%,55%,0.2);color:hsl(35,100%,55%)">✓</div>Официальные розыгрыши — только на верифицированных аккаунтах</li>
        <li><div class="kb-check" style="background:hsl(35,100%,55%,0.2);color:hsl(35,100%,55%)">✓</div>Если написали в личку «ты выиграл» — почти наверняка обман</li>
      </ul>
    </div>
    <div class="kb-meme" style="border:1px solid hsl(35,100%,55%,0.2);background:hsl(35,100%,55%,0.05)"><span style="font-size:22px">😂</span>«Ты 1000-й посетитель! Забери iPhone!» — Я и мои 999 других вкладок 💀</div>
  </div>

  <!-- DISCLAIMER -->
  <div class="kb-disclaimer">
    <div style="font-size:28px;margin-top:2px">⚠️</div>
    <div>
      <h3>Это не весь список угроз</h3>
      <p>На этом сайте собраны лишь <strong style="color:#fff">три наиболее распространённые угрозы</strong>. В реальности видов мошенничества гораздо больше: скам в играх, вредоносные программы, кража личности, кибербуллинг и многое другое. Будь внимателен — здоровый скептицизм в сети никогда не лишний.</p>
    </div>
  </div>

  <!-- TIPS -->
  <div style="background:#111;border:1px solid #222;border-radius:24px;padding:40px;margin-bottom:32px">
    <div class="kb-tips-title">Золотые правила безопасности</div>
    <div class="kb-tips-sub">ЗАПОМНИ — И БУДЕШЬ В БЕЗОПАСНОСТИ 99% ВРЕМЕНИ</div>
    <div class="kb-tips-grid">
      <div class="kb-tip"><div class="kb-tip-emoji">🔑</div><p>Уникальный пароль для каждого сайта</p></div>
      <div class="kb-tip"><div class="kb-tip-emoji">📱</div><p>Двухфакторная аутентификация везде</p></div>
      <div class="kb-tip"><div class="kb-tip-emoji">🔍</div><p>Проверяй адрес сайта перед вводом данных</p></div>
      <div class="kb-tip"><div class="kb-tip-emoji">🚨</div><p>Не верь «срочным» сообщениям о призах</p></div>
    </div>
  </div>

  <!-- FOOTER -->
  <div class="kb-footer">
    <div class="kb-footer-title">Знание —<br>лучшая защита.</div>
    <p>Мошенники рассчитывают на то, что ты не знаешь их приёмы.</p>
    <p>Поделись этим сайтом с другом — и у мошенников станет на одну жертву меньше.</p>
    <div class="kb-authors">
      <div class="kb-author"><div class="kb-author-avatar">👤</div><div><div class="kb-author-name">Имя Фамилия</div><div class="kb-author-role">Автор 1</div><div class="kb-author-grade">10 класс</div></div></div>
      <div class="kb-author"><div class="kb-author-avatar">👤</div><div><div class="kb-author-name">Имя Фамилия</div><div class="kb-author-role">Автор 2</div><div class="kb-author-grade">10 класс</div></div></div>
    </div>
    <div class="kb-copy">2026 КиберЩиток · Учебный проект 10 класс</div>
  </div>
</div>

<!-- MODALS -->
<div id="m1" class="kb-modal-overlay" onclick="if(event.target===this)closeModal('m1')">
  <div class="kb-modal" style="border-top:3px solid hsl(220,90%,60%)">
    <button class="kb-modal-close" onclick="closeModal('m1')">×</button>
    <div style="font-size:44px;margin-bottom:12px">🎣</div>
    <h2 style="color:hsl(220,90%,60%)">Фишинг</h2>
    <div class="kb-modal-sub">КРАДУТ ДАННЫЕ ЧЕРЕЗ ЛОЖЬ</div>
    <div class="kb-block"><div class="kb-label" style="color:hsl(220,90%,60%)">⚡ КАК РАБОТАЕТ</div><p>Мошенники создают фейковые сайты — точь-в-точь как ВКонтакте, Сбербанк или игровой магазин. Ты вводишь логин и пароль — и они уходят к злоумышленнику.</p></div>
    <div class="kb-block"><div class="kb-label" style="color:hsl(220,90%,60%)">👁 ПРИЗНАКИ</div><ul style="list-style:none"><li style="color:#aaa;font-size:13px;padding:4px 0">▸ Странный адрес сайта (vkontaktee.ru вместо vk.com)</li><li style="color:#aaa;font-size:13px;padding:4px 0">▸ Письмо с угрозой «Аккаунт заблокируют!»</li><li style="color:#aaa;font-size:13px;padding:4px 0">▸ Просят срочно войти по ссылке из сообщения</li></ul></div>
    <div class="kb-block"><div class="kb-label" style="color:hsl(220,90%,60%)">🛡 КАК ЗАЩИТИТЬСЯ</div><p>Всегда проверяй адрес сайта в строке браузера. Не переходи по ссылкам из сообщений незнакомцев. Включи двухфакторку.</p></div>
    <div class="kb-meme" style="border:1px solid hsl(220,90%,60%,0.3);background:hsl(220,90%,60%,0.08)"><span style="font-size:22px">😂</span>Когда зашёл по ссылке из письма «ВЫ ВЫИГРАЛИ АЙФОН»... 💀</div>
  </div>
</div>
<div id="m2" class="kb-modal-overlay" onclick="if(event.target===this)closeModal('m2')">
  <div class="kb-modal" style="border-top:3px solid hsl(147,87%,52%)">
    <button class="kb-modal-close" onclick="closeModal('m2')">×</button>
    <div style="font-size:44px;margin-bottom:12px">🔓</div>
    <h2 style="color:hsl(147,87%,52%)">Взлом аккаунтов</h2>
    <div class="kb-modal-sub">ЗАХВАТЫВАЮТ ТВОЙ ПРОФИЛЬ</div>
    <div class="kb-block"><div class="kb-label" style="color:hsl(147,87%,52%)">⚡ КАК РАБОТАЕТ</div><p>Хакеры используют слабые пароли, утечки данных с других сайтов или специальные программы-переборщики.</p></div>
    <div class="kb-block"><div class="kb-label" style="color:hsl(147,87%,52%)">👁 ПРИЗНАКИ</div><ul style="list-style:none"><li style="color:#aaa;font-size:13px;padding:4px 0">▸ В аккаунте появились странные действия</li><li style="color:#aaa;font-size:13px;padding:4px 0">▸ Друзья говорят, что ты пишешь им странное</li><li style="color:#aaa;font-size:13px;padding:4px 0">▸ Не можешь войти — пароль вдруг не подходит</li></ul></div>
    <div class="kb-block"><div class="kb-label" style="color:hsl(147,87%,52%)">🛡 КАК ЗАЩИТИТЬСЯ</div><p>Используй длинные уникальные пароли для каждого сайта. Включи двухфакторную аутентификацию. Используй менеджер паролей.</p></div>
    <div class="kb-meme" style="border:1px solid hsl(147,87%,52%,0.3);background:hsl(147,87%,52%,0.08)"><span style="font-size:22px">😂</span>Мой пароль: «пароль123». Хакер: 😂🎉</div>
  </div>
</div>
<div id="m3" class="kb-modal-overlay" onclick="if(event.target===this)closeModal('m3')">
  <div class="kb-modal" style="border-top:3px solid hsl(35,100%,55%)">
    <button class="kb-modal-close" onclick="closeModal('m3')">×</button>
    <div style="font-size:44px;margin-bottom:12px">🎁</div>
    <h2 style="color:hsl(35,100%,55%)">Фейковые розыгрыши</h2>
    <div class="kb-modal-sub">ОБЕЩАЮТ ПРИЗЫ — БЕРУТ ДАННЫЕ</div>
    <div class="kb-block"><div class="kb-label" style="color:hsl(35,100%,55%)">⚡ КАК РАБОТАЕТ</div><p>В соцсетях появляются посты «Подпишись и выиграй PlayStation / iPhone!». На самом деле цель — собрать данные, деньги «за доставку» или доступ к аккаунту.</p></div>
    <div class="kb-block"><div class="kb-label" style="color:hsl(35,100%,55%)">👁 ПРИЗНАКИ</div><ul style="list-style:none"><li style="color:#aaa;font-size:13px;padding:4px 0">▸ Победителей выбирают «прямо сейчас»</li><li style="color:#aaa;font-size:13px;padding:4px 0">▸ Просят скинуть деньги за «доставку приза»</li><li style="color:#aaa;font-size:13px;padding:4px 0">▸ Аккаунт организатора создан неделю назад</li></ul></div>
    <div class="kb-block"><div class="kb-label" style="color:hsl(35,100%,55%)">🛡 КАК ЗАЩИТИТЬСЯ</div><p>Проверяй аккаунт организатора. Никогда не плати за «доставку». Настоящие розыгрыши не требуют данных карты.</p></div>
    <div class="kb-meme" style="border:1px solid hsl(35,100%,55%,0.3);background:hsl(35,100%,55%,0.08)"><span style="font-size:22px">😂</span>«Ты 1000-й посетитель! Забери iPhone!» — Я и мои 999 других вкладок 💀</div>
  </div>
</div>

<script>
function openModal(id){document.getElementById(id).classList.add('open');document.body.style.overflow='hidden'}
function closeModal(id){document.getElementById(id).classList.remove('open');document.body.style.overflow=''}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){document.querySelectorAll('.kb-modal-overlay.open').forEach(function(m){m.classList.remove('open')});document.body.style.overflow=''}})
</script>
</body>
</html>`

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
              <div
                className="mt-4 rounded-2xl px-5 py-4 border text-sm font-mono flex items-center gap-3"
                style={{ borderColor: threat.color + "33", background: threat.color + "08" }}
              >
                <span className="text-2xl">😂</span>
                <span className="text-muted-foreground italic">{threat.meme}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Disclaimer */}
        <section className="mx-4 md:mx-0 mb-8 rounded-4xl border border-border bg-card px-8 py-8 flex gap-5 items-start">
          <div className="text-3xl mt-1">⚠️</div>
          <div>
            <h3 className="text-base font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
              Это не весь список угроз
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              На этом сайте собраны лишь <span className="text-foreground font-semibold">три наиболее распространённые угрозы</span>, с которыми чаще всего сталкиваются школьники и молодёжь в интернете. В реальности видов мошенничества гораздо больше: скам в играх, вредоносные программы, кража личности, кибербуллинг и многое другое. Будь внимателен — и помни, что здоровый скептицизм в сети никогда не лишний.
            </p>
          </div>
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

      {/* Tilda code modal button */}
      <div className="max-w-[1200px] mx-auto px-4 mb-12 mt-[-16px]">
        <button
          onClick={() => setShowTildaCode(true)}
          className="w-full rounded-3xl border border-border bg-card px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] transition-all duration-300 group"
        >
          <div className="flex items-center gap-4">
            <div className="text-3xl">🖥️</div>
            <div className="text-left">
              <p className="text-foreground font-bold text-base" style={{ fontFamily: "var(--font-montserrat)" }}>
                Код для Тильды (Zero Block)
              </p>
              <p className="text-muted-foreground text-sm font-mono">Весь сайт одним HTML-блоком — скопируй и вставь</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-primary border border-primary/30 bg-primary/10 px-4 py-2 rounded-full group-hover:bg-primary/20 transition-colors">
            Показать код <Icon name="Code" size={13} className="ml-1" />
          </div>
        </button>
      </div>

      {/* Tilda code modal */}
      {showTildaCode && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setShowTildaCode(false)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative z-10 w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl bg-card border-t-[3px] border-border shadow-2xl"
            style={{ borderTopColor: "hsl(var(--primary))" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border flex-shrink-0">
              <div>
                <p className="text-foreground font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>Код для Тильды — Zero Block</p>
                <p className="text-muted-foreground text-xs font-mono">Блок → Контент → Zero Block → HTML вкладка → вставить</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigator.clipboard.writeText(tildaCode)}
                  className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-primary border border-primary/30 bg-primary/10 px-4 py-2 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <Icon name="Copy" size={13} /> Скопировать
                </button>
                <button
                  onClick={() => setShowTildaCode(false)}
                  className="w-9 h-9 rounded-full bg-background/80 border border-border flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Icon name="X" size={16} className="text-muted-foreground" />
                </button>
              </div>
            </div>
            <div className="overflow-y-auto flex-1 p-4">
              <pre className="text-xs text-muted-foreground font-mono leading-relaxed whitespace-pre-wrap break-all bg-background rounded-2xl p-4 border border-border">
                {tildaCode}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Index