import { APISingleResult } from 'model';
import { SerializerInterface } from './interface';

export class APIPlatformSerializer<T extends APISingleResult> implements SerializerInterface<T> {
  serialize(o: APISingleResult<T>, depth = 0): T {
    o.id = o['@id'].split('/')?.[2];
    return o;
  }
  serializeMany(o: ReadonlyArray<T>, depth = 0): ReadonlyArray<T> {
    return o.map((item) => this.serialize(item, depth));
  }
}
