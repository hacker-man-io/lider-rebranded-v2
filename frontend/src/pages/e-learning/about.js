import { Helmet } from 'react-helmet-async';

import ElearningAboutView from 'src/sections/_elearning/view/elearning-about-view';

// ----------------------------------------------------------------------

export default function ElearningAboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>

      <ElearningAboutView />
    </>
  );
}
