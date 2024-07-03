import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccordionGroup } from "./AccordionGroup";
import { Accordion } from "./Accordion";
import { AccordionToggle } from "./AccordionToggle";
import { AccordionHeading } from "./AccordionHeading";
import * as i0 from "@angular/core";
export * from "./Accordion";
export * from "./AccordionGroup";
export * from "./AccordionToggle";
export * from "./AccordionHeading";
export class AccordionModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUV0RCxjQUFjLGFBQWEsQ0FBQztBQUM1QixjQUFjLGtCQUFrQixDQUFDO0FBQ2pDLGNBQWMsbUJBQW1CLENBQUM7QUFDbEMsY0FBYyxvQkFBb0IsQ0FBQztBQW1CbkMsTUFBTSxPQUFPLGVBQWU7d0dBQWYsZUFBZTt5R0FBZixlQUFlLGlCQVpwQixTQUFTO1lBQ1QsY0FBYztZQUNkLGVBQWU7WUFDZixnQkFBZ0IsYUFOaEIsWUFBWSxhQVNaLFNBQVM7WUFDVCxjQUFjO1lBQ2QsZUFBZTtZQUNmLGdCQUFnQjt5R0FHWCxlQUFlLFlBZnBCLFlBQVk7OzRGQWVQLGVBQWU7a0JBakIzQixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3FCQUNmO29CQUNELFlBQVksRUFBRTt3QkFDVixTQUFTO3dCQUNULGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixnQkFBZ0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDTCxTQUFTO3dCQUNULGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixnQkFBZ0I7cUJBQ25CO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQWNjb3JkaW9uR3JvdXAgfSBmcm9tIFwiLi9BY2NvcmRpb25Hcm91cFwiO1xuaW1wb3J0IHsgQWNjb3JkaW9uIH0gZnJvbSBcIi4vQWNjb3JkaW9uXCI7XG5pbXBvcnQgeyBBY2NvcmRpb25Ub2dnbGUgfSBmcm9tIFwiLi9BY2NvcmRpb25Ub2dnbGVcIjtcbmltcG9ydCB7IEFjY29yZGlvbkhlYWRpbmcgfSBmcm9tIFwiLi9BY2NvcmRpb25IZWFkaW5nXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL0FjY29yZGlvblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vQWNjb3JkaW9uR3JvdXBcIjtcbmV4cG9ydCAqIGZyb20gXCIuL0FjY29yZGlvblRvZ2dsZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vQWNjb3JkaW9uSGVhZGluZ1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQWNjb3JkaW9uLFxuICAgICAgICBBY2NvcmRpb25Hcm91cCxcbiAgICAgICAgQWNjb3JkaW9uVG9nZ2xlLFxuICAgICAgICBBY2NvcmRpb25IZWFkaW5nXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEFjY29yZGlvbixcbiAgICAgICAgQWNjb3JkaW9uR3JvdXAsXG4gICAgICAgIEFjY29yZGlvblRvZ2dsZSxcbiAgICAgICAgQWNjb3JkaW9uSGVhZGluZ1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uTW9kdWxlIHtcblxufSJdfQ==