import { Component, HostListener, forwardRef, Inject, Host } from "@angular/core";
import { AccordionGroup } from "./AccordionGroup";
import * as i0 from "@angular/core";
import * as i1 from "./AccordionGroup";
export class AccordionToggle {
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
        }], ctorParameters: function () { return [{ type: i1.AccordionGroup, decorators: [{
                    type: Host
                }, {
                    type: Inject,
                    args: [forwardRef(() => AccordionGroup)]
                }] }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ["click"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3JkaW9uVG9nZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0FjY29yZGlvblRvZ2dsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQU1sRCxNQUFNLE9BQU8sZUFBZTtJQUU4QztJQUF0RSxZQUFzRSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDcEcsQ0FBQztJQUdELE9BQU87UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2pDLENBQUM7d0dBUlEsZUFBZSxrQkFFSSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDOzRGQUZuRCxlQUFlLHVHQUZkLDJCQUEyQjs7NEZBRTVCLGVBQWU7a0JBSjNCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDeEM7OzBCQUdnQixJQUFJOzswQkFBSSxNQUFNOzJCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7NENBSTVELE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIGZvcndhcmRSZWYsIEluamVjdCwgSG9zdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY2NvcmRpb25Hcm91cCB9IGZyb20gXCIuL0FjY29yZGlvbkdyb3VwXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFjY29yZGlvbi10b2dnbGVcIixcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvblRvZ2dsZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihASG9zdCgpIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBBY2NvcmRpb25Hcm91cCkpIHByaXZhdGUgYWNjb3JkaW9uR3JvdXA6IEFjY29yZGlvbkdyb3VwKSB7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25Hcm91cC50b2dnbGUoKTtcbiAgICB9XG5cbn0iXX0=