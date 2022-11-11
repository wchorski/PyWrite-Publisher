// const arr1 = ['banana', 'monkey banana', 'apple', 'kiwi', 'orange'];
// const arr2 = ['red', 'blue'];

// const checker = (input, val) => val.some(element => input.includes(element));

// console.log(checker(arr1, ['banana']));
// console.log(checker(arr2, ['banana']));

const datesArray = [
  new Date("2022-11-09T19:06:45.775Z"), 
  new Date("2022-11-10T19:06:45.775Z"), 
  new Date("2022-11-11T19:06:45.775Z"), 
]


const today = new Date()
const threshold = new Date()
threshold.setDate(threshold.getDate() - 1)

function isOld() {
                      //days hours min mil
  // const thresh = thresholdInDays * 24 * 60 * 60 * 1000;

  // const timeDiffInMs = now.getTime() - pastTime.getTime();

  datesArray.map(date => {
    if(date.getTime() <= threshold.getTime() ){
      console.log(date, " <= ", threshold);
    } else {
      console.log(date, " > ", threshold);
    }
  })

  console.log('--finish--');
}

isOld()