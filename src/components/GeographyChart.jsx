import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo'
import { useTheme } from '@mui/material';
import { tokens } from '../theme';
import { mockGeographyData } from '../data/mockData';
import { geoFeatures } from '../data/mockGeoFeauters';

const GeographyChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveChoropleth
            data={mockGeographyData}
            features={geoFeatures.features}
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
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="PuBu"
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={isDashboard ? 60 : 150}
            projectionTranslation={isDashboard ? [0.49, 0.65] : [0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            borderWidth={0.5}
            borderColor="#152538"
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                },
                {
                    id: 'gradient',
                    type: 'linearGradient',
                    colors: [
                        {
                            offset: 0,
                            color: '#000'
                        },
                        {
                            offset: 100,
                            color: 'inherit'
                        }
                    ]
                }
            ]}
            legends={!isDashboard ? [
                {
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: '#444444',
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000000',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ] : undefined}
        />
    );
}

export default GeographyChart;
