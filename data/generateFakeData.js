// Randomly generate a fake allTables JSON file

const fs = require("fs");
const numRooms = Math.floor(Math.random() * 10) + 16; // 16 - 26 (exclusive)

let fakeRooms = [];
for (i = 1; i < numRooms; i++) {
  const chairs = Math.floor(Math.random() * 6) + 2; // 2-8 (exclusive)
  const name = `Room ${i}`;
  // const availability = [true, false][Math.round(Math.random())];
  const location = ["PatioHall", "Banquet", "Ground"][Math.floor(Math.random() * 3)]; // 0-3 (exclusive)
  fakeRooms.push({
    name: name,
    capacity: chairs,
    // isAvailable: availability,
    isAvailable: true,
    price2hours: price,
    location: location
  });
}

let data = JSON.stringify({
  rooms: fakeRooms
});
fs.writeFileSync(__dirname + "/allRooms.json", data);
