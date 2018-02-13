import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alart',
    template: `
        <p>There is a warning, you are in denger!</p>
    `,
    styles: [
        `
            p{
                color: red;
                padding: 30px;
                border: 1px solid red;
                background-color: pink;
            }
        `
    ]
})
export class WarningAlartComponent{

}