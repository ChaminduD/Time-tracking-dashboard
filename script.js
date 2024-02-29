const dailyStats = document.querySelectorAll(".daily-stats");
const weeklyStats = document.querySelectorAll(".weekly-stats");
const monthlyStats = document.querySelectorAll(".monthly-stats");
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



document.addEventListener('DOMContentLoaded', async function() {
    try{
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Could not fetch resource');
        }

        const jsonData = await response.json();

        const weeklyFetch = document.querySelectorAll(".weekly-fetch");
        const dailyFetch = document.querySelectorAll(".daily-fetch");
        const monthlyFetch = document.querySelectorAll(".monthly-fetch");

        const weeklyPreFetch = document.querySelectorAll(".weekly-pre-fetch");
        const dailyPreFetch = document.querySelectorAll(".daily-pre-fetch");
        const monthlyPreFetch = document.querySelectorAll(".monthly-pre-fetch");

        weeklyFetch.forEach((element, index) => {
            const hrs = jsonData[index].timeframes.weekly.current;
            element.textContent  = hrs + "hrs";
        });

        dailyFetch.forEach((element, index) => {
            const hrs = jsonData[index].timeframes.daily.current;
            element.textContent  = hrs + "hrs";
        });

        monthlyFetch.forEach((element, index) => {
            const hrs = jsonData[index].timeframes.monthly.current;
            element.textContent  = hrs + "hrs";
        });

        weeklyPreFetch.forEach((element, index) => {
            const hrs = jsonData[index].timeframes.weekly.previous;
            element.textContent  = "Last Week - " + hrs + "hrs";
        });

        dailyPreFetch.forEach((element, index) => {
            const hrs = jsonData[index].timeframes.daily.previous;
            element.textContent  = "Yesterday - " + hrs + "hrs";
        });

        monthlyPreFetch.forEach((element, index) => {
            const hrs = jsonData[index].timeframes.monthly.previous;
            element.textContent  = "Last Month - " + hrs + "hrs";
        });

    } catch(error){
        console.error(error);
    }
})