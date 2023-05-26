import { APISingleResult, Domain } from 'model';
import { APIPlatformSerializer } from './api-platform';

export class DomainSerializer extends APIPlatformSerializer<Domain> {
  serialize(o: APISingleResult<Domain>, depth = 0): Domain {
    // if (depth > 0) {
    //     o.configurations = Promise.all()
    // }
    return o;
  }
}
