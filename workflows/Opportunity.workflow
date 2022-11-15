<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <fieldUpdates>
        <fullName>Set_Default_Opportunity_Name</fullName>
        <field>Name</field>
        <formula>Account.Name &amp; &quot;: &quot; &amp; Name</formula>
        <name>Set Default Opportunity Name</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <rules>
        <fullName>Assign Credit Check for New Customer</fullName>
        <active>false</active>
        <criteriaItems>
            <field>Opportunity.Amount</field>
            <operation>greaterThan</operation>
            <value>30000</value>
        </criteriaItems>
        <criteriaItems>
            <field>Opportunity.IsClosed</field>
            <operation>equals</operation>
            <value>False</value>
        </criteriaItems>
        <criteriaItems>
            <field>Opportunity.New_Customer__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <description>Assign the Accounts Receivable (AR) department a task to check the credit of a potential customer 15 days before the opportunity close date if the amount is greater than $50,000.</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
        <workflowTimeTriggers>
            <actions>
                <name>Run_a_credit_check</name>
                <type>Task</type>
            </actions>
            <offsetFromField>Opportunity.CloseDate</offsetFromField>
            <timeLength>-15</timeLength>
            <workflowTimeTriggerUnit>Days</workflowTimeTriggerUnit>
        </workflowTimeTriggers>
    </rules>
    <rules>
        <fullName>Set Default Opportunity Name</fullName>
        <actions>
            <name>Set_Default_Opportunity_Name</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Account.Name</field>
            <operation>notContain</operation>
        </criteriaItems>
        <description>Enforce opportunity naming convention.</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <tasks>
        <fullName>Run_a_credit_check</fullName>
        <assignedTo>sushmitha.copado@dev2.com</assignedTo>
        <assignedToType>user</assignedToType>
        <dueDateOffset>15</dueDateOffset>
        <notifyAssignee>false</notifyAssignee>
        <offsetFromField>Opportunity.CloseDate</offsetFromField>
        <priority>Normal</priority>
        <protected>false</protected>
        <status>Not Started</status>
        <subject>Run a credit check</subject>
    </tasks>
</Workflow>