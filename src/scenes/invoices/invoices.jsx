import React from 'react';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';
import { mockDataInvoices } from '../../data/mockData';
import { Box, Typography } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import { DataGrid, ruRU } from '@mui/x-data-grid';


const Invoices = () => {
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
            field: 'cost', 
            headerName: 'Цена',
            type: 'number',
            headerAlign: 'left',
            align: 'left',
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                    {params.row.cost}
                </Typography>
            )
        },
        { 
            field: 'phone', 
            headerName: 'Телефон',
            flex: 1,
        },
        { 
            field: 'date', 
            headerName: 'Дата',
            flex: 1,
        },
    ]

    return (
        <Box p={2}>
            <PageTitle title='Выставленные счета' subtitle='Информация о счетах'/>
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
                    '& .MuiCheckbox-root': {
                        color: `${colors.grey[100]} !important`,
                    }                  
                }}
            >
                <DataGrid
                    rows={mockDataInvoices}
                    columns={columns}
                    localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </Box>
    );
}

export default Invoices;
