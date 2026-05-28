import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Практическая работа №2 — Визуальные коды в рекламе",
  description: "Визуальные коды и символы в рекламной коммуникации: экологическая акция ЭкоГород",
}

// Data for the project
const projectData = {
  name: "ЭкоГород",
  type: "Городская экологическая акция по раздельному сбору отходов и озеленению",
  goal: "Привлечение жителей города к участию в экологических инициативах, формирование ответственного отношения к окружающей среде и популяризация раздельного сбора мусора",
  idea: "Каждый житель — часть большого экологического движения. Маленькие действия создают большие перемены",
  message: "Чистый город начинается с тебя — присоединяйся к ЭкоГороду!",
}

const targetAudience = {
  age: "18-45 лет",
  occupation: "Студенты, молодые семьи, офисные работники, активные горожане",
  interests: [
    "Экология и защита окружающей среды",
    "Здоровый образ жизни",
    "Городские инициативы и волонтёрство",
    "Осознанное потребление",
    "Активный отдых на природе",
  ],
  values: [
    "Забота о будущем планеты",
    "Ответственность перед обществом",
    "Устойчивое развитие",
    "Чистота и порядок в городе",
  ],
  visualPreferences: [
    "Яркие, свежие цвета",
    "Природные образы",
    "Дружелюбная графика",
    "Понятные инфографики",
    "Позитивный, вдохновляющий стиль",
  ],
  mediaEnvironment: [
    "Социальные сети (VK, Telegram)",
    "Городские информационные порталы",
    "Наружная реклама",
    "Мероприятия и фестивали",
  ],
  visualCodes: [
    "Зелёный цвет — природа, экология",
    "Символ переработки — осознанность",
    "Деревья и листья — рост, жизнь",
    "Руки — участие, забота",
    "Земной шар — глобальность проблемы",
  ],
}

const references = [
  {
    src: "/images/practica2/references/ref-1.png",
    alt: "Референс 1: Экологическая акция Чистый Лес",
    icons: "Дерево, велосипед, птицы, солнце, ели, символ переработки",
    indexes: "Велосипед → экологичный транспорт, птицы → свобода и чистый воздух, солнце → позитивное будущее",
    symbols: "Зелёный цвет — экология, геометрические формы — структурированность действий, лес — природа, которую защищаем",
  },
  {
    src: "/images/practica2/references/ref-2.png",
    alt: "Референс 2: Экологический фестиваль ЭКОБУМ",
    icons: "Контейнер для переработки, стопки макулатуры, листья, электроника, руки",
    indexes: "Стопки бумаги → результат сбора, зелёный контейнер → место сдачи, цветные блоки → разнообразие активностей",
    symbols: "Символ переработки — цикличность, зелёный фон — природа, листья — экологичность, руки с сердцем — забота",
  },
  {
    src: "/images/practica2/references/ref-3.png",
    alt: "Референс 3: Раздели мусор — Спаси планету",
    icons: "Земной шар с улыбкой, три контейнера разных цветов, бутылки, бумага, листья",
    indexes: "Улыбка Земли → позитивный результат действий, разноцветные контейнеры → сортировка по типам",
    symbols: "Синий/зелёный/жёлтый контейнеры — разные типы отходов, Земля — глобальная ответственность, листья — природа",
  },
]

const visualConcept = {
  idea: "Город как живой организм — каждый житель вносит вклад в его здоровье через экологические действия",
  metaphor: "Зелёные ростки, пробивающиеся сквозь городской пейзаж — символ возрождения природы через усилия людей",
  palette: [
    { color: "#22c55e", name: "Изумрудный", meaning: "Природа, рост, экология" },
    { color: "#14b8a6", name: "Бирюзовый", meaning: "Свежесть, чистота воды" },
    { color: "#38bdf8", name: "Небесный", meaning: "Чистый воздух, надежда" },
    { color: "#84cc16", name: "Лаймовый", meaning: "Энергия, молодость" },
    { color: "#fefce8", name: "Кремовый", meaning: "Чистота, простота" },
  ],
  typography: "Современный геометрический гротеск (Inter, Montserrat) — дружелюбность, читаемость, современность",
  composition: "Динамичная композиция с природными элементами. Акцент на призыве к действию и позитивных образах.",
}

const bannerElements = [
  {
    element: "Символ переработки из листьев",
    description: "Классический символ recycling, стилизованный под природные листья",
    associations: "Цикличность природы, возобновляемость ресурсов, единство экологии и действия",
    signType: "Символический знак — универсальный код переработки, усиленный природной метафорой",
  },
  {
    element: "Зелёный градиент",
    description: "Плавный переход от изумрудного к бирюзовому",
    associations: "Природа, свежесть, чистота, здоровье окружающей среды",
    signType: "Индексальный знак — визуальное указание на экологическую тематику",
  },
  {
    element: "Силуэт города с деревьями",
    description: "Городской пейзаж, интегрированный с зелёными насаждениями",
    associations: "Гармония города и природы, озеленение, устойчивое развитие",
    signType: "Иконический знак — прямое изображение цели акции",
  },
  {
    element: "Птицы в небе",
    description: "Летящие птицы над городом",
    associations: "Свобода, чистый воздух, здоровая экосистема",
    signType: "Индексальный знак — указание на результат экологических действий",
  },
  {
    element: "Название ЭкоГород",
    description: "Логотип акции в современной типографике",
    associations: "Эко — экология; Город — локальность, сообщество",
    signType: "Символический знак — вербальный код бренда экологической инициативы",
  },
]

const moodboards = [
  { src: "/images/practica2/moodboards/visual.png", title: "Образный мудборд", description: "Визуальные образы: природа, переработка, городская экология" },
  { src: "/images/practica2/moodboards/color.png", title: "Цветовой мудборд", description: "Палитра: изумрудный, бирюзовый, небесный, лаймовый" },
  { src: "/images/practica2/moodboards/typography.png", title: "Типографический мудборд", description: "Шрифты: современный гротеск, дружелюбность" },
]

export default function Practica2Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-16 border-b border-border bg-gradient-to-b from-green-50/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Практическое занятие №2
          </span>
          <span className="inline-block mt-3 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
            Титов Николай ТКБО-02-23
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-4 mb-6 text-balance">
            Визуальные коды и символы в рекламной коммуникации
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">
              ЭкоГород
            </span>
            <span className="text-muted-foreground">—</span>
            <span className="text-muted-foreground">Экологическая акция</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Разработка рекламного баннера для городской экологической инициативы с применением семиотического анализа визуальных знаков
          </p>
        </div>
      </section>

      {/* Stage 1: Topic Selection */}
      <section id="stage1" className="py-16 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-muted-foreground">Этап 1</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Выбор темы рекламной коммуникации</h2>
            <p className="text-muted-foreground mt-2">Определение объекта рекламы и ключевых параметров</p>
          </div>

          <div className="bg-green-50 rounded-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs font-medium text-muted-foreground uppercase mb-2">Название проекта</h3>
                <p className="text-xl font-medium text-green-700">{projectData.name}</p>
              </div>
              <div>
                <h3 className="text-xs font-medium text-muted-foreground uppercase mb-2">Тип проекта</h3>
                <p className="text-sm">{projectData.type}</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xs font-medium text-muted-foreground uppercase mb-2">Цель коммуникации</h3>
                <p className="text-sm leading-relaxed">{projectData.goal}</p>
              </div>
              <div>
                <h3 className="text-xs font-medium text-muted-foreground uppercase mb-2">Ключевая идея</h3>
                <p className="text-sm leading-relaxed">{projectData.idea}</p>
              </div>
              <div>
                <h3 className="text-xs font-medium text-muted-foreground uppercase mb-2">Основное сообщение</h3>
                <p className="text-sm leading-relaxed italic">{`"${projectData.message}"`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 2: Target Audience */}
      <section id="stage2" className="py-16 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-muted-foreground">Этап 2</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Анализ целевой аудитории</h2>
            <p className="text-muted-foreground mt-2">Портрет потребителя и его визуальные предпочтения</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-secondary rounded-lg p-5">
              <h3 className="text-xs font-medium text-muted-foreground uppercase mb-3">Возраст и занятость</h3>
              <p className="font-medium mb-1">{targetAudience.age}</p>
              <p className="text-sm text-muted-foreground">{targetAudience.occupation}</p>
            </div>

            <div className="bg-secondary rounded-lg p-5">
              <h3 className="text-xs font-medium text-muted-foreground uppercase mb-3">Интересы</h3>
              <ul className="text-sm space-y-1">
                {targetAudience.interests.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-lg p-5">
              <h3 className="text-xs font-medium text-muted-foreground uppercase mb-3">Ценности</h3>
              <ul className="text-sm space-y-1">
                {targetAudience.values.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-lg p-5">
              <h3 className="text-xs font-medium text-muted-foreground uppercase mb-3">Визуальные предпочтения</h3>
              <ul className="text-sm space-y-1">
                {targetAudience.visualPreferences.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-lg p-5">
              <h3 className="text-xs font-medium text-muted-foreground uppercase mb-3">Медиасреда</h3>
              <ul className="text-sm space-y-1">
                {targetAudience.mediaEnvironment.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="text-xs font-medium text-green-600 uppercase mb-3">Понятные визуальные коды</h3>
              <ul className="text-sm space-y-1">
                {targetAudience.visualCodes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 3: Semiotic Analysis */}
      <section id="stage3" className="py-16 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-muted-foreground">Этап 3</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Семиотический анализ визуальных знаков</h2>
            <p className="text-muted-foreground mt-2">Анализ референсов рекламных баннеров экологических акций</p>
          </div>

          <div className="space-y-8">
            {references.map((ref, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-secondary rounded-lg p-4 md:p-6">
                <div className="aspect-video relative rounded-lg overflow-hidden bg-muted">
                  <Image src={ref.src} alt={ref.alt} fill className="object-contain" />
                </div>
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="font-medium">Референс {i + 1}: {ref.alt.split(": ")[1]}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Иконические знаки</h4>
                      <p className="text-sm">{ref.icons}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Индексальные знаки</h4>
                      <p className="text-sm">{ref.indexes}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Символические знаки</h4>
                      <p className="text-sm">{ref.symbols}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stage 4: Visual Concept */}
      <section id="stage4" className="py-16 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-muted-foreground">Этап 4</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Формирование визуальной концепции</h2>
            <p className="text-muted-foreground mt-2">Идея, метафора, палитра, типографика</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xs font-medium text-muted-foreground uppercase mb-2">Визуальная идея</h3>
              <p className="text-sm leading-relaxed">{visualConcept.idea}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xs font-medium text-muted-foreground uppercase mb-2">Визуальная метафора</h3>
              <p className="text-sm leading-relaxed">{visualConcept.metaphor}</p>
            </div>
          </div>

          {/* Color Palette */}
          <div className="mb-10">
            <h3 className="text-lg font-medium mb-4">Цветовая палитра</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {visualConcept.palette.map((item, i) => (
                <div key={i} className="text-center">
                  <div 
                    className="w-full aspect-square rounded-lg mb-2 shadow-sm" 
                    style={{ backgroundColor: item.color }}
                  />
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.color}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.meaning}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="mb-10">
            <h3 className="text-lg font-medium mb-4">Типографика</h3>
            <div className="bg-secondary rounded-lg p-6">
              <p className="text-sm">{visualConcept.typography}</p>
            </div>
          </div>

          {/* Composition */}
          <div className="mb-10">
            <h3 className="text-lg font-medium mb-4">Композиция</h3>
            <div className="bg-secondary rounded-lg p-6">
              <p className="text-sm">{visualConcept.composition}</p>
            </div>
          </div>

          {/* Moodboards */}
          <div>
            <h3 className="text-lg font-medium mb-4">Мудборды</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {moodboards.map((board, i) => (
                <div key={i} className="space-y-2">
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                    <Image src={board.src} alt={board.title} fill className="object-cover" />
                  </div>
                  <h4 className="font-medium text-sm">{board.title}</h4>
                  <p className="text-xs text-muted-foreground">{board.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stage 5: Banner Development */}
      <section id="stage5" className="py-16 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-muted-foreground">Этап 5</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Разработка рекламного баннера</h2>
            <p className="text-muted-foreground mt-2">Финальная визуальная композиция</p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-xl mb-8">
            <div className="relative aspect-[16/9]">
              <Image 
                src="/images/practica2/banner-main.png" 
                alt="Фон рекламного баннера ЭкоГород" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-8">
                <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] mb-2 md:mb-4">
                  ЭКОГОРОД
                </h3>
                <p className="text-xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] mb-2 md:mb-4">
                  НЕ БРОСАЙ МУСОР!
                </p>
                <p className="text-lg md:text-2xl lg:text-3xl font-semibold text-yellow-300 drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)] mb-2 md:mb-4">
                  СОХРАНИ ПЛАНЕТУ!
                </p>
                <p className="text-sm md:text-lg lg:text-xl text-white/90 italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  Чистый город начинается с тебя
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary rounded-lg p-5">
              <h3 className="text-xs font-medium text-muted-foreground uppercase mb-3">Визуальный образ</h3>
              <p className="text-sm">Символ переработки из листьев, городской пейзаж с деревьями, летящие птицы на зелёном градиентном фоне</p>
            </div>
            <div className="bg-secondary rounded-lg p-5">
              <h3 className="text-xs font-medium text-muted-foreground uppercase mb-3">Заголовок</h3>
              <p className="text-sm">ЭкоГород — название инициативы + слоган о личном вкладе каждого</p>
            </div>
            <div className="bg-secondary rounded-lg p-5">
              <h3 className="text-xs font-medium text-muted-foreground uppercase mb-3">Графические элементы</h3>
              <p className="text-sm">Природные формы, символы переработки, контейнеры, велосипед, деревья</p>
            </div>
            <div className="bg-secondary rounded-lg p-5">
              <h3 className="text-xs font-medium text-muted-foreground uppercase mb-3">Композиция</h3>
              <p className="text-sm">Динамичная, призывающая к действию, с чёткой визуальной иерархией</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 6: Semiotic Explanation */}
      <section id="stage6" className="py-16 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-muted-foreground">Этап 6</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Семиотическое объяснение</h2>
            <p className="text-muted-foreground mt-2">Анализ визуальных элементов баннера</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium">Элемент</th>
                  <th className="text-left py-3 px-4 font-medium">Описание</th>
                  <th className="text-left py-3 px-4 font-medium">Ассоциации</th>
                  <th className="text-left py-3 px-4 font-medium">Тип знака</th>
                </tr>
              </thead>
              <tbody>
                {bannerElements.map((item, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">{item.element}</td>
                    <td className="py-3 px-4">{item.description}</td>
                    <td className="py-3 px-4">{item.associations}</td>
                    <td className="py-3 px-4 text-muted-foreground">{item.signType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono text-muted-foreground">Заключение</span>
          <h2 className="text-2xl md:text-3xl font-medium mt-2 mb-6">Выводы</h2>
          <div className="bg-green-50 rounded-lg p-6 md:p-8 text-left">
            <p className="text-sm leading-relaxed mb-4">
              В ходе работы был разработан рекламный баннер для городской экологической акции «ЭкоГород», 
              направленной на привлечение жителей к раздельному сбору отходов и озеленению города.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              Анализ референсов экологических кампаний показал эффективность использования:
            </p>
            <ul className="text-sm leading-relaxed mb-4 list-disc list-inside space-y-1">
              <li>Зелёной цветовой гаммы как универсального кода экологичности</li>
              <li>Символа переработки в различных интерпретациях</li>
              <li>Природных образов (деревья, листья, птицы) для создания эмоциональной связи</li>
              <li>Призывов к действию и акцента на личном вкладе каждого</li>
            </ul>
            <p className="text-sm leading-relaxed">
              Созданный баннер использует семиотические коды, понятные целевой аудитории: 
              символический знак переработки, иконические изображения природы и города, 
              индексальные указатели на результат экологических действий. 
              Визуальная концепция формирует позитивный образ экологической инициативы 
              и мотивирует к участию.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>Практическая работа №2 — Визуальные коды и символы в рекламной коммуникации</p>
          <p className="mt-1">Тема: Экологическая акция «ЭкоГород»</p>
        </div>
      </footer>
    </main>
  )
}
