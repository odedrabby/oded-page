import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterComponent } from '../letter/letter.component';



@NgModule({
    declarations: [
        LetterComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        LetterComponent
    ]
})
export class BodyModule { }
