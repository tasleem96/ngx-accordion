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
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionGroup, decorators: [{
            type: Component,
            args: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3JkaW9uR3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQWNjb3JkaW9uR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsSUFBSSxFQUNKLFVBQVUsRUFDVixNQUFNLEVBQ04sWUFBWSxFQUdaLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUF3QnBELE1BQU0sT0FBTyxjQUFjO0lBdUJ1QztJQUN0RDtJQXJCVixPQUFPLENBQVUsQ0FBRSwyQkFBMkI7SUFHOUMsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUcxQixNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUdsQyxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUduQyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUd2QyxPQUFPLENBQXlCO0lBR2hDLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFFMUIsWUFBZ0UsU0FBb0IsRUFDMUUsR0FBc0I7UUFEZ0MsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUMxRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtJQUNoQyxDQUFDO0lBRUQsY0FBYztRQUNaLDZGQUE2RjtRQUM3RixJQUFJLElBQUksQ0FBQyxPQUFPO1lBQ2QsT0FBTztRQUVULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLFFBQVE7WUFDZixPQUFPO1FBRVQsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzdDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLHNCQUFzQixDQUFDO1FBQ3hDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO3dHQXZEVSxjQUFjLGtCQXVCRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDOzRGQXZCNUMsY0FBYyxpUEFpQlgsZUFBZSxnREFyQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlQ7OzRGQUVVLGNBQWM7a0JBdEIxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JUO2lCQUNGOzswQkF3QmMsSUFBSTs7MEJBQUksTUFBTTsyQkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDOzRFQXBCdkQsT0FBTztzQkFETixLQUFLO2dCQUlOLFFBQVE7c0JBRFAsS0FBSztnQkFJTixNQUFNO3NCQURMLE1BQU07Z0JBSVAsT0FBTztzQkFETixNQUFNO2dCQUlQLFFBQVE7c0JBRFAsTUFBTTtnQkFJUCxPQUFPO3NCQUROLFlBQVk7dUJBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFJaEQsUUFBUTtzQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgSG9zdCxcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWNjb3JkaW9uIH0gZnJvbSBcIi4vQWNjb3JkaW9uXCI7XG5pbXBvcnQgeyBBY2NvcmRpb25Ub2dnbGUgfSBmcm9tIFwiLi9BY2NvcmRpb25Ub2dnbGVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFjY29yZGlvbi1ncm91cFwiLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiIFtjbGFzcy5kcm9wdXBdPVwiaXNPcGVuZWRcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiIHJvbGU9XCJ0YWJcIiAoY2xpY2spPVwiY2hlY2tBbmRUb2dnbGUoKVwiPlxuICAgICAgPGg0IGNsYXNzPVwicGFuZWwtdGl0bGVcIj5cbiAgICAgICAgPGEgKm5nSWY9XCJoZWFkaW5nXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImlzT3BlbmVkXCI+XG4gICAgICAgICAgICB7eyBoZWFkaW5nIH19XG4gICAgICAgIDwvYT5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYWNjb3JkaW9uLWhlYWRpbmdcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJldFwiIFtzdHlsZS5kaXNwbGF5XT1cImFjY29yZGlvbi5zaG93QXJyb3dzID8gJycgOiAnbm9uZSdcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2g0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgKm5nSWY9XCJpc09wZW5lZFwiIGNsYXNzPVwicGFuZWwtY29sbGFwc2UgY29sbGFwc2UgaW5cIiByb2xlPVwidGFicGFuZWxcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiaGVhZGluZ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkdyb3VwIHtcblxuICBASW5wdXQoKVxuICBoZWFkaW5nPzogc3RyaW5nOyAgLy8gTWFyayBoZWFkaW5nIGFzIG9wdGlvbmFsXG5cbiAgQElucHV0KClcbiAgaXNPcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgb25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBPdXRwdXQoKVxuICBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBPdXRwdXQoKVxuICBvblRvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBAQ29udGVudENoaWxkKEFjY29yZGlvblRvZ2dsZSwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHRvZ2dsZXI6IEVsZW1lbnRSZWYgfCB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBBY2NvcmRpb24pKSBwdWJsaWMgYWNjb3JkaW9uOiBBY2NvcmRpb24sXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBjaGVja0FuZFRvZ2dsZSgpIHtcbiAgICAvLyBpZiBjdXN0b20gdG9nZ2xlIGVsZW1lbnQgaXMgc3VwcGxpZWQsIHRoZW4gZG8gbm90aGluZywgY3VzdG9tIHRvZ2dsZXIgd2lsbCB0YWtlIGNhcmUgb2YgaXRcbiAgICBpZiAodGhpcy50b2dnbGVyKVxuICAgICAgcmV0dXJuO1xuXG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZClcbiAgICAgIHJldHVybjtcblxuICAgIGNvbnN0IGlzT3BlbmVkQmVmb3JlV2VDaGFuZ2UgPSB0aGlzLmlzT3BlbmVkO1xuICAgIGlmICh0aGlzLmFjY29yZGlvbi5jbG9zZU90aGVycylcbiAgICAgIHRoaXMuYWNjb3JkaW9uLmNsb3NlQWxsKCk7XG5cbiAgICB0aGlzLmlzT3BlbmVkID0gIWlzT3BlbmVkQmVmb3JlV2VDaGFuZ2U7XG4gICAgaWYgKHRoaXMuaXNPcGVuZWQpIHtcbiAgICAgIHRoaXMub25PcGVuLmVtaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoKTtcbiAgICB9XG4gICAgdGhpcy5vblRvZ2dsZS5lbWl0KHRoaXMuaXNPcGVuZWQpO1xuICB9XG5cbiAgb3Blbk9uSW5pdGlhbGl6YXRpb24oKSB7XG4gICAgdGhpcy5pc09wZW5lZCA9IHRydWU7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbn0iXX0=