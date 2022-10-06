import React from 'react';
import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';
import Image from "next/image";

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return (
    <Box>
      <Image
        src="/favicon.ico"
        alt="Company Logo"
        width={40}
        height={40}
      />
    </Box>
    )
}
