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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
const core_1 = require("@angular/core");
const AccordionGroup_1 = require("./AccordionGroup");
let Accordion = class Accordion {
    constructor() {
        this.closeOthers = true;
        this.showArrows = false;
        this.expandAll = false;
        this.oldGroups = [];
    }
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
};
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], Accordion.prototype, "closeOthers", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], Accordion.prototype, "showArrows", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], Accordion.prototype, "expandAll", void 0);
__decorate([
    (0, core_1.ContentChildren)((0, core_1.forwardRef)(() => AccordionGroup_1.AccordionGroup)),
    __metadata("design:type", Object)
], Accordion.prototype, "groups", void 0);
Accordion = __decorate([
    (0, core_1.Component)({
        selector: "accordion",
        template: `
<div class="panel-group" role="tablist" aria-multiselectable="true">
    <ng-content></ng-content>
</div>
`
    })
], Accordion);
exports.Accordion = Accordion;
//# sourceMappingURL=Accordion.js.map