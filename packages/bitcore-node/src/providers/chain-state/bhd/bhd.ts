import { BTCStateProvider } from '../btc/btc';

export class BHDStateProvider extends BTCStateProvider {
  constructor(chain: string = 'BHD') {
    super(chain);
  }
}
