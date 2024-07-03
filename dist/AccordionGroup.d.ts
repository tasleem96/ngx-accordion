import { ElementRef, ChangeDetectorRef, EventEmitter } from "@angular/core";
import { Accordion } from "./Accordion";
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
}
//# sourceMappingURL=AccordionGroup.d.ts.map