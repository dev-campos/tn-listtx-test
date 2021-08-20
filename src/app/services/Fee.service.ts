import { Injectable } from '@angular/core';
import { SIGN_TYPE } from '@turtlenetwork/signature-adapter';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeeService {

  nodeUrl = environment.nodeUrl

  constructor() { }

  CalculateFee(tx: { senderPublicKey: string; feeAssetId: string; type: SIGN_TYPE; payment: never[]; dApp: string; }) {
    const headers = {'Content-Type': '', 'Accept': ''};
    headers['Content-Type'] = 'application/json';
    headers['Accept'] = 'application/json';
    const body = JSON.stringify(tx);
  
    return fetch(`${this.nodeUrl}/transactions/calculateFee`, {
            method: 'POST',
            headers,
            body
        })
        .then(details => details.json()).then((json) => {
            return json
        })
  }

}
