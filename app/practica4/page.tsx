import Image from "next/image"
import type { Metadata } from "next"
import {
  Train,
  ArrowUpDown,
  Accessibility,
  Info,
  MapPin,
  Coffee,
  AlertTriangle,
  Eye,
  Compass,
  Megaphone,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Практическая работа №4 — Визуальные коммуникации в городском пространстве",
  description:
    "Проект визуальной системы станции метро: анализ среды, аудитории и сценариев, концепция образа места и единая система навигации с учётом визуальной экологии.",
}

// Этап 1 — выбор и анализ пространства
const spaceData = {
  location: "Станция метро (пересадочный узел в центре города)",
  architecture:
    "Подземный вестибюль с колоннами, облицовка камнем и керамической плиткой, холодное люминесцентное освещение, высокие потолки, несколько выходов и переход на смежную линию.",
  flows:
    "Плотные разнонаправленные потоки в часы пик: транзит между линиями, вход/выход в город, встречи. Скорость движения высокая, время на принятие решения — секунды.",
  attention: [
    "Турникетная зона и вход на эскалатор",
    "Развилки коридоров и точки пересадки",
    "Указатели выходов в город",
    "Зоны ожидания у края платформы",
  ],
}

const problems = [
  {
    title: "Визуальный шум",
    note: "Реклама и навигация конкурируют за внимание, разностилевые баннеры перекрывают указатели.",
  },
  {
    title: "Разнородная навигация",
    note: "Указатели разных эпох и стилей: несовпадающие шрифты, цвета и пиктограммы.",
  },
  {
    title: "Дезориентация",
    note: "На развилках не хватает подтверждающих знаков — пассажир теряет маршрут.",
  },
  {
    title: "Агрессивная среда",
    note: "Яркая коммерческая реклама доминирует над функциональной информацией.",
  },
]

// Этап 2 — аудитория (таблица 1)
const audience = [
  {
    group: "Ежедневные пассажиры",
    goal: "Быстро пройти транзитом / на пересадку",
    speed: "Очень высокая",
    need: "Мгновенно читаемые указатели направлений и выходов",
  },
  {
    group: "Приезжие и туристы",
    goal: "Сориентироваться в незнакомом узле",
    speed: "Средняя",
    need: "Схемы, нумерация выходов, понятные пиктограммы без языка",
  },
  {
    group: "Маломобильные пассажиры",
    goal: "Найти лифт, пандус, безбарьерный маршрут",
    speed: "Низкая",
    need: "Контраст, тактильные элементы, доступная высота знаков",
  },
  {
    group: "Пожилые люди",
    goal: "Спокойно дойти без стресса",
    speed: "Низкая",
    need: "Крупный кегль, высокая читаемость, отсутствие визуального шума",
  },
]

// Этап 2 — сценарий использования (таблица 2)
const scenario = [
  { step: "Вход", action: "Пассажир спускается в вестибюль", info: "Идентификация станции, схема линий, направление к турникетам" },
  { step: "Ориентация", action: "Выбирает линию или выход", info: "Цветовая кодировка линий, крупные указатели направлений" },
  { step: "Движение", action: "Идёт по коридорам и переходам", info: "Подтверждающие знаки на развилках, нумерация выходов" },
  { step: "Пребывание", action: "Ждёт поезд на платформе", info: "Табло прибытия, название станции, безопасная зона у края" },
  { step: "Выход", action: "Поднимается в город", info: "Указатели улиц и ориентиров, схема окрестностей" },
]

// Этап 3 — коммуникативные задачи
const commTasks = [
  { title: "Навигация", note: "Привести пассажира к цели кратчайшим понятным маршрутом", Icon: Compass },
  { title: "Информирование", note: "Расписание, схемы, время прибытия, правила", Icon: Info },
  { title: "Идентификация места", note: "Узнаваемый образ станции и принадлежность к сети метро", Icon: MapPin },
  { title: "Эмоция и атмосфера", note: "Снизить стресс среды, дать ощущение порядка и безопасности", Icon: Sparkles },
  { title: "Визуальная экология", note: "Упорядочить рекламу, убрать конкуренцию с навигацией", Icon: ShieldCheck },
]

// Этап 4 — концепция образа
const concept = {
  metaphor: "«Спокойный ритм города под землёй» — навигация как уверенная линия, ведущая сквозь поток",
  character: "Чёткий, спокойный, технологичный, дружелюбный к человеку",
  idea:
    "Единая система знаков с одним гротеском, строгой цветовой кодировкой линий и тёплым янтарным акцентом для ключевых решений. Реклама вынесена в отдельные зоны и не пересекается с навигацией.",
}

// Этап 4 — палитра
const palette = [
  { color: "#0f766e", name: "Тёмно-бирюзовый", meaning: "База системы, доверие, спокойствие" },
  { color: "#14b8a6", name: "Бирюзовый", meaning: "Основной навигационный цвет" },
  { color: "#334155", name: "Графит", meaning: "Текст, контур, нейтральная опора" },
  { color: "#f59e0b", name: "Янтарный", meaning: "Акцент: ключевые решения и предупреждения" },
  { color: "#f8fafc", name: "Светлый", meaning: "Фон знаков, воздух, читаемость" },
]

// Этап 5 — элементы системы
const systemElements = [
  { title: "Путевые указатели", note: "Направления к линиям и выходам, подвесные и настенные панели", Icon: Compass },
  { title: "Пиктограммы", note: "Единый набор: поезд, эскалатор, лифт, выход, справка", Icon: Train },
  { title: "Цветовая кодировка линий", note: "Каждая линия — свой цвет, последовательно во всей системе", Icon: MapPin },
  { title: "Информационные панели", note: "Схемы сети и окрестностей, табло прибытия", Icon: Info },
  { title: "Зона рекламы", note: "Чётко отделённые модульные блоки вне навигационных осей", Icon: Megaphone },
  { title: "Доступная среда", note: "Контраст, тактильная плитка, знаки для маломобильных", Icon: Accessibility },
]

// набор пиктограмм для демонстрации единой системы
const pictograms = [
  { Icon: Train, label: "Линия / поезд" },
  { Icon: ArrowUpDown, label: "Эскалатор" },
  { Icon: Accessibility, label: "Лифт / доступ" },
  { Icon: Info, label: "Справка" },
  { Icon: ArrowRight, label: "Выход" },
  { Icon: AlertTriangle, label: "Внимание" },
  { Icon: Coffee, label: "Сервис" },
  { Icon: MapPin, label: "Вы здесь" },
]

const typography = {
  heading: "Геометрический гротеск (Geist) — крупный, жирный для направлений",
  body: "Тот же гротеск, обычное начертание; высокий контраст для дальней дистанции",
  rule: "Минимум 2 ступени кегля: главное направление крупно, уточнения мельче",
}

// Этап 7 — выводы
const conclusions = [
  "Городское пространство — это коммуникативная система: знаки, потоки и архитектура читаются как единый текст.",
  "Единая визуальная система снижает когнитивную нагрузку и ускоряет принятие решений в условиях высокой скорости и шума.",
  "Принципы визуальной экологии (отделение рекламы от навигации) возвращают функциональной информации приоритет.",
  "Решения спроектированы как система, согласованная с архитектурой и идентичностью метро, а не как набор отдельных табличек.",
]

const criteria = [
  "Глубина анализа пространства и контекста",
  "Обоснованность концепции визуального образа",
  "Качество проектирования навигации и системы",
  "Соответствие аудитории и сценариям использования",
  "Композиция, читаемость и визуальная экология",
  "Аргументация, выводы и оформление отчёта",
]

export default function Practica4Page() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-16 border-b border-teal-100 bg-gradient-to-b from-teal-50 to-[#f8fafc]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono text-teal-700/70 uppercase tracking-widest">
            Практическое занятие №4
          </span>
          <span className="inline-block mt-3 px-3 py-1 bg-teal-700 text-white rounded-full text-sm font-medium">
            Титов Николай ТКБО-02-23
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-4 mb-6 text-balance">
            Визуальные коммуникации в городском пространстве
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium">Станция метро</span>
            <span className="text-teal-700/50">—</span>
            <span className="text-teal-900/70">Единая система навигации и визуальная экология</span>
          </div>
          <p className="text-teal-950/70 max-w-2xl mx-auto leading-relaxed text-pretty">
            Проект визуальной системы пересадочного узла метро: от анализа среды и потоков людей до целостной
            навигации, согласованной с архитектурой и идентичностью места.
          </p>
        </div>
      </section>

      {/* Этап 1 */}
      <section id="stage1" className="py-16 px-4 border-b border-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Этап 1</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Выбор и анализ пространства</h2>
            <p className="text-teal-950/60 mt-2">Фотофиксация, архитектурная среда, потоки и точки внимания</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="rounded-lg overflow-hidden border border-teal-100 shadow-sm">
              <Image
                src="/images/practica4/metro-before.png"
                alt="Фотофиксация: переполненный вестибюль станции метро с визуальным шумом и разнородной рекламой"
                width={1280}
                height={720}
                className="w-full h-auto"
                priority
              />
              <p className="text-xs text-teal-950/60 p-3 bg-teal-50">
                Фотофиксация существующей среды: визуальный шум и конкуренция рекламы с навигацией
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-xs font-medium text-teal-700/70 uppercase mb-2">Локация</h3>
                <p className="text-lg font-medium text-teal-700">{spaceData.location}</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-xs font-medium text-teal-700/70 uppercase mb-2">Архитектурная среда</h3>
                <p className="text-sm leading-relaxed">{spaceData.architecture}</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-xs font-medium text-teal-700/70 uppercase mb-2">Потоки людей</h3>
                <p className="text-sm leading-relaxed">{spaceData.flows}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
                <Eye className="w-4 h-4 text-teal-700" /> Точки внимания
              </h3>
              <ul className="space-y-3">
                {spaceData.attention.map((a, i) => (
                  <li key={i} className="flex gap-3 text-sm bg-white border border-teal-100 rounded-lg p-4">
                    <span className="flex-none w-5 h-5 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" /> Проблемы среды
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {problems.map((p, i) => (
                  <div key={i} className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                    <p className="font-medium text-amber-900">{p.title}</p>
                    <p className="text-sm text-amber-900/70 mt-1">{p.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Этап 2 */}
      <section id="stage2" className="py-16 px-4 border-b border-teal-100 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Этап 2</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Аудитория и сценарии использования</h2>
            <p className="text-teal-950/60 mt-2">Портреты пользователей и путь пассажира по пространству</p>
          </div>

          {/* Таблица 1 — аудитория */}
          <h3 className="text-sm font-medium mb-4">Таблица 1. Целевые группы</h3>
          <div className="overflow-x-auto mb-10 rounded-lg border border-teal-100">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-teal-700 text-white text-left">
                  <th className="p-4 font-medium">Группа</th>
                  <th className="p-4 font-medium">Цель</th>
                  <th className="p-4 font-medium">Скорость</th>
                  <th className="p-4 font-medium">Ключевая потребность</th>
                </tr>
              </thead>
              <tbody>
                {audience.map((a, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-teal-50/50"}>
                    <td className="p-4 font-medium text-teal-800">{a.group}</td>
                    <td className="p-4 text-teal-950/80">{a.goal}</td>
                    <td className="p-4 text-teal-950/80">{a.speed}</td>
                    <td className="p-4 text-teal-950/80">{a.need}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Таблица 2 — сценарий */}
          <h3 className="text-sm font-medium mb-4">Таблица 2. Сценарий пути пассажира</h3>
          <div className="overflow-x-auto rounded-lg border border-teal-100">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-teal-700 text-white text-left">
                  <th className="p-4 font-medium">Шаг</th>
                  <th className="p-4 font-medium">Действие пассажира</th>
                  <th className="p-4 font-medium">Какая информация нужна</th>
                </tr>
              </thead>
              <tbody>
                {scenario.map((s, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-teal-50/50"}>
                    <td className="p-4 font-medium text-teal-800 whitespace-nowrap">
                      {i + 1}. {s.step}
                    </td>
                    <td className="p-4 text-teal-950/80">{s.action}</td>
                    <td className="p-4 text-teal-950/80">{s.info}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Этап 3 */}
      <section id="stage3" className="py-16 px-4 border-b border-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Этап 3</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Коммуникативные задачи пространства</h2>
            <p className="text-teal-950/60 mt-2">Что визуальная система должна сделать для человека в среде</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commTasks.map((t, i) => (
              <div key={i} className="bg-white border border-teal-100 rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mb-3">
                  <t.Icon className="w-5 h-5 text-teal-700" />
                </div>
                <p className="font-medium text-teal-800">{t.title}</p>
                <p className="text-sm text-teal-950/60 mt-1">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Этап 4 */}
      <section id="stage4" className="py-16 px-4 border-b border-teal-100 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Этап 4</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Концепция визуального образа</h2>
            <p className="text-teal-950/60 mt-2">Метафора места, характер среды и цвето-стилистическая система</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-6">
              <h3 className="text-xs font-medium text-amber-700 uppercase mb-2">Метафора</h3>
              <p className="text-sm leading-relaxed font-medium text-amber-900">{concept.metaphor}</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-xs font-medium text-teal-700/70 uppercase mb-2">Характер среды</h3>
              <p className="text-sm leading-relaxed">{concept.character}</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-xs font-medium text-teal-700/70 uppercase mb-2">Идея системы</h3>
              <p className="text-sm leading-relaxed">{concept.idea}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden border border-teal-100 shadow-sm">
              <Image
                src="/images/practica4/moodboard.png"
                alt="Мудборд концепции визуальной системы метро"
                width={1280}
                height={720}
                className="w-full h-auto"
              />
              <p className="text-xs text-teal-950/60 p-3 bg-teal-50">Мудборд: образ, материалы и характер системы</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Цветовая система</h3>
              <div className="space-y-3">
                {palette.map((c, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white border border-teal-100 rounded-lg p-3">
                    <div
                      className="w-12 h-12 rounded-md flex-none border border-black/5"
                      style={{ backgroundColor: c.color }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-sm">
                        {c.name} <span className="font-mono text-teal-700/60">{c.color}</span>
                      </p>
                      <p className="text-sm text-teal-950/60">{c.meaning}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Этап 5 */}
      <section id="stage5" className="py-16 px-4 border-b border-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Этап 5</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Проектирование элементов системы</h2>
            <p className="text-teal-950/60 mt-2">Навигация, пиктограммы, типографика и инфопанели как единое целое</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {systemElements.map((e, i) => (
              <div key={i} className="bg-white border border-teal-100 rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mb-3">
                  <e.Icon className="w-5 h-5 text-teal-700" />
                </div>
                <p className="font-medium text-teal-800">{e.title}</p>
                <p className="text-sm text-teal-950/60 mt-1">{e.note}</p>
              </div>
            ))}
          </div>

          {/* Единый набор пиктограмм */}
          <h3 className="text-sm font-medium mb-4">Единый набор пиктограмм</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {pictograms.map((p, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-2 bg-teal-700 text-white rounded-lg p-5"
              >
                <p.Icon className="w-7 h-7" />
                <span className="text-xs text-teal-50/90 text-center">{p.label}</span>
              </div>
            ))}
          </div>

          {/* Макет навигационного указателя */}
          <h3 className="text-sm font-medium mb-4">Макет путевого указателя</h3>
          <div className="rounded-lg overflow-hidden border border-teal-100 mb-10">
            <div className="bg-teal-700 text-white p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                <span className="flex items-center gap-3 text-lg font-medium">
                  <Train className="w-6 h-6" /> Линия 1
                </span>
                <span className="flex items-center gap-2 text-amber-300 font-medium">
                  Платформа <ArrowRight className="w-5 h-5" />
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                <span className="flex items-center gap-3 text-lg font-medium">
                  <ArrowUpDown className="w-6 h-6" /> Пересадка · Линия 2
                </span>
                <span className="flex items-center gap-2 text-teal-50/80 font-medium">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-3 text-lg font-medium">
                  <Accessibility className="w-6 h-6" /> Лифт · Выход №3
                </span>
                <span className="flex items-center gap-2 text-teal-50/80 font-medium">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </div>
            <p className="text-xs text-teal-950/60 p-3 bg-teal-50">
              Единый гротеск, контрастный фон, янтарный акцент на приоритетном направлении, пиктограмма + текст + стрелка
            </p>
          </div>

          {/* Типографика */}
          <h3 className="text-sm font-medium mb-4">Типографика</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-teal-50 rounded-lg p-5">
              <h4 className="text-xs font-medium text-teal-700/70 uppercase mb-2">Заголовки</h4>
              <p className="text-sm">{typography.heading}</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-5">
              <h4 className="text-xs font-medium text-teal-700/70 uppercase mb-2">Основной текст</h4>
              <p className="text-sm">{typography.body}</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-5">
              <h4 className="text-xs font-medium text-teal-700/70 uppercase mb-2">Правило контраста</h4>
              <p className="text-sm">{typography.rule}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Этап 6 */}
      <section id="stage6" className="py-16 px-4 border-b border-teal-100 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Этап 6</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Визуализация решения в среде</h2>
            <p className="text-teal-950/60 mt-2">Сравнение «до» и «после»: проверка масштаба, контраста и читаемости</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div className="rounded-lg overflow-hidden border border-teal-100 shadow-sm">
              <div className="bg-amber-100 text-amber-800 text-xs font-medium uppercase tracking-wide px-4 py-2">
                До — существующая среда
              </div>
              <Image
                src="/images/practica4/metro-before.png"
                alt="До: визуально перегруженный вестибюль станции метро"
                width={1280}
                height={720}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-teal-100 shadow-sm">
              <div className="bg-teal-700 text-white text-xs font-medium uppercase tracking-wide px-4 py-2">
                После — единая визуальная система
              </div>
              <Image
                src="/images/practica4/metro-after.png"
                alt="После: спокойный вестибюль с единой системой навигации и визуальной экологией"
                width={1280}
                height={720}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Размещение элементов системы в среде */}
          <h3 className="text-sm font-medium mb-4">Размещение элементов системы в среде</h3>
          <div className="relative rounded-lg overflow-hidden border border-teal-100 shadow-sm">
            <Image
              src="/images/practica4/metro-after.png"
              alt="Фотомонтаж: элементы навигационной системы, размещённые в пространстве станции"
              width={1280}
              height={720}
              className="w-full h-auto"
            />
            {/* затемнение для читаемости наложенных элементов */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" aria-hidden="true" />

            {/* Подвесной путевой указатель — сверху */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[min(92%,520px)] bg-teal-700/95 backdrop-blur-sm text-white rounded-md shadow-xl overflow-hidden">
              <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-white/15">
                <span className="flex items-center gap-2 text-sm md:text-base font-medium">
                  <Train className="w-5 h-5" /> Линия 1
                </span>
                <span className="flex items-center gap-1.5 text-amber-300 text-sm font-medium">
                  Платформа <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-2.5">
                <span className="flex items-center gap-2 text-sm md:text-base font-medium">
                  <ArrowUpDown className="w-5 h-5" /> Пересадка · Линия 2
                </span>
                <span className="flex items-center gap-1.5 text-teal-50/80 text-sm font-medium">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Панель «Вы здесь» — слева */}
            <div className="absolute bottom-3 left-3 w-[min(45%,210px)] bg-[#f8fafc]/95 backdrop-blur-sm rounded-md shadow-xl p-3">
              <p className="flex items-center gap-1.5 text-xs font-medium text-teal-800 mb-2">
                <MapPin className="w-4 h-4 text-amber-500" /> Вы здесь
              </p>
              {/* цветовая кодировка линий */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[11px] text-teal-950/80">
                  <span className="w-6 h-1.5 rounded-full bg-[#14b8a6]" /> Линия 1
                </div>
                <div className="flex items-center gap-2 text-[11px] text-teal-950/80">
                  <span className="w-6 h-1.5 rounded-full bg-[#f59e0b]" /> Линия 2
                </div>
                <div className="flex items-center gap-2 text-[11px] text-teal-950/80">
                  <span className="w-6 h-1.5 rounded-full bg-[#334155]" /> Линия 3
                </div>
              </div>
            </div>

            {/* Лента пиктограмм — снизу справа */}
            <div className="absolute bottom-3 right-3 flex gap-1.5 bg-teal-700/95 backdrop-blur-sm rounded-md shadow-xl p-2">
              {[Train, ArrowUpDown, Accessibility, Info, ArrowRight].map((Ic, i) => (
                <span
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded bg-white/10 text-white"
                >
                  <Ic className="w-5 h-5" />
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm text-teal-950/60 mt-4 leading-relaxed max-w-3xl">
            Элементы из Этапа 5 встроены в реальное пространство: подвесной путевой указатель ведёт к платформе и
            пересадке, панель «Вы здесь» использует цветовую кодировку линий, лента единых пиктограмм дублирует ключевые
            функции. Навигация получает приоритет над рекламой, а контраст и крупный кегль обеспечивают читаемость на
            дистанции и при высокой скорости движения.
          </p>
        </div>
      </section>

      {/* Этап 7 */}
      <section id="stage7" className="py-16 px-4 bg-gradient-to-b from-[#f8fafc] to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Этап 7</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Выводы и презентация</h2>
            <p className="text-teal-950/60 mt-2">Итоги проекта и критерии оценивания</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium mb-4">Выводы</h3>
              <ul className="space-y-3">
                {conclusions.map((c, i) => (
                  <li key={i} className="flex gap-3 text-sm bg-white border border-teal-100 rounded-lg p-4">
                    <span className="flex-none w-5 h-5 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Критерии оценивания</h3>
              <ul className="space-y-3">
                {criteria.map((c, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm bg-white border border-teal-100 rounded-lg p-4">
                    <ShieldCheck className="w-4 h-4 text-teal-700 flex-none" />
                    <span>{c}</span>
                    <span className="ml-auto font-mono text-teal-700/50 text-xs">0–5</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <span className="inline-block px-4 py-2 bg-teal-700 text-white rounded-full text-sm font-medium">
              Титов Николай ТКБО-02-23
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
