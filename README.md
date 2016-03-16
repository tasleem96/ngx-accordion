# ng2-accordion

Simple accordion control for your angular2 applications using bootstrap3. Does not depend of jquery.

## Installation

`npm install ng2-accordion --save`

## Usage

```typescript
<accordion [showArrows]="true" [closeOthers]="false">
    <accordion-group heading="Accordion heading">
        <accordion-heading>
            Or <b>custom</b> heading.  
        </accordion-heading>
        Accordion group contents.
    </accordion>
    ...
</accordion>
```

* `<accordion>`:
    * `[showArrows]="true|false"` Indicates if arrows should be shown or not. Default is **false**
    * `[closeOthers]="true|false"` Indicates if other opened groups should be automatically closed when you open a new group. Default is **true**
* `<accordion-group>`:
    * `heading="Group heading"` Simple text group heading
    * `<accordion-heading>` Content zone where you can put custom headings

## Sample

```typescript
import {Component} from "angular2/core";
import {ACCORDION_DIRECTIVES} from "ng2-accordion/ng2-accordion";

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
                Custom heading.  
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
                Custom heading.  
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
                Custom heading.  
            </accordion-heading>
            Its all about me.
        </accordion-group>
    </accordion>
    
</div>
`,
    directives: [ACCORDION_DIRECTIVES]
})
export class App {

}
```

Take a look on samples in [./sample](https://github.com/pleerock/ng2-accordion/tree/master/sample) for more examples of
usages.
