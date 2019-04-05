import { BTCStateProvider } from '../btc/btc';

export class ZECStateProvider extends BTCStateProvider {
  constructor(chain: string = 'ZEC') {
    super(chain);
  }
}
