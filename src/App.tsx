import UserProvider from './hooks/contexts/UserContext';
import HomeScreen from './routes/Home';
import { Route, Routes } from 'react-router-dom';
import AboutScreen from './routes/About';
import RegisterPage from './routes/Register';
import PrivateRoute from './features/dashboard/components/PrivateRoute';
import LoginPage from './routes/Login';

function App() {
  return (
    <UserProvider>
      <div>
        {/* <HomeScreen /> */}

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
          </Route>
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
