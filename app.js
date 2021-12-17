const profileDataArr = process.argv.slice(2, process.argv.length);

// const printProfileData = (profileDataArr) => {
//   for (let i = 0; i < profileDataArr.length; i++) {
//     console.log(profileDataArr[i]);
//   }
// };

// Same function except with forEach loop
profileDataArr.forEach((profileItem) => {
  console.log(profileItem);
});

// printProfileData(profileDataArr);
