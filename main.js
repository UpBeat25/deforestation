const deforestationData = {
    labels: [],
    datasets: [{
        label: 'Deforestation Area (million hectares)',
        data: [],
        backgroundColor: 'rgb(112, 203, 145)',
        borderWidth: 5,
        fill: false,
    }]
};

const deforestationRates = [
    {"year": 2000, "area": 98},
    {"year": 2005, "area": 120},
    {"year": 2010, "area": 145},
    {"year": 2015, "area": 160},
    {"year": 2020, "area": 173},
    {"year": 2021, "area": 175},
    {"year": 2022, "area": 178},
    {"year": 2023, "area": 180}
];

deforestationRates.forEach(rate => {
    deforestationData.labels.push(rate.year);
    deforestationData.datasets[0].data.push(rate.area);
});

const causesData = {
    labels: [],
    datasets: [{
        label: 'Causes of Deforestation',
        data: [],
        backgroundColor: [
            'rgb(65, 225, 161)',
            '#002C54',
            '#C4DFE6',
            '#20948B'
        ],
        borderColor: [
            'rgb(65, 225, 161)',
            '#002C54',
            '#C4DFE6',
            '#20948B'
        ],
        borderWidth: 1
    }]
};

const causes = [
    {"cause": "Agriculture", "percentage": 70},
    {"cause": "Logging", "percentage": 20},
    {"cause": "Urbanization", "percentage": 6},
    {"cause": "Mining", "percentage": 4}
];

causes.forEach(c => {
    causesData.labels.push(c.cause);
    causesData.datasets[0].data.push(c.percentage);
});

const biodiversityData = {
    labels: [],
    datasets: [{
        label: 'Impacts on Biodiversity',
        data: [],
        backgroundColor: [
            'rgb(112, 203, 145)',
            'rgb(65, 225, 161)',
            '#2F3C7E',
            '#A1BE95'
        ],
        borderColor: [
            'rgb(112, 203, 145)',
            'rgb(65, 225, 161)',
            '#2F3C7E',
            '#A1BE95'
        ],
        borderWidth: 1
    }]
};

const biodiversityImpacts = [
    {"impact": "Species Extinction", "percentage": 40},
    {"impact": "Habitat Loss", "percentage": 35},
    {"impact": "Loss of Genetic Diversity", "percentage": 15},
    {"impact": "Ecosystem Imbalance", "percentage": 10}
];

biodiversityImpacts.forEach(impact => {
    biodiversityData.labels.push(impact.impact);
    biodiversityData.datasets[0].data.push(impact.percentage);
});

new Chart(document.getElementById('deforestationChart'), {
    type: 'bar',
    data: deforestationData,
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

new Chart(document.getElementById('causesChart'), {
    type: 'pie',
    data: causesData
});

new Chart(document.getElementById('biodiversityChart'), {
    type: 'pie',
    data: biodiversityData
});