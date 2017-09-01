# automation-qa-helper
In this repository We'll have a helper functions and scripts to help us in the QA Automation tasks

CREATE A NEW NAMESPACE QA ENVIRONMENT

1. Download this repository
2. Go to the cmd and access to the clone folder 'cd Documents\Repositories\automation-qa-helper'
3. Execute 'npm install' to install node modules
4. Execute 'node createNamespaceScriptQA.js <namespace_name> <prganization_name>'
  
  * <namespace_name> : The name of the namespace you want to create
  * <organization_name> : The organization name. Example KMS
  
 
SOME POSSIBLE RESULTS

- If the namespace already exist
```{r, engine='bash', count_lines}
--- Begin running script to create a namespace kms_qa_test ---
namespace kms_qa_test already exist
----- END ----- The Namespace already exist
```
- If the namespace was created
```{r, engine='bash', count_lines}
--- Begin running script to create a namespace stefany_test ---
Created stefany_test namespace
----- END ----- The new namespace can be request in the API
```

NOTE: Remember do not create too many namespaces in QA.
The next update is the script to delete the namespace and the files related to it 


CREATE A NEW NAMESPACE USING THE NEW AUTHP AUTHENTICATION

1. Download this repository
2. Go to the cmd and access to the clone folder 'cd Documents\Repositories\automation-qa-helper'
3. Execute 'npm install' to install node modules
5. Set user credentials and domain in the .env file (By default the values are to create namespaces in QA)
4. Execute 'node create-namespace.js <namespace_name>'
  
  * <namespace_name> : The name of the namespace you want to create
  
  DELETE NAMESPACE USING THE NEW AUTHP AUTHENTICATION

1. Download this repository
2. Go to the cmd and access to the clone folder 'cd Documents\Repositories\automation-qa-helper'
3. Execute 'npm install' to install node modules
5. Set user credentials and domain in the .env file (By default the values are to create namespaces in QA)
4. Execute 'node delete-namespace.js <namespace_name>'
  
  * <namespace_name> : The name of the namespace you want to create
  
