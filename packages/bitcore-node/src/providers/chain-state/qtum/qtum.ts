import { BTCStateProvider } from '../btc/btc';

export class QTUMStateProvider extends BTCStateProvider {
  constructor(chain: string = 'QTUM') {
    super(chain);
  }
}
