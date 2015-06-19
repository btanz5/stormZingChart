var zingChartData = {
    'graphset':[{
        'type': 'line',
        'tooltip' :{
            'visible' : false, //to hide the wind speed value (number) when you hover over
        },
        'legend': {
            'backgroundColor': '#AAA',
            'layout': 'float',
            'header': {
                'text': 'Top Wind Speeds of 2014 Hurricane/Typhoon Season',
                'background-color': '#8FDBFF'
            }
        },
        'scale-x': {
            'label': {
                'text': 'Storm Number'
            }
        }, 
        'scale-y': {
            'label': {
                'text': 'Wind Speed (MPH)'
            }
        }, 
        'crosshairY': {
            'lineWidth': '2px',
            'lineColor': '#80929A',
        },
        'crosshairX' : {
            'lineWidth' : 0,
            'scaleLabel' : {
                'visible' : false
            },
            
            'plotLabel':{
                    'text' : '%data-storm',
                    'multiple':true,
                    'fontSize':'10px',
                    'callout':true,
                    'calloutPosition':'bottom',
                    'shadow':0,
                    'placement':'node-top',
                    'borderRadius':4,
                    'padding':6
                }
        },
        'series':[
            {
                'values': [100, 35, 80, 85, 50, 120, 80, 145, 40],
                'data-storm': ['Arthur', 'Tropical Depression Two', 'Bertha', 'Cristobal', 'Dolly', 'Edouard', 'Fay', 'Gonzalo', 'Hanna'], 
                'text': 'Atlantic',
                'lineColor': '#A1D88F'
            },
            {
                'values': [155, 45, 150, 50, 50, 45, 45, 130, 75, 140, 120, 85, 75, 160, 125, 140, 35, 75, 85, 130, 85, 65, 110],
                'data-storm': ['Amanada', 'Boris', 'Cristina', 'Douglas', 'Elida', 'Fausto', 'Wali', 'Genevieve', 'Hernan', 'Iselle', 'Juilo', 'Karina', 'Lowell', 'Marie', 'Norbert', 'Odile', 'Tropical Depression Sixteen-E', 'Polo', 'Rachel', 'Simon', 'Ana', 'Turdy', 'Vance', ],
                'text': 'Eastern Pacific',
                'lineColor': '#A1DAFF'
            },
            {
                'values': [40, 40, 75, 35, 40, 60, 45, 40, 115, 105, 80, 65, 120, 125, 70, 35, 85, 50, 60, 110, 130, 125, 50, 130, 45],
                'data-storm': ['Lingling', 'Kajiki', 'Faxai', 'Caloy', 'Peipah', 'Tapah', 'Mitag', 'Hagibis', 'Neoguir', 'Rammasun', 'Matmo', 'Nakri', 'Halong', 'Genevieve', 'Fengshen', 'Karding', 'Kalmaegi', 'Fung-wong', 'Kammuri', 'Phanfone', 'Vongfong', 'Nuri', 'Sinlaku', 'Hagupit', 'Jangmi'],
                'text': 'Western Pacific',
                'lineColor': '#D88C81'
            }
        ]
    }]
}
window.onload = function (){
    zingchart.render({
        id: 'zingChartData',
        height: 600,
        width: 1000,
        data: zingChartData
    });
};