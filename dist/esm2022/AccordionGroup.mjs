import { Component, Input, Host, forwardRef, Inject, ContentChild, Output, EventEmitter } from "@angular/core";
import { Accordion } from "./Accordion";
import { AccordionToggle } from "./AccordionToggle";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./Accordion";
export class AccordionGroup {
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
        }], ctorParameters: function () { return [{ type: i2.Accordion, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3JkaW9uR3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQWNjb3JkaW9uR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsSUFBSSxFQUNKLFVBQVUsRUFDVixNQUFNLEVBQ04sWUFBWSxFQUdaLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUF3QnBELE1BQU0sT0FBTyxjQUFjO0lBdUJ1QztJQUN0RDtJQXJCVixPQUFPLENBQVUsQ0FBRSwyQkFBMkI7SUFHOUMsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUcxQixNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUdsQyxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUduQyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUd2QyxPQUFPLENBQXlCO0lBR2hDLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFFMUIsWUFBZ0UsU0FBb0IsRUFDMUUsR0FBc0I7UUFEZ0MsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUMxRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtJQUNoQyxDQUFDO0lBRUQsY0FBYztRQUNaLDZGQUE2RjtRQUM3RixJQUFJLElBQUksQ0FBQyxPQUFPO1lBQ2QsT0FBTztRQUVULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLFFBQVE7WUFDZixPQUFPO1FBRVQsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzdDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLHNCQUFzQixDQUFDO1FBQ3hDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO3dHQXZEVSxjQUFjLGtCQXVCRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDOzRGQXZCNUMsY0FBYyxpUEFpQlgsZUFBZSxnREFyQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlQ7OzRGQUVVLGNBQWM7a0JBdEIxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JUO2lCQUNGOzswQkF3QmMsSUFBSTs7MEJBQUksTUFBTTsyQkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDOzRFQXBCdkQsT0FBTztzQkFETixLQUFLO2dCQUlOLFFBQVE7c0JBRFAsS0FBSztnQkFJTixNQUFNO3NCQURMLE1BQU07Z0JBSVAsT0FBTztzQkFETixNQUFNO2dCQUlQLFFBQVE7c0JBRFAsTUFBTTtnQkFJUCxPQUFPO3NCQUROLFlBQVk7dUJBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFJaEQsUUFBUTtzQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgSG9zdCxcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWNjb3JkaW9uIH0gZnJvbSBcIi4vQWNjb3JkaW9uXCI7XG5pbXBvcnQgeyBBY2NvcmRpb25Ub2dnbGUgfSBmcm9tIFwiLi9BY2NvcmRpb25Ub2dnbGVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFjY29yZGlvbi1ncm91cFwiLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiY2FyZFwiIFtjbGFzcy5kcm9wdXBdPVwiaXNPcGVuZWRcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIiByb2xlPVwidGFiXCIgKGNsaWNrKT1cImNoZWNrQW5kVG9nZ2xlKClcIj5cbiAgICAgIDxoNCBjbGFzcz1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgPGEgKm5nSWY9XCJoZWFkaW5nXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImlzT3BlbmVkXCI+XG4gICAgICAgICAgICB7eyBoZWFkaW5nIH19XG4gICAgICAgIDwvYT5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYWNjb3JkaW9uLWhlYWRpbmdcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJldFwiIFtzdHlsZS5kaXNwbGF5XT1cImFjY29yZGlvbi5zaG93QXJyb3dzID8gJycgOiAnbm9uZSdcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2g0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgKm5nSWY9XCJpc09wZW5lZFwiIGNsYXNzPVwiY2FyZC1jb2xsYXBzZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJoZWFkaW5nXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Hcm91cCB7XG5cbiAgQElucHV0KClcbiAgaGVhZGluZz86IHN0cmluZzsgIC8vIE1hcmsgaGVhZGluZyBhcyBvcHRpb25hbFxuXG4gIEBJbnB1dCgpXG4gIGlzT3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIG9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAT3V0cHV0KClcbiAgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAT3V0cHV0KClcbiAgb25Ub2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQENvbnRlbnRDaGlsZChBY2NvcmRpb25Ub2dnbGUsIHsgc3RhdGljOiBmYWxzZSB9KVxuICB0b2dnbGVyOiBFbGVtZW50UmVmIHwgdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gQWNjb3JkaW9uKSkgcHVibGljIGFjY29yZGlvbjogQWNjb3JkaW9uLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgY2hlY2tBbmRUb2dnbGUoKSB7XG4gICAgLy8gaWYgY3VzdG9tIHRvZ2dsZSBlbGVtZW50IGlzIHN1cHBsaWVkLCB0aGVuIGRvIG5vdGhpbmcsIGN1c3RvbSB0b2dnbGVyIHdpbGwgdGFrZSBjYXJlIG9mIGl0XG4gICAgaWYgKHRoaXMudG9nZ2xlcilcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMudG9nZ2xlKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpXG4gICAgICByZXR1cm47XG5cbiAgICBjb25zdCBpc09wZW5lZEJlZm9yZVdlQ2hhbmdlID0gdGhpcy5pc09wZW5lZDtcbiAgICBpZiAodGhpcy5hY2NvcmRpb24uY2xvc2VPdGhlcnMpXG4gICAgICB0aGlzLmFjY29yZGlvbi5jbG9zZUFsbCgpO1xuXG4gICAgdGhpcy5pc09wZW5lZCA9ICFpc09wZW5lZEJlZm9yZVdlQ2hhbmdlO1xuICAgIGlmICh0aGlzLmlzT3BlbmVkKSB7XG4gICAgICB0aGlzLm9uT3Blbi5lbWl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gICAgfVxuICAgIHRoaXMub25Ub2dnbGUuZW1pdCh0aGlzLmlzT3BlbmVkKTtcbiAgfVxuXG4gIG9wZW5PbkluaXRpYWxpemF0aW9uKCkge1xuICAgIHRoaXMuaXNPcGVuZWQgPSB0cnVlO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG59Il19