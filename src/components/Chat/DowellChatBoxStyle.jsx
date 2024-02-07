const styles = {
  dowellContainer: {
    position: 'fixed',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    gap: '10px',
    borderRadius: '12px',
    maxHeight: '65vh',
    boxShadow: 'rgb(202, 197, 197) 0px 0px 10px',
    width: '400px', // Default width
  },
  chatTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  messageContainer: {
    width: '100%',
    maxHeight: '100%', // Adjust as needed
    overflowX: 'hidden',
    border: '2px solid #f4f4f4',
    borderRadius: '3px',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
  },
  message: {
    backgroundColor: '#f4f4f4',
    padding: '5px',
    borderRadius: '5px',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    borderRadius: '5px',
    width: '100%',
  },
  inputField: {
    width: '100%',
    padding: '2px',
    paddingLeft: '5px',
    border: '1px solid #007bff',
    borderRadius: '10px',
  },
  sendButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '5px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default styles;