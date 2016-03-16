import {ContentChildren, Component, QueryList, Input, forwardRef} from "angular2/core";
import {AccordionGroup} from "./AccordionGroup";

@Component({
    selector: "accordion",
    template: `
<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
    <ng-content></ng-content>   
</div>
`
})
export class Accordion {

    @Input()
    closeOthers = true;

    @Input()
    showArrows = false;

    @ContentChildren(forwardRef(() => AccordionGroup))
    groups: QueryList<AccordionGroup>;

    closeAll() {
        this.groups.toArray().forEach(group => group.isOpened = false);
    }

}
