import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { APIPlatformSerializer } from 'serializers/api-platform';
import getConfig from 'next/config';
import { RawAxiosRequestHeaders } from 'axios';
import { APIList, APIListResult, APISingleResult } from 'model';
import { SerializerInterface } from 'serializers/interface';
const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

interface EndpointInterface {
  endpoint?: string;
}

interface ConfigInterface {
  config?: AxiosRequestConfig;
}

const getHeaders = (): RawAxiosRequestHeaders => ({
  Accept: 'application/ld+json',
  'Content-Type': 'application/ld+json',
});

export abstract class API {
  endpoint = '';
  filter = {};
  pagination = {};

  constructor({
    filter = {},
    pagination = {},
  }: { filter?: Record<string, string>; pagination?: { page?: number } } = {}) {
    this.filter = filter;
    this.pagination = pagination;
  }

  getBaseUrl = (): string => '';

  request(): AxiosInstance {
    const instance = axios.create({
      baseURL: this.getBaseUrl(),
      headers: getHeaders(),
    });
    instance.interceptors.request.use((r) => {
      // const token = new Token().get();
      const token =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODQ1MTU1OTQsImV4cCI6MTY4NDUxOTE5NCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQHRlc3QuZnIifQ.FI3NNeLb3przau6LdtOaIgjmbLuRqGNoPGGgwkevDZPITlbuR9jclvIyW8VCT-DxC9pPTpRt01ZZ4t8Sv6jtQ6kVD28kuBsjT9t0qLT-FI6j19o6qaDCa3M_T0ObMYmcxsmybVUtcUNaeLdTvj4sLsj3Ud2yE1k21sfhnBMBn64-snuUdSFaIEQXEyGI9ki26UC-FDgYNzXL_FvaGzYpmKaGzVrvXlIDMe6ixXkeuWQxoPIeH44fNM4WcBRDMDVr3seNCxl5AjeCXAvYdyBtZHJDFvq3iTZvlA9D8jPvSZwgq55os5LWSJQKN80j-JmITehG0CHzHOI3ywL6eUm1RA';
      if (token) {
        r.headers['Authorization'] = `Bearer ${token}`;
      }
      return r;
    });
    instance.interceptors.response.use(
      (r) => r,
      (r) => {
        if (401 === r.response.status) {
          // new Token().remove();
          // window.location.pathname = '/login';
          return;
        }
        return Promise.reject(r);
      }
    );

    return instance;
  }

  async deleteRequest({ endpoint }: EndpointInterface = {}): Promise<AxiosResponse> {
    return this.request().delete(`${this.endpoint}${endpoint || ''}`);
  }

  async getRequest({ endpoint = '' }: EndpointInterface = {}): Promise<AxiosResponse> {
    return this.request().get(
      `${this.endpoint}${endpoint}?${
        new URLSearchParams({
          ...this.pagination,
          ...this.filter,
        }).toString() || ''
      }`
    );
  }

  async patchRequest({ data, endpoint = '' }: AxiosRequestConfig & EndpointInterface = {}): Promise<AxiosResponse> {
    return this.request().patch(`${this.endpoint}${endpoint}`, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/merge-patch+json',
      },
    });
  }

  async postRequest({
    config = {},
    data,
    endpoint = '',
  }: AxiosRequestConfig & EndpointInterface & ConfigInterface = {}): Promise<AxiosResponse> {
    return this.request().post(`${this.endpoint}${endpoint}`, data, config);
  }

  async putRequest({ data, endpoint }: AxiosRequestConfig & EndpointInterface = {}): Promise<AxiosResponse> {
    return this.request().put(`${this.endpoint}${endpoint || ''}`, JSON.stringify(data));
  }
}

export class APIPlatform<T extends APISingleResult> extends API {
  protected serializer: SerializerInterface<T> = new APIPlatformSerializer();

  getBaseUrl = (): string => serverRuntimeConfig.API_URL || publicRuntimeConfig.API_URL;

  getMany(): Promise<APIList<T>> {
    return this.getRequest()
      .then(({ data }: { data: APIListResult<T> }) => data)
      .then((data) => {
        return {
          items: this.serializer.serializeMany(data['hydra:member']),
          total: data['hydra:totalItems'],
        } as APIList<T>;
      });
  }

  /*
  getOne({ id }: APIPlatformSingleInterface) {
    return this.getRequest({ endpoint: id })
      .then(({ data: v }) => this.serializer.serialize(v))
      .catch(console.warn);
  }

  create(data: Record<string, string>) {
    return this.postRequest({ data })
      .then(({ data: v }) => this.serializer.serialize(v))
      .catch(console.warn);
  }

  update({ id }: APIPlatformSingleInterface) {
    return this.patchRequest({ endpoint: id }).then().catch(console.warn);
  }

  delete({ id }: APIPlatformSingleInterface) {
    return this.deleteRequest({ endpoint: id }).then().catch(console.warn);
  }
  */
}
