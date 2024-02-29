const dailyStats = document.querySelectorAll(".daily-stats");
const weeklyStats = document.querySelectorAll(".weekly-stats");
const monthlyStats = document.querySelectorAll(".monthly-stats");
const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

daily.addEventListener('click', () => {
    dailyStats.forEach(element => {
        element.style.display = 'flex';
    });
    weeklyStats.forEach(element => {
        element.style.display = 'none';
    });
    monthlyStats.forEach(element => {
        element.style.display = 'none';
    });
});

weekly.addEventListener('click', () => {
    weeklyStats.forEach(element => {
        element.style.display = 'flex';
    });
    dailyStats.forEach(element => {
        element.style.display = 'none';
    });
    monthlyStats.forEach(element => {
        element.style.display = 'none';
    });
});

monthly.addEventListener('click', () => {
    monthlyStats.forEach(element => {
        element.style.display = 'flex';
    });
    dailyStats.forEach(element => {
        element.style.display = 'none';
    });
    weeklyStats.forEach(element => {
        element.style.display = 'none';
    });
});