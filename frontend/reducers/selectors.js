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
  arr.forEach((val, idx) => {
    console.log('sl')
    result.push(events[val]);
    if (idx === arr.length - 1) {
      debugger
      return result ;
    }
    // debugger
  })
  // return (
  //   Object.keys(events).map((id) => )
  // );
}