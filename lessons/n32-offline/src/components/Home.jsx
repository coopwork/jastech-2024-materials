import {useContext} from 'react';
import {UserContext} from "../providers/UserProvider.jsx";

const Home = () => {
    const {user, isLoading, logout} = useContext(UserContext)

    return (
        <div>
            WORKING HOME

            {isLoading ? <div>Loading...</div>:
                <>
                    {user && <>
                        hello {user?.firstname}
                    </>}
                    {user ?
                        <>
                            <a href="#">Кабинет</a>
                            <button onClick={logout}>Выход</button>
                        </>
                        :
                        <>
                        <a href="#">Войти</a>
                        </>
                    }
                </>

            }

        </div>
    );
};

export default Home;