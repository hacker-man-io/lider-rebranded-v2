import { Helmet } from 'react-helmet-async';

import EcommerceProductsView from 'src/sections/_ecommerce/view/ecommerce-products-view';

// ----------------------------------------------------------------------

export default function EcommerceProductsPage() {
  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>

      <EcommerceProductsView />
    </>
  );
}
