import { ResponsiveLine } from '@nivo/line'
import { mockLineData } from '../data/mockData'
import { useTheme } from '@mui/material';
import { tokens } from '../theme';


const LineChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveLine
            data={mockLineData}
            theme={{
                'axis': {
                    'ticks': {
                        'text': {
                            'fill': colors.grey[100],
                        }
                    },
                    'legend': {
                        'text': {
                            'fill': colors.grey[100],
                        }
                    }
                },
                'legends': {
                    'text': {
                        'fill': colors.grey[100],
                    }
                },
                'annotations': {
                    'text': {
                        'fontSize': 48,
                    }
                },
                'tooltip': {
                    'container': {
                        'background': colors.primary[400],
                        'color': colors.grey[100],
                        'fontSize': 18,
                    }
                }
            }}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="natural"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            enableGridX={false}
            enableGridY={false}
            colors={{ scheme: 'purple_blue' }}
            lineWidth={5}
            pointSize={9}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            enableArea={true}
            areaOpacity={0.35}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default LineChart;