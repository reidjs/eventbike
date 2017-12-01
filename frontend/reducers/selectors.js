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
  let result = []
  let idx = 0;
  if (events === undefined) {
    return result;
  }
  arr.forEach((val) => {
    result.push(events[val]);
    idx += 1

    if (result.length === arr.length) {
      return result;
    }

  })
  if (result.length === arr.length) {
    return result;
  }
}