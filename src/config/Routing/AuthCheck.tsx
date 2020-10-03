import React from 'react';
import { useAuth } from '../../components/common/hooks/useAuth';

interface IAuthChceck {
    children: React.ReactNode;
}

const AuthCheck: React.FC<IAuthChceck> = ({ children }) => {
    useAuth();
    return <>{children}</>;
};
export default AuthCheck;
