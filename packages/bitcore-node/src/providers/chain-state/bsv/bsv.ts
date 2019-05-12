import { BCHStateProvider } from '../bch/bch';
import { CSP } from '../../../types/namespaces/ChainStateProvider';

export class BSVStateProvider extends BCHStateProvider {
  constructor(chain: string = 'BCH') {
    super(chain);
  }
}
