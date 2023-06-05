import React from 'react';
import PageTitle from '../../components/PageTitle';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { Grid } from '@mui/material';


const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box p={2}>
            <Box display='flex' justifyContent='space-between' alignItems='end'>
                <PageTitle title='Дашбоард' subtitle='Добро пожаловать в панель управления!' />
                <Button
                    sx={{
                        bgcolor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: '14px',
                        fontWeight: 600,
                        padding: '8px 20px'
                    }}
                >
                    <DownloadOutlinedIcon sx={{ mr: '10px' }} />
                    Скачать отчеты
                </Button>
            </Box>

            {/* Сетка элементов */}
            <Grid container spacing='20px' mt='10px'>
                {/* Строка 1 */}
                <Grid item lg={3} md={6} xs={12}>
                    <StatBox title='12,361' subtitle='Писем отправлено' icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />} progress='0.65' increase='+14%' />
                </Grid>
                <Grid item lg={3} md={6} xs={12}>
                    <StatBox title='563,123' subtitle='Совершено продаж' icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />} progress='0.25' increase='+25%' />
                </Grid>
                <Grid item lg={3} md={6} xs={12}>
                    <StatBox title='72,121' subtitle='Новых клиентов' icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />} progress='0.85' increase='+2%' />
                </Grid>
                <Grid item lg={3} md={6} xs={12}>
                    <StatBox title='1,292,895' subtitle='Получено трафика' icon={<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />} progress='0.33' increase='+64%' />
                </Grid>

                {/* Строка 2 */}
                <Grid item lg={9} xs={12}>
                    <Box minHeight='250px' bgcolor={colors.primary[400]} p='20px'>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Box>
                                <Typography variant='h5'>
                                    Полученный доход
                                </Typography>
                                <Typography variant='h2' color={colors.greenAccent[500]}>
                                    ₽ 59,342,321
                                </Typography>
                            </Box>
                            <IconButton size='large'>
                                <DownloadOutlinedIcon sx={{ color: colors.greenAccent[500] }} />
                            </IconButton>
                        </Box>
                        <Box height='220px'>
                            <LineChart/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={3} xs={12} md={12} maxHeight='340px'>
                    <Box height='100%' overflow='auto'>
                        <Typography variant='h5' p='15px' bgcolor={colors.primary[400]}>Совершенные сделки</Typography>
                        <Box>
                            {mockTransactions.map((transaction) => (
                                <Box key={`${transaction.txId}-${transaction.user}`} p='15px' display='flex' justifyContent='space-between' alignItems='center' mt={1} bgcolor={colors.primary[400]}>
                                    <Box>
                                        <Typography variant='h4' color={colors.greenAccent[500]}>{transaction.txId}</Typography>
                                        <Typography variant='h5' color={colors.grey[100]}>{transaction.user}</Typography>
                                    </Box>
                                    <Typography variant='h5' color={colors.grey[100]}>{transaction.date}</Typography>
                                    <Typography 
                                        p={1} 
                                        variant='h5'
                                        color={colors.grey[100]}
                                        sx={{
                                            bgcolor: colors.greenAccent[500],
                                            borderRadius: '5px',
                                        }}
                                    >{transaction.cost} RUB</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Grid>

                {/* Строка 3 */}
                <Grid item xs={12} lg={4}>
                    <Box p='15px' bgcolor={colors.primary[400]} height='100%'>
                        <Typography variant='h5'>
                            Цели
                        </Typography>
                        <Box display='flex' flexDirection='column' alignItems='center' mt={1} justifyContent='center' height='80%'>
                            <ProgressCircle progress='0.55' size={100} />
                            <Typography variant='h5' color={colors.greenAccent[500]} mt={3}>
                                заработать 100,000,000 ₽
                            </Typography>
                            <Typography variant='h5' color={colors.grey[100]} textAlign='center'>
                                Для нас очень важно ставить цели
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Box p='15px' bgcolor={colors.primary[400]} height='100%'>
                        <Typography variant='h5'>
                            Продажи
                        </Typography>
                        <Box height='200px'>
                            <BarChart/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Box p='15px' bgcolor={colors.primary[400]} height='100%'>
                        <Typography variant='h5'>
                            Географическая карта
                        </Typography>
                        <Box height='200px'>
                            <GeographyChart isDashboard/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Dashboard;
