@isTest
private class CreateAccountContactOpportunityTest {
    @isTest
    static void testCreateAccountContactOpportunity() {
        // Define test data
        String accountName = 'Test Account';
        String contactFirstName = 'John';
        String contactLastName = 'Doe';
        String opportunityName = 'Test Opportunity';
        
        // Call the method to create Account, Contact, and Opportunity
        Test.startTest();
        CreateAccountContactOpportunity.createAccountContactOpportunity(accountName, contactFirstName, contactLastName, opportunityName);
        Test.stopTest();
        
        // Verify that the records were created
        Account testAccount = [SELECT Id, Name FROM Account WHERE Name = :accountName LIMIT 1];
        Contact testContact = [SELECT Id, FirstName, LastName, AccountId FROM Contact WHERE AccountId = :testAccount.Id LIMIT 1];
        Opportunity testOpportunity = [SELECT Id, Name, AccountId FROM Opportunity WHERE AccountId = :testAccount.Id LIMIT 1];
        
        System.assertNotEquals(null, testAccount, 'Account not created');
        System.assertNotEquals(null, testContact, 'Contact not created');
        System.assertNotEquals(null, testOpportunity, 'Opportunity not created');
        System.assertEquals(accountName, testAccount.Name, 'Account name not as expected');
        System.assertEquals(contactFirstName, testContact.FirstName, 'Contact first name not as expected');
        System.assertEquals(contactLastName, testContact.LastName, 'Contact last name not as expected');
        System.assertEquals(opportunityName, testOpportunity.Name, 'Opportunity name not as expected');
    }
}