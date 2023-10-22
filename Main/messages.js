const WelcomeMessage = `תודה שפניתם לחמ''ל אגמים, על מנת לקבל את המענה הרצוי, שלחו את המספר הרלוונטי.

לטיפול *ביצירת משתמשים* - שלחו *1*

לטיפול *באיפוס סיסמה* - שלחו *2*

לבקשת הרשאות וטיפול בבעיות *הרשאות* בדשבורדי PowerBI או ArcGIS- שלחו *3*

לטיפול בקשיים *בהתחברות* - שלחו *4*

להסבר על *דשבורדים* - שלחו *5*

לטיפול בקשיים במערכת אגמים *בכפר הגלובלי* - שלחו *6*

לבקשת *תוצרים/נתונים* - שלחו *7*

לטיפול בבעיות *בתיבת נוח*/בקשת העברת מלונות - שלחו *8*

לשיחה עם *נציג אנושי* - שלחו *9*

לשליחה חוזרת של *הודעה זו*, שלחו *0*

* *יש לציין שפתיחת משתמש כרוכה באישור קצין אגמים*

* *שליחת הספרה הרלוונטית תציג הסבר על בעיות נפוצות בנושא הנבחר/תטפל בנושא הנבחר ותוכל להדריך אתכם עד לפתירת הבעיה.*

* *חמ''ל אגמים זמין 24/7 לרשותכם.*`

    const usersMessage = `לצורך פתיחת משתמש אגמי"ם יש למלא את הסקר הבא:
https://ly.agamimp.net/requestuser

*שימו לב, פתיחת משתמש מותנת באישור קצין אגמי"ם, יש לוודא עם אישור הקשר שלכם מהענף לפני הגשת הטופס*

לעזרה נוספת והצגת התפריט, שלחו *0*

לפניה לנציג אנושי, שלחו *9*`

    const resetMessage = `לפני איפוס הסיסמה נשמח שתבדקו האם נכנסתם דרך מסך כניסה של פיקוד העורף או דרך השם משתמש וסיסמה המופיעים בעת לחיצה על הלינק לפורטל.

במידה ונכנסתם דרך השם משתמש וסיסמה, אנא שלחו *4*

במידה וסיסמתכם אינה נכונה גם במסך הכניסה של פיקוד העורף, אנא שלחו את האימייל הנדרש לאיפוס הסיסמה, והבעיה תטופל בהקדם.

לעזרה נוספת והצגת התפריט, שלחו *0*

לפניה לנציג אנושי, שלחו *9*`

    const permissionsMessage = `במידה ונתקלת במסך לבן עם שתי כפתורים והצהרה שאינך יכול לצפות במידע הזה, אנא שלח את האימייל שלך.

במידה ונתקלת במסך לבן עם כיתוב דומה ללא שתי כפתורים, אנא פנה לנציג אנושי עם פרטיך הצבאיים (תפקיד, שם ומחלקה).

במידה והינך מנסה לצפות בדשבורד BI מחוץ לפורטל, אנא פנה לנציג אנושי עם פרטיך הצבאיים (תפקיד, שם ומחלקה).

לעזרה נוספת והצגת התפריט, שלחו *0*

לפניה לנציג אנושי, שלחו *9*`

    const loginMessage = `במידה והנכם חווים תקלות בהתחברות בכפר הגלובלי, אנא שלחו *6*.

 והנכם מנסים להתחבר עם משתמש agamimp.net, אנא וודאו שאתם נמצאים בכניסת משתמש פיקוד העורף.

במידה ואתם בדף התחברות המציג שם משתמש וסיסמה, ומתחתיו URL ארגוני (Organization), לחצו על הURL הארגוני, והזינו H-F-C, יפתח לכם דף התחברות חדש עם כפתור כחול, הרשום בו HFC MAPS, לחצו עליו ותגיעו לדף ההתחברות הנכון, שם תזינו את משתמש Agamimp.net שלכם, ואת סיסמתכם, במידה ואינכם זוכרים את הסיסמה, שלחו *2*.

במידה ואתם בדף התחברות המציג כבר את הכפתור הכחול של הHFC MAPS, אנא לחצו עליו, ותגיעו לדף ההתחברות הנכון.

לתקלה שלא כתובה כאן, אנא שלחו *9* ולאחר מכן, צרפו לפנייתכם צילום מסך.

לעזרה נוספת והצגת התפריט, שלחו *0*

לפניה לנציג אנושי, שלחו *9*`

    const dashboardMessage = `הסבר על דשבורדים ניתן להשיג בשלושה דרכים.

הדרך הראשונה היא שליחת *9* לשוחח עם נציג, שיסביר לכם על הדשבורדים הרלוונטים לכם.

הדרך השניה היא להיכנס לפורטל חרבות הברזל, להיכנס שם לסרטוני ההדרכה, ולצפות בסרטון המסביר על הדשבורד הרלוונטי לכם.

הדרך השלישית היא להתקשר לחמ''ל אגמים, ולקבל הסבר טלפוני על הדשבורדים הרלוונטים לכם.

לעזרה נוספת והצגת התפריט, שלחו *0*

לפניה לנציג אנושי, שלחו *9*`

    const kfgMessage = `במקרה של תקלת אי טעינת כלל הדשבורדים או הפורטל בכפר הגלובלי, יש לפתוח את כרטיסיית הפורטל בלשונית חדשה.

במידה ועדיין לא נפתח הפורטל, יש לעשות ריסטרט למחשב, דבר זה יפתור את הבעיה.

במידה והsign in לדשבורדי Power BI לא עובד, יש ללחוץ על הSign In, דבר אשר יפתח ויסגור כרטיסיה, ולאחר מכן, לפתוח את הפורטל בכרטיסיה חדשה.

במידה ומוצגת לכם שגיאה אינטרנטית, יש לפנות לתקשוב, במחשבי כפר גלובלי  מסוימים יש הגבלות ליכולות של PowerBI ותקלה זו אינה נובעת מאגמים.

לעזרה נוספת והצגת התפריט, שלחו *0*

לפניה לנציג אנושי, שלחו *9*`
 
    const dataMessage = `לבקשת תוצרים/נתונים יש להזין את הפרטים הבאים בצורה מסודרת:
שם מלא
תפקיד
נתון/תוצר רצוי
צורך בתוצר
האם יש לכם גורם מקשר באגמים (קצין).

לאחר מכן נציג יפנה אליכם לטיפול בבקשה/לפרטים נוספים

* *נתוני מובי סלולר לא זמינים כרגע ליצוא ומוצגים אך ורק בתוצרים*
* *דשבורד דו''ח קהא כרגע לא באוויר והוא בשלבי סיום נכון לכתיבת הודעה זו, התאזרו בסבלנות*

לעזרה נוספת והצגת התפריט, שלחו *0*

לפניה לנציג אנושי, שלחו *9*`

    const arkMessage = `in progress`

    module.exports = {
        usersMessage,
        resetMessage,
        permissionsMessage,
        loginMessage,
        dashboardMessage,
        kfgMessage,
        dataMessage,
        arkMessage,
        WelcomeMessage,
    };
