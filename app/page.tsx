import Image from "next/image"

// Data for the project
const lonelinessData = {
  associations: [
    "пустота", "тишина", "холод", "туман", "тень",
    "молчание", "изоляция", "отчуждение", "ночь", "дождь",
    "стена", "окно", "зеркало", "эхо", "бездна"
  ],
  bodyFeelings: [
    "Тяжесть в груди, словно камень",
    "Холод в конечностях, озноб",
    "Напряжение в плечах и шее",
    "Ощущение пустоты в животе",
    "Замедленное, поверхностное дыхание"
  ],
  stateDescription: "Человек сидит сжавшись, обхватив себя руками. Взгляд направлен в никуда или в пол. Движения замедленные, неуверенные. Дыхание неглубокое. Избегает зрительного контакта, плечи опущены, тело стремится занять как можно меньше пространства.",
  moodboardImages: [
    { src: "/images/mood/loneliness-1.png", alt: "Одинокая фигура в тумане" },
    { src: "/images/mood/loneliness-2.png", alt: "Пустая комната" },
    { src: "/images/mood/loneliness-3.png", alt: "Человек у окна" },
    { src: "/images/mood/loneliness-4.png", alt: "Дождь за стеклом" },
    { src: "/images/mood/loneliness-5.png", alt: "Тени и силуэты" },
    { src: "/images/mood/loneliness-6.png", alt: "Минималистичный плакат одиночества" },
    { src: "/images/mood/loneliness-7.png", alt: "Холодные тона" },
    { src: "/images/mood/loneliness-8.png", alt: "Изоляция" },
    { src: "/images/mood/loneliness-9.png", alt: "Пустое пространство" },
    { src: "/images/mood/loneliness-10.png", alt: "Молчание" },
  ],
  visualCodes: {
    color: "Холодные оттенки: глубокий синий, серо-голубой, приглушённый фиолетовый. Низкая насыщенность, высокий контраст.",
    forms: "Острые углы, вертикальные линии, разорванные формы. Геометрия создаёт ощущение барьера и дистанции.",
    composition: "Асимметричная, смещённый центр. Много пустого пространства, фигура на периферии.",
    scale: "Маленькая фигура в большом пространстве. Контраст масштабов подчёркивает потерянность.",
    light: "Жёсткий, контровой свет. Глубокие тени, силуэты. Источник света далеко или вне кадра.",
    typography: "Тонкий гротеск, разрежённый интерлиньяж, отдельные слова изолированы друг от друга."
  },
  concept: "Одиночество как стеклянная стена между человеком и миром — видишь других, но не можешь дотянуться.",
  metaphor: "Стеклянная стена / аквариум — человек заключён в прозрачную преграду, отделяющую его от жизни вокруг",
  mainAccent: "Одинокая фигура, обращённая спиной к зрителю, на фоне размытого города за стеклом",
  secondaryElements: [
    "Отражение в стекле, искажённое и неполное",
    "Капли на стекле как слёзы",
    "Холодный синий свет снаружи",
    "Тёмное пустое пространство внутри"
  ],
  eyeMovement: "От тёмного переднего плана — к фигуре в центре — к размытому миру за стеклом — обратно к фигуре",
  sketches: [
    { src: "/images/sketches/loneliness-1.png", alt: "Эскиз 1", description: "Фигура у окна, вид сзади" },
    { src: "/images/sketches/loneliness-2.png", alt: "Эскиз 2", description: "Человек в пустой комнате" },
    { src: "/images/sketches/loneliness-3.png", alt: "Эскиз 3", description: "Силуэт на фоне города" },
  ],
  finalImage: "/images/final/loneliness-final.png",
  palette: ["#1a2744", "#3d5a80", "#98c1d9", "#e0e1dd", "#293241"],
  typography: "Thin Sans-serif, разрежённый, одинокие буквы словно потерянные люди",
  rhythm: "Статичный, минимум движения. Вертикальные линии создают ощущение барьера",
  conclusion: "Композиция передаёт эмоцию одиночества через визуальную метафору стеклянной стены. Холодная цветовая палитра, изолированная фигура и контраст между внутренним тёмным пространством и внешним миром создают ощущение недоступности и отчуждения."
}

const closenessData = {
  associations: [
    "тепло", "объятие", "свет", "мягкость", "дом",
    "рука", "сердце", "улыбка", "связь", "защита",
    "плед", "огонь", "шёпот", "вместе", "принятие"
  ],
  bodyFeelings: [
    "Тепло в груди, словно солнечный луч",
    "Расслабленность в плечах и спине",
    "Мягкость в руках, желание прикоснуться",
    "Глубокое, спокойное дыхание",
    "Ощущение лёгкости и наполненности"
  ],
  stateDescription: "Человек открыт миру: плечи расправлены, руки раскрыты или тянутся к другому. Взгляд тёплый, направлен на собеседника. Движения плавные, уверенные. Дыхание глубокое и ровное. Тело занимает комфортное пространство, стремится к контакту.",
  moodboardImages: [
    { src: "/images/mood/closeness-1.png", alt: "Объятие двух людей" },
    { src: "/images/mood/closeness-2.png", alt: "Тёплый свет" },
    { src: "/images/mood/closeness-3.png", alt: "Руки соприкасаются" },
    { src: "/images/mood/closeness-4.png", alt: "Семейный момент" },
    { src: "/images/mood/closeness-5.png", alt: "Свечи и уют" },
    { src: "/images/mood/closeness-6.png", alt: "Плакат близости" },
    { src: "/images/mood/closeness-7.png", alt: "Тёплые тона" },
    { src: "/images/mood/closeness-8.png", alt: "Связь" },
    { src: "/images/mood/closeness-9.png", alt: "Домашний уют" },
    { src: "/images/mood/closeness-10.png", alt: "Нежность" },
  ],
  visualCodes: {
    color: "Тёплые оттенки: янтарный, золотистый, терракотовый, персиковый. Высокая насыщенность, мягкий контраст.",
    forms: "Округлые, плавные формы. Органические линии, переплетающиеся элементы создают ощущение связи.",
    composition: "Центрированная, сбалансированная. Элементы тянутся друг к другу, заполняют пространство.",
    scale: "Крупный план, интимная дистанция. Фигуры занимают большую часть кадра.",
    light: "Мягкий, рассеянный свет. Тёплые тона, золотистый час. Свет обнимает фигуры.",
    typography: "Округлый шрифт, плотный интерлиньяж, слова располагаются близко, словно обнимаются."
  },
  concept: "Близость как переплетение корней двух деревьев — невидимая, но нерушимая связь под поверхностью.",
  metaphor: "Переплетённые корни / нити — две сущности, ставшие единым целым через невидимую связь",
  mainAccent: "Две фигуры, склонившиеся друг к другу, образующие единую форму в тёплом свете",
  secondaryElements: [
    "Золотистый свет, обнимающий фигуры",
    "Переплетённые руки или силуэты",
    "Тёплые тона фона, создающие ощущение защищённости",
    "Мягкие, органические формы вокруг"
  ],
  eyeMovement: "От тёплого света — к центральной паре фигур — по линии их соприкосновения — к общему силуэту",
  sketches: [
    { src: "/images/sketches/closeness-1.png", alt: "Эскиз 1", description: "Две фигуры в объятии" },
    { src: "/images/sketches/closeness-2.png", alt: "Эскиз 2", description: "Переплетённые руки" },
    { src: "/images/sketches/closeness-3.png", alt: "Эскиз 3", description: "Силуэты в свете" },
  ],
  finalImage: "/images/final/closeness-final.png",
  palette: ["#d4a373", "#e9c46a", "#f4a261", "#fefae0", "#bc6c25"],
  typography: "Rounded Sans-serif, плотный, буквы касаются друг друга как любящие люди",
  rhythm: "Динамичный, но гармоничный. Плавные линии создают ощущение движения навстречу",
  conclusion: "Композиция передаёт эмоцию близости через визуальную метафору переплетения. Тёплая цветовая палитра, объединённые фигуры и мягкий обволакивающий свет создают ощущение защищённости, принятия и глубокой человеческой связи."
}

const perceptionLevels = [
  { 
    level: "1. Сенсорный", 
    description: "Первичное восприятие: цвет, форма, контраст",
    loneliness: "Холодные синие тона, резкий контраст, острые формы вызывают дискомфорт",
    closeness: "Тёплые янтарные тона, мягкий контраст, округлые формы вызывают комфорт"
  },
  { 
    level: "2. Перцептивный", 
    description: "Распознавание объектов и фигур",
    loneliness: "Одинокая фигура, стеклянная стена, пустое пространство",
    closeness: "Две переплетённые фигуры, общий силуэт, заполненное пространство"
  },
  { 
    level: "3. Когнитивный", 
    description: "Понимание сюжета и смысла",
    loneliness: "Человек отделён от мира невидимым барьером, не может дотянуться",
    closeness: "Два человека стали единым целым через связь друг с другом"
  },
  { 
    level: "4. Эмоциональный", 
    description: "Эмоциональный отклик",
    loneliness: "Грусть, тоска, ощущение изоляции, холод",
    closeness: "Тепло, нежность, ощущение защищённости, радость"
  },
  { 
    level: "5. Ассоциативный", 
    description: "Личные ассоциации и воспоминания",
    loneliness: "Воспоминания о моментах одиночества, разлуки, непо��имания",
    closeness: "Воспоминания о близких людях, объятиях, моментах единения"
  },
  { 
    level: "6. Символический", 
    description: "Культурные символы и архетипы",
    loneliness: "Стекло как метафора невидимого барьера, синий как цвет печали",
    closeness: "Переплетение как символ связи, золотой как цвет тепла и любви"
  },
  { 
    level: "7. Ценностный", 
    description: "Глубинные ценности и смыслы",
    loneliness: "Размышление о природе человеческого одиночества и потребности в связи",
    closeness: "Осознание ценности человеческих отношений и близости"
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-16 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Практическое занятие
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-4 mb-6 text-balance">
            Эмоциональные коды в визуальной коммуникации
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-xl md:text-2xl text-loneliness font-medium">Одиночество</span>
            <span className="text-muted-foreground">—</span>
            <span className="text-xl md:text-2xl text-closeness font-medium">Близость</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Исследование семи уровней восприятия визуальной коммуникации и разработка двух композиций с противоположным эмоциональным посылом
          </p>
        </div>
      </section>

      {/* Stage 1: Emotional Task */}
      <section id="stage1" className="py-16 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-muted-foreground">Этап 1</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Постановка эмоциональной задачи</h2>
            <p className="text-muted-foreground mt-2">Анализ двух противоположных эмоциональных состояний</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Loneliness Card */}
            <div className="bg-loneliness-muted rounded-lg p-6">
              <h3 className="text-xl font-medium text-loneliness mb-4">Одиночество</h3>
              
              <div className="mb-5">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Слова-ассоциации</h4>
                <div className="flex flex-wrap gap-1.5">
                  {lonelinessData.associations.map((word, i) => (
                    <span key={i} className="px-2 py-0.5 bg-background/80 rounded text-sm">{word}</span>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Телесные ощущения</h4>
                <ul className="space-y-1 text-sm">
                  {lonelinessData.bodyFeelings.map((feeling, i) => (
                    <li key={i}>{feeling}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Описание состояния</h4>
                <p className="text-sm leading-relaxed">{lonelinessData.stateDescription}</p>
              </div>
            </div>

            {/* Closeness Card */}
            <div className="bg-closeness-muted rounded-lg p-6">
              <h3 className="text-xl font-medium text-closeness mb-4">Близость</h3>
              
              <div className="mb-5">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Слова-ассоциации</h4>
                <div className="flex flex-wrap gap-1.5">
                  {closenessData.associations.map((word, i) => (
                    <span key={i} className="px-2 py-0.5 bg-background/80 rounded text-sm">{word}</span>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Телесные ощущения</h4>
                <ul className="space-y-1 text-sm">
                  {closenessData.bodyFeelings.map((feeling, i) => (
                    <li key={i}>{feeling}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Описание состояния</h4>
                <p className="text-sm leading-relaxed">{closenessData.stateDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 2: Visual Codes */}
      <section id="stage2" className="py-16 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-muted-foreground">Этап 2</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Анализ визуальных кодов эмоции</h2>
            <p className="text-muted-foreground mt-2">Мудборды и анализ визуальных средств для каждой эмоции</p>
          </div>

          {/* Loneliness Moodboard */}
          <div className="mb-12">
            <h3 className="text-lg font-medium text-loneliness mb-4">Мудборд: Одиночество</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
              {lonelinessData.moodboardImages.map((img, i) => (
                <div key={i} className="aspect-square relative rounded overflow-hidden bg-muted">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(lonelinessData.visualCodes).map(([key, value]) => (
                <div key={key} className="bg-loneliness-muted rounded p-4">
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">
                    {key === 'color' ? 'Цвет' : key === 'forms' ? 'Формы' : key === 'composition' ? 'Композиция' : key === 'scale' ? 'Масштаб' : key === 'light' ? 'Свет' : 'Типографика'}
                  </h4>
                  <p className="text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Closeness Moodboard */}
          <div>
            <h3 className="text-lg font-medium text-closeness mb-4">Мудборд: Близость</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
              {closenessData.moodboardImages.map((img, i) => (
                <div key={i} className="aspect-square relative rounded overflow-hidden bg-muted">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(closenessData.visualCodes).map(([key, value]) => (
                <div key={key} className="bg-closeness-muted rounded p-4">
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">
                    {key === 'color' ? 'Цвет' : key === 'forms' ? 'Формы' : key === 'composition' ? 'Композиция' : key === 'scale' ? 'Масштаб' : key === 'light' ? 'Свет' : 'Типографика'}
                  </h4>
                  <p className="text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stage 3: Perception Levels */}
      <section id="stage3" className="py-16 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-muted-foreground">Этап 3</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Связь с уровнями восприятия</h2>
            <p className="text-muted-foreground mt-2">Анализ семи уровней восприятия визуальной коммуникации</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium">Уровень</th>
                  <th className="text-left py-3 px-4 font-medium text-loneliness">Одиночество</th>
                  <th className="text-left py-3 px-4 font-medium text-closeness">Близость</th>
                </tr>
              </thead>
              <tbody>
                {perceptionLevels.map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 px-4">
                      <div className="font-medium">{row.level}</div>
                      <div className="text-xs text-muted-foreground">{row.description}</div>
                    </td>
                    <td className="py-3 px-4 bg-loneliness-muted/50">{row.loneliness}</td>
                    <td className="py-3 px-4 bg-closeness-muted/50">{row.closeness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stage 4: Concept */}
      <section id="stage4" className="py-16 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-muted-foreground">Этап 4</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Формирование концепции</h2>
            <p className="text-muted-foreground mt-2">Идея композиции, визуальная метафора, главный акцент</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Loneliness Concept */}
            <div className="bg-loneliness-muted rounded-lg p-6">
              <h3 className="text-xl font-medium text-loneliness mb-4">Концепция: Одиночество</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Идея</h4>
                  <p className="text-sm">{lonelinessData.concept}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Метафора</h4>
                  <p className="text-sm">{lonelinessData.metaphor}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Главный акцент</h4>
                  <p className="text-sm">{lonelinessData.mainAccent}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Второстепенные элементы</h4>
                  <ul className="text-sm space-y-1">
                    {lonelinessData.secondaryElements.map((el, i) => <li key={i}>{el}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Движение взгляда</h4>
                  <p className="text-sm">{lonelinessData.eyeMovement}</p>
                </div>
              </div>
            </div>

            {/* Closeness Concept */}
            <div className="bg-closeness-muted rounded-lg p-6">
              <h3 className="text-xl font-medium text-closeness mb-4">Концепция: Близость</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Идея</h4>
                  <p className="text-sm">{closenessData.concept}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Метафора</h4>
                  <p className="text-sm">{closenessData.metaphor}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Главный акцент</h4>
                  <p className="text-sm">{closenessData.mainAccent}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Второстепенные элементы</h4>
                  <ul className="text-sm space-y-1">
                    {closenessData.secondaryElements.map((el, i) => <li key={i}>{el}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Движение взгляда</h4>
                  <p className="text-sm">{closenessData.eyeMovement}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 5: Sketches */}
      <section id="stage5" className="py-16 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-muted-foreground">Этап 5</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Эскизирование</h2>
            <p className="text-muted-foreground mt-2">Черновые композиции для проверки баланса и направления взгляда</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Loneliness Sketches */}
            <div>
              <h3 className="text-lg font-medium text-loneliness mb-4">Эскизы: Одиночество</h3>
              <div className="grid grid-cols-3 gap-2">
                {lonelinessData.sketches.map((sketch, i) => (
                  <div key={i} className="space-y-1">
                    <div className="aspect-[3/4] relative rounded overflow-hidden bg-muted">
                      <Image src={sketch.src} alt={sketch.alt} fill className="object-cover" />
                    </div>
                    <p className="text-xs text-muted-foreground">{sketch.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Closeness Sketches */}
            <div>
              <h3 className="text-lg font-medium text-closeness mb-4">Эскизы: Близость</h3>
              <div className="grid grid-cols-3 gap-2">
                {closenessData.sketches.map((sketch, i) => (
                  <div key={i} className="space-y-1">
                    <div className="aspect-[3/4] relative rounded overflow-hidden bg-muted">
                      <Image src={sketch.src} alt={sketch.alt} fill className="object-cover" />
                    </div>
                    <p className="text-xs text-muted-foreground">{sketch.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 6: Final Works */}
      <section id="stage6" className="py-16 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono text-muted-foreground">Этап 6</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-1">Финальные работы</h2>
            <p className="text-muted-foreground mt-2">Проработанные визуальные композиции с анализом</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Loneliness Final */}
            <div>
              <div className="h-[500px] relative rounded-lg overflow-hidden bg-slate-100 mb-4 flex items-center justify-center">
                <Image src={lonelinessData.finalImage} alt="Финальная работа: Одиночество" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-medium text-loneliness mb-3">Одиночество</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Палитра</h4>
                  <div className="flex gap-1">
                    {lonelinessData.palette.map((color, i) => (
                      <div key={i} className="w-8 h-8 rounded" style={{ backgroundColor: color }} title={color} />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Типографика</h4>
                  <p className="text-sm">{lonelinessData.typography}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Ритм</h4>
                  <p className="text-sm">{lonelinessData.rhythm}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Вывод</h4>
                  <p className="text-sm">{lonelinessData.conclusion}</p>
                </div>
              </div>
            </div>

            {/* Closeness Final */}
            <div>
              <div className="h-[500px] relative rounded-lg overflow-hidden bg-amber-50 mb-4 flex items-center justify-center">
                <Image src={closenessData.finalImage} alt="Финальная работа: Близость" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-medium text-closeness mb-3">Близость</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Палитра</h4>
                  <div className="flex gap-1">
                    {closenessData.palette.map((color, i) => (
                      <div key={i} className="w-8 h-8 rounded" style={{ backgroundColor: color }} title={color} />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Типографика</h4>
                  <p className="text-sm">{closenessData.typography}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Ритм</h4>
                  <p className="text-sm">{closenessData.rhythm}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase mb-1">Вывод</h4>
                  <p className="text-sm">{closenessData.conclusion}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparative Analysis */}
          <div className="mt-12 bg-secondary rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">Сравнительный анализ</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-medium text-muted-foreground uppercase mb-2">Контраст эмоций</h4>
                <p className="text-sm leading-relaxed">
                  Две работы представляют собой визуальные антиподы: холод против тепла, 
                  изоляция против единения, пустота против наполненности. При этом обе 
                  композиции объединены общей темой человеческих связей.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-medium text-muted-foreground uppercase mb-2">Выводы</h4>
                <p className="text-sm leading-relaxed">
                  Визуальные коды способны точно передавать эмоциональные состояния через 
                  комплексное воздействие цвета, формы, композиции и света. Понимание 
                  семи уровней восприятия позволяет создавать работы, резонирующие 
                  со зрителем на всех уровнях.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-muted-foreground">
          <p>Практическая работа: Эмоциональные коды в визуальной коммуникации</p>
          <p>Тема: Одиночество — Близость</p>
        </div>
      </footer>
    </main>
  )
}
