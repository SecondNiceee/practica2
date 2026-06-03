import Image from "next/image"
import type { Metadata } from "next"
import {
  MapPin,
  Users,
  Navigation,
  Lightbulb,
  Map,
  Compass,
  Footprints,
  Armchair,
  LogOut,
  Signpost,
  Type,
  PanelTop,
  Megaphone,
  Sun,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Практическая работа №4 — Визуальные коммуникации в городском пространстве",
  description:
    "Проектирование целостной визуальной системы для станции метро: анализ среды, аудитория и сценарии, концепция образа, навигация и визуальная экология.",
}

// Этап 1 — выбор и анализ пространства
const location = {
  name: "Станция метро «Речной вокзал»",
  type: "Транспортно-пересадочный узел / вестибюль метро",
  architecture:
    "Просторный наземный вестибюль с высокими потолками и колоннами, остеклённые входные группы, бетон и металл, длинные эскалаторные холлы. Архитектура нейтральная и функциональная, но лишённая выраженной идентичности.",
  flows:
    "Плотные встречные потоки в часы пик: вход с улицы → кассы и турникеты → эскалаторы → платформа. Точки скопления — у турникетов, схемы линий и эскалаторов.",
}

const problems = [
  {
    title: "Дезориентация",
    text: "Указатели разрозненны, нет единой логики направлений, новый пассажир теряется на развилках.",
  },
  {
    title: "Визуальный шум",
    text: "Избыток рекламы, наклеек и объявлений разного стиля перекрывает функциональную навигацию.",
  },
  {
    title: "Отсутствие идентичности",
    text: "Пространство обезличено: ничто не связывает станцию с названием места и районом.",
  },
  {
    title: "Агрессивная реклама",
    text: "Яркие коммерческие носители конкурируют за внимание и спорят с системой навигации.",
  },
]

// Этап 2 — аудитория (Таблица 1)
const audienceTable = [
  { param: "Локация", value: "Станция метро «Речной вокзал», наземный вестибюль" },
  { param: "Основная аудитория", value: "Городские пассажиры — жители района и транзитные пользователи" },
  { param: "Возрастные группы", value: "Студенты, взрослые работающие, пожилые, семьи с детьми" },
  { param: "Цели пребывания", value: "Транзит, пересадка, встреча, краткое ожидание" },
  { param: "Скорость движения", value: "Высокая в часы пик, средняя в межпиковое время" },
  { param: "Уровень внимания", value: "Низкий — внимание рассеяно, считывание «на бегу»" },
  { param: "Эмоциональное состояние", value: "Спешка, усталость, иногда тревога опоздать" },
  { param: "Основные потребности", value: "Быстрая навигация, безопасность, понятная информация" },
  { param: "Проблемы взаимодействия", value: "Потеря ориентации, визуальный шум, нехватка указателей" },
  { param: "Сценарий входа", value: "Заходит с улицы через остеклённую входную группу" },
  { param: "Сценарий ориентации", value: "Ищет кассы, турникеты и нужное направление линии" },
  { param: "Сценарий движения", value: "Движется к эскалатору и платформе по указателям" },
  { param: "Сценарий пребывания", value: "Ожидает поезд, встречает, сверяется со схемой" },
  { param: "Сценарий выхода", value: "Покидает станцию по контрастным указателям «Выход в город»" },
]

// Этап 2 — сценарии (Таблица 2)
const scenarioTable = [
  {
    stage: "Вход",
    action: "Заходит в пространство",
    need: "Понять структуру места",
    solution: "Карта-схема, крупный приветственный указатель",
    Icon: Compass,
  },
  {
    stage: "Ориентация",
    action: "Ищет нужную зону",
    need: "Быстро считать информацию",
    solution: "Цветовая навигация по линиям и зонам",
    Icon: Map,
  },
  {
    stage: "Движение",
    action: "Перемещается",
    need: "Не терять маршрут",
    solution: "Напольная графика и пиктограммы-маркеры",
    Icon: Footprints,
  },
  {
    stage: "Пребывание",
    action: "Находится в зоне ожидания",
    need: "Комфорт и информирование",
    solution: "Инфопанели и медианосители с расписанием",
    Icon: Armchair,
  },
  {
    stage: "Выход",
    action: "Покидает пространство",
    need: "Найти выход быстро",
    solution: "Контрастные указатели «Выход в город»",
    Icon: LogOut,
  },
]

// Этап 3 — коммуникативные задачи
const communicationTasks = [
  { title: "Навигация", text: "Вести пассажира по маршруту вход → платформа → выход без потери ориентации." },
  { title: "Информирование", text: "Своевременно давать расписание, направления и служебные сообщения." },
  { title: "Идентификация места", text: "Связать станцию с названием и районом, сделать её узнаваемой." },
  { title: "Формирование атмосферы", text: "Создать спокойную, упорядоченную среду вместо хаоса." },
  { title: "Снижение визуальной агрессии", text: "Подчинить рекламу системе, вернуть приоритет функциональной графике." },
  { title: "Эмоциональный образ", text: "Сформировать ощущение надёжности, ритма движения и связи с рекой." },
]

// Этап 4 — концепция
const concept = {
  idea: "«Течение» — спокойный направленный поток, который ведёт пассажира как река ведёт воду к устью.",
  metaphor:
    "Река и её русло: навигация — это течение, а указатели — берега, мягко направляющие движение. Отсюда название места и плавная, но чёткая система линий.",
  character: "Спокойная, технологичная, упорядоченная среда с ясным ритмом",
  principles:
    "Горизонтальный ритм направляющих линий, единый модуль и сетка, повторяющиеся пиктограммы и устойчивая цветовая логика по зонам.",
}

const moodboards = [
  {
    src: "/images/practica4/mood-architecture.png",
    title: "Архитектура и среда",
    description: "Бетон, металл, ритм колонн, чистые геометрические линии вестибюля",
  },
  {
    src: "/images/practica4/mood-color.png",
    title: "Цвет и материал",
    description: "Глубокий бирюзовый, янтарный акцент, нейтральные поверхности",
  },
  {
    src: "/images/practica4/mood-navigation.png",
    title: "Навигация и графика",
    description: "Пиктограммы, стрелки, напольная графика, геометрический гротеск",
  },
]

// Этап 5 — элементы системы
const palette = [
  { color: "#0f766e", name: "Глубокий бирюзовый", meaning: "Основной — спокойствие, вода, надёжность" },
  { color: "#14b8a6", name: "Бирюзовый", meaning: "Навигация, направляющие линии и зоны" },
  { color: "#f59e0b", name: "Янтарный", meaning: "Акцент — выход, важные точки, предупреждения" },
  { color: "#0f172a", name: "Тёмный графит", meaning: "Типографика, контраст, основной текст" },
  { color: "#f8fafc", name: "Светлый", meaning: "Фон, воздух, снижение визуального шума" },
]

const systemElements = [
  { title: "Навигационные указатели", note: "Подвесные и настенные знаки с единой логикой направлений", Icon: Signpost },
  { title: "Пиктограммы", note: "Единый набор символов: эскалатор, выход, касса, лифт, схема", Icon: Navigation },
  { title: "Типографика", note: "Геометрический гротеск, крупный кегль, высокий контраст", Icon: Type },
  { title: "Информационные панели", note: "Расписание, схемы линий и служебные сообщения", Icon: PanelTop },
  { title: "Плакаты и медианосители", note: "Реклама в едином модуле, не спорящая с навигацией", Icon: Megaphone },
  { title: "Световые акценты", note: "Подсветка указателей выхода и направляющих линий", Icon: Sun },
]

const typography = {
  heading: "Геометрический гротеск (Geist) — жирный, крупный кегль для направлений",
  body: "Тот же гротеск, обычное начертание, увеличенный интерлиньяж для считывания на расстоянии",
  hierarchy: "Направление → название зоны → пояснение → пиктограмма (4 ступени контраста)",
}

// Этап 6 — проверка восприятия
const perceptionChecks = [
  { title: "Масштаб", text: "Кегль и размер знаков рассчитаны на считывание с 10–15 метров на ходу." },
  { title: "Читаемость", text: "Чистый гротеск без засечек, короткие формулировки, без лишних слов." },
  { title: "Контраст", text: "Тёмный текст на светлом и белый на бирюзовом — высокий контраст." },
  { title: "Дистанция восприятия", text: "Иерархия: издалека — направление, вблизи — детали и расписание." },
  { title: "Визуальный шум", text: "Реклама вынесена в отдельный модуль и не пересекается с навигацией." },
  { title: "Плотность информации", text: "Один знак — одно сообщение, воздух вокруг ключевых элементов." },
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
          <span className="block mt-3">
            <span className="inline-block px-3 py-1 bg-teal-700 text-white rounded-full text-sm font-medium">
              Титов Николай ТКБО-02-23
            </span>
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-4 mb-6 text-balance">
            Визуальные коммуникации в городском пространстве
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium">
              Станция метро
            </span>
            <span className="text-teal-700/50">—</span>
            <span className="text-teal-900/70">Метафора течения и навигации</span>
          </div>
          <p className="text-teal-950/70 max-w-2xl mx-auto leading-relaxed text-pretty">
            Проектирование целостной визуальной системы для городского пространства: от анализа среды и
            сценариев поведения до навигации, типографики и визуальной экологии станции метро.
          </p>
        </div>
      </section>

      {/* Этап 1 */}
      <section id="stage1" className="py-16 px-4 border-b border-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Этап 1</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Выбор и анализ пространства</h2>
            <p className="text-teal-950/60 mt-2">Фотофиксация, архитектурная среда, потоки и проблемы</p>
          </div>

          {/* Фотофиксация */}
          <div className="mb-8">
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden border border-teal-100 shadow-sm">
              <Image
                src="/images/practica4/metro-before.png"
                alt="Фотофиксация вестибюля станции метро с визуальным шумом"
                fill
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 text-white text-xs rounded">
                Фотофиксация: исходное состояние среды
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-teal-50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-teal-700" />
                <h3 className="font-medium text-teal-800">{location.name}</h3>
              </div>
              <p className="text-xs font-medium text-teal-700/70 uppercase mb-1">Тип пространства</p>
              <p className="text-sm mb-4">{location.type}</p>
              <p className="text-xs font-medium text-teal-700/70 uppercase mb-1">Архитектурная среда</p>
              <p className="text-sm leading-relaxed">{location.architecture}</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6">
              <p className="text-xs font-medium text-teal-700/70 uppercase mb-1">Потоки людей и точки внимания</p>
              <p className="text-sm leading-relaxed">{location.flows}</p>
            </div>
          </div>

          {/* Проблемы */}
          <h3 className="text-lg font-medium mb-4">Выявленные проблемы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {problems.map((p, i) => (
              <div key={i} className="bg-amber-50 border border-amber-100 rounded-lg p-5">
                <AlertTriangle className="w-5 h-5 text-amber-600 mb-2" />
                <h4 className="font-medium text-sm text-amber-900">{p.title}</h4>
                <p className="text-sm text-amber-900/70 mt-1">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Этап 2 */}
      <section id="stage2" className="py-16 px-4 border-b border-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Этап 2</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Аудитория и сценарии использования</h2>
            <p className="text-teal-950/60 mt-2">Портрет пользователей (Табл. 1) и сценарии поведения (Табл. 2)</p>
          </div>

          {/* Таблица 1 */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-teal-700" />
              <h3 className="text-lg font-medium">Таблица 1. Портрет аудитории</h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-teal-100">
              <table className="w-full text-sm">
                <tbody>
                  {audienceTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-teal-50/50"}>
                      <td className="py-3 px-4 font-medium text-teal-800 align-top w-1/3 border-b border-teal-100">
                        {row.param}
                      </td>
                      <td className="py-3 px-4 text-teal-950/70 border-b border-teal-100">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Таблица 2 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Navigation className="w-5 h-5 text-teal-700" />
              <h3 className="text-lg font-medium">Таблица 2. Сценарий: вход → выход</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {scenarioTable.map((s, i) => (
                <div key={i} className="bg-white border border-teal-100 rounded-lg p-5 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex-none w-9 h-9 rounded-full bg-teal-700 text-white flex items-center justify-center">
                      <s.Icon className="w-5 h-5" />
                    </span>
                    <span className="font-medium text-teal-800">{s.stage}</span>
                  </div>
                  <p className="text-xs font-medium text-teal-700/70 uppercase">Действие</p>
                  <p className="text-sm mb-2">{s.action}</p>
                  <p className="text-xs font-medium text-teal-700/70 uppercase">Потребность</p>
                  <p className="text-sm mb-2">{s.need}</p>
                  <p className="text-xs font-medium text-teal-700/70 uppercase">Решение</p>
                  <p className="text-sm text-teal-950/70">{s.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Этап 3 */}
      <section id="stage3" className="py-16 px-4 border-b border-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Этап 3</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Коммуникативные задачи пространства</h2>
            <p className="text-teal-950/60 mt-2">Что именно должна решать визуальная система</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {communicationTasks.map((t, i) => (
              <div key={i} className="bg-teal-50 rounded-lg p-5">
                <span className="text-xs font-mono text-teal-700/50">0{i + 1}</span>
                <h3 className="font-medium text-teal-800 mt-1">{t.title}</h3>
                <p className="text-sm text-teal-950/60 mt-2">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Этап 4 */}
      <section id="stage4" className="py-16 px-4 border-b border-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Этап 4</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Концепция визуального образа</h2>
            <p className="text-teal-950/60 mt-2">Ключевая идея, метафора места и характер среды</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-6">
              <Lightbulb className="w-5 h-5 text-amber-600 mb-2" />
              <h3 className="text-xs font-medium text-amber-700 uppercase mb-2">Ключевая идея</h3>
              <p className="text-sm leading-relaxed text-amber-900">{concept.idea}</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-xs font-medium text-teal-700/70 uppercase mb-2">Метафора места</h3>
              <p className="text-sm leading-relaxed">{concept.metaphor}</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-xs font-medium text-teal-700/70 uppercase mb-2">Характер среды</h3>
              <p className="text-sm leading-relaxed font-medium">{concept.character}</p>
              <h3 className="text-xs font-medium text-teal-700/70 uppercase mb-2 mt-4">Композиция и ритм</h3>
              <p className="text-sm leading-relaxed">{concept.principles}</p>
            </div>
          </div>

          {/* Мудборды */}
          <h3 className="text-lg font-medium mb-4">Мудборды и концептуальные схемы</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {moodboards.map((board, i) => (
              <div key={i} className="space-y-2">
                <div className="aspect-square relative rounded-lg overflow-hidden bg-teal-50 border border-teal-100">
                  <Image src={board.src || "/placeholder.svg"} alt={board.title} fill className="object-cover" />
                </div>
                <h4 className="font-medium text-sm">{board.title}</h4>
                <p className="text-xs text-teal-950/60">{board.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Этап 5 */}
      <section id="stage5" className="py-16 px-4 border-b border-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Этап 5</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Проектирование элементов системы</h2>
            <p className="text-teal-950/60 mt-2">Навигация, пиктограммы, типографика, панели и световые акценты</p>
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
                  <p className="text-xs text-teal-950/50">{item.color}</p>
                  <p className="text-xs text-teal-950/60 mt-1">{item.meaning}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Элементы */}
          <div className="mb-10">
            <h3 className="text-lg font-medium mb-4">Элементы визуальной системы</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {systemElements.map((el, i) => (
                <div key={i} className="bg-white border border-teal-100 rounded-lg p-5">
                  <span className="inline-flex w-10 h-10 rounded-lg bg-teal-50 text-teal-700 items-center justify-center mb-3">
                    <el.Icon className="w-5 h-5" />
                  </span>
                  <h4 className="font-medium text-sm text-teal-800">{el.title}</h4>
                  <p className="text-sm text-teal-950/60 mt-1">{el.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Типографика */}
          <div>
            <h3 className="text-lg font-medium mb-4">Типографика</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-teal-50 rounded-lg p-6">
                <h4 className="text-xs font-medium text-teal-700/70 uppercase mb-2">Заголовки</h4>
                <p className="text-sm">{typography.heading}</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h4 className="text-xs font-medium text-teal-700/70 uppercase mb-2">Текст</h4>
                <p className="text-sm">{typography.body}</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h4 className="text-xs font-medium text-teal-700/70 uppercase mb-2">Иерархия</h4>
                <p className="text-sm">{typography.hierarchy}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Этап 6 */}
      <section id="stage6" className="py-16 px-4 border-b border-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-teal-700/70">Этап 6</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Визуализация в контексте среды</h2>
            <p className="text-teal-950/60 mt-2">Размещение элементов на фото и проверка восприятия</p>
          </div>

          {/* До / После */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div>
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden border border-teal-100">
                <Image
                  src="/images/practica4/metro-before.png"
                  alt="Станция метро до внедрения визуальной системы"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 px-2 py-1 bg-amber-500 text-white text-xs font-medium rounded">
                  До
                </span>
              </div>
              <p className="text-sm text-teal-950/60 mt-2">
                Визуальный шум, разнородная реклама, отсутствие единой навигации.
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden border border-teal-100">
                <Image
                  src="/images/practica4/metro-after.png"
                  alt="Станция метро после внедрения визуальной системы"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 px-2 py-1 bg-teal-700 text-white text-xs font-medium rounded">
                  После
                </span>
              </div>
              <p className="text-sm text-teal-950/60 mt-2">
                Единая навигация, спокойный фон, цветовое кодирование и световые акценты.
              </p>
            </div>
          </div>

          {/* Проверки */}
          <h3 className="text-lg font-medium mb-4">Проверка масштаба, читаемости и контраста</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {perceptionChecks.map((c, i) => (
              <div key={i} className="bg-white border border-teal-100 rounded-lg p-5">
                <CheckCircle2 className="w-5 h-5 text-teal-700 mb-2" />
                <h4 className="font-medium text-sm text-teal-800">{c.title}</h4>
                <p className="text-sm text-teal-950/60 mt-1">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Этап 7 — Выводы */}
      <section id="stage7" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-teal-700/70">Этап 7</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-2">Презентация и выводы</h2>
          </div>

          {/* Маршрут вход → выход как итоговая схема */}
          <div className="bg-gradient-to-b from-teal-50 to-white border border-teal-100 rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {scenarioTable.map((s, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3">
                  <div className="flex flex-col items-center text-center">
                    <span
                      className={`w-11 h-11 rounded-full flex items-center justify-center text-white shadow-sm ${
                        i === scenarioTable.length - 1 ? "bg-amber-500" : "bg-teal-700"
                      }`}
                    >
                      <s.Icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-medium mt-2">{s.stage}</span>
                  </div>
                  {i < scenarioTable.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-teal-400" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-teal-50 rounded-lg p-6 md:p-8 text-left">
            <p className="text-sm leading-relaxed mb-4">
              Городская среда рассмотрена как коммуникативная система: станция метро «Речной вокзал» —
              это не набор отдельных указателей, а единый сценарий движения от входа до выхода. Анализ
              среды, потоков и эмоционального состояния пассажиров задал требования к визуальным решениям.
            </p>
            <p className="text-sm leading-relaxed mb-4">Каждое решение работает на пользователя и культуру пространства:</p>
            <ul className="text-sm leading-relaxed mb-4 list-disc list-inside space-y-1">
              <li>Единая навигация и цветовое кодирование снижают дезориентацию и время поиска</li>
              <li>Метафора течения связывает систему с названием места и формирует идентичность</li>
              <li>Подчинение рекламы общему модулю уменьшает визуальную агрессию среды</li>
              <li>Высокий контраст и крупная типографика обеспечивают считывание «на бегу»</li>
            </ul>
            <p className="text-sm leading-relaxed">
              Визуальная система спроектирована как целостность, а не отдельные объекты: она согласована
              с архитектурой, отвечает сценариям поведения и принципам визуальной экологии. Так среда
              становится понятнее, спокойнее и человечнее.
            </p>
          </div>
        </div>
      </section>

      {/* Навигация к следующей практике */}
      <section className="py-10 px-4 border-t border-teal-100">
        <div className="max-w-6xl mx-auto text-center">
          <a 
            href="/practica5" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-700 text-white rounded-full font-medium hover:bg-teal-800 transition-colors"
          >
            Продолжение: Практика №5 — Визуализация в среде
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-teal-100">
        <div className="max-w-6xl mx-auto text-center text-sm text-teal-950/60">
          <p>Практическая работа №4 — Визуальные коммуникации в городском пространстве</p>
          <p className="mt-1">Локация: станция метро «Речной вокзал» · Титов Николай ТКБО-02-23</p>
        </div>
      </footer>
    </main>
  )
}
