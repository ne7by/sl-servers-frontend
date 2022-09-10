export default class Chart {
    static globalOptions = {
        global: {
            useUTC: false
        },
        lang: {
            decimalPoint: '.',
            thousandsSep: ','
        },
        xAxis: {
            dateTimeLabelFormats: {
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%m-%e',
                week: '%m-%e',
                month: '%Y. %m'
            }
        }
    }

    static getServerTrendChartOption = (t, onLoad, onAfterSetExtremes, graphData) => ({
        chart: {
            zoomType: 'x',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            events: {
                load: onLoad
            }
        },
        navigator: {
            adaptToUpdatedData: false,
            xAxis: {
                labels: {
                    format: '{value:%Y-%m-%e}'
                }
            },
            series: {
                data: graphData
            }
        },
        scrollbar: {
            liveRedraw: false
        },
        title: {
            enabled: false
        },
        subtitle: {
            enabled: false
        },
        rangeSelector: {
            inputEnabled: false,
            buttons: [
                {
                    type: 'hour',
                    count: 6,
                    text: '6h'
                }, {
                    type: 'hour',
                    count: 12,
                    text: '12h'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'day',
                    count: 7,
                    text: '7d'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'month',
                    count: 3,
                    text: '3m'
                }, {
                    type: 'all',
                    text: 'All'
                }
            ],
            selected: 0
        },
        tooltip: {
            enabled: true,
            xDateFormat: '%Y-%m-%d %H:%M',
            useHTML: true,
            backgroundColor: "#303233",
            borderColor: "transparent",
            borderRadius: 2,
            borderWidth: 0,
            shadow: false,
            split: false,
            shared: true,
            followPointer: true,
            style: {
                color: "white",
                fontSize: "12px",
                padding: 15
            }
        },
        loading: {
            style: {
                position: "absolute",
                backgroundColor: "#565a5c",
                opacity: 0.8,
                textAlign: "center"
            }
        },
        credits: {
            enabled: false
        },
        xAxis: {
            events: {
                afterSetExtremes: onAfterSetExtremes
            },
            minRange: 3600 * 1000 // one hour
        },
        yAxis: [{
            title: {
                text: t('server-info.graph.visitors')
            },
            labels: {
                enabled: true,
                format: '{value}' + t('server-info.graph.visitor-suffix')
            },
            opposite: false
        }],
        series: [{
            showInNavigator: true,
            name: t('server-info.graph.visitors'),
            data: graphData,
            dataGrouping: {
                enabled: false
            },
            tooltip: {
                valueDecimals: 0,
                valueSuffix: t('server-info.graph.visitor-suffix')
            }
        }]
    })

    static getDrillDownPieChartOption = (t) => ({
        chart: {
            type: 'pie',
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
        },
        title: {
            enabled: false,
            text: ''
        },
        subtitle: {
            enabled: false
        },
        accessibility: {
            announceNewData: {
                enabled: true
            },
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    style: {
                        color: "white",
                        fontSize: "12px",
                        padding: 15,
                        textOutline: 0
                    },
                    format: '{point.name}: {point.percentage:.1f}%'
                }
            }
        },
        tooltip: {
            enabled: true,
            xDateFormat: '%Y-%m-%d %H:%M',
            useHTML: true,
            backgroundColor: "#303233",
            borderColor: "transparent",
            borderRadius: 2,
            borderWidth: 0,
            shadow: false,
            split: false,
            shared: true,
            followPointer: true,
            style: {
                color: "white",
                fontSize: "12px",
                padding: 15
            },
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
        },
        credits: {
            enabled: false
        },
        series: [
            {
                name: t('all-stats.mod-loader.tooltip'),
                colorByPoint: true,
                data: []
            }
        ],
        drilldown: {
            activeDataLabelStyle: {
                "color": "#81C784"
            },
            series: []
        }
    })
}
