import React from 'react';
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from './ProgressCircle';

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width='100%' p={2} bgcolor={colors.primary[400]}>
            <Box display='flex' justifyContent='space-between'>
                <Box>
                    {icon}
                    <Typography
                        variant='h4'
                        fontWeight='600'
                        color={colors.grey[100]}
                    >
                        {title}
                    </Typography>
                </Box>
                <ProgressCircle progress={progress}/>
            </Box>

            <Box display='flex' justifyContent='space-between' mt={2}>
                <Typography
                    variant='h5'
                    color={colors.greenAccent[500]}
                >
                    {subtitle}
                </Typography>
                <Typography
                    variant='h5'
                    fontStyle='italic'
                    color={colors.greenAccent[600]}
                >
                    {increase}
                </Typography>
            </Box>
        </Box>
    );
}

export default StatBox;
