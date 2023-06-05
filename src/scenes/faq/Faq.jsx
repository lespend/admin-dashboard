import React from 'react';
import { useTheme, Box } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { tokens } from '../../theme';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
        <Box p={2}>
            <PageTitle title='FAQ' subtitle='Ответы на частозадаваемые вопросы' />
            {/* Аккардеон */}
            <Box mt={4}>
                <Accordion 
                    sx={{
                        bgcolor: colors.primary[400],
                    }}
                    defaultExpanded
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography
                            variant='h4'
                            color={colors.blueAccent[300]}
                        >
                            Как добавить нового пользователя?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color={colors.grey[100]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{
                    bgcolor: colors.primary[400],
                    
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography
                            variant='h4'
                            color={colors.blueAccent[300]}
                        >
                            Где посмотреть список сотрудников?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color={colors.grey[100]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{
                    bgcolor: colors.primary[400],
                    
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography
                            variant='h4'
                            color={colors.blueAccent[300]}
                        >
                            Можно ли настроить графики?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color={colors.grey[100]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{
                    bgcolor: colors.primary[400],
                    
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography
                            variant='h4'
                            color={colors.blueAccent[300]}
                        >
                            Как изменить поменять тему на сайте?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color={colors.grey[100]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    );
}

export default Faq;
