import { APISingleResult } from 'model';
import { SerializerInterface } from './interface';

export class APIPlatformSerializer<T extends APISingleResult> implements SerializerInterface<T> {
  serialize(o: APISingleResult<T>): T {
    o.id = o['@id'].split('/')?.[2];
    return o;
  }
  serializeMany(o: ReadonlyArray<T>): ReadonlyArray<T> {
    return o.map(this.serialize);
  }
}
