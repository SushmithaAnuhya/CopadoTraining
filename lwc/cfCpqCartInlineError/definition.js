let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"[\n    {\n        \"actions\": {\n            \"DETAILS\": {\n                \"client\": {\n                    \"params\": {}\n                },\n                \"remote\": {\n                    \"params\": {\n                        \"cartId\": \"801Hu0000056ZIOAAI\",\n                        \"id\": \"802Hu00000GFKPKAAA\",\n                        \"methodName\": \"getCartsItemsById\"\n                    }\n                },\n                \"rest\": {\n                    \"link\": \"/services/apexrest/vlocity_cmt/v2/cpq/carts/801Hu0000056ZIOAAI/items/802Hu00000GFKPKAAA?cartId=801Hu0000056ZIOAAI&id=802Hu00000GFKPKAAA\",\n                    \"method\": \"GET\",\n                    \"params\": {}\n                }\n            }\n        },\n        \"message\": \"Required attribute missing for Broadband.\",\n        \"severity\": \"ERROR\",\n        \"code\": \"204\",\n        \"bundleId\": \"802Hu00000GFKPKAAA\",\n        \"messageId\": \"802Hu00000GFKPKAAA|01tHu00000SV25mAAM\"\n    },\n{\n        \"actions\": {\n            \"DETAILS\": {\n                \"client\": {\n                    \"params\": {}\n                },\n                \"remote\": {\n                    \"params\": {\n                        \"cartId\": \"801Hu0000056ZIOAAI\",\n                        \"id\": \"802Hu00000GFKPKAAA\",\n                        \"methodName\": \"getCartsItemsById\"\n                    }\n                },\n                \"rest\": {\n                    \"link\": \"/services/apexrest/vlocity_cmt/v2/cpq/carts/801Hu0000056ZIOAAI/items/802Hu00000GFKPKAAA?cartId=801Hu0000056ZIOAAI&id=802Hu00000GFKPKAAA\",\n                    \"method\": \"GET\",\n                    \"params\": {}\n                }\n            }\n        },\n        \"message\": \"Warning Required attribute missing for Broadband.\",\n        \"severity\": \"WARN\",\n        \"code\": \"204\",\n        \"bundleId\": \"802Hu00000GFKPKAAA\",\n        \"messageId\": \"802Hu00000GFKPKAAA|01tHu00000SV25mAAM|1\"\n    }\n]","dsDelay":0,"resultVar":""}},"enableLwc":true,"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqCartInlineError_1_Vlocity","Id":"0RbHu000001I608CAC","ManageableState":"unmanaged","MasterLabel":"cfCpqCartInlineError_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableMode":"Multi","states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-3","name":"Text","property":{"card":"{card}","mergeField":"%3Cul%3E%0A%3Cli%3E%0A%3Cdiv%20class=%22slds-text-align_left%22%3E%7Bmessage%7D%7BstatusMessage%7D%3C/div%3E%0A%3C/li%3E%0A%3C/ul%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq_inline-default__color ","container":{"class":"cpq_inline-default__color"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"isopen":true,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq_inline-default__color ","container":{"class":"cpq_inline-default__color"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"conditionString":"severity == ERROR","conditions":{"group":[{"field":"severity","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"ERROR"}],"id":"state-condition-object","isParent":true},"draggable":true,"isSetForDesignTime":false,"isopen":true,"key":1,"label":"Error Message","name":"Error Message","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq_inline-error__color ","container":{"class":"cpq_inline-error__color"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"conditionString":"severity == WARN","conditions":{"group":[{"field":"severity","hasMergeField":false,"id":"state-new-condition-9","operator":"==","type":"custom","value":"WARN"}],"id":"state-condition-object","isParent":true},"draggable":true,"isSetForDesignTime":false,"isopen":true,"key":2,"label":"Warning Message","name":"Warning Message","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq_inline-warning__color ","container":{"class":"cpq_inline-warning__color"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqCartInlineError","uniqueKey":"","Id":"a3gHu000001rKz4QAS","vlocity_cmt__GlobalKey__c":"cpqCartInlineError/Vlocity/1/1621839326022"};
  export default definition