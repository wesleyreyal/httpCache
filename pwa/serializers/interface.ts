type SerializerItem = object;

export interface SerializerInterface<T> {
  serialize(o: SerializerItem): T;
  serializeMany(o: ReadonlyArray<T>): ReadonlyArray<T>;
}
