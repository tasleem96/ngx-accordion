import { ElementRef, ChangeDetectorRef, EventEmitter } from "@angular/core";
import { Accordion } from "./Accordion";
import * as i0 from "@angular/core";
export declare class AccordionGroup {
    accordion: Accordion;
    private cdr;
    heading?: string;
    isOpened: boolean;
    onOpen: EventEmitter<void>;
    onClose: EventEmitter<void>;
    onToggle: EventEmitter<boolean>;
    toggler: ElementRef | undefined;
    disabled: boolean;
    constructor(accordion: Accordion, cdr: ChangeDetectorRef);
    checkAndToggle(): void;
    toggle(): void;
    openOnInitialization(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionGroup, [{ host: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionGroup, "accordion-group", never, { "heading": { "alias": "heading"; "required": false; }; "isOpened": { "alias": "isOpened"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "onOpen": "onOpen"; "onClose": "onClose"; "onToggle": "onToggle"; }, ["toggler"], ["accordion-heading", "*"], false, never>;
}
