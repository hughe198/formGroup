import { Component } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms'
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
allForm: FormGroup
constructor(){
  this.allForm = new FormGroup({
    name: new FormControl("Bob"),
    last: new FormControl("Smith"),
    age: new FormControl(21),
    height: new FormControl(182),
    like_cars: new FormControl(10),
    like_bikes: new FormControl(10),
    like_holdiays: new FormControl(10),
    like_skiing: new FormControl(10),  
    min_salary: new FormControl(10),  
    max_salary: new FormControl(10)
  })
  this.subscribeToSalaryChanges();
}

private subscribeToSalaryChanges(): void {
  this.allForm.get('min_salary')!.valueChanges.subscribe(minValue => {
    const maxValue = this.allForm.get('max_salary')!.value;
    if (parseInt(minValue, 10) > parseInt(maxValue, 10)) {
      this.allForm.get('max_salary')!.setValue(minValue);
    }
  });

  this.allForm.get('max_salary')!.valueChanges.subscribe(maxValue => {
    const minValue = this.allForm.get('min_salary')!.value;
    if (parseInt(maxValue, 10) < parseInt(minValue, 10)) {
      this.allForm.get('min_salary')!.setValue(maxValue);
    }
  });
}




}
