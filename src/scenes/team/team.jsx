import React from 'react';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';
import { mockDataTeam } from '../../data/mockData';
import { Box, Typography } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import { DataGrid, ruRU } from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { 
            field: 'id', 
            headerName: 'ID' 
        },
        { 
            field: 'name', 
            headerName: 'Имя',
            flex: 1,
            cellClassName: 'name-column-cell'
        },
        { 
            field: 'email', 
            headerName: 'Почта',
            flex: 1,

        },
        { 
            field: 'age', 
            headerName: 'Возраст',
            type: 'number',
            headerAlign: 'left',
            align: 'left',
        },
        { 
            field: 'phone', 
            headerName: 'Телефон',
            flex: 1,
        },
        { 
            field: 'access', 
            headerName: 'Доступ',
            flex: 1,
            renderCell: ({ row: { access } }) => (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: '5px',
                        borderRadius: '5px',
                        width: '60%',
                        m: '0 auto',
                        bgcolor: access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[800],
                    }}
                >
                    {access === 'admin' && <AdminPanelSettingsOutlinedIcon/>}
                    {access === 'manager' && <SecurityOutlinedIcon/>}
                    {access === 'user' && <LockOpenOutlinedIcon/>}
                    <Typography variant='h6' color={colors.grey[100]} ml='5px'>{access}</Typography>
                </Box>
            ),
        },
    ]

    return (
        <Box p={2}>
            <PageTitle title='Команда' subtitle='Управление составом команды'/>
            <Box 
                mt={6}
                height='75vh'
                sx={{
                    '& .MuiDataGrid-root .MuiDataGrid-cell': {
                        border: 'none',
                    },
                    '& .MuiDataGrid-root': {
                        border: 'none',
                    },
                    '& .MuiDataGrid-columnHeader': {
                        bgcolor: colors.blueAccent[700],
                    },
                    '& .MuiDataGrid-row:nth-child(2n)': {
                        bgcolor: colors.primary[400],
                    },
                    '& .name-column-cell': {
                        color: colors.greenAccent[400],
                    },
                    '& .MuiDataGrid-footerContainer': {
                        bgcolor: colors.blueAccent[700],                        
                    },                    
                }}
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                    localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                />
            </Box>
        </Box>
    );
}

export default Team;
