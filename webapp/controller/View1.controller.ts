import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace tw.com.akgassignment01.controller
 */
export default class View1 extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {

    }
    public onSelect(oEvent: any): void{
        var selectedItemKey = oEvent.getParameter("selectedItem").getKey();
        sap.ui.getCore().getConfiguration().setLanguage(selectedItemKey);
    }

}