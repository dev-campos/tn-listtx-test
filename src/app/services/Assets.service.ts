import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Asset } from '@turtlenetwork/data-entities';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  nodeUrl = environment.nodeUrl

  constructor() { }

  async getAsset(assetId: string) {

    const fetchUrl = `${this.nodeUrl}/assets/details/${assetId}`;
    const headers = {'Content-Type': '', 'Accept': ''};
    headers['Content-Type'] = 'application/json';
    headers['Accept'] = 'application/json';

    const response = await fetch(fetchUrl, { method: 'GET', headers });
    const asset = await response.json();    

    return new Asset({
      ticker: asset.name,
      id: asset.assetId,
      name: asset.name,
      precision: asset.decimals,
      description: asset.description,
      height: asset.issueHeight,
      timestamp: new Date(asset.issueTimestamp),
      sender: asset.issuer,
      quantity: asset.quantity,
      reissuable: asset.reissuable,
      hasScript: asset.scripted,
      minSponsoredFee: asset.minSponsoredFee || false
    })
  }
}
