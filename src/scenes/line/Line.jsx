import React from 'react';
import LineChart from '../../components/LineChart';
import { Box } from '@mui/material';
import PageTitle from '../../components/PageTitle';

const Line = () => {
    return (
        <Box p={2}>
            <PageTitle title='Линейный график' subtitle='Используются тестовые данные'/>
            <Box height='75vh'>
                <LineChart />
            </Box>
        </Box>

    );
}

export default Line;