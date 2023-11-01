export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"training@cme.edu","userId":"005Hn00000I3mEaQA2","userCurrencyCode":"USD","timeStamp":"2022-06-01T14:01:57.14Z","sOmniScriptId":"a29Hn000006duCnQAC","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":false,"stylesheet":{"newportRtl":"","newport":"","lightningRtl":"","lightning":""},"stepChartPlacement":"top","ssm":false,"showInputWidth":true,"seedDataJSON":{},"scrollBehavior":"auto","saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"","saveForLaterRedirectPageName":"","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":null,"itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":null,"itemsKey":"knowledgeItems","id":"vlcKnowledge","dispOutsideOmni":false}],"message":{},"mergeSavedData":false,"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":true,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currentLanguage":"en_US","currencyCode":"","consoleTabTitle":null,"consoleTabLabel":null,"consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"","cancelRedirectPageName":"","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":false,"allowCancel":true},"prefillJSON":"{}","lwcId":"91d76fba-255e-eedb-3bd8-77c4a0148b54","labelMap":{"Messaging2":"CreateMasterOrder:Messaging2","MultiSiteObjectsOrder":"CreateMasterOrder:MultiSiteObjectsOrder","LineBreak6":"CreateMasterOrder:LineBreak6","CreateGroupNowOrder":"CreateMasterOrder:CreateGroupNowOrder","LineBreak12":"CreateMasterOrder:LineBreak12","OrderPriceList":"CreateMasterOrder:OrderPriceList","LineBreak7":"CreateMasterOrder:LineBreak7","OrderStartDate":"CreateMasterOrder:OrderStartDate","LineBreak8":"CreateMasterOrder:LineBreak8","OrderRecordType":"CreateMasterOrder:OrderRecordType","LineBreak9":"CreateMasterOrder:LineBreak9","OrderName":"CreateMasterOrder:OrderName","LineBreak5":"CreateMasterOrder:LineBreak5","cpqMultiSiteUtilOrder":"CreateMasterOrder:cpqMultiSiteUtilOrder","Messaging1":"CreateMasterQuote:Messaging1","LineBreak4":"CreateMasterQuote:LineBreak4","MultiSiteObjectsQuote":"CreateMasterQuote:MultiSiteObjectsQuote","CreateGroupNowQuote":"CreateMasterQuote:CreateGroupNowQuote","LineBreak10":"CreateMasterQuote:LineBreak10","QuotePriceList":"CreateMasterQuote:QuotePriceList","LineBreak3":"CreateMasterQuote:LineBreak3","QuoteRecordType":"CreateMasterQuote:QuoteRecordType","LineBreak2":"CreateMasterQuote:LineBreak2","QuoteName":"CreateMasterQuote:QuoteName","LineBreak1":"CreateMasterQuote:LineBreak1","cpqMultiSiteUtilQuote":"CreateMasterQuote:cpqMultiSiteUtilQuote","OrderNavigatetoIndustriesCPQ":"OrderNavigatetoIndustriesCPQ","OrderNavigatetoCPQMultisiteConfigurator":"OrderNavigatetoCPQMultisiteConfigurator","QuoteNavigatetoIndustriesCPQ":"QuoteNavigatetoIndustriesCPQ","QuoteNavigatetoCPQMultisiteConfigurator":"QuoteNavigatetoCPQMultisiteConfigurator","MultiSiteGetMasterOrderId":"MultiSiteGetMasterOrderId","MultiSiteGetMasterQuoteId":"MultiSiteGetMasterQuoteId","MultiSiteCreateMasterOrder":"MultiSiteCreateMasterOrder","MultiSiteCreateMasterQuote":"MultiSiteCreateMasterQuote","ExtractPriceListPropertiesOrder":"ExtractPriceListPropertiesOrder","ExtractPriceListPropertiesQuote":"ExtractPriceListPropertiesQuote","CreateMasterOrder":"CreateMasterOrder","CreateMasterQuote":"CreateMasterQuote","SetValues1":"SetValues1","ExtractAccountId":"ExtractAccountId"},"labelKeyMap":{"CPQCreateMultiSiteQuote":"Create Multi-Site Quote","CPQNext":"Next","CPQCreateMultiSiteOrder":"Create Multi-Site Order","CPQQuoteName":"Quote Name","CPQRecordType":"Record Type","CPQParentQuote":"Parent Quote","CPQPriceList":"Price List","CPQCreateGroupNow":"Are you ready to create groups now ?","CPQYes":"Yes","CPQNo":"No","MSAddSChooseItemsToGroup":"Choose items to group","CPQOrderName":"Order Name","CPQParentOrder":"Parent Order","CPQOrderStartDate":"Order Start Date"},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":null,"ssm":false,"showPersistentComponent":[false,false],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":0,"redirectNextLabel":null,"pubsub":false,"postMessage":null,"message":{},"label":null,"inProgressMessage":null,"ignoreCache":false,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"dataRaptor Input Parameters":[{"inputParam":"OpportunityId","element":"OpportunityId"}],"controlWidth":12,"bundle":"MultiSite - ExtractAccountId","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"ExtractAccountId","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"ExtractAccountId","lwcId":"lwc0"},{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[false,false],"show":null,"pubsub":false,"message":{},"label":null,"elementValueMap":{"channelName":"=CONCATENATE(\"cpq_\", %OpportunityId%)"},"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"SetValues1","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetValues1","lwcId":"lwc1"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"type","data":"Quote","condition":"="}],"operator":"AND"}},"saveMessage":null,"saveLabel":null,"remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":null,"nextWidth":3,"nextLabel":"CPQNext","message":{},"label":"CPQCreateMultiSiteQuote","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":null,"instruction":"","errorMessage":{"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":null,"completeLabel":null,"chartLabel":null,"cancelLabel":null,"allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"CreateMasterQuote":"","QuoteName":"","QuoteRecordType":"","QuotePriceList":"","CreateGroupNowQuote":""},"aggElements":{"cpqMultiSiteUtilQuote":"","MultiSiteObjectsQuote":""}},"offSet":0,"name":"CreateMasterQuote","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":2,"response":null,"propSetMap":{"show":null,"lwcName":"vlocity_cmt__cpqMultiSiteUtil","hide":false,"disOnTplt":false,"customAttributes":[{"source":"MultiSite_GetMemberTypeList","name":"get-group-members-type-list-i-p-name"},{"source":"true","name":"fetch-member-type-list"},{"source":"%channelName%","name":"channel-name"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"cpqMultiSiteUtilQuote","level":1,"JSONPath":"CreateMasterQuote:cpqMultiSiteUtilQuote","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent1":true,"lwcId":"lwc20-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Line Break","rootIndex":2,"response":null,"propSetMap":{"show":null,"padding":15,"label":"LineBreak1","disOnTplt":false,"HTMLTemplateId":""},"name":"LineBreak1","level":1,"JSONPath":"CreateMasterQuote:LineBreak1","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc21-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Text","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":true,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":null,"pattern":"","minLength":0,"maxLength":255,"mask":"","label":"CPQQuoteName","inputWidth":12,"hide":false,"helpText":null,"help":false,"disOnTplt":false,"defaultValue":null,"debounceValue":0,"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"QuoteName","level":1,"JSONPath":"CreateMasterQuote:QuoteName","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc22-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Line Break","rootIndex":2,"response":null,"propSetMap":{"show":null,"padding":7,"label":"LineBreak1","disOnTplt":false,"HTMLTemplateId":""},"name":"LineBreak2","level":1,"JSONPath":"CreateMasterQuote:LineBreak2","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc23-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":4,"eleArray":[{"type":"Select","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":true,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options|0:value":"CPQParentQuote","options":[{"value":"CPQParentQuote","name":"MasterQuote"}],"optionSource":{"type":"","source":""},"label":"CPQRecordType","inputWidth":12,"hide":false,"helpText":null,"help":false,"disOnTplt":false,"defaultValue":"MasterQuote","controllingField":{"type":"","source":"","element":""},"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"QuoteRecordType","level":1,"JSONPath":"CreateMasterQuote:QuoteRecordType","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bSelect":true,"lwcId":"lwc24-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":5,"eleArray":[{"type":"Line Break","rootIndex":2,"response":null,"propSetMap":{"show":null,"padding":7,"label":"LineBreak1","disOnTplt":false,"HTMLTemplateId":""},"name":"LineBreak3","level":1,"JSONPath":"CreateMasterQuote:LineBreak3","indexInParent":5,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc25-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":6,"eleArray":[{"type":"Lookup","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"placeholder":"","label":"CPQPriceList","inputWidth":12,"hide":false,"helpText":null,"help":false,"errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"defaultValue":null,"dataSource":{"type":"SObject","mapItems":{"phase2MapItems":[{"InterfaceFieldAPIName__c":"PriceLists:Id","DomainObjectFieldAPIName__c":"name","DomainObjectCreationOrder__c":1,"DomainObjectAPIName__c":"JSON"},{"InterfaceFieldAPIName__c":"PriceLists:Name","DomainObjectFieldAPIName__c":"value","DomainObjectCreationOrder__c":1,"DomainObjectAPIName__c":"JSON"}],"phase1MapItems":[{"InterfaceObjectName__c":"vlocity_cmt__PriceList__c","InterfaceObjectLookupOrder__c":1,"InterfaceFieldAPIName__c":"vlocity_cmt__IsActive__c","FilterValue__c":"'true'","FilterOperator__c":"=","DomainObjectFieldAPIName__c":"PriceLists"}],"inputParameters":[]}},"controlWidth":12,"conditionType":"Hide if False","clearValue":true,"accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"QuotePriceList","level":1,"JSONPath":"CreateMasterQuote:QuotePriceList","indexInParent":6,"index":0,"children":[],"bHasAttachment":false,"bLookup":true,"lwcId":"lwc26-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":7,"eleArray":[{"type":"Line Break","rootIndex":2,"response":null,"propSetMap":{"show":null,"padding":10,"label":"LineBreak1","disOnTplt":false,"HTMLTemplateId":""},"name":"LineBreak10","level":1,"JSONPath":"CreateMasterQuote:LineBreak10","indexInParent":7,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc27-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":8,"eleArray":[{"type":"Radio","rootIndex":2,"response":null,"propSetMap":{"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options|1:value":"CPQNo","options|0:value":"CPQYes","options":[{"value":"CPQYes","name":"yes"},{"value":"CPQNo","name":"no"}],"optionWidth":100,"optionSource":{"type":"","source":""},"optionHeight":100,"label":"CPQCreateGroupNow","imageCountInRow":3,"horizontalMode":true,"hide":false,"helpText":null,"help":false,"enableCaption":true,"disOnTplt":false,"defaultValue":"yes","controllingField":{"type":"","source":"","element":""},"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"CreateGroupNowQuote","level":1,"JSONPath":"CreateMasterQuote:CreateGroupNowQuote","indexInParent":8,"index":0,"children":[],"bHasAttachment":false,"bRadio":true,"lwcId":"lwc28-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":9,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":2,"response":null,"propSetMap":{"show":{"group":{"rules":[{"field":"CreateGroupNowQuote","data":"yes","condition":"="}],"operator":"AND"}},"lwcName":"cfCpqMultiSiteMembersTypeList","label":null,"hide":false,"disOnTplt":false,"customAttributes":[{"source":"true","name":"parent-data"},{"source":"%memberOptionsList%","name":"records"},{"source":"%OpportunityId%","name":"record-id"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"MultiSiteObjectsQuote","level":1,"JSONPath":"CreateMasterQuote:MultiSiteObjectsQuote","indexInParent":9,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent2":true,"lwcId":"lwc29-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":10,"eleArray":[{"type":"Line Break","rootIndex":2,"response":null,"propSetMap":{"show":null,"padding":10,"label":"LineBreak1","disOnTplt":false,"HTMLTemplateId":""},"name":"LineBreak4","level":1,"JSONPath":"CreateMasterQuote:LineBreak4","indexInParent":10,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc210-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":11,"eleArray":[{"type":"Validation","rootIndex":2,"response":null,"propSetMap":{"validateExpression":{"group":{"rules":[{"field":"multiSiteObjectsList","data":null,"condition":"<>"},{"field":"CreateGroupNowQuote","data":"no","condition":"="}],"operator":"OR"}},"show":null,"messages|1:text":"MSAddSChooseItemsToGroup","messages":[{"value":true,"type":"Success","active":true},{"value":false,"type":"Requirement","text":"MSAddSChooseItemsToGroup","active":true}],"label":null,"hideLabel":true,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":""},"name":"Messaging1","level":1,"JSONPath":"CreateMasterQuote:Messaging1","indexInParent":11,"index":0,"children":[],"bHasAttachment":false,"bMessaging":true,"lwcId":"lwc211-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"CreateMasterQuote","lwcId":"lwc2"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"type","data":"Order","condition":"="}],"operator":"AND"}},"saveMessage":null,"saveLabel":null,"remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":null,"nextWidth":3,"nextLabel":"CPQNext","message":{},"label":"CPQCreateMultiSiteOrder","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":null,"instruction":"","errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":null,"completeLabel":null,"chartLabel":null,"cancelLabel":null,"allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"CreateMasterOrder":"","OrderName":"","OrderRecordType":"","OrderStartDate":"","OrderPriceList":"","CreateGroupNowOrder":""},"aggElements":{"cpqMultiSiteUtilOrder":"","MultiSiteObjectsOrder":""}},"offSet":0,"name":"CreateMasterOrder","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":3,"response":null,"propSetMap":{"show":null,"lwcName":"vlocity_cmt__cpqMultiSiteUtil","hide":false,"disOnTplt":false,"customAttributes":[{"source":"MultiSite_GetMemberTypeList","name":"get-group-members-type-list-i-p-name"},{"source":"true","name":"fetch-member-type-list"},{"source":"%channelName%","name":"channel-name"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"cpqMultiSiteUtilOrder","level":1,"JSONPath":"CreateMasterOrder:cpqMultiSiteUtilOrder","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent3":true,"lwcId":"lwc30-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Line Break","rootIndex":3,"response":null,"propSetMap":{"show":null,"padding":15,"label":"LineBreak1","disOnTplt":false,"HTMLTemplateId":""},"name":"LineBreak5","level":1,"JSONPath":"CreateMasterOrder:LineBreak5","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc31-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Text","rootIndex":3,"response":null,"propSetMap":{"showInputWidth":true,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":null,"pattern":"","minLength":0,"maxLength":255,"mask":"","label":"CPQOrderName","inputWidth":12,"hide":false,"helpText":null,"help":false,"disOnTplt":false,"defaultValue":null,"debounceValue":0,"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"OrderName","level":1,"JSONPath":"CreateMasterOrder:OrderName","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc32-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Line Break","rootIndex":3,"response":null,"propSetMap":{"show":null,"padding":7,"label":"LineBreak1","disOnTplt":false,"HTMLTemplateId":""},"name":"LineBreak9","level":1,"JSONPath":"CreateMasterOrder:LineBreak9","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc33-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":4,"eleArray":[{"type":"Select","rootIndex":3,"response":null,"propSetMap":{"showInputWidth":true,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options|0:value":"CPQParentOrder","options":[{"value":"CPQParentOrder","name":"MasterOrder"}],"optionSource":{"type":"","source":""},"label":"CPQRecordType","inputWidth":12,"hide":false,"helpText":null,"help":false,"disOnTplt":false,"defaultValue":"MasterOrder","controllingField":{"type":"","source":"","element":""},"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"OrderRecordType","level":1,"JSONPath":"CreateMasterOrder:OrderRecordType","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bSelect":true,"lwcId":"lwc34-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":5,"eleArray":[{"type":"Line Break","rootIndex":3,"response":null,"propSetMap":{"show":null,"padding":7,"label":"LineBreak1","disOnTplt":false,"HTMLTemplateId":""},"name":"LineBreak8","level":1,"JSONPath":"CreateMasterOrder:LineBreak8","indexInParent":5,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc35-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":6,"eleArray":[{"type":"Date","rootIndex":3,"response":null,"propSetMap":{"showInputWidth":true,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"modelDateFormat":"yyyy-MM-dd","minDate":"","maxDate":"","label":"CPQOrderStartDate","inputWidth":12,"hide":false,"helpText":null,"help":false,"disOnTplt":false,"defaultValue":null,"dateType":"date","dateFormat":"MM-dd-yyyy","controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"OrderStartDate","level":1,"JSONPath":"CreateMasterOrder:OrderStartDate","indexInParent":6,"index":0,"children":[],"bHasAttachment":false,"bDate":true,"lwcId":"lwc36-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":7,"eleArray":[{"type":"Line Break","rootIndex":3,"response":null,"propSetMap":{"show":null,"padding":7,"label":"LineBreak1","disOnTplt":false,"HTMLTemplateId":""},"name":"LineBreak7","level":1,"JSONPath":"CreateMasterOrder:LineBreak7","indexInParent":7,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc37-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":8,"eleArray":[{"type":"Lookup","rootIndex":3,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"placeholder":"","label":"CPQPriceList","inputWidth":12,"hide":false,"helpText":null,"help":false,"errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"defaultValue":null,"dataSource":{"type":"SObject","mapItems":{"phase2MapItems":[{"InterfaceFieldAPIName__c":"PriceLists:Id","DomainObjectFieldAPIName__c":"name","DomainObjectCreationOrder__c":1,"DomainObjectAPIName__c":"JSON"},{"InterfaceFieldAPIName__c":"PriceLists:Name","DomainObjectFieldAPIName__c":"value","DomainObjectCreationOrder__c":1,"DomainObjectAPIName__c":"JSON"}],"phase1MapItems":[{"InterfaceObjectName__c":"vlocity_cmt__PriceList__c","InterfaceObjectLookupOrder__c":1,"InterfaceFieldAPIName__c":"vlocity_cmt__IsActive__c","FilterValue__c":"'true'","FilterOperator__c":"=","DomainObjectFieldAPIName__c":"PriceLists"}],"inputParameters":[]}},"controlWidth":12,"conditionType":"Hide if False","clearValue":true,"accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"OrderPriceList","level":1,"JSONPath":"CreateMasterOrder:OrderPriceList","indexInParent":8,"index":0,"children":[],"bHasAttachment":false,"bLookup":true,"lwcId":"lwc38-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":9,"eleArray":[{"type":"Line Break","rootIndex":3,"response":null,"propSetMap":{"show":null,"padding":10,"label":"LineBreak1","disOnTplt":false,"HTMLTemplateId":""},"name":"LineBreak12","level":1,"JSONPath":"CreateMasterOrder:LineBreak12","indexInParent":9,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc39-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":10,"eleArray":[{"type":"Radio","rootIndex":3,"response":null,"propSetMap":{"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options|1:value":"CPQNo","options|0:value":"CPQYes","options":[{"value":"CPQYes","name":"yes"},{"value":"CPQNo","name":"no"}],"optionWidth":100,"optionSource":{"type":"","source":""},"optionHeight":100,"label":"CPQCreateGroupNow","imageCountInRow":3,"horizontalMode":true,"hide":false,"helpText":null,"help":false,"enableCaption":true,"disOnTplt":false,"defaultValue":"yes","controllingField":{"type":"","source":"","element":""},"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"CreateGroupNowOrder","level":1,"JSONPath":"CreateMasterOrder:CreateGroupNowOrder","indexInParent":10,"index":0,"children":[],"bHasAttachment":false,"bRadio":true,"lwcId":"lwc310-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":11,"eleArray":[{"type":"Line Break","rootIndex":3,"response":null,"propSetMap":{"show":null,"padding":10,"label":"LineBreak1","disOnTplt":false,"HTMLTemplateId":""},"name":"LineBreak6","level":1,"JSONPath":"CreateMasterOrder:LineBreak6","indexInParent":11,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc311-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":12,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":3,"response":null,"propSetMap":{"show":{"group":{"rules":[{"field":"CreateGroupNowOrder","data":"yes","condition":"="}],"operator":"AND"}},"lwcName":"cfCpqMultiSiteMembersTypeList","label":null,"hide":false,"disOnTplt":false,"customAttributes":[{"source":"true","name":"parent-data"},{"source":"%memberOptionsList%","name":"records"},{"source":"%OpportunityId%","name":"record-id"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"MultiSiteObjectsOrder","level":1,"JSONPath":"CreateMasterOrder:MultiSiteObjectsOrder","indexInParent":12,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent4":true,"lwcId":"lwc312-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":13,"eleArray":[{"type":"Validation","rootIndex":3,"response":null,"propSetMap":{"validateExpression":{"group":{"rules":[{"field":"multiSiteObjectsList","data":null,"condition":"<>"},{"field":"CreateGroupNowOrder","data":"no","condition":"="}],"operator":"OR"}},"show":null,"messages|1:text":"MSAddSChooseItemsToGroup","messages":[{"value":true,"type":"Success","active":true},{"value":false,"type":"Requirement","text":"MSAddSChooseItemsToGroup","active":true}],"label":null,"hideLabel":true,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":""},"name":"Messaging2","level":1,"JSONPath":"CreateMasterOrder:Messaging2","indexInParent":13,"index":0,"children":[],"bHasAttachment":false,"bMessaging":true,"lwcId":"lwc313-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"CreateMasterOrder","lwcId":"lwc3"},{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":null,"ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"type","data":"Quote","condition":"="}],"operator":"AND"}},"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"postMessage":null,"message":{},"label":null,"inProgressMessage":null,"ignoreCache":false,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"errorMessage":{"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"dataRaptor Input Parameters":[{"inputParam":"PriceListId","element":"QuotePriceList"}],"controlWidth":12,"bundle":"MultiSite - ExtractPriceList","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"ExtractPriceListPropertiesQuote","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"ExtractPriceListPropertiesQuote","lwcId":"lwc4"},{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":null,"ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"type","data":"Order","condition":"="}],"operator":"AND"}},"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"postMessage":null,"message":{},"label":null,"inProgressMessage":null,"ignoreCache":false,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"dataRaptor Input Parameters":[{"inputParam":"PriceListId","element":"OrderPriceList"}],"controlWidth":12,"bundle":"MultiSite - ExtractPriceList","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"ExtractPriceListPropertiesOrder","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"ExtractPriceListPropertiesOrder","lwcId":"lwc5"},{"type":"Integration Procedure Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"type","data":"Quote","condition":"="}],"operator":"AND"}},"sendOnlyExtraPayload":true,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"useFuture":false,"preTransformBundle":null,"postTransformBundle":null,"chainable":false},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":null,"integrationProcedureKey":"MultiSite_CreateMasterQuote","inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{"recordType":"%QuoteRecordType%","Pricebook2Id":"%Pricebook2Id%","PriceListName":"%PriceListName%","OpportunityId":"%OpportunityId%","Name":"%QuoteName%","AccountId":"%AccountId%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"MultiSiteCreateMasterQuote","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"MultiSiteCreateMasterQuote","lwcId":"lwc6"},{"type":"Integration Procedure Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"type","data":"Order","condition":"="}],"operator":"AND"}},"sendOnlyExtraPayload":true,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"useFuture":false,"preTransformBundle":null,"postTransformBundle":null,"chainable":false},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":null,"integrationProcedureKey":"MultiSite_CreateMasterOrder","inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{"recordType":"%OrderRecordType%","Pricebook2Id":"%Pricebook2Id%","PriceListName":"%PriceListName%","OpportunityId":"%OpportunityId%","Name":"%OrderName%","EffectiveDate":"%OrderStartDate%","AccountId":"%AccountId%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"MultiSiteCreateMasterOrder","level":0,"indexInParent":7,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"MultiSiteCreateMasterOrder","lwcId":"lwc7"},{"type":"DataRaptor Transform Action","propSetMap":{"wpm":false,"validationRequired":"Submit","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"type","data":"Quote","condition":"="}],"operator":"AND"}},"sendJSONPath":"response:records","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"postMessage":null,"message":{},"label":null,"inProgressMessage":null,"ignoreCache":false,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"bundle":"MultiSite - TransformMasterQuoteOrderId","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"MultiSiteGetMasterQuoteId","level":0,"indexInParent":8,"bHasAttachment":false,"bEmbed":false,"bDataRaptorTransformAction":true,"JSONPath":"MultiSiteGetMasterQuoteId","lwcId":"lwc8"},{"type":"DataRaptor Transform Action","propSetMap":{"wpm":false,"validationRequired":"Submit","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"type","data":"Order","condition":"="}],"operator":"AND"}},"sendJSONPath":"response:records","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"postMessage":null,"message":{},"label":null,"inProgressMessage":null,"ignoreCache":false,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"bundle":"MultiSite - TransformMasterQuoteOrderId","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"MultiSiteGetMasterOrderId","level":0,"indexInParent":9,"bHasAttachment":false,"bEmbed":false,"bDataRaptorTransformAction":true,"JSONPath":"MultiSiteGetMasterOrderId","lwcId":"lwc9"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"none","targetType":"Vlocity OmniScript","targetLWCParams":"c__cartType=Quote&c__parentId=%OpportunityId%&c__ContextId=%MasterQuoteOrderId%&c__recordType=%QuoteRecordType%&c__selectedTypes=%multiSiteObjectsList%","targetLWCLayout":"lightning","targetLWC":"c:CPQMultisiteConfiguratorMultiLanguage","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"type","data":"Quote","condition":"="},{"field":"CreateGroupNowQuote","data":"yes","condition":"="}],"operator":"AND"}},"replace":false,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"QuoteNavigatetoCPQMultisiteConfigurator","level":0,"indexInParent":10,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"QuoteNavigatetoCPQMultisiteConfigurator","lwcId":"lwc10"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"none","targetUrl":"/lightning/app/c__Industries_CPQ/r/%MasterQuoteOrderId%/view","targetType":"Web Page","targetLWCParams":"c__parentId=%OpportunityId%&c__recordType=%QuoteRecordType%&selectedTypes=%MultiSiteObjectsQuote:multiSiteObjects:multiSiteObjectsList%","targetLWCLayout":"lightning","targetLWC":"c:CPQMultisiteConfiguratorMultiLanguage","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"type","data":"Quote","condition":"="},{"field":"CreateGroupNowQuote","data":"no","condition":"="}],"operator":"AND"}},"replace":false,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"QuoteNavigatetoIndustriesCPQ","level":0,"indexInParent":11,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"QuoteNavigatetoIndustriesCPQ","lwcId":"lwc11"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"none","targetType":"Vlocity OmniScript","targetLWCParams":"c__cartType=Order&c__parentId=%OpportunityId%&c__ContextId=%MasterQuoteOrderId%&c__recordType=%OrderRecordType%&c__selectedTypes=%multiSiteObjectsList%","targetLWCLayout":"lightning","targetLWC":"c:CPQMultisiteConfiguratorMultiLanguage","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"type","data":"Order","condition":"="},{"field":"CreateGroupNowOrder","data":"yes","condition":"="}],"operator":"AND"}},"replace":false,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"OrderNavigatetoCPQMultisiteConfigurator","level":0,"indexInParent":12,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"OrderNavigatetoCPQMultisiteConfigurator","lwcId":"lwc12"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"none","targetUrl":"/lightning/app/c__Industries_CPQ/r/%MasterQuoteOrderId%/view","targetType":"Web Page","targetLWCParams":"c__parentId=%OpportunityId%&c__recordType=%OrderRecordType%&selectedTypes=%MultiSiteObjectsOrder:multiSiteObjects:multiSiteObjectsList%","targetLWCLayout":"lightning","targetLWC":"c:CPQMultisiteConfiguratorMultiLanguage","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"type","data":"Order","condition":"="},{"field":"CreateGroupNowOrder","data":"no","condition":"="}],"operator":"AND"}},"replace":false,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"OrderNavigatetoIndustriesCPQ","level":0,"indexInParent":13,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"OrderNavigatetoIndustriesCPQ","lwcId":"lwc13"}],"bReusable":false,"bpVersion":3,"bpType":"MultiSite","bpSubType":"QuoteOrderFlow","bpLang":"Multi-Language","bHasAttachment":false,"lwcVarMap":{"channelName":null,"memberOptionsList":null,"OpportunityId":null}};