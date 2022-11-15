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
</Workflow>