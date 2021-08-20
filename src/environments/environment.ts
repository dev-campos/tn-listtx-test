// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  assetName: 'TN',
  nodeUrl: 'https://api.secure-node.uat.polarity.exchange',
  explorerUrl: 'https://explorer.turtlenetwork.eu/testnet',
  assetId: 'TN',
  code: 'l',
  dapp: {
    address: '3Xe4d56frFHfjExfRo2JoSYdNJkPnCpK8Wp',
    function: 'tellme',
    paymentAmount: 10000
  },
  gateway: {
    url: 'https://gateway-service.polarity.exchange',
    otherNetwork: 'Garlicoin',
    ticker: 'GRLC',
    regex: '^[MG][a-km-zA-HJ-NP-Z1-9]{26,33}$'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
