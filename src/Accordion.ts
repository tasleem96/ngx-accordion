import { ContentChildren, Component, QueryList, Input, forwardRef, AfterContentInit, OnDestroy } from "@angular/core";
import { AccordionGroup } from "./AccordionGroup";
import { Subscription } from "rxjs";

@Component({
    selector: "accordion",
    template: `
<div class="" role="tablist" aria-multiselectable="true">
    <ng-content></ng-content>
</div>
`
})
export class Accordion implements AfterContentInit, OnDestroy {

    @Input()
    closeOthers = true;

    @Input()
    showArrows = false;

    @Input()
    expandAll = false;

    @ContentChildren(forwardRef(() => AccordionGroup))
    groups: QueryList<AccordionGroup> | undefined;

    private oldGroups: AccordionGroup[] = [];
    private subscription: Subscription | undefined;

    ngAfterContentInit() {
        if (this.expandAll) {
            this.closeOthers = false;
            if (this.groups) {
                this.oldGroups = this.groups.toArray();
                this.oldGroups.forEach(group => {
                    group.openOnInitialization();
                });

                this.subscription = this.groups.changes.subscribe(() => {
                    const newGroups = this.groups!.toArray().filter(group => {
                        return this.oldGroups.indexOf(group) === -1;
                    });
                    newGroups.forEach(group => {
                        group.openOnInitialization();
                    });
                    this.oldGroups = this.groups!.toArray();
                });
            }
        }
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    closeAll() {
        this.groups?.toArray().forEach(group => {
            group.isOpened = false;
        });
    }

}
