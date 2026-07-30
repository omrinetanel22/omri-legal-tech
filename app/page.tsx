"use client";

import { useEffect } from "react";

const phoneDisplay = "050-6455360";
const phoneHref = "+972506455360";
const whatsappHref =
  "https://wa.me/972506455360?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%A2%D7%95%D7%9E%D7%A8%D7%99%2C%20%D7%A8%D7%A6%D7%99%D7%AA%D7%99%20%D7%9C%D7%91%D7%93%D7%95%D7%A7%20%D7%90%D7%99%D7%AA%D7%9A%20%D7%90%D7%9D%20%D7%94%D7%A9%D7%99%D7%A8%D7%95%D7%AA%20%D7%A9%D7%90%D7%A0%D7%99%20%D7%A6%D7%A8%D7%99%D7%9A%2F%D7%94%20%D7%9E%D7%AA%D7%90%D7%99%D7%9D.";

const systems = [
  ["⚖️", "נט המשפט", "צפייה, הורדה וסיוע טכני בהעלאת מסמכים"],
  ["📂", "כלים שלובים", "סיוע טכני בתיקי הוצאה לפועל"],
  ["🏠", "רשם המקרקעין", "הפקת נסחי טאבו ומסמכי מקרקעין"],
  ["📜", "רשם הירושה", "שימוש במערכת והעלאת מסמכים"],
  ["🏢", "רשם החברות", "הפקת מידע ותדפיסים"],
  ["🪪", "הזדהות לאומית", "כניסה לשירותים ממשלתיים"],
  ["💰", "רשות המסים", "טפסים ושירותים מקוונים"],
  ["🏛️", "ביטוח לאומי", "האזור האישי והעלאת מסמכים"],
];

const serviceGroups = [
  {
    icon: "✍️",
    title: "הקלדה, עריכה וליטוש מסמכים",
    intro:
      "יש לכם מה לומר, אבל אינכם יודעים כיצד להעלות זאת על הכתב? הופכים את התוכן שמסרתם למסמך ברור, מסודר ומכובד.",
    items: [
      ["⌨️", "הקלדת מסמכים בעברית"],
      ["✍️", "הקלדה מתוך כתב יד"],
      ["📷", "חילוץ והקלדה מתוך צילום או סריקה"],
      ["🎙️", "תמלול הקלטות"],
      ["🔤", "תיקוני כתיב, פיסוק ושגיאות הקלדה"],
      ["📝", "עריכה לשונית וסגנונית"],
      ["✨", "ליטוש פורמלי של מכתבים"],
      ["🧩", "ארגון טקסט מבולגן למסמך ברור"],
      ["📑", "חלוקה לכותרות, סעיפים ותתי־סעיפים"],
      ["🎨", "עיצוב מסמכים רשמיים"],
      ["📋", "הכנת מסמך על בסיס התוכן וההנחיות שמסר הלקוח"],
      ["🖨️", "התאמת מסמך להדפסה ולשליחה"],
      ["↩️", "התאמה מלאה לעברית מימין לשמאל"],
      ["🔢", "תיקון מספור, רווחים וכניסות שהשתבשו"],
      ["📚", "הוספת תוכן עניינים ומספור עמודים"],
      ["📊", "הכנת טבלאות ורשימות מסודרות"],
    ],
  },
  {
    icon: "⚙️",
    title: "סיוע טכני במערכות משפטיות וממשלתיות",
    intro:
      "כניסה למערכת, איתור והורדת מסמכים, התאמת הקובץ וסיוע טכני בהעלאה, בלי להישאר לבד מול הודעת שגיאה.",
    items: [
      ["⚖️", "סיוע בכניסה לנט המשפט"],
      ["🔍", "איתור החלטות ומסמכים בתיק קיים"],
      ["📥", "הורדת החלטות וקבצים"],
      ["📤", "סיוע טכני בהעלאת מסמכים"],
      ["🧾", "התאמת קבצים לדרישות המערכת"],
      ["🛠️", "טיפול בקובץ שנדחה מסיבה טכנית"],
      ["📂", "סיוע טכני בכלים שלובים"],
      ["💳", "איתור נתונים ופעולות בתיק הוצאה לפועל"],
      ["🪪", "סיוע בהזדהות הלאומית"],
      ["📜", "סיוע טכני במערכת רשם הירושה"],
      ["🏠", "הפקת נסח טאבו רגיל, מרוכז או היסטורי לפי בקשת הלקוח"],
      ["🏢", "הפקת תדפיסי חברה"],
      ["🧮", "סיוע טכני באתרי רשות המסים"],
      ["🏛️", "סיוע טכני באתר הביטוח הלאומי"],
      ["🖊️", "סיוע במילוי טופס לפי המידע שמוסר הלקוח"],
      ["📎", "סריקה, העלאה וצירוף קבצים"],
      ["✅", "בדיקה טכנית שכל הקבצים צורפו ונפתחים"],
      ["👨‍🏫", "הדרכה אישית לשימוש עתידי במערכת"],
    ],
  },
  {
    icon: "📄",
    title: "Word ומסמכים מקצועיים",
    intro:
      "מסמך נקי ויציב, עם עברית תקינה, מספור שלא קופץ ועיצוב שנשמר גם בהדפסה ובהמרה ל־PDF.",
    items: [
      ["📄", "הקמה ועיצוב של מסמך Word"],
      ["🔢", "תיקון מספור שהשתבש"],
      ["🪜", "יצירת מספור מדורג"],
      ["↔️", "תיקון כניסות, טאבים ורווחים"],
      ["🧭", "יישור תקין של טקסט בעברית"],
      ["🔠", "תיקון שילוב עברית, אנגלית ומספרים"],
      ["📚", "עיצוב מסמכים ארוכים"],
      ["🔝", "הוספת כותרות עליונות ותחתונות"],
      ["🔢", "מספור עמודים"],
      ["📖", "יצירת תוכן עניינים"],
      ["🖼️", "שילוב תמונות וצילומי מסך"],
      ["📊", "שילוב טבלאות"],
      ["🗒️", "הכנת תבניות קבועות"],
      ["🔎", "המרת מסמך סרוק למסמך הניתן לעריכה"],
      ["🧹", "ניקוי מסמך לאחר המרה"],
      ["🖨️", "הכנת מסמך להדפסה, לחתימה או להגשה"],
    ],
  },
  {
    icon: "📕",
    title: "PDF, סריקות ונספחים",
    intro:
      "כל הפעולות הקטנות שהופכות אוסף קבצים למסמך אחד מסודר, קל, תקין ונוח להגשה או לשליחה.",
    items: [
      ["🧩", "מיזוג קובצי PDF"],
      ["✂️", "פיצול קובץ לעמודים או לפרקים"],
      ["🔃", "סידור עמודים"],
      ["🗑️", "הסרת עמודים מיותרים"],
      ["🔄", "סיבוב ויישור עמודים"],
      ["🗜️", "הקטנת משקל הקובץ"],
      ["📄", "המרת Word ל־PDF"],
      ["📝", "המרת PDF ל־Word"],
      ["🖼️", "המרת תמונות ל־PDF"],
      ["🔍", "חילוץ טקסט מקובץ סרוק"],
      ["🔡", "זיהוי תווים OCR"],
      ["🔢", "הוספת מספור לעמודים"],
      ["🔖", "הוספת כותרות וסימניות"],
      ["📚", "יצירת קובץ נספחים"],
      ["🗓️", "מיון נספחים לפי סדר כרונולוגי"],
      ["📋", "הכנת רשימת נספחים"],
      ["🏷️", "מתן שמות ברורים לקבצים"],
      ["📦", "התאמת קבצים למגבלות גודל"],
      ["✅", "בדיקת תקינות לפני העלאה"],
      ["✍️", "הכנת קובץ לחתימה דיגיטלית"],
      ["🖊️", "שילוב חתימה לפי הנחיית בעל החתימה"],
    ],
  },
  {
    icon: "🤖",
    title: "בינה מלאכותית בשילוב מיומנות אנושית",
    intro:
      "הטכנולוגיה מסייעת, האדם בודק: שימוש חכם בכלים מתקדמים, עם תשומת לב לפרטים והתאמה להנחיות הלקוח.",
    items: [
      ["💡", "הפיכת רעיונות מפוזרים לטיוטה מסודרת"],
      ["✨", "שיפור ניסוח של תוכן קיים"],
      ["📃", "סיכום מסמכים ארוכים"],
      ["🔎", "חילוץ פרטים מרכזיים"],
      ["⚖️", "השוואה בין גרסאות"],
      ["📊", "הכנת טבלאות, רשימות וצירי זמן"],
      ["🗂️", "ארגון חומר לפי נושאים"],
      ["💬", "הכנת הנחיות ופרומפטים"],
      ["👁️", "בדיקה אנושית של התוצאה"],
      ["🧹", "תיקון כפילויות וניסוחים מלאכותיים"],
      ["🎯", "התאמת התוצאה לסגנון הלקוח"],
      ["👨‍🏫", "הדרכה מעשית לשימוש אחראי בבינה מלאכותית"],
      ["🔐", "תשומת לב לפרטיות ולסודיות"],
    ],
  },
  {
    icon: "👨‍🏫",
    title: "הדרכה אישית וסבלנית",
    intro:
      "עובדים יחד על המחשב או הטלפון שלכם, בקצב שמתאים לכם, כדי שתוכלו לבצע את הפעולה גם בפעם הבאה.",
    items: [
      ["🖥️", "הדרכה על המחשב של הלקוח"],
      ["📱", "הדרכה על הטלפון"],
      ["📄", "הדרכה ב־Word וב־PDF"],
      ["⚖️", "הדרכה טכנית בנט המשפט ובמערכות מקוונות"],
      ["📥", "עזרה בהורדה ובשמירת מסמכים"],
      ["📷", "סריקת מסמכים באמצעות הטלפון"],
      ["📧", "שליחת מסמכים בדוא״ל"],
      ["💬", "שליחת מסמכים בוואטסאפ"],
      ["📁", "פתיחת תיקיות וארגון קבצים"],
      ["🔐", "הדרכה לשמירה בטוחה של סיסמאות"],
      ["🧓", "סיוע לאנשים שאינם רגילים לעבוד עם מחשב"],
      ["📋", "הכנת דף הוראות אישי"],
      ["👣", "ליווי שלב אחר שלב ובקצב של הלקוח"],
    ],
  },
  {
    icon: "⚖️",
    title: "שירותים לעורכי דין ולמשרדים",
    intro:
      "סיוע טכני וצורני מאחורי הקלעים, בהתאם להנחיות עורך הדין ובסטנדרט שמתאים לעבודה משרדית מקצועית.",
    items: [
      ["⚖️", "הקלדה ועיצוב של כתבי בי־דין לפי הנחיות עורך הדין"],
      ["📚", "סידור ומספור נספחים"],
      ["🗃️", "הכנת תיק מוצגים"],
      ["📤", "התאמת מסמכים להגשה"],
      ["🔤", "הגהה לשונית וצורנית"],
      ["📖", "יצירת תוכן עניינים"],
      ["📊", "הכנת טבלאות וצירי זמן"],
      ["🔍", "איתור כפילויות וחוסרים"],
      ["💻", "סיוע טכני בנט המשפט ובכלים שלובים"],
      ["👥", "הדרכת צוות המשרד"],
      ["🛠️", "פתרון תקלות Word ו־PDF"],
      ["🗒️", "הכנת תבניות משרדיות"],
      ["🤖", "שילוב בינה מלאכותית בהתאם להנחיות עורך הדין"],
    ],
  },
];

const faqs = [
  [
    "האם השירות כולל ייעוץ משפטי?",
    "לא. השירות הוא טכני ומנהלי וכולל הקלדה, עריכה לשונית ופורמלית, עיצוב מסמכים, טיפול בקבצים והדרכה. הוא אינו כולל ייעוץ משפטי, חוות דעת משפטית או ייצוג.",
  ],
  [
    "האם אפשר לקבל עזרה בנט המשפט?",
    "כן. ניתן לקבל סיוע טכני בכניסה, באיתור ובהורדת מסמכים, בהתאמת קבצים ובהעלאתם. תוכן המסמך וההחלטה מה להגיש נשארים באחריות הלקוח או עורך הדין המטפל.",
  ],
  [
    "האם אפשר להפיק נסח טאבו?",
    "כן. ניתן לקבל סיוע בהפקת נסח רגיל, מרוכז או היסטורי, בהתאם לפרטי הנכס ולבקשת הלקוח.",
  ],
  [
    "האם אפשר לקבל עזרה מהבית?",
    "כן. חלק ניכר מהשירותים ניתן מרחוק, מכל מקום בארץ ובתיאום מראש.",
  ],
  [
    "האם השירות מתאים גם למי שאינו מסתדר עם מחשבים?",
    "בהחלט. ההסבר ניתן בשפה פשוטה, בסבלנות ובקצב שמתאים ללקוח, בלי להניח ידע מוקדם.",
  ],
  [
    "האם ניתן לקבל שירות לעורך דין או למשרד?",
    "כן. השירות כולל עבודה טכנית וצורנית במסמכים, נספחים, Word, PDF ומערכות מקוונות, בהתאם להנחיות עורך הדין.",
  ],
  [
    "מה קורה כאשר מתברר שנדרש טיפול של עורך דין?",
    "אפשר להפנות את העניין לעורך דין ותיק ומנוסה, בכפוף להסכמת הלקוח ולהתקשרות נפרדת וישירה עם עורך הדין.",
  ],
  [
    "האם ניתן לשלוח מסמכים לבדיקה טכנית בוואטסאפ?",
    "כן. אפשר לשלוח הודעה ראשונית ולתאר את הצורך. לאחר מכן יימסרו הנחיות מסודרות להעברת החומר, בהתאם להיקפו ולרגישותו.",
  ],
];

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function LogoFive({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`logo-five${compact ? " logo-five-compact" : ""}`}>
      <span className="logo-five-grid" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span className="logo-five-name">עומרי נתנאל</span>
      {!compact && (
        <span className="logo-five-rule" aria-hidden="true">
          <i />
        </span>
      )}
      <small>משפטנות ומחשוב</small>
    </span>
  );
}

export default function Home() {
  useEffect(() => {
    const root = document.documentElement;
    const revealTargets = document.querySelectorAll(
      ".section, .trust-bar, .contact-section, .lawyer-section",
    );
    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    revealTargets.forEach((target) => observer.observe(target));

    let ticking = false;
    const updateScroll = () => {
      root.style.setProperty("--page-scroll", String(window.scrollY));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };
    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      root.classList.remove("motion-ready");
    };
  }, []);

  const sharePage = async () => {
    const data = {
      title: "עומרי נתנאל – משפטנות ומחשוב",
      text: "סיוע אישי ומקצועי במסמכים, מערכות מקוונות, Word ו־PDF",
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(data);
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
    window.alert("הקישור הועתק");
  };

  return (
    <main dir="rtl">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="חזרה לראש הדף">
          <LogoFive compact />
        </a>
        <nav aria-label="ניווט ראשי">
          <a href="#services">שירותים</a>
          <a href="#transformation">לפני ואחרי</a>
          <a href="#about">אודות</a>
          <a href="#faq">שאלות</a>
        </nav>
        <a className="header-contact" href={whatsappHref} target="_blank">
          פנייה בוואטסאפ
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb orb-one" aria-hidden="true" />
        <div className="hero-orb orb-two" aria-hidden="true" />
        <div className="hero-content">
          <span className="hero-kicker">
            <i /> סדר במסמכים. ביטחון במערכות. הסבר בגובה העיניים.
          </span>
          <h1>
            מסתבכים עם מסמכים,
            <br />
            <span>מערכות מקוונות או קבצים?</span>
            <br />
            יש מי שיעזור.
          </h1>
          <p className="hero-copy">
            צריכים להגיש מסמך, להפיק נסח טאבו, לסדר קובץ או להבין כיצד
            משתמשים במערכת מקוונת? תקבלו סיוע אישי, מקצועי וסבלני, שלב אחר
            שלב.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappHref} target="_blank">
              <span>💬</span> פנייה בוואטסאפ
            </a>
            <a className="button button-secondary" href={`tel:${phoneHref}`}>
              <span>📞</span> שיחת טלפון
            </a>
            <a className="text-link" href="#services">
              לכל השירותים <span>←</span>
            </a>
          </div>
          <p className="scope-note">
            <span>✓</span> סיוע טכני ומנהלי, ללא ייעוץ משפטי וללא ייצוג
          </p>
        </div>

        <div className="hero-visual hero-story" aria-label="המחשה: ממכתב מבלבל לפתרון מסודר">
          <div className="story-bubble bubble-question">
            קיבלתי את המכתב הזה...
            <b>מה עושים עכשיו ואיך מגישים אותו?</b>
          </div>
          <div className="story-bubble bubble-answer">
            לא כל מכתב מחייב טיפול משפטי מלא ויקר.
            <b>לפעמים צריך איש מקצוע שפשוט יעשה סדר.</b>
          </div>

          {/* The asset is already optimized and transparent; plain img avoids
              runtime image-proxy work in the edge-hosted site. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="story-person"
            src="/omri-legal-tech/omri-hero-confused-man.png"
            alt="אדם מחזיק מכתב ומחפש דרך פשוטה לטפל בו"
            width={768}
            height={512}
          />

          <div className="idea-bulb" aria-hidden="true">
            <span>💡</span>
            <i />
            <i />
            <i />
          </div>

          <div className="story-phone" aria-label="פנייה לעומרי נתנאל באמצעות הטלפון">
            <span className="phone-speaker" />
            <div className="phone-screen">
              <LogoFive />
              <div className="phone-chat">
                <span>שלום, קיבלתי מכתב ואני לא יודע מה לעשות</span>
                <b>בשמחה. שלח לי צילום ונעשה סדר 👌</b>
              </div>
              <span className="phone-check">✓</span>
            </div>
          </div>

          <div className="story-result">
            <span>✓</span>
            <p>
              <b>המסמך מסודר ומוכן</b>
              <small>מהיר, ברור ובמחיר נגיש</small>
            </p>
          </div>
        </div>
      </section>

      <section className="trust-bar" aria-label="יתרונות מרכזיים">
        <div>
          <span>⚖️</span>
          <p>
            <strong>תואר LL.B</strong>
            <small>במשפטים</small>
          </p>
        </div>
        <div>
          <span>💻</span>
          <p>
            <strong>טכנאי מחשבים</strong>
            <small>ומנהל רשתות</small>
          </p>
        </div>
        <div>
          <span>🗂️</span>
          <p>
            <strong>למעלה מעשור</strong>
            <small>בסביבת משרדי עורכי דין</small>
          </p>
        </div>
        <div>
          <span>🤝</span>
          <p>
            <strong>שירות אישי</strong>
            <small>ברור וסבלני</small>
          </p>
        </div>
      </section>

      <section className="section systems-section" id="systems">
        <SectionHeading
          eyebrow="מערכות מקוונות"
          title="מכירים את המערכת. מלווים אתכם בתהליך."
        >
          כניסה, איתור, הורדה, התאמת קבצים והעלאה, עם הסבר ברור בכל שלב.
        </SectionHeading>
        <div className="systems-grid">
          {systems.map(([icon, title, text]) => (
            <article className="system-card" key={title}>
              <span>{icon}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="systems-disclaimer">
          הסיוע מתייחס לתפעול המערכת ולטיפול הטכני בקבצים. תוכן המסמך וההחלטה
          מה להגיש הם באחריות הלקוח או עורך הדין המטפל.
        </p>
      </section>

      <section className="section transformation" id="transformation">
        <SectionHeading eyebrow="דוגמה מהשטח" title="מצילום בטלפון למסמך שמכבד את התוכן">
          לא משנים את המסר שלכם. מארגנים, מלטשים ומעצבים אותו כך שיהיה ברור,
          קריא ומקצועי.
        </SectionHeading>

        <div className="before-after">
          <article className="example-card before-card">
            <div className="example-label">
              <span>לפני</span>
              <small>צילום שהתקבל מהלקוח</small>
            </div>
            <div className="photo-surface">
              <div className="raw-paper" aria-label="מסמך גולמי ולא מעוצב">
                <div className="fold fold-v" />
                <div className="fold fold-h" />
                <p className="raw-date">12.5.2026</p>
                <p>לכבוד: מחלקת שירות</p>
                <p>הנדון: בקשה לעדכון פרטים</p>
                <br />
                <p>שלום רב,</p>
                <p>
                  אני פונה אליכם בבקשה לעדכן את הפרטים בהתאם למסמכים שצורפו
                  ולבדוק את פנייתי.
                </p>
                <p>
                  אבקש לאשר את קבלת המסמכים ולשלוח אלי תשובה לאחר השלמת
                  הבדיקה.
                </p>
                <br />
                <p>בתודה מראש</p>
                <div className="scribble">———</div>
              </div>
            </div>
          </article>

          <div className="transform-arrow" aria-hidden="true">
            <span>←</span>
            <small>עריכה ועיצוב</small>
          </div>

          <article className="example-card after-card">
            <div className="example-label">
              <span>אחרי</span>
              <small>מסמך מקצועי ומוכן לשליחה</small>
            </div>
            <div className="designed-surface">
              <div className="designed-paper" aria-label="מסמך מקצועי ומעוצב">
                <div className="doc-brand">
                  <LogoFive compact />
                </div>
                <div className="doc-rule" />
                <div className="doc-meta">
                  <p>
                    <small>לכבוד</small>
                    <b>מחלקת שירות</b>
                  </p>
                  <time>12 במאי 2026</time>
                </div>
                <h3>הנדון: בקשה לעדכון פרטים</h3>
                <p>שלום רב,</p>
                <p>
                  אבקש לעדכן את הפרטים בהתאם למסמכים המצורפים ולבדוק את
                  פנייתי.
                </p>
                <p>
                  אודה לאישור קבלת המסמכים ולמשלוח תשובה לאחר השלמת הבדיקה.
                </p>
                <div className="doc-signature">
                  <small>בברכה,</small>
                  <b>הפונה</b>
                </div>
                <div className="doc-footer">מסמך לדוגמה • כל הפרטים שונו</div>
              </div>
            </div>
          </article>
        </div>
        <p className="privacy-caption">
          🔒 ההמחשה מבוססת על סוג העבודה שנמסר. כל השמות, התאריכים והפרטים
          בדוגמה שונו, ואין בה פרטים מזהים של לקוח.
        </p>
      </section>

      <section className="section who-section" id="about">
        <div className="who-copy">
          <span className="eyebrow">למי השירות מתאים?</span>
          <h2>פחות זמן מול המערכת. יותר שקט להתעסק במה שחשוב.</h2>
          <p>
            השירות מתאים במיוחד למבוגרים, לאנשים שאינם רגילים לעבוד עם
            מערכות מקוונות, לכל מי שרוצה הסבר פשוט וברור בלי מושגים מסובכים,
            וגם למי שהזמן שלו שווה הרבה יותר משעות של התעסקות מיותרת במסמכים
            ובמערכות.
          </p>
          <a className="button button-primary" href={whatsappHref} target="_blank">
            ספרו לי במה הסתבכתם
          </a>
        </div>
        <div className="who-points">
          <article>
            <span>🧓</span>
            <h3>קצב שמתאים לכם</h3>
            <p>הסבר רגוע, אישי וסבלני, בלי להניח ידע מוקדם.</p>
          </article>
          <article>
            <span>⏱️</span>
            <h3>חוסכים זמן יקר</h3>
            <p>במקום להיתקע שעות, מקבלים פתרון ממוקד וברור.</p>
          </article>
          <article>
            <span>🧭</span>
            <h3>שלב אחר שלב</h3>
            <p>מבינים מה עושים עכשיו ומה צריך לשמור להמשך.</p>
          </article>
          <article>
            <span>🌐</span>
            <h3>שירות מרחוק</h3>
            <p>סיוע נוח מכל מקום בארץ, בתיאום מראש.</p>
          </article>
        </div>
      </section>

      <section className="section services-section" id="services">
        <SectionHeading
          eyebrow="מה אפשר לעשות יחד?"
          title="כל השירותים, מסודרים במקום אחד"
        >
          בחרו את התחום שמתאים לכם ופתחו אותו לצפייה בפירוט המלא.
        </SectionHeading>
        <div className="service-accordions">
          {serviceGroups.map((group, index) => (
            <details className="service-accordion" key={group.title} open={index === 0}>
              <summary>
                <span className="service-icon">{group.icon}</span>
                <span className="service-summary-copy">
                  <b>{group.title}</b>
                  <small>{group.intro}</small>
                </span>
                <span className="accordion-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="service-body">
                <div className="service-items">
                  {group.items.map(([icon, item]) => (
                    <div className="service-item" key={item}>
                      <span>{icon}</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                {index === 1 && (
                  <p className="inline-disclaimer">
                    הסיוע מתייחס לתפעול המערכת ולטיפול הטכני בקבצים. תוכן
                    המסמך וההחלטה מה להגיש הם באחריות הלקוח או עורך הדין
                    המטפל.
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section about-section">
        <div className="about-panel">
          <div className="about-symbol" aria-hidden="true">
            <LogoFive />
          </div>
          <div className="about-copy">
            <span className="eyebrow">ידע, ניסיון וטכנולוגיה במקום אחד</span>
            <h2>עבודה קפדנית עם הבנה של המסמך ושל המערכת</h2>
            <p>
              עומרי נתנאל, בעל תואר LL.B במשפטים, תעודת טכנאי מחשבים ותעודת
              מנהל רשתות, בעל ניסיון של למעלה מעשור בעבודה מעשית במשרדי עורכי
              דין, בטיפול במסמכים מקצועיים ובשימוש במערכות משפטיות וממשלתיות.
            </p>
            <p>
              השירות משלב הבנה של סביבת העבודה המשפטית, מיומנות טכנולוגית,
              היכרות מעמיקה עם מסמכים ומערכות מקוונות, עבודה קפדנית ושירות
              אישי וסבלני.
            </p>
          </div>
        </div>
      </section>

      <section className="lawyer-section">
        <div className="lawyer-icon">⚖️</div>
        <div>
          <span className="eyebrow">כאשר העניין חורג מסיוע טכני</span>
          <h2>ומה קורה כאשר נדרש עורך דין?</h2>
          <p>
            כאשר במהלך הטיפול מתברר כי העניין מחייב ייעוץ משפטי, ייצוג, אימות
            חתימה או פעולה המיוחדת לעורך דין, ניתן להפנות את הלקוח לעורך דין
            ותיק ומנוסה, בכפוף להסכמת הלקוח ולהתקשרות נפרדת וישירה עם עורך
            הדין.
          </p>
          <p>
            עורך הדין יבחן את העניין באופן עצמאי ויוכל להעניק את השירות, לאשר
            מסמך או לחתום עליו, ככל שהדבר מותר ומתאים מבחינה משפטית ומקצועית.
          </p>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <SectionHeading eyebrow="שאלות נפוצות" title="תשובות קצרות וברורות">
          לחצו על שאלה כדי לפתוח את התשובה.
        </SectionHeading>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details className="faq-item" key={question}>
              <summary>
                <span>{question}</span>
                <i aria-hidden="true">+</i>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <span className="eyebrow">לא בטוחים אם זה מתאים?</span>
          <h2>שלחו הודעה קצרה ותארו במה הסתבכתם.</h2>
          <p>
            נבדוק יחד מה נדרש, אם אפשר לעזור במסגרת השירות ומה כדאי להכין
            מראש.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href={whatsappHref} target="_blank">
              <span>💬</span> שליחת הודעה בוואטסאפ
            </a>
            <a className="button contact-call" href={`tel:${phoneHref}`}>
              <span>📞</span> {phoneDisplay}
            </a>
          </div>
        </div>
        <div className="contact-details">
          <div>
            <span>🌐</span>
            <p>
              <small>אזור שירות</small>
              <b>שירות מרחוק בכל הארץ</b>
            </p>
          </div>
          <div>
            <span>🕒</span>
            <p>
              <small>שעות פעילות</small>
              <b>בתיאום מראש</b>
            </p>
          </div>
          <div>
            <span>🧭</span>
            <p>
              <small>אופן השירות</small>
              <b>אישי, מקוון ושלב אחר שלב</b>
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="#top">
            <LogoFive />
          </a>
          <div className="footer-links">
            <a href="#services">שירותים</a>
            <a href="#transformation">לפני ואחרי</a>
            <a href="#about">אודות</a>
            <a href="#faq">שאלות נפוצות</a>
          </div>
          <button onClick={sharePage}>↗ שיתוף הדף</button>
        </div>
        <div className="legal-note">
          <strong>הבהרה חשובה</strong>
          <p>
            השירות ניתן על ידי משפטן ואיש מחשבים שאינו עורך דין. השירות כולל
            סיוע טכני ומנהלי, הקלדה, עריכה לשונית ופורמלית, עיצוב מסמכים,
            טיפול בקבצים והדרכה בתפעול מערכות מקוונות. השירות אינו כולל ייעוץ
            משפטי, חוות דעת משפטית או ייצוג בפני בתי משפט, לשכות הוצאה לפועל
            או רשויות. תוכן המסמכים וההחלטה מה להגיש נותרים באחריות הלקוח או
            עורך הדין המטפל. שירות משפטי, ככל שיידרש, יינתן על ידי עורך דין
            במסגרת התקשרות נפרדת.
          </p>
        </div>
        <div className="footer-bottom">
          <span>© 2026 עומרי נתנאל – משפטנות ומחשוב</span>
          <span>סיוע טכני ומנהלי • ללא ייעוץ משפטי וללא ייצוג</span>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappHref}
        target="_blank"
        aria-label="שליחת הודעה בוואטסאפ"
      >
        <span>💬</span>
        <b>אפשר להתייעץ</b>
      </a>
      <button className="share-button" onClick={sharePage} aria-label="שיתוף הדף">
        ↗
      </button>
    </main>
  );
}
