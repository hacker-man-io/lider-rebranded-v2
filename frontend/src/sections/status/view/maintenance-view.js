import { m } from 'framer-motion';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { RouterLink } from 'src/routes/components';
import { varBounce, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function MaintenanceView() {
  return (
    <MotionContainer>
      <m.div variants={varBounce().in}>
        <Typography variant="h3" paragraph>
          Website Currently Under Maintenance
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Typography sx={{ color: 'text.secondary' }}>
          We are currently working hard on this page!
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Image
          alt="maintenance"
          src="/assets/illustrations/illustration_maintenance.svg"
          sx={{
            mx: 'auto',
            maxWidth: 320,
            my: { xs: 5, sm: 8 },
          }}
        />
      </m.div>

      <Button component={RouterLink} href="/" size="large" color="inherit" variant="contained">
        Go to Home
      </Button>
    </MotionContainer>
  );
}
