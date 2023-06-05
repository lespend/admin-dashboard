import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';

const PageTitle = ({ title, subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
        <Box>
            <Typography
                variant='h2' 
                color={colors.grey[100]} 
                fontWeight={600}
                textTransform='uppercase'
            >
                {title}
            </Typography>
            <Typography variant='h5' mt={1} color={colors.greenAccent[400]}>{subtitle}</Typography>
        </Box>
    );
}

export default PageTitle;
