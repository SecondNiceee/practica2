import Image from "next/image"
import type { Metadata } from "next"
import {
  Eye,
  Layers,
  Shapes,
  Signpost,
  MessageSquareText,
  Heart,
  Lightbulb,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Практическая работа №3 — Уровни визуального восприятия",
  description:
    "Инфографика «Уровни визуального восприятия»: перевод теоретических знаний в визуально структурированную форму через метафору маршрута",
}

// Этап 1 — тема и коммуникативная задача
const briefData = {
  topic: "Уровни визуального восприятия",
  goal:
    "Систематизировать и объяснить, как зритель проходит путь от физической регистрации света до глубинной интерпретации образа — показать восприятие как последовательный процесс из 7 уровней",
  task: "Объяснить и систематизировать (показать процесс)",
  audience: "Студенты-дизайнеры и студенты смежных специальностей",
  complexity: "Средний уровень — базовая теория восприятия без узкоспециальной терминологии",
  format: "Презентационный слайд (инфографика 16:9)",
}

// Этап 2 — ключевые понятия (отбор существенного)
const keyConcepts = [
  { term: "Стимул", note: "Физический сигнал — свет, попадающий на сетчатку" },
  { term: "Фигура и фон", note: "Выделение объекта из окружения (гештальт)" },
  { term: "Образ / форма", note: "Узнавание целостного объекта" },
  { term: "Знак", note: "Иконический, индексальный, символический" },
  { term: "Значение", note: "Считывание смысла в контексте" },
  { term: "Эмоция", note: "Аффективная и ассоциативная реакция" },
  { term: "Интерпретация", note: "Личный и культурный опыт, идея" },
]

const excluded = [
  "Анатомия глаза в деталях (палочки, колбочки) — избыточно для дизайн-задачи",
  "Нейрофизиология зрительной коры — слишком специально для аудитории",
  "Частные оптические иллюзии — отвлекают от логики уровней",
]

// Этап 3 — логическая структура и сценарий чтения
const readingScenario = {
  direction: "Снизу вверх / слева направо — «от простого к сложному, от стимула к смыслу»",
  logic: "От общего к частному внутри блока и от причины к следствию между уровнями",
  hierarchy: [
    "Заголовок — «Уровни визуального восприятия»",
    "Разделы — 7 последовательных уровней-станций",
    "Подпункты — название уровня, что происходит, пример",
    "Пояснения — короткая подпись и иконка-маркер",
  ],
}

// 7 уровней восприятия — станции маршрута
const levels = [
  {
    n: 1,
    title: "Сенсорный",
    subtitle: "Физическая регистрация",
    what: "Свет попадает на сетчатку. Мозг фиксирует яркость, контраст, движение — ещё без смысла.",
    example: "Вспышка, яркое пятно, контрастная граница",
    Icon: Eye,
  },
  {
    n: 2,
    title: "Перцептивный",
    subtitle: "Фигура и фон",
    what: "Зрительная система отделяет объект от окружения, группирует элементы по законам гештальта.",
    example: "Логотип читается на пёстром фоне",
    Icon: Layers,
  },
  {
    n: 3,
    title: "Распознавание",
    subtitle: "Формы и объекты",
    what: "Выделенная фигура сопоставляется с памятью — «это дерево», «это лицо», «это стрелка».",
    example: "Силуэт узнаётся как конкретный предмет",
    Icon: Shapes,
  },
  {
    n: 4,
    title: "Знаковый",
    subtitle: "Семиотика",
    what: "Объект прочитывается как знак: иконический, индексальный или символический.",
    example: "Красный круг с чертой → «запрещено»",
    Icon: Signpost,
  },
  {
    n: 5,
    title: "Смысловой",
    subtitle: "Значение и контекст",
    what: "Знаки складываются в сообщение, контекст уточняет считываемый смысл.",
    example: "Тот же знак в городе и в игре читается по-разному",
    Icon: MessageSquareText,
  },
  {
    n: 6,
    title: "Эмоциональный",
    subtitle: "Чувство и ассоциация",
    what: "Образ вызывает аффективную реакцию: симпатию, тревогу, доверие, азарт.",
    example: "Тёплый свет и мягкие формы → уют",
    Icon: Heart,
  },
  {
    n: 7,
    title: "Концептуальный",
    subtitle: "Интерпретация и идея",
    what: "Личный и культурный опыт превращает образ в идею и личное отношение.",
    example: "Зритель формулирует «о чём это для меня»",
    Icon: Lightbulb,
  },
]

// Этап 4 — модель и метафора
const modelData = {
  model: "Таймлайн / маршрут (путь восприятия)",
  metaphor:
    "Восприятие как восхождение по маршруту: зритель движется от станции к станции — от вспышки света до собственной идеи. Каждый уровень — остановка, без которой не пройти дальше.",
  why: "Маршрут подчёркивает последовательность и необратимость процесса: нельзя считать смысл, не распознав форму. Линия пути ведёт взгляд и задаёт сценарий чтения.",
}

// Этап 5 — композиционная сетка (зоны)
const gridZones = [
  { zone: "Заголовок", role: "Верхняя зона — тема и коммуникативная за��ача" },
  { zone: "Навигация", role: "Линия маршрута и нумерация 1→7 — ведёт взгляд" },
  { zone: "Основные блоки", role: "7 станций-карточек уровней восприятия" },
  { zone: "Пояснения", role: "Подписи: что происходит + пример под каждым уровнем" },
  { zone: "Визуальные акценты", role: "Янтарные маркеры старта и финала маршрута" },
]

// Этап 6 — визуальная система
const palette = [
  { color: "#1e3a8a", name: "Тёмно-синий", meaning: "База, глубина, начало пути" },
  { color: "#2563eb", name: "Синий", meaning: "Основной — структура и логика" },
  { color: "#60a5fa", name: "Небесный", meaning: "Навигация, связи, линии" },
  { color: "#f59e0b", name: "Янтарный", meaning: "Акцент — ключевые точки маршрута" },
  { color: "#fffbeb", name: "Кремовый", meaning: "Фон, воздух, чистота" },
]

const typography = {
  heading: "Geometric sans-serif (Geist) — жирный, крупный кегль для заголовков",
  body: "Тот же гротеск, обычное начертание, интерлиньяж 1.5 для читаемости",
  hierarchy: "Заголовок 1 → название уровня → пояснение → пример (4 ступени контраста)",
}

const visualElements = [
  { element: "Иконки-пиктограммы", note: "Глаз, слои, фигура, знак, реплика, сердце, лампочка — по одной на уровень" },
  { element: "Линия маршрута", note: "Соединяет станции, задаёт направление чтения снизу вверх" },
  { element: "Номера-маркеры", note: "Круглые метки 1–7 фиксируют последовательность" },
  { element: "Стрелки связи", note: "Показывают причинно-следственный переход между уровнями" },
]

export default function Practica3Page() {
  return (
    <main className="min-h-screen bg-[#fffbeb] text-[#0f172a]">
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-16 border-b border-blue-100 bg-gradient-to-b from-blue-50 to-[#fffbeb]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono text-blue-700/70 uppercase tracking-widest">
            Практическое занятие №3
          </span>
          <span className="inline-block mt-3 px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
            Титов Николай ТКБО-02-23
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-4 mb-6 text-balance">
            Уровни визуального восприятия
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium">
              Инфографика
            </span>
            <span className="text-blue-700/50">—</span>
            <span className="text-blue-900/70">Метафора маршрута восприятия</span>
          </div>
          <p className="text-blue-950/70 max-w-2xl mx-auto leading-relaxed text-pretty">
            Перевод теоретических знаний о восприятии в визуально структурированную форму: путь зрителя
            от физической вспышки света до личной интерпретации образа в семи уровнях.
          </p>
        </div>
      </section>

      {/* Этап 1 */}
      <section id="stage1" className="py-16 px-4 border-b border-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-blue-700/70">Этап 1</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Тема и коммуникативная задача</h2>
            <p className="text-blue-950/60 mt-2">Тема, цель инфографики, аудитория и формат</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs font-medium text-blue-700/70 uppercase mb-2">Тема</h3>
                <p className="text-xl font-medium text-blue-700">{briefData.topic}</p>
              </div>
              <div>
                <h3 className="text-xs font-medium text-blue-700/70 uppercase mb-2">Коммуникативная задача</h3>
                <p className="text-sm">{briefData.task}</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xs font-medium text-blue-700/70 uppercase mb-2">Цель инфографики</h3>
                <p className="text-sm leading-relaxed">{briefData.goal}</p>
              </div>
              <div>
                <h3 className="text-xs font-medium text-blue-700/70 uppercase mb-2">Целевая аудитория</h3>
                <p className="text-sm leading-relaxed">{briefData.audience}</p>
              </div>
              <div>
                <h3 className="text-xs font-medium text-blue-700/70 uppercase mb-2">Уровень сложности</h3>
                <p className="text-sm leading-relaxed">{briefData.complexity}</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xs font-medium text-blue-700/70 uppercase mb-2">Формат</h3>
                <p className="text-sm leading-relaxed">{briefData.format}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Этап 2 */}
      <section id="stage2" className="py-16 px-4 border-b border-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-blue-700/70">Этап 2</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Сбор и первичный анализ информации</h2>
            <p className="text-blue-950/60 mt-2">Отбор ключевых понятий и исключение избыточного</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="text-sm font-medium mb-4">Ключевые понятия</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {keyConcepts.map((c, i) => (
                  <div key={i} className="bg-white border border-blue-100 rounded-lg p-4">
                    <p className="font-medium text-blue-700">{c.term}</p>
                    <p className="text-sm text-blue-950/60 mt-1">{c.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Исключено как второстепенное</h3>
              <ul className="space-y-3">
                {excluded.map((item, i) => (
                  <li key={i} className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-sm text-amber-900">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Этап 3 */}
      <section id="stage3" className="py-16 px-4 border-b border-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-blue-700/70">Этап 3</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Логическое структурирование</h2>
            <p className="text-blue-950/60 mt-2">Иерархия смысловых блоков и сценарий чтения</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xs font-medium text-blue-700/70 uppercase mb-2">Сценарий чтения</h3>
              <p className="text-sm leading-relaxed font-medium">{readingScenario.direction}</p>
              <p className="text-sm leading-relaxed text-blue-950/70 mt-2">{readingScenario.logic}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xs font-medium text-blue-700/70 uppercase mb-3">Иерархия</h3>
              <ol className="space-y-2">
                {readingScenario.hierarchy.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="flex-none w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Этап 4 */}
      <section id="stage4" className="py-16 px-4 border-b border-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-blue-700/70">Этап 4</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Визуальная модель и метафора</h2>
            <p className="text-blue-950/60 mt-2">Форма представления информации и её образ</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-6">
              <h3 className="text-xs font-medium text-amber-700 uppercase mb-2">Модель</h3>
              <p className="text-sm leading-relaxed font-medium text-amber-900">{modelData.model}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xs font-medium text-blue-700/70 uppercase mb-2">Метафора</h3>
              <p className="text-sm leading-relaxed">{modelData.metaphor}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xs font-medium text-blue-700/70 uppercase mb-2">Почему она работает</h3>
              <p className="text-sm leading-relaxed">{modelData.why}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Этап 5 */}
      <section id="stage5" className="py-16 px-4 border-b border-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-blue-700/70">Этап 5</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Композиционная сетка</h2>
            <p className="text-blue-950/60 mt-2">Зоны слайда и распределение по уровням значимости</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {gridZones.map((z, i) => (
              <div key={i} className="bg-white border border-blue-100 rounded-lg p-5">
                <span className="text-xs font-mono text-blue-700/50">0{i + 1}</span>
                <h3 className="font-medium text-blue-700 mt-1">{z.zone}</h3>
                <p className="text-sm text-blue-950/60 mt-2">{z.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Этап 6 */}
      <section id="stage6" className="py-16 px-4 border-b border-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-blue-700/70">Этап 6</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Визуальная система</h2>
            <p className="text-blue-950/60 mt-2">Цвет, типографика и графические элементы</p>
          </div>

          {/* Палитра */}
          <div className="mb-10">
            <h3 className="text-lg font-medium mb-4">Цветовая палитра</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {palette.map((item, i) => (
                <div key={i} className="text-center">
                  <div
                    className="w-full aspect-square rounded-lg mb-2 shadow-sm border border-black/5"
                    style={{ backgroundColor: item.color }}
                  />
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-blue-950/50">{item.color}</p>
                  <p className="text-xs text-blue-950/60 mt-1">{item.meaning}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Типографика */}
          <div className="mb-10">
            <h3 className="text-lg font-medium mb-4">Типографика</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-blue-100 rounded-lg p-6">
                <h4 className="text-xs font-medium text-blue-700/70 uppercase mb-2">Заголовки</h4>
                <p className="text-sm">{typography.heading}</p>
              </div>
              <div className="bg-white border border-blue-100 rounded-lg p-6">
                <h4 className="text-xs font-medium text-blue-700/70 uppercase mb-2">Текст</h4>
                <p className="text-sm">{typography.body}</p>
              </div>
              <div className="bg-white border border-blue-100 rounded-lg p-6">
                <h4 className="text-xs font-medium text-blue-700/70 uppercase mb-2">Иерархия</h4>
                <p className="text-sm">{typography.hierarchy}</p>
              </div>
            </div>
          </div>

          {/* Графические элементы */}
          <div className="mb-10">
            <h3 className="text-lg font-medium mb-4">Графические элементы</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {visualElements.map((el, i) => (
                <div key={i} className="bg-blue-50 rounded-lg p-5">
                  <h4 className="font-medium text-sm text-blue-700">{el.element}</h4>
                  <p className="text-sm text-blue-950/60 mt-1">{el.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Мудборды */}
          <div>
            <h3 className="text-lg font-medium mb-4">Мудборды</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { src: "/images/practica3/mood-visual.png", title: "Образный мудборд", description: "Глаз, гештальт, знаки, маршрут, нейроны" },
                { src: "/images/practica3/mood-color.png", title: "Цветовой мудборд", description: "Синий → ян��арный на кремовом фоне" },
                { src: "/images/practica3/mood-typography.png", title: "Типографический мудборд", description: "Геометрический гротеск, чёткая иерархия" },
              ].map((board, i) => (
                <div key={i} className="space-y-2">
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-blue-50 border border-blue-100">
                    <Image src={board.src || "/placeholder.svg"} alt={board.title} fill className="object-cover" />
                  </div>
                  <h4 className="font-medium text-sm">{board.title}</h4>
                  <p className="text-xs text-blue-950/60">{board.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Этап 7 — Сборка инфографики */}
      <section id="stage7" className="py-16 px-4 border-b border-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-blue-700/70">Этап 7</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Сборка инфографики</h2>
            <p className="text-blue-950/60 mt-2">Маршрут восприятия — финальная композиция из 7 уровней</p>
          </div>

          {/* Интерактивный маршрут уровней */}
          <div className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-2xl p-6 md:p-10 mb-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-sm font-medium text-blue-700">
                <Eye className="w-5 h-5" />
                <span>Старт: свет</span>
              </div>
              <div className="flex-1 mx-4 border-t-2 border-dashed border-blue-200" />
              <div className="flex items-center gap-2 text-sm font-medium text-amber-600">
                <Lightbulb className="w-5 h-5" />
                <span>Финал: идея</span>
              </div>
            </div>

            <ol className="relative">
              {/* вертикальная линия маршрута */}
              <div className="absolute left-5 md:left-6 top-2 bottom-2 w-0.5 bg-blue-200" aria-hidden="true" />
              {levels.map((lvl, i) => {
                const isLast = i === levels.length - 1
                const isFirst = i === 0
                const accent = isFirst || isLast
                return (
                  <li key={lvl.n} className="relative flex gap-4 md:gap-6 pb-8 last:pb-0">
                    <div
                      className={`relative z-10 flex-none w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-sm ${
                        accent ? "bg-amber-500 text-white" : "bg-blue-600 text-white"
                      }`}
                    >
                      <lvl.Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 bg-white border border-blue-100 rounded-xl p-5 -mt-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-xs font-mono text-blue-700/50">Уровень {lvl.n}</span>
                        <h3 className="text-lg font-medium text-blue-800">{lvl.title}</h3>
                        <span className="text-sm text-amber-600">{lvl.subtitle}</span>
                      </div>
                      <p className="text-sm text-blue-950/70 mt-2 leading-relaxed">{lvl.what}</p>
                      <div className="flex items-center gap-2 mt-3 text-xs text-blue-950/50">
                        <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                        <span className="italic">{lvl.example}</span>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>

          {/* Презентационный слайд 16:9 — собран из элементов маршрута */}
          <h3 className="text-lg font-medium mb-4">Презентационный слайд</h3>
          <div className="rounded-xl overflow-hidden shadow-2xl border border-blue-100">
            {/* обёртка с горизонтальным скроллом на узких экранах */}
            <div className="overflow-x-auto bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#1e3a8a]">
              <div className="min-w-[860px] aspect-[16/9] flex flex-col p-8 lg:p-10 text-white">
                {/* Шапка слайда */}
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-blue-200">
                      Инфографика
                    </span>
                    <h4 className="text-2xl lg:text-3xl font-medium mt-1 text-balance">
                      Уровни визуального восприятия
                    </h4>
                    <p className="text-sm text-blue-100/80 mt-1">
                      Маршрут зрителя — от вспышки света до собственной идеи
                    </p>
                  </div>
                  <span className="flex-none px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-medium">
                    Титов Николай ТКБО-02-23
                  </span>
                </div>

                {/* Маршрут из 7 станций */}
                <div className="flex-1 flex items-center">
                  <div className="relative w-full">
                    {/* Линия маршрута */}
                    <div
                      className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-blue-300/40"
                      aria-hidden="true"
                    />
                    {/* Метки старта и финиша на линии */}
                    <div className="relative flex items-stretch justify-between gap-2">
                      {levels.map((lvl, i) => {
                        const accent = i === 0 || i === levels.length - 1
                        // ступенчатый подъём маршрута
                        const lift = ["mt-8", "mt-4", "mt-0", "-mt-4", "-mt-8", "-mt-12", "-mt-16"][i]
                        return (
                          <div key={lvl.n} className={`flex-1 flex flex-col items-center text-center ${lift}`}>
                            {/* карточка-подпись */}
                            <div className="mb-3 px-2">
                              <p className="text-[11px] font-mono text-blue-200/70">Ур. {lvl.n}</p>
                              <p className="text-sm font-medium leading-tight">{lvl.title}</p>
                              <p className="text-[11px] text-amber-300 leading-tight mt-0.5">{lvl.subtitle}</p>
                            </div>
                            {/* маркер-станция */}
                            <div
                              className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ring-4 ring-[#2563eb] ${
                                accent ? "bg-amber-500" : "bg-white"
                              }`}
                            >
                              <lvl.Icon className={`w-6 h-6 ${accent ? "text-white" : "text-blue-700"}`} />
                            </div>
                            {/* номер */}
                            <span className="mt-2 text-xs font-mono text-blue-100/70">{lvl.n}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Нижняя легенда: старт → финал */}
                <div className="flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-2 text-amber-300 font-medium">
                    <Eye className="w-4 h-4" /> Старт: физический свет
                  </span>
                  <span className="inline-flex items-center gap-2 text-blue-100/70">
                    Стимул <ArrowRight className="w-3.5 h-3.5" /> форма <ArrowRight className="w-3.5 h-3.5" /> знак{" "}
                    <ArrowRight className="w-3.5 h-3.5" /> смысл <ArrowRight className="w-3.5 h-3.5" /> идея
                  </span>
                  <span className="inline-flex items-center gap-2 text-amber-300 font-medium">
                    Финал: личная идея <Lightbulb className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-blue-950/50 mt-3">
            Слайд собран из тех же графических элементов, что и разбор выше: иконки-пиктограммы, нумерованные
            маркеры-станции, линия маршрута и янтарные акценты старта и финала.
          </p>
        </div>
      </section>

      {/* Этап 8 — Выводы */}
      <section id="stage8" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono text-blue-700/70">Этап 8</span>
          <h2 className="text-2xl md:text-3xl font-medium mt-2 mb-6">Пояснения и выводы</h2>
          <div className="bg-blue-50 rounded-lg p-6 md:p-8 text-left">
            <p className="text-sm leading-relaxed mb-4">
              Инфографика переводит абстрактную теорию восприятия в наглядный маршрут из семи уровней —
              от сенсорной регистрации света до концептуальной интерпретации образа. Зритель читает её
              снизу вверх, повторяя сам порядок восприятия.
            </p>
            <p className="text-sm leading-relaxed mb-4">Каждый графический приём работает на понимание:</p>
            <ul className="text-sm leading-relaxed mb-4 list-disc list-inside space-y-1">
              <li>Линия маршрута и нумерация 1→7 задают сценарий чтения и подчёркивают последовательность</li>
              <li>Иконки-пиктограммы быстро кодируют суть каждого уровня без длинного текста</li>
              <li>Синяя гамма объединяет систему, янтарные акценты выделяют старт и финал пути</li>
              <li>Шрифтовая иерархия (уровень → пояснение → пример) ведёт взгляд от главного к деталям</li>
            </ul>
            <p className="text-sm leading-relaxed">
              Визуальная форма меняет смысл теоретической информации: разрозненные понятия превращаются в
              единый связный процесс. Метафора маршрута делает невидимый механизм восприятия зримым и
              запоминаемым — теория считывается без устных пояснений.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-blue-100">
        <div className="max-w-6xl mx-auto text-center text-sm text-blue-950/60">
          <p>Практическая работа №3 — Инфографика как коммуникативный продукт</p>
          <p className="mt-1">Тема: «Уровни визуального восприятия» · Титов Николай ТКБО-02-23</p>
        </div>
      </footer>
    </main>
  )
}
