const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'cpPayment',

  exposes: {
    './PaymentHomeComponent': './projects/cp-payment/src/app/PaymentHome/PaymentHome.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
