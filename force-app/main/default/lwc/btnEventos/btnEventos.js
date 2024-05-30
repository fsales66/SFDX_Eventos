import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";
export default class BtnEventos extends NavigationMixin(LightningElement) {
  btnEventosClick() {
    this[NavigationMixin.Navigate]({
      type: "custom__objectPage",
      attributes: {
        objectApiName: "Evento__c",
        actionName: "new"
      }
    });
  }
}
