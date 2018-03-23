
// Regex
const regex = () => {
const str1 = "antelope rocks out";
const str2 = "antelopes rock out";
let re = /((\w+)\s(\w+)\s(\w+))/g;
const matched = (str) => str.match(re) ? true : false;

console.log("\nRegExp for antelope - " + re);
console.log(matched(str1));
console.log(matched(str2));

const gmb = ['goat', 'moat','boat'];
re = /[gm]oat/g;
console.log("\nRegExp for goat, moat, boat - " + re);
console.log([matched(gmb[0]), matched(gmb[1]), matched(gmb[2])]);



const dates = ["2000-100-12","1999-1-20", "1999-01-20", "812-2-10", "20180323"];

re = /(\d{1,4})-(\d{1,2})-(\d{1,2})/g;

console.log("\nRegExp for dates - " + re);
for( let i = 0; i < dates.length; i++) {
	console.log( dates[i] + " matched -- " + matched(dates[i]));
}
}

regex();
