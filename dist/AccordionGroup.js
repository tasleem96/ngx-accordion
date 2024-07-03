"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionGroup = void 0;
const core_1 = require("@angular/core");
const Accordion_1 = require("./Accordion");
const AccordionToggle_1 = require("./AccordionToggle");
let AccordionGroup = class AccordionGroup {
    constructor(accordion, cdr) {
        this.accordion = accordion;
        this.cdr = cdr;
        this.isOpened = false;
        this.onOpen = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
        this.onToggle = new core_1.EventEmitter();
        this.disabled = false;
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
};
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", String)
], AccordionGroup.prototype, "heading", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Boolean)
], AccordionGroup.prototype, "isOpened", void 0);
__decorate([
    (0, core_1.Output)(),
    __metadata("design:type", Object)
], AccordionGroup.prototype, "onOpen", void 0);
__decorate([
    (0, core_1.Output)(),
    __metadata("design:type", Object)
], AccordionGroup.prototype, "onClose", void 0);
__decorate([
    (0, core_1.Output)(),
    __metadata("design:type", Object)
], AccordionGroup.prototype, "onToggle", void 0);
__decorate([
    (0, core_1.ContentChild)(AccordionToggle_1.AccordionToggle, { static: false }),
    __metadata("design:type", Object)
], AccordionGroup.prototype, "toggler", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Boolean)
], AccordionGroup.prototype, "disabled", void 0);
AccordionGroup = __decorate([
    (0, core_1.Component)({
        selector: "accordion-group",
        template: `
  <div class="panel panel-default" [class.dropup]="isOpened" [class.disabled]="disabled">
    <div class="panel-heading" role="tab" (click)="checkAndToggle()">
      <h4 class="panel-title">
        <a *ngIf="heading" role="button" data-toggle="collapse" [attr.aria-expanded]="isOpened">
            {{ heading }}
        </a>
        <ng-content select="accordion-heading"></ng-content>
        <div class="caret" [style.display]="accordion.showArrows ? '' : 'none'">
        </div>
      </h4>
    </div>
    <div *ngIf="isOpened" class="panel-collapse collapse in" role="tabpanel" [attr.aria-labelledby]="heading">
      <div class="panel-body">
        <ng-content></ng-content>
      </div>
    </div>
  </div>
  `
    }),
    __param(0, (0, core_1.Host)()),
    __param(0, (0, core_1.Inject)((0, core_1.forwardRef)(() => Accordion_1.Accordion))),
    __metadata("design:paramtypes", [Accordion_1.Accordion,
        core_1.ChangeDetectorRef])
], AccordionGroup);
exports.AccordionGroup = AccordionGroup;
//# sourceMappingURL=AccordionGroup.js.map