// --- SPREADSHEET DATA GOES HERE ---
const currentRosterData = [
    { player: 'Slowly', joined: 'Nov 02, 2024', pr: 30409, earnings: 725, rank: 262, earningsRank: 5560 },
    { player: 'Knacke', joined: 'Jun 11, 2025', pr: 27396, earnings: 600, rank: 299, earningsRank: 6197 },
    { player: 'Ken', joined: 'Jun 06, 2025', pr: 22363, earnings: 1520, rank: 373, earningsRank: 2982 },
    { player: 'PSY', joined: 'Dec 18, 2024', pr: 23643, earnings: 7070, rank: 347, earningsRank: 839 },
    { player: 'Snyps', joined: 'Nov 07, 2024', pr: 16963, earnings: 660, rank: 505, earningsRank: 6014 },
    { player: 'Tahy', joined: 'Jan 29, 2025', pr: 19996, earnings: 800, rank: 423, earningsRank: 4970 },
    { player: 'Niqez', joined: 'Dec 18, 2024', pr: 16073, earnings: 725, rank: 535, earningsRank: 5560 },
];

const rosterHistoryData = [
     { player: 'Cloudz', joined: 'Sep 11, 2025', left: '-' },
     { player: 'Arcs', joined: 'Aug 07, 2025', left: '-' },
     { player: 'Bobby', joined: 'Jul 14, 2025', left: '-' },
     { player: 'Joni', joined: 'Jun 21, 2025', left: '-' },
     { player: 'Stilian', joined: 'Dec 06, 2024', left: 'Jun 01, 2025' },
     { player: 'Hadi', joined: 'Nov 16, 2024', left: 'Jun 01, 2025' },
     { player: 'prax', joined: 'Nov 15, 2024', left: 'Feb 13, 2025' },
     { player: 'Tyqe', joined: 'Nov 04, 2024', left: 'Nov 28, 2024' },
     { player: 'Kronos', joined: 'Nov 08, 2023', left: 'Jan 13, 2024' },
];
// --- END OF SPREADSHEET DATA ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Populate Current Pro Roster Table
    const currentRosterBody = document.getElementById('current-roster-body');
    if (currentRosterBody) {
        let rosterHtml = '';
        currentRosterData.forEach(player => {
            rosterHtml += `
                <tr class="border-b border-gray-700 hover:bg-gray-700/50">
                    <td class="py-4 px-4 font-semibold text-gray-200">${player.player}</td>
                    <td class="py-4 px-4">${player.joined}</td>
                    <td class="py-4 px-4 text-blue-300">${player.pr.toLocaleString()} <span class="text-gray-400 text-sm font-normal">(#${player.rank.toLocaleString()})</span></td>
                    <td class="py-4 px-4 text-green-400 font-semibold">$${player.earnings.toLocaleString()} <span class="text-gray-400 text-sm font-normal">(#${player.earningsRank.toLocaleString()})</span></td>
                </tr>
            `;
        });
        currentRosterBody.innerHTML = rosterHtml;
    }


    // 2. Populate Roster History Table
    const rosterHistoryBody = document.getElementById('roster-history-body');
    if(rosterHistoryBody) {
        let historyHtml = '';
        rosterHistoryData.forEach(player => {
            historyHtml += `
                <tr class="border-b border-gray-700 hover:bg-gray-700/50">
                    <td class="py-3 px-4 text-gray-200">${player.player}</td>
                    <td class="py-3 px-4">${player.joined}</td>
                    <td class="py-3 px-4 ${player.left === '-' ? 'text-green-400' : 'text-red-400'}">${player.left}</td>
                </tr>
            `;
        });
        rosterHistoryBody.innerHTML = historyHtml;
    }
});

