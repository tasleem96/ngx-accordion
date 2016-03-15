import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {ACCORDION_DIRECTIVES} from "../../src/ng2-accordion";

@Component({
    selector: "app",
    template: `
<div class="container">

    <!-- regular tabs -->
    <accordion [showArrow]="true" [closeOthers]="false">
        <accordion-group heading="About me">
            Its all about me.
        </accordion-group>
        <accordion-group heading="Contacts">
            This is content of the contacts
        </accordion-group>
        <accordion-group heading="Map">
            Content of the Map
        </accordion-group>
        <accordion-group>
            <accordion-heading>
                Dima shikof    
            </accordion-heading>
            Its all about me.
        </accordion-group>
    </accordion>
    
</div>
`,
    directives: [ACCORDION_DIRECTIVES]
})
export class Sample1App {

}

bootstrap(Sample1App);