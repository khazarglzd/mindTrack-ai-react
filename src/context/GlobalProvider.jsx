import { AuthProvider } from './AuthContext';
import { MoodProvider } from './MoodContext';

const GlobalProvider = ({ children }) => (
    <AuthProvider>
        <MoodProvider>
            {children}
        </MoodProvider>
    </AuthProvider>
);

export default GlobalProvider;