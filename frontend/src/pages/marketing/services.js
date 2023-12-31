import { Helmet } from 'react-helmet-async';

import MarketingServicesView from 'src/sections/_marketing/view/marketing-services-view';

// ----------------------------------------------------------------------

export default function MarketingServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services</title>
      </Helmet>

      <MarketingServicesView />
    </>
  );
}
