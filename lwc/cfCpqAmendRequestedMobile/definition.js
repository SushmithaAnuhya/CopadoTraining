let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{},"type":null,"value":{}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1625913587695-p3getxjj4","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Parent.details","fieldValue":"{action.response.records[0].details}"}],"id":"flex-action-1625913596503","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_cart_updated","element":"action","eventLabel":"pubsub","eventname":"cpq_cart_updated","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqAmendRequestedMobile_1_Vlocity","Id":"0RbHu000001I618CAO","ManageableState":"unmanaged","MasterLabel":"cfCpqAmendRequestedMobile_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"sessionVars":[],"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"flexMenu","elementLabel":"Menu-4","name":"Menu","property":{"card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"flyoutObj":{"menuItemFlyout4":{"displayName":"Request Pending Approval","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"menuItemFlyout4","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"}},"iconName":"utility:down","menuItems":[{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQViewRecord}","id":"flex-action-1629442039242","name":"View Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQViewRecord}","name":"menu-item-1612100275302-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQGenerateDocumentPDF}","id":"flex-action-1629442042106","name":"Generate Document PDF","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQGenerateDocumentPDF}","name":"menu-item-1612100312317-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQAmendmentHistory}","id":"flex-action-1629442044684","name":"Amendment History","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQAmendmentHistory}","name":"menu-item-1612100357124-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQStatusNotifications}","id":"flex-action-1629442047152","name":"Status Notifications","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQStatusNotifications}","name":"menu-item-1612100381466-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].discountsForSubmission","hasMergeField":false,"id":"state-new-condition-4","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQRequestPendingApproval}","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1629442019868","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQRequestPendingApproval}","name":"menu-item-1612103374315-0"},{"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex/vlocity_cmt__XOMViewOrderDecomposition?id={Id}"},"displayName":"{Label.CPQViewDecomposition}","id":"flex-action-1629107887701","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQViewDecomposition}","name":"menu-item-1615224572661-0"},{"actionData":{"card":"{card}","stateAction":{"displayName":"{Label.CPQViewOrchestrationPlan}","eventName":"cpqutils","extraParams":{"cartId":"{Id}","ipMethod":"CPQ_OrderActionUtil","utilMethod":"viewOrchestrationPlan"},"hasExtraParams":true,"id":"flex-action-1629107871894","message":"cpq_ui_event","openUrlIn":"Current Window","parent":"menu","subType":"PubSub","type":"Event","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQViewOrchestrationPlan}","name":"menu-item-1615224727749-0"},{"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/{Id}/p"},"displayName":"{Label.CPQPrintableView}","id":"flex-action-1629107857839","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQPrintableView}","name":"menu-item-1615224887780-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-0","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-1","logicalOperator":"&&","operator":"===","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQCreateFrameAgreement}","id":"flex-action-1631199965429","name":"Create Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAgreement}","name":"menu-item-1615225171350-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-2","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-3","logicalOperator":"&&","operator":"===","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQUpdateFrameAgreement}","id":"flex-action-1631199973792","name":"Update Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAgreement}","name":"menu-item-1615266698347-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQDiscard}","id":"flex-action-1629442058063","name":"Discard","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQDiscard}","name":"menu-item-1615266823699-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-0","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-1","logicalOperator":"&&","operator":"===","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQCreateFrameAmendment}","id":"flex-action-1631199981796","name":"Create Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAmendment}","name":"menu-item-1631199414127-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-0","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-1","logicalOperator":"&&","operator":"===","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQUpdateFrameAmendment}","id":"flex-action-1631199998679","name":"Update Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAmendment}","name":"menu-item-1631199438087-0"}],"overflow":true,"position":"right","record":"{record}","size":"small","type":"action","variant":"neutral"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-0","operator":"==","type":"custom","value":"Order"},{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-1","logicalOperator":"&&","operator":"==","type":"custom","value":"Amend Requested"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order AmendRequested","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"flexMenu","elementLabel":"Menu-4","name":"Menu","property":{"card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"flyoutObj":{"menuItemFlyout4":{"displayName":"Request Pending Approval","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"menuItemFlyout4","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"}},"iconName":"utility:down","menuItems":[{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQViewRecord}","id":"flex-action-1629442181811","name":"View Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQViewRecord}","name":"menu-item-1612100275302-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQGenerateDocumentPDF}","id":"flex-action-1629442185244","name":"Generate Document PDF","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQGenerateDocumentPDF}","name":"menu-item-1612100312317-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQAmendmentHistory}","id":"flex-action-1629442187727","name":"Amendment History","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQAmendmentHistory}","name":"menu-item-1612100357124-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQStatusNotifications}","id":"flex-action-1629442190517","name":"Status Notifications","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQStatusNotifications}","name":"menu-item-1612100381466-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].discountsForSubmission","hasMergeField":false,"id":"state-new-condition-9","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQRequestPendingApproval}","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1629442168177","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQRequestPendingApproval}","name":"menu-item-1612103374315-0"},{"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/{Id}/p"},"displayName":"{Label.CPQPrintableView}","id":"flex-action-1629108146473","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQPrintableView}","name":"menu-item-1615224887780-0"},{"actionData":{"card":"{card}","stateAction":{"Record":{"targetAction":"clone","targetId":"{Id}","targetName":"Order"},"displayName":"{Label.CPQClone}","id":"flex-action-1629108136574","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Record","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQClone}","name":"menu-item-1615267775479-1"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-16","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-17","logicalOperator":"&&","operator":"===","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQCreateFrameAgreement}","id":"flex-action-1631200146094","name":"Create Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAgreement}","name":"menu-item-1631199622530-2"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-0","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-1","logicalOperator":"&&","operator":"===","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQCreateFrameAmendment}","id":"flex-action-1631200153529","name":"Create Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAmendment}","name":"menu-item-1631199637430-2"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-20","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-21","logicalOperator":"&&","operator":"===","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQUpdateFrameAgreement}","id":"flex-action-1631200161295","name":"Update Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAgreement}","name":"menu-item-1631199657292-2"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-22","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-23","logicalOperator":"&&","operator":"===","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQUpdateFrameAmendment}","id":"flex-action-1631200168887","name":"Update Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAmendment}","name":"menu-item-1631199674583-2"}],"overflow":true,"position":"right","record":"{record}","size":"small","type":"action","variant":"neutral"},"size":{"default":"1","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-4","operator":"==","type":"custom","value":"Order"},{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-5","logicalOperator":"&&","operator":"==","type":"custom","value":"Rejected"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order Rejected","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqAmendRequestedMobile","Id":"a3gHu000001rL06QAC","vlocity_cmt__GlobalKey__c":"cpqAmendRequestedMobile/Vlocity/4/1629107829110"};
  export default definition