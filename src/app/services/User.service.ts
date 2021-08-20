import { environment } from './../../environments/environment';
import { nodeInteraction } from '@turtlenetwork/waves-transactions';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  nodeUrl = environment.nodeUrl
  seed = 'gossip raccoon angle action expose damp extend employ cliff hurry govern total tornado wish expand';
  address = '3XmZ95XRjYp314HEnzQfYbVn1H4RVhtzaka';
  publicKey = 'Ctg75r7AkZTrQpxcT3VdmYqQAUVq3NM3CVP2Sj9mXLBU';
  hasScript = false;



  constructor(
    private router: Router
  ) { }

  checkForUser() {
    if (!this.address) {
      this.router.navigateByUrl('')      
    }
  }

  storeSeedData(seed: string, address: string, publicKey: string) {
    this.seed = seed;
    this.address = address;
    this.publicKey = publicKey;
    this.checkScript();
  }

  async checkScript() {    
    await nodeInteraction.scriptInfo(this.address, this.nodeUrl).then((info) => {
      if (info.script) {
        this.hasScript = true;
      }
    })
  }

  // wipeData() {
  //   this.seed = null;
  //   this.address = null;
  //   this.publicKey = null;
  //   this.hasScript = false;
  // }
}
