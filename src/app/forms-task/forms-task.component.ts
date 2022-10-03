import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-task',
  templateUrl: './forms-task.component.html',
  styleUrls: ['./forms-task.component.scss']
})
export class FormsTaskComponent implements OnInit {

//   arrayForm!: FormGroup;  
//   constructor(private fb: FormBuilder) {}   
//   ngOnInit() {  ; 
//     this.arrayForm = this.fb.group({
//       mobile: this.fb.array([])
//     }); 
//   }   
  
// get mobile() : FormArray {
//   return this.arrayForm.get("mobile") as FormArray
// }
// addmobileNumber() {
//   this.mobile.push(this.createItem())
// }
// removeMobile(i:number) {
//   this.mobile.removeAt(i);
// }


// createItem(): FormGroup {  
//   return this.fb.group({  
//     mobileNumber:''  
//   });  
// }   


// submit(frm:any) {
//   console.log(frm);
  
// }

RegForm!:FormGroup;

constructor(private fb:FormBuilder)  {
this.RegForm =this.fb.group({
  mobileNumber:this.fb.array([this.newNumbers()])
})
}
  ngOnInit(): void {
    
  }

mobileNumber(){
  return this.RegForm.get("mobileNumber") as FormArray
  
}
newNumbers(){
return this.fb.group({
 mobileNumber:''
})
}

addNumber(){
  this.mobileNumber().push(this.newNumbers());
}
remove(i:number){
  this.mobileNumber().removeAt(i)
}

submit(frm:any) {
  console.log(frm.mobileNumber);
  
}

}
