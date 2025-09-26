const rosterData = [
    { player: 'Slowly' }, { player: 'Knacke' }, { player: 'Ken' },
    { player: 'PSY' }, { player: 'Snyps' }, { player: 'Tahy' }, { player: 'Niqez' }
];

const socialData = [
    { content: 'New YouTube video is live! 🔥', platform: 'Twitter', likes: 1200, rate: '4.1%' },
    { content: 'Crazy clutch in FNCS...', platform: 'TikTok', likes: 15300, rate: '8.2%' },
    { content: 'Team practice highlights from tonight.', platform: 'Twitter', likes: 850, rate: '3.5%' },
    { content: 'Unboxing my new gear!', platform: 'YouTube', likes: 4200, rate: '6.8%' }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Populate Player Reports Table
    const playerReportsBody = document.getElementById('player-reports-body');
    if (playerReportsBody) {
        let reportsHtml = '';
        rosterData.forEach(player => {
            reportsHtml += `
                <tr class="border-b border-gray-700 hover:bg-gray-700/50">
                    <td class="py-4 px-4 font-semibold text-gray-200">${player.player}</td>
                    <td class="py-4 px-4">Sep 25, 2025</td>
                    <td class="py-4 px-4 text-right">
                        <a href="#" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 text-sm">
                            Download PDF
                        </a>
                    </td>
                </tr>
            `;
        });
        playerReportsBody.innerHTML = reportsHtml;
    }


    // 2. Populate Social Reports Table
    const socialReportsBody = document.getElementById('social-reports-body');
    if (socialReportsBody) {
        let socialHtml = '';
        socialData.forEach(post => {
            socialHtml += `
                 <tr class="border-b border-gray-700 hover:bg-gray-700/50">
                    <td class="py-3 px-4 text-gray-200 italic">"${post.content}"</td>
                    <td class="py-3 px-4">${post.platform}</td>
                    <td class="py-3 px-4 text-blue-300">${post.likes.toLocaleString()}</td>
                    <td class="py-3 px-4 font-semibold text-green-400">${post.rate}</td>
                </tr>
            `;
        });
        socialReportsBody.innerHTML = socialHtml;
    }
});

