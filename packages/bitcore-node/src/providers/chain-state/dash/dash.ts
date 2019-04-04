import { BTCStateProvider } from '../btc/btc';

export class DashStateProvider extends BTCStateProvider {
  constructor(chain: string = 'DASH') {
    super(chain);
  }
}
