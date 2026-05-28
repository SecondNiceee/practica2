import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Практическая работа №2 — Визуальные коды в рекламе",
  description: "Визуальные коды и символы в рекламной коммуникации: приложение для медитации ZenMind",
}

// Data for the project
const projectData = {
  name: "ZenMind",
  type: "Мобильное приложение для медитации и осознанности",
  goal: "Привлечение новых пользователей к приложению, формирование образа продукта как надёжного помощника в достижении внутреннего покоя и баланса",
  idea: "Технологии на службе ментального здоровья — цифровой проводник к гармонии",
  message: "Найди свой внутренний покой с ZenMind — твой персональный путь к осознанности",
}

const targetAudience = {
  age: "25-45 лет",
  occupation: "Офисные работники, IT-специалисты, предприниматели, фрилансеры",
  interests: [
    "Саморазвитие и личностный рост",
    "Здоровый образ жизни",
    "Психология и ментальное здоровье",
    "Технологии и приложения",
    "Йога и wellness-практики",
  ],
  values: [
    "Баланс между работой и личной жизнью",
    "Осознанность и присутствие в моменте",
    "Забота о себе и своём здоровье",
    "Эффективность и продуктивность",
  ],
  visualPreferences: [
    "Минималистичный дизайн",
    "Спокойные, природные цвета",
    "Чистая типографика",
    "Качественные изображения",
    "Apple-style эстетика",
  ],
  mediaEnvironment: [
    "Instagram и Pinterest",
    "YouTube (wellness-контент)",
    "Подкасты о саморазвитии",
    "App Store и Google Play",
  ],
  visualCodes: [
    "Лотос — символ духовного роста",
    "Градиенты — плавность и переход состояний",
    "Природные элементы — связь с природой",
    "Геометрия — структура и баланс",
    "Мягкий свет — умиротворение",
  ],
}

const references = [
  {
    src: "/images/practica2/references/ref-1.png",
    alt: "Референс 1: Медитация на рассвете",
    icons: "Силуэт человека в позе лотоса, горы, солнце",
    indexes: "Восходящее солнце → начало нового дня, путь вверх → развитие",
    symbols: "Горы — преодоление, солнце — просветление, поза лотоса — медитация",
  },
  {
    src: "/images/practica2/references/ref-2.png",
    alt: "Референс 2: Абстрактная иллюстрация",
    icons: "Человеческая фигура, органические формы, растения",
    indexes: "Обволакивающие формы → защита, плавные линии → расслабление",
    symbols: "Круг — целостность, природные формы — естественность, пастель — мягкость",
  },
  {
    src: "/images/practica2/references/ref-3.png",
    alt: "Референс 3: Премиальный wellness",
    icons: "Силуэт в йога-позе, световые акценты",
    indexes: "Тёмный фон → глубина, золотой свет → ценность",
    symbols: "Золото — премиальность, тьма — внутренний мир, свет — осознанность",
  },
]

const visualConcept = {
  idea: "Цифровой портал к внутреннему покою — приложение как мост между технологиями и духовностью",
  metaphor: "Лотос, раскрывающийся в цифровом пространстве — духовный рост через современные технологии",
  palette: [
    { color: "#4338ca", name: "Индиго", meaning: "Глубина, мудрость, интуиция" },
    { color: "#a78bfa", name: "Лаванда", meaning: "Спокойствие, духовность" },
    { color: "#86efac", name: "Мятный", meaning: "Свежесть, обновление" },
    { color: "#fefce8", name: "Кремовый", meaning: "Чистота, простота" },
    { color: "#7dd3fc", name: "Небесный", meaning: "Лёгкость, свобода" },
  ],
  typography: "Современный геометрический гротеск (Inter, SF Pro) — чистота, технологичность, читаемость",
  composition: "Центрированная, симметричная композиция с акцентом на главном образе. Много воздуха, минимализм.",
}

const bannerElements = [
  {
    element: "Лотос",
    description: "Стилизованный минималистичный цветок лотоса в центре композиции",
    associations: "Духовное пробуждение, чистота, рост из тьмы к свету",
    signType: "Символический знак — культурный код медитации и духовного развития",
  },
  {
    element: "Градиент индиго-лаванда",
    description: "Плавный переход от тёмного индиго к светлой лаванде",
    associations: "Переход от стресса к покою, от хаоса к гармонии",
    signType: "Индексальный знак — визуальное указание на трансформацию состояния",
  },
  {
    element: "Силуэт медитирующего",
    description: "Человек в позе лотоса, погружённый в медитацию",
    associations: "Практика медитации, внутренний фокус, отрешённость",
    signType: "Иконический знак — прямое изображение целевого действия",
  },
  {
    element: "Световые частицы",
    description: "Плавающие точки света вокруг центрального образа",
    associations: "Энергия, осознанность, пробуждение",
    signType: "Индексальный знак — указание на нематериальное, духовное",
  },
  {
    element: "Название ZenMind",
    description: "Логотип приложения в чистой типографике",
    associations: "Zen — дзен, спокойствие; Mind — разум, осознанность",
    signType: "Символический знак — вербальный код бренда",
  },
]

const moodboards = [
  { src: "/images/practica2/moodboards/visual.png", title: "Образный мудборд", description: "Визуальные образы: природа, медитация, покой" },
  { src: "/images/practica2/moodboards/color.png", title: "Цветовой мудборд", description: "Палитра: индиго, лаванда, мятный, кремовый" },
  { src: "/images/practica2/moodboards/typography.png", title: "Типографический мудборд", description: "Шрифты: геометрический гротеск, лёгкость" },
]

export default function Practica2Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-16 border-b border-border bg-gradient-to-b from-indigo-50/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Практическое занятие №2
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-4 mb-6 text-balance">
            Визуальные коды и символы в рекламной коммуникации
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium">
              ZenMind
            </span>
            <span className="text-muted-foreground">—</span>
            <span className="text-muted-foreground">Приложение для медитации</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Разработка рекламного баннера для цифрового продукта с применением семиотического анализа визуальных знаков
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

          <div className="bg-indigo-50 rounded-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs font-medium text-muted-foreground uppercase mb-2">Название продукта</h3>
                <p className="text-xl font-medium text-indigo-700">{projectData.name}</p>
              </div>
              <div>
                <h3 className="text-xs font-medium text-muted-foreground uppercase mb-2">Тип продукта</h3>
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

            <div className="bg-indigo-50 rounded-lg p-5">
              <h3 className="text-xs font-medium text-indigo-600 uppercase mb-3">Понятные визуальные коды</h3>
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
            <p className="text-muted-foreground mt-2">Анализ референсов рекламных баннеров</p>
          </div>

          <div className="space-y-8">
            {references.map((ref, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-secondary rounded-lg p-4 md:p-6">
                <div className="aspect-video relative rounded-lg overflow-hidden bg-muted">
                  <Image src={ref.src} alt={ref.alt} fill className="object-cover" />
                </div>
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="font-medium">Референс {i + 1}</h3>
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
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-xs font-medium text-muted-foreground uppercase mb-2">Визуальная идея</h3>
              <p className="text-sm leading-relaxed">{visualConcept.idea}</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6">
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

          <div className="bg-gradient-to-br from-indigo-100 to-purple-50 rounded-lg p-4 md:p-8 mb-8">
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/practica2/banner-main.png" 
                alt="Рекламный баннер ZenMind" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary rounded-lg p-5">
              <h3 className="text-xs font-medium text-muted-foreground uppercase mb-3">Визуальный образ</h3>
              <p className="text-sm">Минималистичный лотос и силуэт медитирующего человека на градиентном фоне индиго-лаванда</p>
            </div>
            <div className="bg-secondary rounded-lg p-5">
              <h3 className="text-xs font-medium text-muted-foreground uppercase mb-3">Заголовок</h3>
              <p className="text-sm">ZenMind — название бренда + слоган о внутреннем покое</p>
            </div>
            <div className="bg-secondary rounded-lg p-5">
              <h3 className="text-xs font-medium text-muted-foreground uppercase mb-3">Графические элементы</h3>
              <p className="text-sm">Световые частицы, мягкое боке, плавные градиенты</p>
            </div>
            <div className="bg-secondary rounded-lg p-5">
              <h3 className="text-xs font-medium text-muted-foreground uppercase mb-3">Композиция</h3>
              <p className="text-sm">Центрированная, симметричная, с визуальной иерархией от центра к краям</p>
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
                    <td className="py-3 px-4 bg-indigo-50">{item.signType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stage 7: Conclusion */}
      <section id="stage7" className="py-16 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-muted-foreground">Этап 7</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Заключение</h2>
            <p className="text-muted-foreground mt-2">Выводы по проделанной работе</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 md:p-8">
            <div className="prose prose-sm max-w-none">
              <p className="text-sm leading-relaxed mb-4">
                В ходе выполнения практической работы был разработан рекламный баннер для мобильного приложения 
                медитации <strong>ZenMind</strong>. Работа включала полный цикл создания визуальной коммуникации: 
                от анализа целевой аудитории до семиотического обоснования выбранных визуальных решений.
              </p>
              <p className="text-sm leading-relaxed mb-4">
                <strong>Основные визуальные коды</strong>, использованные в баннере:
              </p>
              <ul className="text-sm space-y-2 mb-4">
                <li><strong>Иконические знаки:</strong> силуэт медитирующего человека, цветок лотоса — прямое изображение объекта рекламы</li>
                <li><strong>Индексальные знаки:</strong> градиент от тёмного к светлому, световые частицы — указание на процесс трансформации состояния</li>
                <li><strong>Символические знаки:</strong> лотос как символ духовного роста, индиго как цвет мудрости, название ZenMind</li>
              </ul>
              <p className="text-sm leading-relaxed mb-4">
                <strong>Цветовая палитра</strong> (индиго, лаванда, мятный) была выбрана на основе психологии цвета 
                и соответствует ожиданиям целевой аудитории: спокойствие, премиальность, технологичность.
              </p>
              <p className="text-sm leading-relaxed">
                Разработанный баннер эффективно транслирует ключевое сообщение бренда через комплексное 
                использование визуальных кодов, понятных целевой аудитории, и создаёт эмоциональную 
                связь с потенциальными пользователями приложения.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-muted-foreground">
          <p>Практическая работа №2: Визуальные коды в рекламной коммуникации</p>
          <p>Тема: Приложение для медитации ZenMind</p>
        </div>
      </footer>
    </main>
  )
}
