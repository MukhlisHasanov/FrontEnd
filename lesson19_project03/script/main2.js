// function localtime(local_date) {
//     const date = new Date(local_date.replace(' ', 'T'));
//     const options = { weekday: 'long', month: 'long', day: '2-digit' };
//     const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
//     return formattedDate;
//     }

function weekDayName(localWeekDay) {
const date = new Date(dateStr.replace(' ', 'T')); 
const options = { weekday: 'long'};
const longWeekdayName = new Intl.DateTimeFormat('en-US', options).format(date);
const shortWeekdayName = longWeekdayName.substring(0, 3);
return shortWeekdayName;
}

