import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage.js';
import api from '../../utils/Api';
import auth from '../../utils/Auth.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [savedMovies, setMovies] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [successReg, setSuccessReg] = useState(false);
    const [successLogin, setSuccessLogin] = useState(false);
    const [successEdit, setSuccessEdit] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            api.getUserInfo(jwt)
                .then((res) => {
                    localStorage.removeItem('allMovies');
                    setIsLoggedIn(true);
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                });
        }
    }, []);

    useEffect(() => {
        localStorage.removeItem('shortMovies');
        const jwt = localStorage.getItem('jwt');
        if (isLoggedIn && jwt) {
            Promise.all([api.getProfileInfo(jwt), api.getSavedMovies(jwt)])
                .then(([user, movies]) => {
                    setCurrentUser({ name: user.name, email: user.email });
                    setMovies(movies.reverse());
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                    console.log(err.response);
                });
        }
    }, [isLoggedIn]);
    function handleRegister({ name, email, password }) {
        auth.register(name, email, password)
            .then(() => {
                setSuccessReg(true);
                handleLogin({ email, password });
                navigate('/sign-in', { replace: true });
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
                setSuccessReg(false);
            });
    }
    function handleLogin({ email, password }) {
        auth.login(email, password)
            .then((res) => {
                if (res) {
                    setSuccessLogin(true);
                    localStorage.setItem('jwt', res.token);
                    setIsLoggedIn(true);
                    navigate('/movies', { replace: true });
                }
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
                setSuccessLogin(false);
            });
    }
    function addToSavedMovies(data) {
        const jwt = localStorage.getItem('jwt');
        api.saveMovie(data, jwt)
            .then((newMovie) => {
                setMovies([newMovie, ...savedMovies]);
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });
    }

    function deleteSavedMovies(movie) {
        const jwt = localStorage.getItem('jwt');
        api.deleteMovies(movie._id, jwt)
            .then((res) => {
                setMovies((state) =>
                    state.filter((item) => item._id !== movie._id)
                );
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });
    }
    function handleUpdateUser(userInfo) {
        api.updateUserInfo(userInfo)
            .then((data) => {
                setCurrentUser(data);
                setSuccessEdit(true);
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });
    }

    function handleLogout() {
        localStorage.clear();
        setIsLoggedIn(false);
        localStorage.removeItem('jwt');
        localStorage.removeItem('allMovies');
        localStorage.removeItem('movieSearch');
        localStorage.removeItem('movies');
        localStorage.removeItem('shortMovies');
        navigate('/');
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='page'>
                <Routes>
                    <Route
                        path='/sign-up'
                        element={
                            isLoggedIn ? (
                                <Navigate to='/movies' replace />
                            ) : (
                                <Register
                                    handleRegister={handleRegister}
                                    isLoggedIn={isLoggedIn}
                                    successReg={successReg}
                                />
                            )
                        }
                    />
                    <Route
                        path='/sign-in'
                        element={
                            isLoggedIn ? (
                                <Navigate to='/movies' replace />
                            ) : (
                                <Login
                                    successLogin={successLogin}
                                    handleLogin={handleLogin}
                                    isLoggedIn={isLoggedIn}
                                />
                            )
                        }
                    />

                    <Route
                        path='/profile'
                        element={
                            <ProtectedRoute
                                element={Profile}
                                isLoggedIn={isLoggedIn}
                                handleLogout={handleLogout}
                                handleUpdateUser={handleUpdateUser}
                                successEdit={successEdit}
                            />
                        }
                    />

                    <Route
                        path='/'
                        element={<Main isLoggedIn={isLoggedIn} />}
                    />
                    <Route
                        path='/movies'
                        element={
                            <ProtectedRoute
                                element={Movies}
                                isLoggedIn={isLoggedIn}
                                addToSavedMovies={addToSavedMovies}
                                deleteSavedMovies={deleteSavedMovies}
                                savedMovies={savedMovies}
                            />
                        }
                    />
                    <Route
                        path='/saved-movies'
                        element={
                            <ProtectedRoute
                                element={SavedMovies}
                                isLoggedIn={isLoggedIn}
                                addToSavedMovies={addToSavedMovies}
                                deleteSavedMovies={deleteSavedMovies}
                                savedMovies={savedMovies}
                            />
                        }
                    />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </div>
        </CurrentUserContext.Provider>
    );
}
export default App;
