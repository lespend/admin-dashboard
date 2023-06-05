import React from 'react';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';
import { mockDataContacts } from '../../data/mockData';
import { Box, Typography } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import { DataGrid, ruRU, GridToolbar } from '@mui/x-data-grid';

const Contacts = () => {
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
            field: 'address', 
            headerName: 'Адрес',
            flex: 1,
        },
        { 
            field: 'city', 
            headerName: 'Город',
            flex: 1,
        },
        { 
            field: 'zipCode', 
            headerName: 'Почтовый номер',
            flex: 1,
        },
    ]

    return (
        <Box p={2}>
            <PageTitle title='Контактная информация' subtitle='Список контактов всех участников команды'/>
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
                    '& .MuiDataGrid-toolbarContainer .MuiButtonBase-root': {
                        color: colors.grey[100],
                    }
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                    slots={{ toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
}

export default Contacts;
