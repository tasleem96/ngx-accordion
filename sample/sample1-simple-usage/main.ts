import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {ACCORDION_DIRECTIVES} from "../../src/index";

@Component({
    selector: "app",
    template: `
<div class="container">

    <!-- regular accordion -->
    <accordion>
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
                Custom heading
            </accordion-heading>
            Its all about me.
        </accordion-group>
    </accordion>

    <!-- regular accordion with first opened group -->
    <accordion>
        <accordion-group heading="About me" [isOpened]="true">
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
                <b>Custom</b> <i style="color: deeppink">heading</i>
            </accordion-heading>
            Its all about me.
        </accordion-group>
    </accordion>

    <!-- accordion with arrows -->
    <accordion [showArrows]="true">
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
                Custom heading  
            </accordion-heading>
            Its all about me.
        </accordion-group>
    </accordion>
    
    <!-- accordion where you can close multiple groups -->
    <accordion [closeOthers]="false">
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
                Custom heading 
            </accordion-heading>
            Its all about me.
        </accordion-group>
    </accordion>
    
    <!-- accordion where all items are expanded by default -->
    <accordion [expandAll]="true">
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
                Custom heading 
            </accordion-heading>
            Its all about me.
        </accordion-group>
    </accordion>

    <!-- accordion with custom "clickable zone" -->
    <accordion>
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
                <input type="checkbox"> <accordion-toggle>Custom clickable heading</accordion-toggle>
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