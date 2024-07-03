"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const AccordionGroup_1 = require("./AccordionGroup");
const Accordion_1 = require("./Accordion");
const AccordionToggle_1 = require("./AccordionToggle");
const AccordionHeading_1 = require("./AccordionHeading");
__exportStar(require("./Accordion"), exports);
__exportStar(require("./AccordionGroup"), exports);
__exportStar(require("./AccordionToggle"), exports);
__exportStar(require("./AccordionHeading"), exports);
let AccordionModule = class AccordionModule {
};
AccordionModule = __decorate([
    (0, core_1.NgModule)({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            Accordion_1.Accordion,
            AccordionGroup_1.AccordionGroup,
            AccordionToggle_1.AccordionToggle,
            AccordionHeading_1.AccordionHeading
        ],
        exports: [
            Accordion_1.Accordion,
            AccordionGroup_1.AccordionGroup,
            AccordionToggle_1.AccordionToggle,
            AccordionHeading_1.AccordionHeading
        ]
    })
], AccordionModule);
exports.AccordionModule = AccordionModule;
//# sourceMappingURL=index.js.map