import { Component } from '@angular/core';

@Component({
    selector: 'app-letter',
    templateUrl: './letter.component.html',
    styleUrl: './letter.component.scss'
})
export class LetterComponent {
    readonly imgPath = 'assets/main-background.jpg'
    readonly title = '"שם זמני" - גל כהן פרירא';
    readonly letter1 = `שלום אנשים יקרים מאוד,`
    readonly letter2 = `בקרוב ייצא אלבומי הראשון - "שם זמני" - אלבום שלקח לי 30 שנה לכתוב ועוד שנה לייצר ולשחרר אליכם. הוא יהיה פתח קטן להציץ אל חוויותי בעולם עד כה דרך התבוננות על הטבע, על האדם, על עצמי ועל עצם קיומי הזמני.`
    readonly letter3 = `עד שייצא האלבום בשלמותו, תוכלו לשמוע כאן את "עונות", שיר שכמו מסכם את האלבום, ואת הממתיק המריר - "כישלונו של האביב". אולי תמצאו בהם אותי ואולי את עצמכם (אמן). נתראה בקרוב בשבילים, בהופעות או שפשוט תבואו לקפה.`
    readonly letter4 = "שלכם, גל כהן פרירא."
}
