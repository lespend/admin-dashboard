import React from 'react';
import { Box } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import GeographyChart from '../../components/GeographyChart';
import {useTheme} from '@mui/material';
import { tokens } from '../../theme';

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <Box p={2}>
            <PageTitle title='Географическая карта' subtitle='Используются тестовые данные'/>
            <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius={4}>
                <GeographyChart/>
            </Box>
        </Box>

    );
}

export default Geography;