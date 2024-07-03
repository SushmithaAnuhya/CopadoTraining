public class CreateAccountContactOpportunity {
    public static void createAccountContactOpportunity(String accountName, String contactFirstName, String contactLastName, String opportunityName) {
        // Create an Account
        Account newAccount = new Account();
        newAccount.Name = accountName;
        insert newAccount;
        
        // Create a Contact related to the Account
        Contact newContact = new Contact();
        newContact.FirstName = contactFirstName;
        newContact.LastName = contactLastName;
        newContact.AccountId = newAccount.Id;
        insert newContact;
        
        // Create an Opportunity related to the Account
        Opportunity newOpportunity = new Opportunity();
        newOpportunity.Name = opportunityName;
        newOpportunity.AccountId = newAccount.Id;
        insert newOpportunity;
    }
}