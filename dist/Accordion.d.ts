import { QueryList, AfterContentInit, OnDestroy } from "@angular/core";
import { AccordionGroup } from "./AccordionGroup";
export declare class Accordion implements AfterContentInit, OnDestroy {
    closeOthers: boolean;
    showArrows: boolean;
    expandAll: boolean;
    groups: QueryList<AccordionGroup> | undefined;
    private oldGroups;
    private subscription;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    closeAll(): void;
}
//# sourceMappingURL=Accordion.d.ts.map