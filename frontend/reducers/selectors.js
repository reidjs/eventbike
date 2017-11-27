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
export const getAllEventsInArray = ({ events }, arr) => {

}