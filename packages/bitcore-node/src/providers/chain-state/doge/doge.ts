import { BTCStateProvider } from '../btc/btc';

export class DogeStateProvider extends BTCStateProvider {
  constructor(chain: string = 'DOGE') {
    super(chain);
  }
}
