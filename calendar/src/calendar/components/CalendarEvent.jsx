export const CalendarEvent = ({ event }) => {
  const { title, user } = event;
  
  if (!title || !user || !user.name) {
      return console.log("no estas leyendo el title"); 
  }
  
  return (
      <>
          <strong>{title}</strong>
          <span> - {user.name}</span>
      </>
  );
};
