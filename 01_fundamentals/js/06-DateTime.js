// console.log(Temporal.Now.instant());
// console.log(process.version);

const date = new Date;
console.log(date.toLocaleDateString());

console.log(Date.now());

console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getHours());

const instant = Temporal.Now.instant();
console.log(instant.toString());


const zonedDateTime = Temporal.Now.zonedDateTimeISO('Asia/Calcutta');
console.log(zonedDateTime.toString());


const alarm = Temporal.PlainTime.from('07:30:00');
console.log((alarm.toString()));

