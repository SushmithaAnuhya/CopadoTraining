let definition = 
                {"GlobalKey__c":"Order Story LWC/Vlocity/2/1580726197883","dataSource":{"type":null},"enableLwc":true,"filter":{"['objAPIName']":"Order"},"sessionVars":[],"states":[{"blankStateCheck":false,"collapse":true,"conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"},{"field":"['onGoing']","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}]},"definedActions":{"actions":[]},"disableAddCondition":false,"fields":[{"collapse":true,"editing":false,"fieldType":"standard","label":"Status","name":"['subtitle']","type":"string"},{"collapse":true,"editing":false,"fieldType":"standard","label":"Total Amount","name":"['highlight']","type":"string"},{"collapse":true,"displayLabel":"['formatedLastActivityDate']","editing":false,"fieldType":"standard","group":"Custom Properties","label":"Activity Date","name":"['formatedLastActivityDate']","type":"string"}],"filter":"$scope.data.status === 'active' && $scope.obj['onGoing'] == true","flyout":{"lwc":{"DeveloperName":"storyEditStateFlyout","Id":"0RbHn000001Eh12CAY","MasterLabel":"storyEditStateFlyout","name":"storyEditStateFlyout"}},"flyoutAttributes":[{"name":"parent","val":"$scope.obj"}],"lwc":{"DeveloperName":"storyOngoingState","Id":"0RbHn000001Eh10CAY","MasterLabel":"storyOngoingState","name":"storyOngoingState"},"name":"Order Ongoing","sObjectType":"Order","templateUrl":"story-card"},{"blankStateCheck":false,"collapse":true,"conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"},{"field":"['onGoing']","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}]},"definedActions":{"actions":[]},"disableAddCondition":false,"fields":[{"collapse":true,"editing":false,"fieldType":"standard","label":"Status","name":"['subtitle']","type":"string"},{"collapse":true,"editing":false,"fieldType":"standard","label":"Total Amount","name":"['highlight']","type":"string"},{"collapse":true,"displayLabel":"['formatedLastActivityDate']","editing":false,"fieldType":"standard","group":"Custom Properties","label":"Activity Date","name":"['formatedLastActivityDate']","type":"string"}],"filter":"$scope.data.status === 'active' && $scope.obj['onGoing'] == false","flyout":{"lwc":{"DeveloperName":"storyEditStateFlyout","Id":"0RbHn000001Eh0zCAI","MasterLabel":"storyEditStateFlyout","name":"storyEditStateFlyout"}},"flyoutAttributes":[{"name":"parent","val":"$scope.obj"}],"lwc":{"DeveloperName":"storyNormalState","Id":"0RbHn000001Eh11CAI","MasterLabel":"storyNormalState","name":"storyNormalState"},"name":"Order","sObjectType":"Order","templateUrl":"story-card"}],"title":"Order"}; 
            export default definition