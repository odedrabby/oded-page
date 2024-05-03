import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterComponent } from '../letter/letter.component';
import { BodyComponent } from './body.component';



@NgModule({
    declarations: [
        LetterComponent,
        BodyComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        BodyComponent
    ]
})
export class BodyModule { }
