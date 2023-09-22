public class AccountContactCreator {

    // Method to create a new Account
    public static void createAccount(String accountName) {
        Account newAccount = new Account();
        newAccount.Name = accountName;
        insert newAccount;
    }

    // Method to create a new Contact and associate it with an existing Account
    public static void createContact(String contactFirstName, String contactLastName, String accountName) {
        // First, check if the Account already exists
        Account existingAccount = [SELECT Id FROM Account WHERE Name = :accountName LIMIT 1];
        
        if (existingAccount != null) {
            Contact newContact = new Contact();
            newContact.FirstName = contactFirstName;
            newContact.LastName = contactLastName;
            newContact.AccountId = existingAccount.Id;
            insert newContact;
            System.debug('Account exist with the name: ' + accountName); 
        } else {
            // Handle the case where the specified Account does not exist
            System.debug('Account does not exist with the name: ' + accountName);
        }
    }
}