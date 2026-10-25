export const contact = { phone:'۰۲۱-۸۸۸۸ ۱۲۳۴', email:'hello@khorshid.art', address:'تهران، نشانی گالری به‌زودی اعلام می‌شود', hours:'شنبه تا پنجشنبه، ۱۰ تا ۱۹' };
export const formatPrice=(value:number)=>new Intl.NumberFormat('fa-IR').format(value)+' تومان';
export const products=[
 {slug:'pomegranate-light',title:'نورِ انار',artist:'سارا مهرآیین',medium:'رنگ روغن روی بوم',category:'نقاشی رنگ روغن',price:12800000,popularity:98,image:'/art/oil-still-life.webp',dims:'۵۰ × ۷۰ سانتی‌متر',description:'طبیعت بی‌جانِ گرم و آرامی از انار و نورِ اواخر روز؛ هر ضربه‌قلم ردّی از مکث و تماشا در خود دارد.'},
 {slug:'garden-memory',title:'باغِ به‌یادمانده',artist:'نیلوفر راد',medium:'آبرنگ روی کاغذ کتان',category:'آبرنگ',price:7400000,popularity:88,image:'/art/watercolor-garden.webp',dims:'۳۰ × ۴۰ سانتی‌متر',description:'روایتی لطیف از باغی ایرانی، جایی میان خاطره و خیال؛ با رنگ‌گذاری شفاف و لایه‌های آرام آبرنگ.'},
 {slug:'quiet-face',title:'سکوتِ روشن',artist:'آوا فرهمند',medium:'رنگ روغن روی بوم',category:'پرتره',price:15600000,popularity:94,image:'/art/modern-portrait.webp',dims:'۴۰ × ۶۰ سانتی‌متر',description:'پرتره‌ای معاصر با رنگ‌های خاکی و ضرباهنگی آزاد؛ تلاشی برای دیدنِ سکوت، نه فقط چهره.'},
 {slug:'held-fruit',title:'دانه‌های صبور',artist:'رها کیانی',medium:'سیاه‌قلم روی کاغذ',category:'سیاه‌قلم',price:5200000,popularity:76,image:'/art/charcoal-hands.webp',dims:'۲۹ × ۴۲ سانتی‌متر',description:'مطالعه‌ای دقیق از دست و میوه؛ تمرینی در مشاهده‌ی نور، بافت و پیوندهای کوچک انسانی.'},
 {slug:'sunlit-table',title:'ظهرِ آرام',artist:'سارا مهرآیین',medium:'رنگ روغن روی بوم',category:'آثار دکوراتیو',price:9800000,popularity:85,image:'/art/oil-still-life.webp',dims:'۴۰ × ۵۰ سانتی‌متر',description:'ترکیبی گرم و مینیمال برای خانه‌هایی که جای یک لحظه‌ی آرام را نگه می‌دارند.'},
 {slug:'rose-courtyard',title:'حیاطِ اردیبهشت',artist:'نیلوفر راد',medium:'آبرنگ',category:'نقاشی مدرن',price:6800000,popularity:81,image:'/art/watercolor-garden.webp',dims:'۳۲ × ۴۵ سانتی‌متر',description:'حیاطی آشنا در رنگ‌های بهاری؛ مرزی باریک میان مشاهده‌ی واقعی و خاطره‌ی شخصی.'}
];
export const studentArt=[
 {title:'آرامشِ ناتمام',artist:'هلیا مرادی',medium:'سیاه‌قلم',image:'/art/hero-charcoal.webp',size:'tall'},
 {title:'باغِ روشن',artist:'سودابه نصیری',medium:'آبرنگ',image:'/art/watercolor-garden.webp',size:'small'},
 {title:'میانِ دو رنگ',artist:'آرمان رستگار',medium:'رنگ روغن',image:'/art/modern-portrait.webp',size:'medium'},
 {title:'سایه و دانه',artist:'نازنین آذر',medium:'طراحی',image:'/art/charcoal-hands.webp',size:'small'},
 {title:'انارستان',artist:'ماهور ساعی',medium:'رنگ روغن',image:'/art/oil-still-life.webp',size:'medium'}
];
export const courses=[
 {title:'آموزش سیاه‌قلم',desc:'از شناخت ارزش‌های نوری تا ساختن پرتره‌ای زنده و دقیق.',age:'نوجوان و بزرگسال',level:'از پایه تا پیشرفته',image:'/art/hero-charcoal.webp',outcomes:['کنترل سایه‌روشن','طراحی چهره','شناخت بافت و حجم']},
 {title:'طراحی و چهره‌نگاری',desc:'دیدنِ دقیق‌تر و تبدیل مشاهده به خط و فرم.',age:'نوجوان و بزرگسال',level:'همه سطوح',image:'/art/charcoal-hands.webp',outcomes:['تناسبات چهره','طراحی از مدل','بیان شخصی']},
 {title:'نقاشی رنگ روغن',desc:'آشنایی با رنگ، لایه‌گذاری و ساختن ترکیب‌بندی.',age:'بزرگسال',level:'مقدماتی تا پیشرفته',image:'/art/oil-still-life.webp',outcomes:['چرخه رنگ','تکنیک لایه‌گذاری','طبیعت بی‌جان']},
 {title:'آبرنگ',desc:'تجربه‌ی شفافیت، رهایی و گفت‌وگوی آب با رنگ.',age:'نوجوان و بزرگسال',level:'مقدماتی',image:'/art/watercolor-garden.webp',outcomes:['کنترل آب و رنگ','لایه‌های شفاف','ترکیب‌بندی']},
 {title:'مداد رنگی',desc:'ساختن رنگ و عمق با لایه‌های ظریف و پیوسته.',age:'کودک و نوجوان',level:'از پایه',image:'/art/modern-portrait.webp',outcomes:['ترکیب رنگ','بافت‌سازی','مشاهده‌گری']},
 {title:'نقاشی کودکان',desc:'فضایی امن برای خیال‌پردازی، تجربه و بازی با مواد.',age:'کودکان ۶ تا ۱۲ سال',level:'بدون پیش‌نیاز',image:'/art/children-painting.webp',outcomes:['خلاقیت و اعتمادبه‌نفس','آشنایی با مواد','بیان تصویری']},
 {title:'تکنیک‌های نقاشی مدرن',desc:'آزادیِ تجربه‌ی متریال و پیدا کردن زبان تصویری خود.',age:'نوجوان و بزرگسال',level:'متوسط',image:'/art/modern-portrait.webp',outcomes:['اکریلیک و ترکیب مواد','بافت و لایه','توسعه سبک شخصی']}
];
export const testimonials=[
 {quote:'«برای من کلاس‌ها فقط یادگرفتن تکنیک نبود؛ کم‌کم یاد گرفتم با حوصله‌تر نگاه کنم و از اشتباه‌کردن نترسم.»',name:'مینا ساعی',role:'هنرجوی بزرگسال'},
 {quote:'«دخترم با ذوق از کلاس برمی‌گردد و در خانه هم برای خودش قصه‌های تازه‌ای با رنگ‌ها می‌سازد.»',name:'مادرِ ترانه',role:'والد هنرجوی کودک'},
 {quote:'«فضای آرام و توجه استاد به مسیر هر نفر باعث شد بالاخره سبک خودم را جدی بگیرم.»',name:'کیان رستگار',role:'هنرجوی نقاشی مدرن'}
];
export const instructors=[
 {name:'مهتاب یزدان‌پناه',field:'نقاشی و طراحی',bio:'باور دارد آموزش هنر از خوب دیدن شروع می‌شود؛ همراه هنرجویان در مسیر کشف زبان شخصی‌شان است.',image:'/art/instructor-mehtab.webp'},
 {name:'شیدا فرهمند',field:'آبرنگ و تکنیک‌های معاصر',bio:'علاقه‌مند به تجربه‌ی آزاد متریال‌ها و ساختن فضایی امن برای پرسش و آزمون.',image:'/art/instructor-shida.webp'}
];
