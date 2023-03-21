import React, {Component} from 'react';

import {Line} from 'react-chartjs-2';

import css from './Dashboard.module.css';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            latest: {
                labels: [],

                datasets: [
                    {
                        label: 'Latest Hits',
                        borderColor: 'green',
                        data: [],
                    },
                    {
                        label: 'Popular',
                        borderColor: 'red',
                        data: [],
                    },
                    {
                        label: 'Featured',
                        borderColor: 'purple',
                        data: [],
                    }

                ]
            },

            performance: {
                labels: [],
                datasets: []
            }
        }
    }

    componentDidMount() {

        let dataFromLocalStorage = localStorage.getItem('data');

        dataFromLocalStorage = JSON.parse(dataFromLocalStorage);

        const dataForCharts = {...dataFromLocalStorage.dasbhoardPage.latestHits};

        // console.log(dataForCharts);

        this.setState({
            latest: {
                labels: [...dataFromLocalStorage.dasbhoardPage.latestHits.months],
                datasets: [
                    {
                        label: 'Latest Hits',
                        borderColor: 'green',
                        data: [...dataFromLocalStorage.dasbhoardPage.latestHits.latest]
                    },
                    {
                        label: 'Popular',
                        borderColor: 'red',
                        
                        data: [...dataFromLocalStorage.dasbhoardPage.latestHits.popular]
                    },
                    {
                        label: 'Featured',
                        borderColor: 'purple',
                        
                        data: [...dataFromLocalStorage.dasbhoardPage.latestHits.featured]
                    }
                ]
            },

            performance: {
                labels: ['20', '30', '40', '50', '60'],

                datasets: [
                    {
                        label: 'Aqua',
                        borderColor: 'lightgreen',
                        data: [dataFromLocalStorage.dasbhoardPage.performance.Aqua]
                    },
                    {
                        label: 'Blue',
                        borderColor: 'blue',
                        data: [dataFromLocalStorage.dasbhoardPage.performance.Blue]
                    },
                    {
                        label: 'Green',
                        borderColor: 'green',
                        data: [dataFromLocalStorage.dasbhoardPage.performance.Green]
                    },
                    {
                        label: 'Orange',
                        borderColor: 'orange',
                        data: [dataFromLocalStorage.dasbhoardPage.performance.Orange]
                    },
                    {
                        label: 'Purple',
                        borderColor: 'purple',
                        data: [dataFromLocalStorage.dasbhoardPage.performance.Purple]
                    },
                    {
                        label: 'Red',
                        borderColor: 'red',
                        data: [dataFromLocalStorage.dasbhoardPage.performance.Red]
                    },
                    {
                        label: 'Yellow',
                        borderColor: 'yellow',
                        data: [dataFromLocalStorage.dasbhoardPage.performance.Yellow]
                    }
                ]
            }
        })

    }

    render() {

        console.log(this.state.data);

        return(
            <main className={css.main}>
                <div className={css.h2Div}>
                    <h2>Welcome back,&nbsp;<span className={css.h2Span}>Admin</span></h2>
                </div>

                <div className={css.chartsDiv}>

                    <div className={css.latestDiv}>
                        <h3>Latest</h3>

                        <Line options={{
                            responsive: true, 
                            legend:{
                                labels: {fontColor: '#fffefe'}
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        fontColor: "#fffefe",
                                        beginAtZero: true
                                            }
                                    }],
                                xAxes: [{
                                    ticks: {
                                        fontColor: "#fffefe",
                                        beginAtZero: true
                                            }
                                    }]
                                }
                            }}
                                data={this.state.latest}>
                        </Line>
                    </div>
                    
                    <div className={css.performanceDiv}>
                        <h3>Performance</h3>

                        <Line options={{
                            responsive: true, 
                            legend:{
                                labels: {fontColor: '#fffefe'}
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        fontColor: "#fffefe",
                                        beginAtZero: true
                                            }
                                    }],
                                xAxes: [{
                                    ticks: {
                                        fontColor: "#fffefe",
                                        beginAtZero: true
                                            }
                                    }]
                                }
                            }}
                                data={this.state.performance}>
                        </Line>


                    
                    </div>
                    <div className={css.storageDiv}>Storage</div>
                    <div className={css.notificationDiv}>Notifications</div>
                    <div className={css.ordersDiv}>Orders</div>

                </div>


            </main>
        );
    }
}

export default Dashboard;