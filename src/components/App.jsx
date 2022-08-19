import Feedback from "./Feedback/Feedback";

export const App = () => {
  return (
    <div
      style={{
        marginTop: '50px',
        marginLeft: '50px',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '24px',
        color: '#010101',
      }}
    >
      <Feedback/>
    </div>
  );
};
