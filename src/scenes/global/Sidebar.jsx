import React from 'react';
import { useState } from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { Avatar } from '@mui/material'

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Дашбоард');

    const Item = ({ title, to, icon, selected, setSelected }) => (
        <MenuItem
            active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
            component={<Link to={to}/>}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );

    const CategoryTitle = ({ children, isCollapsed }) => (
        <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={isCollapsed ? {textAlign: 'center'} : { m: "15px 0 5px 20px" }}
        >
            {children}
        </Typography>
    )

    return (
        <Box
            sx={{
                '& .ps-sidebar-root': {
                    height: '100%',
                    border: 'none',
                },
                '& .ps-sidebar-container': {
                    bgcolor: colors.primary[400],
                },
                '& .ps-menu-button': {
                    padding: '5px 35px 5px 20px !important'
                },
                '& .ps-menu-button:hover': {
                    bgcolor: '#868dfb !important'
                },
                '& .ps-menu-button.ps-active': {
                    bgcolor: '#6870fa !important'
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu>
                    {/* Логотип и иконка меню */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            color: colors.grey[100],
                            margin: '10px 0 20px 0',
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography variant='h3' textTransform='uppercase'>root</Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* Аватар и информация о пользователе */}
                    {!isCollapsed && (
                        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                            <Avatar alt="Linus Torvalds" src="https://media-exp1.licdn.com/dms/image/C4E03AQEBcx1vGEPygA/profile-displayphoto-shrink_200_200/0/1654735668411?e=2147483647&v=beta&t=RAquPVLpecAGpvqO5A0lxCc29_04D6VnI1f-qAIZ1jo" sx={{ width: '100px', height: '100px' }} />
                            <Typography variant='h3' fontWeight='600' mt={2}>Линус Торвальдс</Typography>
                            <Typography variant='h5' color={colors.greenAccent[400]}>Разработчик</Typography>
                        </Box>
                    )}

                    {/* Навигация */}
                    <Box mt={2}>
                        <Item
                            title="Дашбоард"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <CategoryTitle isCollapsed={isCollapsed}>
                            Данные
                        </CategoryTitle>
                        <Item
                            title="Управление командой"
                            to="/team"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Контактная информация"
                            to="/contacts"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Счета"
                            to="/invoices"
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <CategoryTitle isCollapsed={isCollapsed}>
                            Страницы
                        </CategoryTitle>
                        <Item
                            title="Форма профиля"
                            to="/form"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Календарь"
                            to="/calendar"
                            icon={<CalendarMonthOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="FAQ"
                            to="/faq"
                            icon={<HelpOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <CategoryTitle isCollapsed={isCollapsed}>
                            Графики
                        </CategoryTitle>
                        <Item
                            title="Гистограмма"
                            to="/bar"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Круговая диаграмма"
                            to="/pie"
                            icon={<PieChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Линейный график"
                            to="/line"
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Географическая карта"
                            to="/geography"
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
}

export default Sidebar;
