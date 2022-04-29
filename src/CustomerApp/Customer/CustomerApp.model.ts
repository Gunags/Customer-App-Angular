import {
  NgForm,
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
// Create - Create Validation object model
// connect - Connect the Validation to the UI
// Check - Check the Validation is working or not

export class Customer {
  CustomerCode: string = '';
  CustomerName: string = '';
  CustomerAmount: number = 0;
  formCustomerGroup = new FormGroup({ }) ;

  constructor()
   {
    var _builder = new FormBuilder();
    this.formCustomerGroup = _builder.group({});
    this.formCustomerGroup.addControl(
      "CustomerNameControl",
      new FormControl('', Validators.required)
    );
    var validationcollection = [];
    validationcollection.push(Validators.required);
    validationcollection.push(Validators.pattern("^[0-9]{4,4}$"));
    this.formCustomerGroup.addControl(
      "CustomerCodeControl",
      new FormControl('', Validators.compose(validationcollection))
    );
  }
}
