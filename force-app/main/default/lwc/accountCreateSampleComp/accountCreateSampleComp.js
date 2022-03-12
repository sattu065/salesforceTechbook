import { LightningElement } from 'lwc';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Type from '@salesforce/schema/Account.Type';
import Account_Type1 from '@salesforce/schema/Account.Account_Type__c';
import Account_Industry from '@salesforce/schema/Account.Industry';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';

export default class AccountCreateSampleComp extends LightningElement {
    objectApiName='Account';
    fields=[Account_Name,Account_Type,Account_Industry,Account_Type1];
    handleAccountCreate(event){
        this.dispatchEvent(new ShowToastEvent({
            title: 'Account Create',
            message: 'recorld Id:' + event.detail.id,
            variant: 'success'
        }));
        // this[NavigationMixin.Navigate]({
        //     type: 'standard__recordPage',
        //     attributes: {
        //         actionName: "view",
        //         recordId: event.detail.id,
        //         objectApiName: "Account"
        //     },
        // });
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
               url: "google.com"
            }
        });
    }
}