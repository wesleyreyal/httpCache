import Cookies from 'js-cookie';

interface Storage<T> {
  get(key: string): T;
  set(key: string, value: T): void;
  delete(key: string): void;
}

export class CookieStorage implements Storage<string> {
  get(key: string) {
    return Cookies.get(key) ?? '';
  }

  set(key: string, value: string): void {
    Cookies.set(key, value);
  }

  delete(key: string) {
    Cookies.remove(key);
  }
}

export class LocalStorage implements Storage<string> {
  get(key: string) {
    return localStorage.getItem(key) ?? '';
  }

  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  delete(key: string) {
    localStorage.removeItem(key);
  }
}

export class Token {
  key = 'token';
  storages: ReadonlyArray<Storage<string>> = [];

  constructor() {
    this.storages = [new CookieStorage()];
    try {
      if (localStorage) {
        this.storages = [...this.storages, new LocalStorage()];
      }
    } catch {
      return;
    }
  }

  get() {
    for (let i = 0; i < this.storages.length; i++) {
      if (this.storages[i].get(this.key)) {
        return this.storages[i].get(this.key);
      }
    }

    return '';
  }

  set(value: string) {
    for (let i = 0; i < this.storages.length; i++) {
      this.storages[i].set(this.key, value);
    }
  }

  delete() {
    for (let i = 0; i < this.storages.length; i++) {
      this.storages[i].delete(this.key);
    }
  }
}
