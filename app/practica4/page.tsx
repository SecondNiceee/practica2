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
  Ruler,
  Gauge,
  Contrast,
  ScanEye,
  CheckCircle2,
  Minimize2,
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

// Цель и задачи работы
const workGoal =
  "Сформировать понимание городской среды как коммуникативной системы и научиться проектировать визуальные решения с учётом социокультурного контекста."

const workTasks = [
  "Изучить особенности восприятия информации в публичном пространстве: скорость, дистанцию, уровень внимания, визуальный шум.",
  "Проанализировать социальный, культурный и функциональный контекст выбранной локации.",
  "Определить коммуникативные задачи пространства: навигацию, информирование, образ места, эмоциональное воздействие.",
  "Освоить принципы визуальной экологии и борьбы с агрессивной визуальной средой.",
  "Разработать концепцию визуальной системы, согласованной с архитектурой и идентичностью места.",
  "Проектировать элементы городской визуальной коммуникации как целостную систему, а не отдельные объекты.",
  "Сформировать навыки презентации и аргументации проектных решений.",
]

// навигация по этапам
const stageNav = [
  { id: "goal", label: "Цель" },
  { id: "stage1", label: "1. Анализ" },
  { id: "stage2", label: "2. Аудитория" },
  { id: "stage3", label: "3. Задачи" },
  { id: "stage4", label: "4. Концепция" },
  { id: "stage5", label: "5. Элементы" },
  { id: "stage6", label: "6. Среда" },
  { id: "stage7", label: "7. Выводы" },
]

// Этап 2 — аудитория (таблица 1)
const audience = [
  {
    group: "Ежедневные пассажиры",
    goal: "Быстро пройти транзитом / на пересадку",
    speed: "Очень высокая",
    attention: "Низкий — внимание рассеяно",
    emotion: "Спешка, автоматизм",
    need: "Мгновенно читаемые указатели направлений и выходов",
  },
  {
    group: "Приезжие и туристы",
    goal: "Сориентироваться в незнакомом узле",
    speed: "Средняя",
    attention: "Высокий — активный поиск",
    emotion: "Интерес, лёгкая тревога",
    need: "Схемы, нумерация выходов, понятные пиктограммы без языка",
  },
  {
    group: "Маломобильные пассажиры",
    goal: "Найти лифт, пандус, безбарьерный маршрут",
    speed: "Низкая",
    attention: "Средний — целевой поиск",
    emotion: "Настороженность, усталость",
    need: "Контраст, тактильные элементы, доступная высота знаков",
  },
  {
    group: "Пожилые люди",
    goal: "Спокойно дойти без стресса",
    speed: "Низкая",
    attention: "Средний — нужна опора",
    emotion: "Осторожность, утомление",
    need: "Крупный кегль, высокая читаемость, отсутствие визуального шума",
  },
]

// Этап 2 — сценарий использования (таблица 2)
const scenario = [
  {
    step: "Вход",
    action: "Пассажир спускается в вестибюль",
    need: "Понять структуру места",
    solution: "Идентификация станции, схема линий, крупный указатель к турникетам",
  },
  {
    step: "Ориентация",
    action: "Выбирает линию или выход",
    need: "Быстро считать информацию",
    solution: "Цветовая кодировка линий, крупные указатели направлений",
  },
  {
    step: "Движение",
    action: "Идёт по коридорам и переходам",
    need: "Не терять маршрут",
    solution: "Подтверждающие знаки на развилках, нумерация выходов, пиктограммы",
  },
  {
    step: "Пребывание",
    action: "Ждёт поезд на платформе",
    need: "Комфорт и информирование",
    solution: "Табло прибытия, название станции, безопасная зона у края",
  },
  {
    step: "Выход",
    action: "Поднимается в город",
    need: "Найти выход быстро",
    solution: "Контрастные указатели улиц и ориентиров, схема окрестностей",
  },
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

// Этап 6 — проверка восприятия
const perceptionChecks = [
  {
    title: "Масштаб",
    note: "Размер указателей и кегль подобраны под высоту подвеса и габариты пространства — знаки доминируют над фоном.",
    Icon: Ruler,
  },
  {
    title: "Читаемость",
    note: "Крупный гротеск и короткие формулировки считываются мгновенно даже при движении в потоке.",
    Icon: ScanEye,
  },
  {
    title: "Контраст",
    note: "Светлый текст на тёмно-бирюзовом фоне и янтарный акцент обеспечивают чёткое отделение от среды.",
    Icon: Contrast,
  },
  {
    title: "Дистанция восприятия",
    note: "Указатели читаются с дальней дистанции, уточняющая информация раскрывается по мере приближения.",
    Icon: Gauge,
  },
]

// Этап 6 — коррекция визуального шума и плотности
const noiseCorrections = [
  {
    title: "Отделение рекламы от навигации",
    note: "Коммерческие модули вынесены в отдельные зоны и не пересекаются с навигационными осями.",
  },
  {
    title: "Снижение плотности информации",
    note: "��а одной панели — только релевантные направления; второстепенное убрано или вынесено на схему.",
  },
  {
    title: "Единый ритм и сетка",
    note: "Элементы выровнены по общей сетке, единый стиль убирает конкуренцию разнородных табличек.",
  },
  {
    title: "Воздух и паузы",
    note: "Свободное поле вокруг знаков снижает когнитивную нагрузку и подчёркивает приоритетную информацию.",
  },
]

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

      {/* Навигация по этапам */}
      <nav
        aria-label="Навигация по этапам"
        className="sticky top-0 z-30 border-b border-teal-100 bg-[#f8fafc]/90 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex gap-1 overflow-x-auto py-3 text-sm">
            {stageNav.map((s) => (
              <li key={s.id} className="flex-none">
                <a
                  href={`#${s.id}`}
                  className="block px-3 py-1.5 rounded-full text-teal-900/70 hover:bg-teal-100 hover:text-teal-800 transition-colors whitespace-nowrap"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Цель и задачи */}
      <section id="goal" className="scroll-mt-16 py-16 px-4 border-b border-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Цель работы</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1 text-balance">
              Городская среда как коммуникативная система
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 bg-teal-700 text-white rounded-lg p-6 md:p-8 flex flex-col justify-center">
              <Compass className="w-8 h-8 mb-4 text-amber-300" />
              <p className="text-lg leading-relaxed text-pretty">{workGoal}</p>
            </div>
            <div className="lg:col-span-3">
              <h3 className="text-sm font-medium mb-4">Задачи</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {workTasks.map((t, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm bg-white border border-teal-100 rounded-lg p-4 leading-relaxed"
                  >
                    <span className="flex-none w-6 h-6 rounded-full bg-teal-100 text-teal-700 text-xs font-medium flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Этап 1 */}
      <section id="stage1" className="scroll-mt-16 py-16 px-4 border-b border-teal-100">
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
      <section id="stage2" className="scroll-mt-16 py-16 px-4 border-b border-teal-100 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Этап 2</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Аудитория и сценарии использования</h2>
            <p className="text-teal-950/60 mt-2">Портреты пользователей и путь пассажира по пространству</p>
          </div>

          {/* Таблица 1 — аудитория */}
          <h3 className="text-sm font-medium mb-4">Таблица 1. Целевые группы</h3>
          <div className="overflow-x-auto mb-10 rounded-lg border border-teal-100">
            <table className="w-full text-sm min-w-[880px]">
              <thead>
                <tr className="bg-teal-700 text-white text-left">
                  <th className="p-4 font-medium">Группа</th>
                  <th className="p-4 font-medium">Цель</th>
                  <th className="p-4 font-medium">Скорость</th>
                  <th className="p-4 font-medium">Уровень внимания</th>
                  <th className="p-4 font-medium">Эмоц. состояние</th>
                  <th className="p-4 font-medium">Ключевая потребность</th>
                </tr>
              </thead>
              <tbody>
                {audience.map((a, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-teal-50/50"}>
                    <td className="p-4 font-medium text-teal-800">{a.group}</td>
                    <td className="p-4 text-teal-950/80">{a.goal}</td>
                    <td className="p-4 text-teal-950/80">{a.speed}</td>
                    <td className="p-4 text-teal-950/80">{a.attention}</td>
                    <td className="p-4 text-teal-950/80">{a.emotion}</td>
                    <td className="p-4 text-teal-950/80">{a.need}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Таблица 2 — сценарий */}
          <h3 className="text-sm font-medium mb-4">Таблица 2. Сценарий пути пассажира</h3>
          <div className="overflow-x-auto rounded-lg border border-teal-100">
            <table className="w-full text-sm min-w-[760px]">
              <thead>
                <tr className="bg-teal-700 text-white text-left">
                  <th className="p-4 font-medium">Этап сценария</th>
                  <th className="p-4 font-medium">Действие пользователя</th>
                  <th className="p-4 font-medium">Потребность</th>
                  <th className="p-4 font-medium">Возможное визуальное решение</th>
                </tr>
              </thead>
              <tbody>
                {scenario.map((s, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-teal-50/50"}>
                    <td className="p-4 font-medium text-teal-800 whitespace-nowrap">
                      {i + 1}. {s.step}
                    </td>
                    <td className="p-4 text-teal-950/80">{s.action}</td>
                    <td className="p-4 text-teal-950/80">{s.need}</td>
                    <td className="p-4 text-teal-950/80">{s.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Этап 3 */}
      <section id="stage3" className="scroll-mt-16 py-16 px-4 border-b border-teal-100">
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
      <section id="stage4" className="scroll-mt-16 py-16 px-4 border-b border-teal-100 bg-white">
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
      <section id="stage5" className="scroll-mt-16 py-16 px-4 border-b border-teal-100">
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
      <section id="stage6" className="scroll-mt-16 py-16 px-4 border-b border-teal-100 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Этап 6</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Визуализация в контексте среды</h2>
            <p className="text-teal-950/60 mt-2">
              Размещение элементов на фотографиях, проверка восприятия и коррекция визуального шума
            </p>
          </div>

          {/* Размещение элементов системы на фотографии пространства */}
          <h3 className="text-sm font-medium mb-4">Размещение элементов на фотографии пространства</h3>
          <div className="relative rounded-lg overflow-hidden border border-teal-100 shadow-sm">
            <Image
              src="/images/practica4/metro-before.png"
              alt="Фотомонтаж: элементы навигационной системы из Этапа 5, размещённые на реальной фотографии станции"
              width={1280}
              height={720}
              className="w-full h-auto"
            />
            {/* затемнение для читаемости наложенных элементов */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/45" aria-hidden="true" />

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
              <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-white/15">
                <span className="flex items-center gap-2 text-sm md:text-base font-medium">
                  <ArrowUpDown className="w-5 h-5" /> Пересадка · Линия 2
                </span>
                <span className="flex items-center gap-1.5 text-teal-50/80 text-sm font-medium">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-2.5">
                <span className="flex items-center gap-2 text-sm md:text-base font-medium">
                  <Accessibility className="w-5 h-5" /> Лифт · Выход №3
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
            функции.
          </p>

          {/* Проверка масштаба, читаемости, контраста, дистанции восприятия */}
          <h3 className="text-sm font-medium mt-10 mb-4">Проверка восприятия</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {perceptionChecks.map((c, i) => (
              <div key={i} className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mb-3">
                  <c.Icon className="w-5 h-5 text-teal-700" />
                </div>
                <p className="font-medium text-teal-800">{c.title}</p>
                <p className="text-sm text-teal-950/60 mt-1 leading-relaxed">{c.note}</p>
              </div>
            ))}
          </div>

          {/* Коррекция визуального шума и плотности информации */}
          <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
            <Minimize2 className="w-4 h-4 text-teal-700" /> Коррекция визуального шума и плотности информации
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {noiseCorrections.map((c, i) => (
              <div key={i} className="flex gap-3 bg-white border border-teal-100 rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-none mt-0.5" />
                <div>
                  <p className="font-medium text-teal-800 text-sm">{c.title}</p>
                  <p className="text-sm text-teal-950/60 mt-1 leading-relaxed">{c.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Сравнение «до» и «после» как итог коррекции */}
          <h3 className="text-sm font-medium mb-4">Результат коррекции: «до» и «после»</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden border border-teal-100 shadow-sm">
              <div className="bg-amber-100 text-amber-800 text-xs font-medium uppercase tracking-wide px-4 py-2">
                До — визуальный шум и высокая плотность
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
                После — упорядоченная среда и приоритет навигации
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
        </div>
      </section>

      {/* Этап 7 */}
      <section id="stage7" className="scroll-mt-16 py-16 px-4 bg-gradient-to-b from-[#f8fafc] to-teal-50">
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
