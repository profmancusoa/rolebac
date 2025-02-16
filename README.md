# rolebac

Simple yet effetive RBAC (Role Based Access Control) system for Javascript projects. It does not depend on any Framework or any library.

# How to use Rolebac

## The rules file

Define the permissions of a role to perform a specific action on a given resource

```yml
---
resource1:
  action1:
    - role1
    - role2
  action2:
    - role1
    - role3

resource2:
  action1:
    - role4
  action2:
    - role1
    - role2
    - role3
```

## Check for grant

```ts
import { Rolebac } from "rolebac";

const ymlRulesValid = readFileSync("rules.yml").toString();
const rbac = new Rolebac(ymlRulesValid);

rbac.hasGrant("role2", "action1", "resource1"); //true

rbac.hasGrant("role4", "action1", "resource2"); //true

rbac.hasGrant("role2", "action1", "resource2"); //false
```
