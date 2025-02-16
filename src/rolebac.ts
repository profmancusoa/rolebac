import { load } from 'js-yaml';

//interface  for YAML validation
// resource1:
//   action1:
//     - role1
//     - role2
//   action2:
//     - role1
//     - role3
interface YamlRules {
    [resource: string]: {
        [action: string]: string[];
    };
}

export class Rolebac {
    private static instance: Rolebac | null = null;
    private rules: YamlRules | null = null;

    constructor(rules: string) {
        if (!Rolebac.instance) {
            this.loadRules(rules);
            Rolebac.instance = this;
        }
        return Rolebac.instance;
    }

    // load and validate YAML rules file
    private loadRules(yamlRules: string): void {
        try {
            const rules = load(yamlRules);

            //validate YAML file and check it matches the YamlRules interface
            if (!this.validateYml(rules))
                throw new Error(`Rolebac: Invalid YAML format".`);

            this.rules = rules as YamlRules;
            console.log('Rolebac: Rules loaded successfully.');
            
        } catch (error) {
            throw new Error(`Rolebac: Error loading YAML rules - ${error}`);
        }
    }

    // Metodo per validare la struttura del file YAML
    private validateYml(obj: any): obj is YamlRules {
        if (typeof obj !== 'object' || obj === null)
            throw new Error('Rolebac: YAML rules file format is invalid.');

        for (const [resource, actions] of Object.entries(obj)) {
            if (typeof actions !== 'object' || actions === null) 
                throw new Error(`Rolebac: Resource "${resource}" has an invalid format.`);

            for (const [action, roles] of Object.entries(actions)) {
                if (!Array.isArray(roles) || !roles.every(role => typeof role === 'string'))
                    throw new Error(`Rolebac: Action "${action}" in resource "${resource}" must be an array of strings.`);
            }
        }

        return true;
    }

    // Check if a role has grant to perform an action on a resource
    public hasGrant(role: string, action: string, resource: string): boolean {
        if (!this.rules) 
            throw new Error('Rolebac: Rules not loaded.');

        return this.rules[resource]?.[action]?.includes(role) || false;
    }
}
