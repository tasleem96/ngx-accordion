import {Component} from "@angular/core";

@Component({
    selector: "app",
    template: `
<div class="container">

    <h2>Regular accordion</h2>
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

    <h2>Regular accordion with first opened group</h2>
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

    <h2>Accordion with arrows</h2>
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

    <h2>Accordion where you can close multiple groups</h2>
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

    <h2>Accordion where all items are expanded by default</h2>
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

    <h2>Accordion with custom "clickable zone"</h2>
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
`
})
export class Sample1App {

}