sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("ui5con.sample.app.controller.BaseController", {
    getRouter() {
      return this.getOwnerComponent().getRouter();
    },
    getModel(sName) {
      return this.getView().getModel(sName);
    },
    getResourceBundle() {
      return this.getOwnerComponent().getModel("i18n").getResourceBundle();
    },
    onNavBack() {
      debugger;
      this.getRouter().navTo("Main", {}, true);
    },
  });
});
