import toast from 'react-hot-toast';

export const toastSuccess = (text = '', user = '') =>
  toast.success(`${text} ${user}`, {
    duration: 3000,
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });

export const toastError = text =>
  toast.error(`${text}`, {
    duration: 3000,
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });
