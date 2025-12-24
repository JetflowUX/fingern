import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (email: string, password: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Check if user is already logged in (from sessionStorage)
        return sessionStorage.getItem('adminAuth') === 'true';
    });

    const login = (email: string, password: string): boolean => {
        // Simple hardcoded authentication
        if (email === 'admin@admin.com' && password === 'admin1234') {
            setIsAuthenticated(true);
            sessionStorage.setItem('adminAuth', 'true');
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('adminAuth');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
