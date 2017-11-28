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
  //array of events that are 
  let result = []
  if (events === undefined)
    return result;
  debugger
  arr.forEach((val, idx) => {
    result.push(events[val]);
    debugger
    if (idx === arr.length) {
      return result ;
    }
    // debugger
  })
  // return (
  //   Object.keys(events).map((id) => )
  // );
}