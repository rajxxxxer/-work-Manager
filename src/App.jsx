import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
import { setLocalStorage } from './utils/localStorage';
import './App.css';
const App = () => {
  const { admin, userdata } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setLocalStorage(); // Init data if not present
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (email, password) => {
    if (admin && admin.email === email && admin.password === password) {
      setUser('admin');
      setLoggedInUserData(admin);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }));
    } else {
      const employee = userdata.find(emp => emp.email === email && emp.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert('Invalid credentials');
      }
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {!user ? (
        <Login handle={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard changeuser={setUser} data={loggedInUserData} />
      ) : (
        <EmployeeDashboard changeuser={setUser} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
