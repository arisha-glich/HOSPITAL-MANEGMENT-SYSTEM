// scripts.js
window.onload = function() {
    var ctx = document.getElementById('patientChart').getContext('2d');
    var patientChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Number Of Patients Over Current Year',
                data: [0, 1, 0, 3, 0, 1, 0],
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Sample data for pie charts
    var data = {
        labels: ['Operation Report', 'Birth Report', 'Death Report'],
        datasets: [{
            data: [1, 1, 1],
            backgroundColor: ['#3498db', '#e74c3c', '#f1c40f']
        }]
    };

    var operationCtx = document.getElementById('operationChart').getContext('2d');
    var birthCtx = document.getElementById('birthChart').getContext('2d');
    var deathCtx = document.getElementById('deathChart').getContext('2d');

    new Chart(operationCtx, {
        type: 'pie',
        data: data
    });
    new Chart(birthCtx, {
        type: 'pie',
        data: data
    });
    new Chart(deathCtx, {
        type: 'pie',
        data: data
    });

    // Navigation logic for cards
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            var link = card.getAttribute('data-link');
            window.location.href = link;
        });
    });
};
