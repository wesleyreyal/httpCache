import { Domain as DomainModel } from 'model';
import { APIPlatform } from './abstract';
import { DomainSerializer, SerializerInterface } from 'serializers';

export class Domain extends APIPlatform<DomainModel> {
  protected serializer: SerializerInterface<DomainModel> = new DomainSerializer();

  endpoint = '/domains';
}
