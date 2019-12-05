import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputCacheService {

  inputs = {};
  inputCacheKey = 'input_key';
  constructor() {
    // console.log('InputCacheService getCache', this.getCache());
  }

  saveCache(inputs = {}) {
    // inputs;
    localStorage.setItem(this.inputCacheKey, JSON.stringify(inputs));
  }

  getCache() {
    // console.log('localStorage.getItem(this.inputCacheKey)', localStorage.getItem(this.inputCacheKey));
    return JSON.parse(localStorage.getItem(this.inputCacheKey) || '{}');
  }

  updateItem(key: string, value: string) {
    const cached = this.getCache();
    cached[key] = value;
    // console.log('cached', cached);
    this.saveCache(cached);
  }

  getItem(key: string) {
    // console.log('this.getCache()', this.getCache());
    const cached = this.getCache();
    // console.log(`cached[${key}]`, cached[key]);
    return cached[key];
  }
}
