import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: 'form-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class FormAppComponent {
    title = 'ngxformly';
    form = new FormGroup({});
    model = { email: 'email@gmail.com' };
    fields: FormlyFieldConfig[] = [
        {
            key: 'email',
            type: 'input',
            templateOptions: {
                label: 'Email address',
                type: 'email',
                pattern: /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/,
                placeholder: 'Enter email',
                required: true,
                addonLeft: {
                    class: 'fa fa-envelope',
                },
            }
        },
        {
            key: 'number',
            type: 'input',
            templateOptions: {
                label: 'Number',
                type: 'number',
                min: 1,
                max: 5,
                placeholder: 'Enter price',
                required: true,
                addonLeft: {
                    text: 'Price',
                },
                addonRight: {
                    class: 'fa fa-euro',
                },
            }
        },
        {
            key: 'ip',
            type: 'input',
            templateOptions: {
                label: 'Network address',
                type: 'text',
                pattern: /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:[.](?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/,
                placeholder: '00.00.00.00',
                required: true,
                addonLeft: {
                    class: 'fa fa-server',
                },
            }
        },
        {
            key: 'color',
            type: 'input',
            templateOptions: {
                type: 'color',
                placeholder: 'choose a color',
                required: true,
                addonLeft: {
                    class: 'fa fa-palette',
                },
            }
        },
    ];

        submit(model) {
    console.log(model);
}
}
