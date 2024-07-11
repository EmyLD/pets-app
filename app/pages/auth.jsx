import React, { useState } from 'react';
import EmailCheck from '../../components/emailCheck';
import Signup from '../components/Signup';



const AuthPage = () => {
    const [showSignup, setShowSignup] = useState(false);

    const handleEmailNotFound = () => {
        setShowSignup(true);
    };

    return (
        <div>
            {showSignup ? <Signup /> : <EmailCheck onEmailNotFound={handleEmailNotFound} />}
        </div>
    );
};

export default AuthPage;
