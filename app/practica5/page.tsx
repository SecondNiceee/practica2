import Image from "next/image"
import type { Metadata } from "next"
import {
  MapPin,
  Eye,
  Ruler,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Camera,
  Layers,
  Navigation,
  Map,
  Footprints,
  LogOut,
  AlertTriangle,
  Sparkles,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Практическая работа №5 — Визуализация в контексте среды",
  description:
    "Размещение разработанных элементов навигационной системы на фотографиях реального пространства станции метро «Речной вокзал».",
}

// Локация из practica4
const location = {
  name: "Станция метро «Речной вокзал»",
  type: "Транспортно-пересадочный узел / вестибюль метро",
  concept: "«Течение» — спокойный направленный поток, который ведёт пассажира как река ведёт воду к устью.",
}

// Зоны визуализации
const visualizationZones = [
  {
    id: "entrance",
    title: "Входная группа",
    description: "Приветственный указатель, общая карта-схема, первичная ориентация",
    elements: [
      "Крупный приветственный знак «Речной вокзал»",
      "Подвесные указатели направлений",
      "Напольная графика с направляющими линиями",
      "Информационная стела с картой станции",
    ],
    image: "/images/practica5/visualization-entrance.png",
  },
  {
    id: "escalator",
    title: "Эскалаторный холл",
    description: "Навигация к платформе, указатели линий, световые акценты",
    elements: [
      "Подвесные указатели «На платформу» / «Выход в город»",
      "Световые направляющие полосы вдоль стен",
      "Пиктограммы на колоннах",
      "Цветовое кодирование зон",
    ],
    image: "/images/practica5/visualization-escalator.png",
  },
  {
    id: "platform",
    title: "Платформа",
    description: "Информирование о направлениях поездов, зоны посадки, расписание",
    elements: [
      "Подвесные указатели направлений линий",
      "Цифровые табло с расписанием",
      "Напольная разметка зон посадки",
      "Схема линии с текущей позицией",
    ],
    image: "/images/practica5/visualization-platform.png",
  },
  {
    id: "exit",
    title: "Зона выхода",
    description: "Контрастные указатели выхода, направление к улицам и объектам",
    elements: [
      "Крупный янтарный указатель «Выход в город»",
      "Пиктограмма пешехода со стрелкой",
      "Напольная графика к выходу",
      "Указатели к ближайшим объектам",
    ],
    image: "/images/practica5/visualization-exit.png",
  },
]

// Принципы размещения
const placementPrinciples = [
  {
    title: "Дистанция считывания",
    description: "Крупные указатели (от 10м) на высоте 2.5-3м, мелкие пояснения на уровне глаз",
    Icon: Ruler,
  },
  {
    title: "Точки принятия решений",
    description: "Указатели перед развилками, не в момент поворота, а за 5-7 метров до него",
    Icon: Navigation,
  },
  {
    title: "Повторение информации",
    description: "Ключевые направления дублируются: потолочный знак → напольная графика → пиктограмма",
    Icon: Layers,
  },
  {
    title: "Визуальный коридор",
    description: "Свободное пространство вокруг знаков, реклама не пересекает линию навигации",
    Icon: Eye,
  },
]

// Элементы системы для размещения
const systemElements = [
  {
    type: "Подвесные указатели",
    specs: "Высота подвеса: 2.8м, размер: 120×40см, подсветка: LED",
    zones: ["Входная группа", "Эскалаторный холл", "Платформа"],
    color: "Бирюзовый фон, белый текст",
  },
  {
    type: "Напольная графика",
    specs: "Ширина линий: 10см, антискользящее покрытие",
    zones: ["Входная группа", "Зона выхода"],
    color: "Бирюзовые направляющие линии",
  },
  {
    type: "Настенные пиктограммы",
    specs: "Размер: 40×40см, материал: акрил с подсветкой",
    zones: ["Эскалаторный холл", "Платформа"],
    color: "Белая пиктограмма на бирюзовом круге",
  },
  {
    type: "Указатели выхода",
    specs: "Размер: 150×50см, яркость: 500 кд/м²",
    zones: ["Зона выхода"],
    color: "Янтарный фон, белый текст",
  },
  {
    type: "Информационные панели",
    specs: "Размер: 200×150см, интерактивный сенсорный экран",
    zones: ["Входная группа", "Платформа"],
    color: "Тёмный графит с бирюзовыми акцентами",
  },
]

// Проверка восприятия в реальной среде
const perceptionChecks = [
  {
    check: "Масштаб в пространстве",
    before: "Элементы кажутся достаточными на макете",
    after: "Проверено: кегль читается с 10-15 метров, пропорции соответствуют высоте потолков",
    status: "success",
  },
  {
    check: "Контраст с окружением",
    before: "Цвета выбраны по теории",
    after: "Проверено: бирюзовый контрастирует с бетоном и металлом, янтарный выделяется в любом освещении",
    status: "success",
  },
  {
    check: "Читаемость в движении",
    before: "Шрифт читается статично",
    after: "Проверено: крупный кегль и короткие надписи считываются на ходу за 2-3 секунды",
    status: "success",
  },
  {
    check: "Интеграция с архитектурой",
    before: "Элементы существуют отдельно",
    after: "Проверено: горизонтальный ритм знаков поддерживает линии потолка и колонн",
    status: "success",
  },
  {
    check: "Визуальная экология",
    before: "Реклама конкурирует с навигацией",
    after: "Проверено: навигация выведена в отдельную зону, реклама подчинена модульной сетке",
    status: "success",
  },
]

// Сценарий пользователя
const userScenario = [
  {
    step: 1,
    zone: "Вход",
    action: "Пассажир входит с улицы",
    sees: "Приветственный знак «Речной вокзал», карта-схема",
    decision: "Понимает структуру станции, видит направление к турникетам",
    Icon: MapPin,
  },
  {
    step: 2,
    zone: "Вестибюль",
    action: "Движется к турникетам",
    sees: "Напольные линии, подвесной указатель «Вход на станцию»",
    decision: "Следует по направляющим, не теряет маршрут",
    Icon: Footprints,
  },
  {
    step: 3,
    zone: "Эскалатор",
    action: "Спускается на платформу",
    sees: "Указатели направлений линий, световые полосы",
    decision: "Знает, какой эскалатор ведёт к нужной линии",
    Icon: Navigation,
  },
  {
    step: 4,
    zone: "Платформа",
    action: "Ожидает поезд",
    sees: "Табло с расписанием, схема линии, разметка посадки",
    decision: "Знает время прибытия, стоит в правильной зоне",
    Icon: Map,
  },
  {
    step: 5,
    zone: "Выход",
    action: "Покидает станцию",
    sees: "Янтарный указатель «Выход в город», напольная графика",
    decision: "Быстро находит выход, не блуждает",
    Icon: LogOut,
  },
]

export default function Practica5Page() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-16 border-b border-teal-100 bg-gradient-to-b from-teal-50 to-[#f8fafc]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono text-teal-700/70 uppercase tracking-widest">
            Практическое занятие №5
          </span>
          <span className="block mt-3">
            <span className="inline-block px-3 py-1 bg-teal-700 text-white rounded-full text-sm font-medium">
              Титов Николай ТКБО-02-23
            </span>
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-4 mb-6 text-balance">
            Визуализация в контексте среды
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium">
              Фотомонтажи
            </span>
            <span className="text-teal-700/50">—</span>
            <span className="text-teal-900/70">Размещение элементов в реальном пространстве</span>
          </div>
          <p className="text-teal-950/70 max-w-2xl mx-auto leading-relaxed text-pretty">
            Интеграция разработанной навигационной системы в реальную среду станции метро «Речной вокзал»: 
            фотомонтажи, схемы размещения и проверка восприятия в контексте.
          </p>
        </div>
      </section>

      {/* Контекст проекта */}
      <section id="context" className="py-16 px-4 border-b border-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Контекст</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Проект и локация</h2>
            <p className="text-teal-950/60 mt-2">Продолжение работы из Практики №4</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-teal-50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-teal-700" />
                <h3 className="font-medium text-teal-800">Локация</h3>
              </div>
              <p className="text-sm">{location.name}</p>
              <p className="text-xs text-teal-700/70 mt-1">{location.type}</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-amber-600" />
                <h3 className="font-medium text-amber-800">Концепция</h3>
              </div>
              <p className="text-sm text-amber-900">{location.concept}</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Camera className="w-5 h-5 text-teal-700" />
                <h3 className="font-medium text-teal-800">Этап 6</h3>
              </div>
              <p className="text-sm">Визуализация элементов в реальной среде: фотомонтажи и схемы размещения</p>
            </div>
          </div>
        </div>
      </section>

      {/* Принципы размещения */}
      <section id="principles" className="py-16 px-4 border-b border-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Методология</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Принципы размещения элементов</h2>
            <p className="text-teal-950/60 mt-2">Правила интеграции навигации в архитектурную среду</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {placementPrinciples.map((p, i) => (
              <div key={i} className="bg-white border border-teal-100 rounded-lg p-5">
                <span className="flex-none w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center mb-3">
                  <p.Icon className="w-5 h-5" />
                </span>
                <h3 className="font-medium text-teal-800 mb-2">{p.title}</h3>
                <p className="text-sm text-teal-950/70">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Схема размещения */}
      <section id="scheme" className="py-16 px-4 border-b border-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Схема</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">План размещения элементов</h2>
            <p className="text-teal-950/60 mt-2">Расположение навигационных элементов в пространстве станции</p>
          </div>

          <div className="mb-8">
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden border border-teal-100 shadow-sm bg-white">
              <Image
                src="/images/practica5/placement-scheme.png"
                alt="Схема размещения навигационных элементов на станции метро"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-teal-950/60 mt-3 text-center">
              Схема расположения навигационных элементов: подвесные указатели, напольная графика, информационные панели
            </p>
          </div>

          {/* Спецификации элементов */}
          <div className="overflow-x-auto rounded-lg border border-teal-100">
            <table className="w-full text-sm">
              <thead className="bg-teal-50">
                <tr>
                  <th className="text-left py-3 px-4 font-medium text-teal-800">Тип элемента</th>
                  <th className="text-left py-3 px-4 font-medium text-teal-800">Технические характеристики</th>
                  <th className="text-left py-3 px-4 font-medium text-teal-800">Зоны размещения</th>
                  <th className="text-left py-3 px-4 font-medium text-teal-800">Цветовое решение</th>
                </tr>
              </thead>
              <tbody>
                {systemElements.map((el, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-teal-50/30"}>
                    <td className="py-3 px-4 font-medium text-teal-700">{el.type}</td>
                    <td className="py-3 px-4 text-teal-950/70">{el.specs}</td>
                    <td className="py-3 px-4 text-teal-950/70">{el.zones.join(", ")}</td>
                    <td className="py-3 px-4 text-teal-950/70">{el.color}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Визуализации по зонам */}
      <section id="visualizations" className="py-16 px-4 border-b border-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Фотомонтажи</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Визуализация по зонам станции</h2>
            <p className="text-teal-950/60 mt-2">Размещение элементов навигации в реальном пространстве</p>
          </div>

          <div className="space-y-12">
            {visualizationZones.map((zone, i) => (
              <div key={zone.id} className="bg-white border border-teal-100 rounded-xl overflow-hidden">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={zone.image}
                    alt={`Визуализация: ${zone.title}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-teal-700 text-white rounded-full text-sm font-medium">
                      Зона {i + 1}: {zone.title}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-teal-800 mb-2">{zone.title}</h3>
                  <p className="text-sm text-teal-950/70 mb-4">{zone.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {zone.elements.map((el, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{el}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* До/После */}
      <section id="before-after" className="py-16 px-4 border-b border-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Сравнение</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">До и после редизайна</h2>
            <p className="text-teal-950/60 mt-2">Визуальное сравнение исходного состояния и проектного решения</p>
          </div>

          <div className="mb-8">
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden border border-teal-100 shadow-sm">
              <Image
                src="/images/practica5/before-after.png"
                alt="Сравнение до и после внедрения навигационной системы"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h3 className="font-medium text-amber-800">До: Проблемы</h3>
              </div>
              <ul className="space-y-2 text-sm text-amber-900">
                <li>Разрозненные указатели без единой логики</li>
                <li>Визуальный шум от рекламы и объявлений</li>
                <li>Отсутствие цветового кодирования зон</li>
                <li>Нет напольной навигации</li>
                <li>Пассажир теряется на развилках</li>
              </ul>
            </div>
            <div className="bg-teal-50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-teal-600" />
                <h3 className="font-medium text-teal-800">После: Решения</h3>
              </div>
              <ul className="space-y-2 text-sm text-teal-900">
                <li>Единая система подвесных указателей</li>
                <li>Реклама подчинена модульной сетке</li>
                <li>Бирюзовый — навигация, янтарный — выход</li>
                <li>Направляющие линии на полу</li>
                <li>Интуитивный маршрут от входа до платформы</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Сценарий пользователя */}
      <section id="scenario" className="py-16 px-4 border-b border-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Верификация</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Сценарий пользователя</h2>
            <p className="text-teal-950/60 mt-2">Проверка навигации через путь пассажира от входа до выхода</p>
          </div>

          <div className="relative">
            {/* Линия связи */}
            <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-teal-200 hidden md:block" />

            <div className="space-y-6">
              {userScenario.map((step, i) => (
                <div key={i} className="relative flex gap-6">
                  <div className="hidden md:flex flex-none w-12 h-12 rounded-full bg-teal-700 text-white items-center justify-center z-10">
                    <step.Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 bg-white border border-teal-100 rounded-lg p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="md:hidden flex-none w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center text-sm">
                        {step.step}
                      </span>
                      <div>
                        <span className="text-xs font-mono text-teal-700/70">Шаг {step.step}</span>
                        <h3 className="font-medium text-teal-800">{step.zone}</h3>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-xs font-medium text-teal-700/70 uppercase mb-1">Действие</p>
                        <p>{step.action}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-teal-700/70 uppercase mb-1">Видит</p>
                        <p>{step.sees}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-teal-700/70 uppercase mb-1">Решение</p>
                        <p className="text-teal-700">{step.decision}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Проверка восприятия */}
      <section id="perception" className="py-16 px-4 border-b border-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Проверка</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Восприятие в реальной среде</h2>
            <p className="text-teal-950/60 mt-2">Верификация элементов навигации в контексте архитектуры</p>
          </div>

          <div className="space-y-4">
            {perceptionChecks.map((check, i) => (
              <div key={i} className="bg-white border border-teal-100 rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-none w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-teal-800 mb-2">{check.check}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-teal-50/50 rounded p-3">
                        <p className="text-xs font-medium text-teal-700/70 uppercase mb-1">На макете</p>
                        <p className="text-teal-950/70">{check.before}</p>
                      </div>
                      <div className="bg-teal-50 rounded p-3">
                        <p className="text-xs font-medium text-teal-700/70 uppercase mb-1">В реальной среде</p>
                        <p className="text-teal-800">{check.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Выводы */}
      <section id="conclusion" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Итоги</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Заключение</h2>
            <p className="text-teal-950/60 mt-2">Результаты визуализации и интеграции системы в среду</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="font-medium text-teal-800 mb-4">Достигнутые цели</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Элементы навигации интегрированы в архитектурную среду станции без конфликтов с существующими конструкциями</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Масштаб и пропорции элементов соответствуют реальным дистанциям считывания</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Цветовое решение обеспечивает контраст с нейтральным окружением</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Сценарий пользователя подтверждает работоспособность системы</span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-6">
              <h3 className="font-medium text-amber-800 mb-4">Ключевые выводы</h3>
              <p className="text-sm text-amber-900 leading-relaxed mb-4">
                Визуализация в контексте среды — критически важный этап проектирования навигационной системы. 
                Фотомонтажи позволяют выявить проблемы масштаба, контраста и интеграции до начала производства элементов.
              </p>
              <p className="text-sm text-amber-900 leading-relaxed">
                Концепция «Течение» успешно реализована: направляющие линии ведут пассажира как река ведёт воду, 
                а цветовая логика (бирюзовый → движение, янтарный → выход) интуитивно понятна и не требует обучения.
              </p>
            </div>
          </div>

          {/* Навигация к другим практикам */}
          <div className="mt-10 pt-10 border-t border-teal-100">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="/practica4" 
                className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium hover:bg-teal-200 transition-colors flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Практика №4: Проектирование системы
              </a>
              <span className="text-teal-700/30">|</span>
              <span className="text-sm text-teal-950/60">
                Практика №5: Визуализация в среде
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
