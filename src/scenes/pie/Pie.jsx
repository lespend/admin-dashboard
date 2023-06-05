import React from 'react';
import PieChart from '../../components/PieChart';
import { Box } from '@mui/material';
import PageTitle from '../../components/PageTitle';

const Pie = () => {
    return (
        <Box p={2}>
            <PageTitle title='Круговая диаграмма' subtitle='Используются тестовые данные'/>
            <Box height='75vh'>
                <PieChart />
            </Box>
        </Box>

    );
}

export default Pie;
