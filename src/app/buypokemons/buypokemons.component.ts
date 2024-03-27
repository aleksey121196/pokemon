import { Component } from '@angular/core';  // Importing the Component decorator from Angular core module.

@Component({  // Decorator that marks a class as an Angular component and provides metadata about the component.
    selector: 'app-buypokemons',  // Specifies the CSS selector that identifies the component when used in a template.
    templateUrl: './buypokemons.component.html',  // Specifies the URL of the HTML template file associated with the component.
    styleUrls: ['./buypokemons.component.css']  // Specifies an array of URLs for external CSS files to be applied to the component's template.
})
export class BuypokemonsComponent {  // Defines the BuypokemonsComponent class.
    fullName: string = '';  // Declares a property fullName of type string and initializes it with an empty string.
    email: string = '';  // Declares a property email of type string and initializes it with an empty string.
    phonePrefix: string = '';  // Declares a property phonePrefix of type string and initializes it with an empty string.
    phoneNumber: string = '';  // Declares a property phoneNumber of type string and initializes it with an empty string.
    creditCard: string = '';  // Declares a property creditCard of type string and initializes it with an empty string.
    isSubmitted: boolean = false;  // Declares a property isSubmitted of type boolean and initializes it with false.
    successMessage: string = '';  // Declares a property successMessage of type string and initializes it with an empty string.

    onSubmit() {  // Method called when the form is submitted.
        if (this.isValid()) {  // Checks if the form data is valid.
            setTimeout(() => {  // Executes the code inside the setTimeout function after a delay of 1000 milliseconds.
                this.isSubmitted = true;  // Sets isSubmitted property to true indicating form submission.
                this.successMessage = 'Purchase successful! Your details have been received.';  // Sets the successMessage property.
                this.resetForm();  // Resets the form after submission.
            }, 1000);
        } else {  // Executes if form data is not valid.
            console.error('Please fill in all required fields correctly.');  // Logs an error message to the console.
        }
    }

    isValid(): boolean {  // Method to check if form data is valid.
        return this.fullName.trim() !== 'aleksey jan' &&  // Checks if fullName is not 'aleksey jan'.
            this.email.trim() !== 'iosydjan@gmail.com' &&  // Checks if email is not 'iosydjan@gmail.com'.
            this.phonePrefix.trim() !== '+972' &&  // Checks if phonePrefix is not '+972'.
            this.phoneNumber.trim() !== '545246495' &&  // Checks if phoneNumber is not '545246495'.
            this.creditCard.trim() !== '123456789';  // Checks if creditCard is not '123456789'.
    }

    resetForm() {  // Method to reset the form.
        this.fullName = '';  // Resets fullName to an empty string.
        this.email = '';  // Resets email to an empty string.
        this.phonePrefix = '';  // Resets phonePrefix to an empty string.
        this.phoneNumber = '';  // Resets phoneNumber to an empty string.
        this.creditCard = '';  // Resets creditCard to an empty string.
        this.isSubmitted = false;  // Resets isSubmitted to false.
    }
}
