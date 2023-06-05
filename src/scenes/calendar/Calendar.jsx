import React from 'react';
import { useState } from 'react';
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import PageTitle from '../../components/PageTitle'
import { tokens } from '../../theme';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction'


const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([])

    const handleDateClick = (selected) => {
        const title = prompt('Пожалуйста введите новый заголовок для вашего события')
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            })
        }
    }

    const handleEventClick = (selected) => {
        if (
            window.confirm('Вы хотите удалить событие?')
        ) {
            selected.event.remove()
        }
    }

    return (
        <Box p={2}>
            <PageTitle title='Календарь' subtitle='Планируйте свои задачи и оставайтесь продуктивны' />
            <Box display='flex' justifyContent='space-between' mt={4}>
                {/* События */}
                <Box
                    flex='1 1 20%'
                    bgcolor={colors.primary[400]}
                    p={2}
                    borderRadius='4px'
                >
                    <Typography variant='h5'>
                        События
                    </Typography>
                    <List mt={2}>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    bgcolor: colors.greenAccent[500],
                                    marginTop: '10px',
                                    borderRadius: '4px',
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                                locale: 'ru'
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* Календарь */}
                <Box
                    flex='1 1 100%'
                    bgcolor={colors.primary[400]}
                    p={1}
                    borderRadius='4px'
                >
                    <FullCalendar
                        locale='ru'
                        height='75vh'
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        ]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                        }}
                        buttonText={{
                            today: 'сегодня',
                            month: 'месяц',
                            week: 'неделя',
                            day: 'день',
                            list: 'список'
                        }}
                        initialView='dayGridMonth'
                        editable
                        selectable
                        selectMirror
                        dayMaxEvents
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={setCurrentEvents}
                        initialEvents={[
                            { id: '1234', title: 'Нанять нового разработчика', date: '2023-06-12' },
                            { id: '1235', title: 'Выдать премию сотрудникам', date: '2023-06-15' },
                            { id: '1236', title: 'Полить цветы в офисе', date: '2023-06-01' },
                            { id: '1237', title: 'Поздравить детей с праздником', date: '2023-06-01' },
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Calendar;
