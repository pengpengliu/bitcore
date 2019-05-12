import { BCHStateProvider } from '../bch/bch';

export class BSVStateProvider extends BCHStateProvider {
  constructor(chain: string = 'BCH') {
    super(chain);
  }
}
