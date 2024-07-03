import { QueryList, AfterContentInit, OnDestroy } from "@angular/core";
import { AccordionGroup } from "./AccordionGroup";
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<Accordion, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Accordion, "accordion", never, { "closeOthers": { "alias": "closeOthers"; "required": false; }; "showArrows": { "alias": "showArrows"; "required": false; }; "expandAll": { "alias": "expandAll"; "required": false; }; }, {}, ["groups"], ["*"], false, never>;
}
