type SerializerItem = object;

export interface SerializerInterface<T> {
  serialize(o: SerializerItem, depth?: number): T;
  serializeMany(o: ReadonlyArray<T>, depth?: number): ReadonlyArray<T>;
}
