import { NgModule } from "@angular/core";
import { SafeHtmlPipe } from "../homepage/shared/pipes/safeHtml.pipe";
import { SanitaizerPipe } from "../homepage/shared/pipes/sanitaizer.pipe";


@NgModule({
    declarations:[
        SafeHtmlPipe,
        SanitaizerPipe
    ],
    exports: [
        SafeHtmlPipe,
        SanitaizerPipe
    ]
})
export class SharedPipesModule{

}