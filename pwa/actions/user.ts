import { APIToken, UserLogin, User as UserModel } from 'model';
import { APIPlatform } from './abstract';
import { SerializerInterface, UserSerializer } from 'serializers';
import { AxiosResponse } from 'axios';
import { CookieStorage, LocalStorage } from 'storage';

export class User extends APIPlatform<UserModel> {
  protected serializer: SerializerInterface<UserModel> = new UserSerializer();

  endpoint = '/users';
}

export class Auth extends User {
  endpoint = '/auth';

  login(data: UserLogin): Promise<boolean> {
    new CookieStorage().delete('token');
    return this.postRequest({ data }).then(({ data: { token } }: AxiosResponse<APIToken>) => {
      new CookieStorage().set('token', token);
      new LocalStorage().set('token', token);

      return true;
    });
  }
}
