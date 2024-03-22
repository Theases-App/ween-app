import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import "./chart.css"
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const dataBar = {
  labels: ["September","October","November","December",'January', 'February'],
  datasets: [
    {

      label: 'Sales',
      backgroundColor: '#ff5252',
      borderColor: '#ff5252', 
      borderWidth: 1,
      hoverBackgroundColor: '#ff5252',
      hoverBorderColor: '#ff5252',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const dataDoughnut = {
  labels: ['Blue', 'Purple', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#003f5c', '#bc5090', '#FFC93C'],
      hoverOffset: 1,
    },
  ],
};

const AdminDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 2, mb: 2 , paddingLeft: 276 }}>
      <Grid container spacing={1} id="jr">
        {/* Chart 1 */}
        <Grid item xs={12} md={6} lg={6} >
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Monthly Profit
            </Typography>
            <Bar data={dataBar} />
          </Paper>
        </Grid>

        {/* Chart 2 */}
        <Grid item xs={12} md={6} lg={6} >
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Revenue Sources
            </Typography>
            <Doughnut data={dataDoughnut} />
          </Paper>
  
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard
