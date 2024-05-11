import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useAllCategoryQuery } from '../../Features/Category/CategoryApi';

const DashboardAnalytics = () => {
    const {data,isLoading,isSuccess,error,isError}=useAllCategoryQuery()

    const state = {
          
        series: [1, 1, 1, 1, 1],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: data?.data.map(category=>[category?.categoryName]),
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    
    
    return (
        <div className='px-3 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5 w-full'>
           <div className='shadow-md rounded-lg'>
           <h2 className='text-center text-3xl font-Poppins text-violet-500 py-3'>Category List </h2>
            <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="pie" width={380} />
            </div>
           </div>
           <div className=' shadow-md rounded-lg'>
           <h2 className='text-center text-3xl font-Poppins text-violet-500 py-3'>Category List </h2>
            <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="pie" width={380} />
            </div>
           </div>
        </div>
    );
};

export default DashboardAnalytics;
