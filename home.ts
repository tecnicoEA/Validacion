import {Component} from "@angular/core";
import {NavController , Alert} from 'ionic-angular';
import {Principal} from '../principal/principal';
import { FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl } from '@angular/common';
import {CustomValidators} from '../validators/CustomValidators';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [FORM_DIRECTIVES]
})
export class HomePage {

    authForm: ControlGroup;
	username: AbstractControl;
	password: AbstractControl;
    
    
  constructor(private navController: NavController , private fb: FormBuilder) {
    this.navController=navController;
    
        this.authForm = fb.group({  
            'username': ['', Validators.compose([Validators.required, Validators.minLength(4), CustomValidators.checkFirstCharacterValidator])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4), CustomValidators.checkFirstCharacterValidator])]
        });
 
        this.username = this.authForm.controls['username'];     
        this.password = this.authForm.controls['password'];  
    }
	
    onSubmit(value: string): void { 
        if(this.authForm.valid) {
            console.log('Submitted value: ', value);
        }
    } 
    
    goToPrincipal(){
        
      this.doAlert();
            
    }
    
    doAlert() {
            let alert = Alert.create({
                title: 'New Friend!',
                subTitle: "",
                buttons: ['OK']
            });
            this.navController.present(alert);
        }
    
    
}










/*
    doAlert() {
            let alert = Alert.create({
                title: 'New Friend!',
                subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
                buttons: ['OK']
            });
            this.navController.present(alert);
        }
*/

