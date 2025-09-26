// --- SPREADSHEET DATA GOES HERE ---
const socialGrowthData = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    twitter: [18.1, 19.5, 21.2, 22.8, 24.1, 25.4],
    discord: [4.5, 5.1, 5.8, 6.7, 7.7, 8.9]
};

const placementsData = {
    labels: ["Top 1", "Top 10", "Top 25", "Top 100"],
    counts: [2, 11, 28, 84]
};

const teamPlacements = [
    { event: 'FNCS CH6S4 Div 2', players: 'Slowly, Knacke', place: 4, earnings: 1200 },
    { event: 'Solo Victory Cup', players: 'Ken', place: 1, earnings: 400 },
    { event: 'Duos Ranked Cup', players: 'PSY, Snyps', place: 8, earnings: 250 },
    { event: 'Zero Build Cup', players: 'Tahy, Niqez', place: 12, earnings: 100 },
    { event: 'FNCS Scrims', players: 'Team', place: 3, earnings: 0 }
];
// --- END OF SPREADSHEET DATA ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Social Media Growth Chart
    const socialCtx = document.getElementById('socialGrowthChart').getContext('2d');
    new Chart(socialCtx, {
        type: 'line',
        data: {
            labels: socialGrowthData.labels,
            datasets: [
                {
                    label: 'Twitter Followers (K)',
                    data: socialGrowthData.twitter,
                    borderColor: 'rgb(59, 130, 246)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Discord Members (K)',
                    data: socialGrowthData.discord,
                    borderColor: 'rgb(139, 92, 246)',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: { color: 'rgb(209, 213, 219)' }
                }
            },
            scales: {
                x: {
                    ticks: { color: 'rgb(156, 163, 175)' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                },
                y: {
                    ticks: { color: 'rgb(156, 163, 175)' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            }
        }
    });

    // 2. Tournament Placements Chart
    const placementsCtx = document.getElementById('placementsChart').getContext('2d');
    new Chart(placementsCtx, {
        type: 'doughnut',
        data: {
            labels: placementsData.labels,
            datasets: [{
                data: placementsData.counts,
                backgroundColor: [
                    'rgba(52, 211, 153, 0.8)',
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(234, 179, 8, 0.8)'
                ],
                borderColor: '#1f2937',
            }]
        },
         options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'rgb(209, 213, 219)',
                        padding: 20
                    }
                }
            }
        }
    });

    // 3. Populate Team Placements Table
    const teamPlacementsBody = document.getElementById('team-placements-body');
    if (teamPlacementsBody) {
        let placementsHtml = '';
        teamPlacements.forEach(p => {
            placementsHtml += `
                <tr class="border-b border-gray-700 hover:bg-gray-700/50">
                    <td class="py-4 px-4 font-semibold text-gray-200">${p.event}</td>
                    <td class="py-4 px-4">${p.players}</td>
                    <td class="py-4 px-4 font-bold text-lg ${p.place === 1 ? 'text-green-400' : 'text-blue-300'}">#${p.place}</td>
                    <td class="py-4 px-4 text-green-400 font-semibold">$${p.earnings.toLocaleString()}</td>
                </tr>
            `;
        });
        teamPlacementsBody.innerHTML = placementsHtml;
    }
});

