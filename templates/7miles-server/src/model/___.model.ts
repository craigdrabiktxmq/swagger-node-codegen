import * from './models'
/**
 * This file is automatically generated from swagger.  It is safe to replace an existing file with this one.
 */
{{#ifSwaggerType model 'object' this}}
interface {{model_name}}Model {
  {{#each model.properties}}
  public {{@key}}?: {{getType this ../swagger/components/schemas}}
  {{/each}}
}
{{/ifSwaggerType}}

//TODO:  Handle arrays?
