// My first nodejs code

// console.log("Hello from Node.js!");

const userName = "Yash Gunjal";
const currentTime = new Date(); 
const hours = currentTime.getHours();

let greeting;
if(hours < 12) {
    greeting = "Good Morning";
}
else if (hours < 18) {
    greeting = "Good Afternoon";
}
else {
    greeting = "Good Evening";
}

console.log(`${greeting},${userName}! Welcome to Nodejs.`);
