import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = '0.75', size = 40 }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = 360 * progress;

    return (
        <Box
            sx={{
                width: size,
                height: size,
                background: `radial-gradient(${colors.primary[400]} 45%, transparent 50%),
                            conic-gradient(${colors.blueAccent[500]} 0deg ${angle}deg, transparent ${angle}deg 360deg),
                            ${colors.blueAccent[700]}`,
                            
                borderRadius: '50%'
            }}
        >

        </Box>
    )
}

export default ProgressCircle;