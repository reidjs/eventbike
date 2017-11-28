export const selectEvent = ({ events }, id) => {
  const nullEvent = {
    id: null,
    title: "",
    details: "",
  };
  return events[id] || nullEvent;
}

//return as array
export const getAllEvents = ({ events }) => (
	Object.keys(events).map(id => events[id])
);

//for bookmarks and tickets 
//selects events that are in the array
export const getAllEventsInArray = (events, arr) => {
  // if (events)
  //   debugger
  // array of events that are 
  // console.log(events, arr)
  let result = []
  let idx = 0;
  if (events === undefined) {
    // console.log(events)
    // console.log('events undef)')
    return result;
  }
  arr.forEach((val) => {
    // console.log('sl')
    result.push(events[val]);
    idx += 1
    // if (idx === arr.length - 1) {
      // debugger
      // console.log("sending bookmarks: ", result)
      // return result;
    // }
    if (result.length === arr.length) {
      // console.log('here')
      return result;
    }
    // return result;
    // debugger
  })
  if (result.length === arr.length) {
    // console.log('returning')
    return result;
  }
  // return result;
}