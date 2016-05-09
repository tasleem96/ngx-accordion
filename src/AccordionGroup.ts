import {Component, Input, Host, forwardRef, Inject} from "@angular/core";
import {Accordion} from "./Accordion";

@Component({
    selector: "accordion-group",
    template: `
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" (click)="toggle()">
      <h4 class="panel-title">
        <a *ngIf="heading" role="button" data-toggle="collapse" [attr.aria-expanded]="isOpened">
            {{ heading }}
        </a>
        <ng-content select="accordion-heading"></ng-content>   
        <div *ngIf="showArrows()" class="caret" [style.borderTop]="isOpened ? 0 : ''" [style.borderBottom]="isOpened ? '4px dashed' : ''"></div>
      </h4>
    </div>
    <div  class="panel-collapse collapse" [class.in]="isOpened" role="tabpanel" [attr.aria-labelledby]="heading">
      <div class="panel-body">
        <ng-content></ng-content>   
      </div>
    </div>
  </div>
`
})
export class AccordionGroup {

    @Input()
    heading: string;

    @Input()
    isOpened: boolean = false;

    constructor(@Host() @Inject(forwardRef(() => Accordion))  private accordion: Accordion) {
    }

    toggle() {
        const isOpenedBeforeWeChange = this.isOpened;
        if (this.accordion.closeOthers)
            this.accordion.closeAll();
        this.isOpened = !isOpenedBeforeWeChange;
    }

    showArrows() {
        return this.accordion.showArrows;
    }

}