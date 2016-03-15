# ng2-accordion

Simple accordion control for your angular2 applications using bootstrap3. Does not depend of jquery.

## Installation

`npm install ng2-accordion --save`

## Usage

```typescript
<accordion>
    <accordion-group heading="Accordion title">
        Accordion group contents.
    </accordion>
    ...
</accordion>
```

## Sample

```typescript
import {Component} from "angular2/core";
import {ACCORDION_DIRECTIVES} from "ng2-accordion/ng2-accordion";

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
            This is content of the contacts tab
        </accordion-group>
        <accordion-group heading="Map">
            Content of the Map Tab
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
export class App {

}
```

Take a look on samples in [./sample](https://github.com/pleerock/ng2-accordion/tree/master/sample) for more examples of
usages.
