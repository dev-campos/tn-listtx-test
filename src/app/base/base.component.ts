import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserService } from './../services/User.service';
import { Adapter, SeedAdapter, SIGN_TYPE } from '@turtlenetwork/signature-adapter';
import { broadcast } from '@turtlenetwork/waves-transactions';
import BigNumber from '@waves/bignumber';
import { Asset, Money } from '@waves/data-entities';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  dapp = environment.dapp;
  nodeUrl = environment.nodeUrl;
  assetId = environment.assetId;
  assetName = environment.assetName;
  adapter;
  asset: Asset = new Asset({
    ticker: 'TN',
    id: 'TN',
    name: 'TurtleNetwork',
    precision: 8,
    description: '',
    height: 0,
    hasScript: false,
    timestamp: new Date('2016-04-11T21:00:00.000Z'),
    minSponsoredFee: new BigNumber(0),
    sender: '',
    quantity: 10000000000000000,
    reissuable: false
  });
  payment!: [] | [Money];
  fee!: Money;

  constructor(
    private userService: UserService
  ) { 
    Adapter.initOptions({ networkCode: environment.code.charCodeAt(0) });
    this.adapter = new SeedAdapter(this.userService.seed);
    
    
  }

  ngOnInit() {
  }

  async play() {
    const paymentBase = new Money(new BigNumber(this.dapp.paymentAmount), this.asset)
    this.payment = [paymentBase]
    this.fee = new Money(new BigNumber(10000000), this.asset)
    const tx = {
      sender: this.userService.address,
      timestamp: Date.now(),
      fee: this.fee,
      type: SIGN_TYPE.SCRIPT_INVOCATION,
      version: 1,
      call: {
          function: this.dapp.function,
          args: [{
            "type": "list",
            "value": [
              {
                "type": "string",
                "value": "alpha"
              },
              {
                "type": "string",
                "value": "beta"
              },
              {
                "type": "string",
                "value": "gamma"
              }
            ]
          }]
      },
      dApp: this.dapp.address,
      payment: this.payment
    };

    const signable = this.adapter.makeSignable({
       type: SIGN_TYPE.SCRIPT_INVOCATION,
       data: tx
    });

    signable.getDataForApi().then((data: any) => {
      console.log(data);
      broadcast(data, this.nodeUrl).then((resp: any) => {
        console.log(resp);
      })
    })
  }

}
