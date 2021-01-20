import React from 'react';
import {Dimensions} from 'react-native';
import {BarChart, PieChart} from 'react-native-chart-kit';

import {Container, Title} from '../styles';

const data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
  ],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 60, 10],
    },
  ],
};

const width = Dimensions.get('window').width - 20;
const height = 220;

const pieChartData = [
  {
    name: 'Seoul',
    population: 21500000,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
    legendFontFamily: 'SourceSansPro-SemiBold',
  },
  {
    name: 'Toronto',
    population: 2800000,
    color: '#F00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Beijing',
    population: 527612,
    color: 'red',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'New York',
    population: 8538000,
    color: '#ffffff',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Moscow',
    population: 11920000,
    color: 'rgb(0, 0, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const ReportView = () => {
  return (
    <Container>
      <Title>Spending</Title>
      <BarChart
        width={width}
        height={height}
        data={data}
        chartConfig={{
          backgroundColor: '#eaeaea',
          backgroundGradientFrom: '#eaeaea',
          backgroundGradientTo: '#eaeaea',
          color: (opacity = 1) => `rgba(${92}, ${92}, ${92}, ${opacity})`,
          style: {
            borderRadius: 4,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 4,
        }}
      />
      <Title>Budget Overview</Title>
      <PieChart
        data={pieChartData}
        width={width}
        height={220}
        chartConfig={{
          backgroundColor: '#eaeaea',
          backgroundGradientFrom: '#eaeaea',
          backgroundGradientTo: '#eaeaea',
          color: (opacity = 1) => `rgba(${92}, ${92}, ${92}, ${opacity})`,
          style: {
            borderRadius: 4,
          },
        }}
        backgroundColor={"#eaeaea"}
        borderRadius={4}
        accessor={'population'}
        paddingLeft={'15'}
      />
    </Container>
  );
};

export {ReportView};
