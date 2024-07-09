import * as i0 from '@angular/core';
import { Component, Input, ContentChildren, forwardRef, Host, Inject, HostListener, EventEmitter, Output, ContentChild, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class Accordion {
    closeOthers = true;
    showArrows = false;
    expandAll = false;
    groups;
    oldGroups = [];
    subscription;
    ngAfterContentInit() {
        if (this.expandAll) {
            this.closeOthers = false;
            if (this.groups) {
                this.oldGroups = this.groups.toArray();
                this.oldGroups.forEach(group => {
                    group.openOnInitialization();
                });
                this.subscription = this.groups.changes.subscribe(() => {
                    const newGroups = this.groups.toArray().filter(group => {
                        return this.oldGroups.indexOf(group) === -1;
                    });
                    newGroups.forEach(group => {
                        group.openOnInitialization();
                    });
                    this.oldGroups = this.groups.toArray();
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Accordion, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: Accordion, selector: "accordion", inputs: { closeOthers: "closeOthers", showArrows: "showArrows", expandAll: "expandAll" }, queries: [{ propertyName: "groups", predicate: i0.forwardRef(function () { return AccordionGroup; }) }], ngImport: i0, template: `
<div class="" role="tablist" aria-multiselectable="true">
    <ng-content></ng-content>
</div>
`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Accordion, decorators: [{
            type: Component,
            args: [{
                    selector: "accordion",
                    template: `
<div class="" role="tablist" aria-multiselectable="true">
    <ng-content></ng-content>
</div>
`
                }]
        }], propDecorators: { closeOthers: [{
                type: Input
            }], showArrows: [{
                type: Input
            }], expandAll: [{
                type: Input
            }], groups: [{
                type: ContentChildren,
                args: [forwardRef(() => AccordionGroup)]
            }] } });

class AccordionToggle {
    accordionGroup;
    constructor(accordionGroup) {
        this.accordionGroup = accordionGroup;
    }
    onClick() {
        this.accordionGroup.toggle();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionToggle, deps: [{ token: forwardRef(() => AccordionGroup), host: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AccordionToggle, selector: "accordion-toggle", host: { listeners: { "click": "onClick()" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionToggle, decorators: [{
            type: Component,
            args: [{
                    selector: "accordion-toggle",
                    template: `<ng-content></ng-content>`
                }]
        }], ctorParameters: function () { return [{ type: AccordionGroup, decorators: [{
                    type: Host
                }, {
                    type: Inject,
                    args: [forwardRef(() => AccordionGroup)]
                }] }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ["click"]
            }] } });

class AccordionGroup {
    accordion;
    cdr;
    heading; // Mark heading as optional
    isOpened = false;
    onOpen = new EventEmitter();
    onClose = new EventEmitter();
    onToggle = new EventEmitter();
    toggler;
    disabled = false;
    constructor(accordion, cdr) {
        this.accordion = accordion;
        this.cdr = cdr;
    }
    checkAndToggle() {
        // if custom toggle element is supplied, then do nothing, custom toggler will take care of it
        if (this.toggler)
            return;
        this.toggle();
    }
    toggle() {
        if (this.disabled)
            return;
        const isOpenedBeforeWeChange = this.isOpened;
        if (this.accordion.closeOthers)
            this.accordion.closeAll();
        this.isOpened = !isOpenedBeforeWeChange;
        if (this.isOpened) {
            this.onOpen.emit();
        }
        else {
            this.onClose.emit();
        }
        this.onToggle.emit(this.isOpened);
    }
    openOnInitialization() {
        this.isOpened = true;
        this.cdr.detectChanges();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionGroup, deps: [{ token: forwardRef(() => Accordion), host: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AccordionGroup, selector: "accordion-group", inputs: { heading: "heading", isOpened: "isOpened", disabled: "disabled" }, outputs: { onOpen: "onOpen", onClose: "onClose", onToggle: "onToggle" }, queries: [{ propertyName: "toggler", first: true, predicate: AccordionToggle, descendants: true }], ngImport: i0, template: `
  <div class="card" [class.dropup]="isOpened" [class.disabled]="disabled">
    <div class="card-header" role="tab" (click)="checkAndToggle()">
      <h4 class="card-title">
        <a *ngIf="heading" role="button" data-toggle="collapse" [attr.aria-expanded]="isOpened">
            {{ heading }}
        </a>
        <ng-content select="accordion-heading"></ng-content>
        <div class="caret" [style.display]="accordion.showArrows ? '' : 'none'">
        </div>
      </h4>
    </div>
    <div *ngIf="isOpened" class="card-collapse" role="tabpanel" [attr.aria-labelledby]="heading">
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionGroup, decorators: [{
            type: Component,
            args: [{
                    selector: "accordion-group",
                    template: `
  <div class="card" [class.dropup]="isOpened" [class.disabled]="disabled">
    <div class="card-header" role="tab" (click)="checkAndToggle()">
      <h4 class="card-title">
        <a *ngIf="heading" role="button" data-toggle="collapse" [attr.aria-expanded]="isOpened">
            {{ heading }}
        </a>
        <ng-content select="accordion-heading"></ng-content>
        <div class="caret" [style.display]="accordion.showArrows ? '' : 'none'">
        </div>
      </h4>
    </div>
    <div *ngIf="isOpened" class="card-collapse" role="tabpanel" [attr.aria-labelledby]="heading">
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  </div>
  `
                }]
        }], ctorParameters: function () { return [{ type: Accordion, decorators: [{
                    type: Host
                }, {
                    type: Inject,
                    args: [forwardRef(() => Accordion)]
                }] }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { heading: [{
                type: Input
            }], isOpened: [{
                type: Input
            }], onOpen: [{
                type: Output
            }], onClose: [{
                type: Output
            }], onToggle: [{
                type: Output
            }], toggler: [{
                type: ContentChild,
                args: [AccordionToggle, { static: false }]
            }], disabled: [{
                type: Input
            }] } });

class AccordionHeading {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionHeading, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AccordionHeading, selector: "accordion-heading", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionHeading, decorators: [{
            type: Component,
            args: [{
                    selector: "accordion-heading",
                    template: `<ng-content></ng-content>`
                }]
        }] });

class AccordionModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: AccordionModule, declarations: [Accordion,
            AccordionGroup,
            AccordionToggle,
            AccordionHeading], imports: [CommonModule], exports: [Accordion,
            AccordionGroup,
            AccordionToggle,
            AccordionHeading] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        Accordion,
                        AccordionGroup,
                        AccordionToggle,
                        AccordionHeading
                    ],
                    exports: [
                        Accordion,
                        AccordionGroup,
                        AccordionToggle,
                        AccordionHeading
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { Accordion, AccordionGroup, AccordionHeading, AccordionModule, AccordionToggle };
//# sourceMappingURL=tasleem96-ngx-accordion.mjs.map
