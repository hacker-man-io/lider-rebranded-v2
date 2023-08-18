import { Helmet } from 'react-helmet-async';

import EcommerceAccountPaymentView from 'src/sections/_ecommerce/view/ecommerce-account-payment-view';

// ----------------------------------------------------------------------

export default function EcommerceAccountPaymentPage() {
  return (
    <>
      <Helmet>
        <title>Account: Payment</title>
      </Helmet>

      <EcommerceAccountPaymentView />
    </>
  );
}
