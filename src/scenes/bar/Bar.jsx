import { Box } from '@mui/material';
import React from 'react';
import BarChart from '../../components/BarChart';
import PageTitle from '../../components/PageTitle';

const Bar = () => {
    return (
        <Box height='75vh' p={2}>
            <PageTitle title='Гистограмма' subtitle='График с тестовыми данными' />
            <BarChart/>
        </Box>
    );
}

export default Bar;
