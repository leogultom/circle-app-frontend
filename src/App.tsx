import UserProvider from './hooks/contexts/UserContext';
import HomeScreen from './routes/Home';
import { Route, Routes } from 'react-router-dom';
import AboutScreen from './routes/About';

function App() {
  return (
    <UserProvider>
      <div>
        {/* <HomeScreen /> */}

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
