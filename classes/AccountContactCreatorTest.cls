@isTest
public class AccountContactCreatorTest {

    @isTest
    static void testCreateAccount() {
        // Create a test Account
        String accountName = 'Test Account';
        AccountContactCreator.createAccount(accountName);

        // Query for the created Account
        Account createdAccount = [SELECT Id, Name FROM Account WHERE Name = :accountName LIMIT 1];

        // Verify that the Account was created
        System.assertEquals(accountName, createdAccount.Name);
    }

    @isTest
    static void testCreateContact() {
        // Create a test Account
        String accountName = 'Test Account';
        AccountContactCreator.createAccount(accountName);

        // Create a test Contact associated with the test Account
        String contactFirstName = 'John';
        String contactLastName = 'Doe';
        AccountContactCreator.createContact(contactFirstName, contactLastName, accountName);

        // Query for the created Contact and its associated Account
        Contact createdContact = [SELECT Id, FirstName, LastName, AccountId FROM Contact WHERE LastName = :contactLastName LIMIT 1];

        // Verify that the Contact was created and associated with the correct Account
        System.assertEquals(contactFirstName, createdContact.FirstName);
        System.assertEquals(contactLastName, createdContact.LastName);
        System.assertNotEquals(null, createdContact.AccountId);
    }
}