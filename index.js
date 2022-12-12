// code your solution here

// function superbowlWin(record) {
//     return record.result === "W" 
// }

// const year = record.find(superbowlWin).year;

superbowlWin = (record) => {

    const result = record.find( record => record.result === "W" );
    
 
    return !!result ? result.year : undefined;
  }