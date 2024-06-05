/* eslint-disable react/prop-types */

const SearchResults = ({ results }) => {
  return (
    <div className="mt-4">
      {results.length > 0 ? (
        results.map((event) => (
          <div key={event._id} className="border-b py-2">
            <h3 className="text-lg font-bold">{event.title}</h3>
            <p>{event.description}</p>
            <p>{event.location}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>No events found</p>
      )}
    </div>
  );
};

export default SearchResults;
