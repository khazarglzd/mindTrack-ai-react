import { AuthProvider } from './authContext';
import { MoodProvider } from './moodContext';

const GlobalProvider = ({ children }) => (
    <AuthProvider>
        <MoodProvider>
            {children}
        </MoodProvider>
    </AuthProvider>
);

export default GlobalProvider;