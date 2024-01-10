import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useToastNotifications = (message, which) => {
    if (which === 'success'){
        toast.success(message)
    } else if (which === 'error'){
        toast.error(message)
    }
};

export default useToastNotifications;
