import {useEffect, useState} from "react";


type UserType = {
    firstName: string,
    lastName: string,
    patronymic?: string,
    date: string
}

type UserCardPropsType = {
    user: UserType
}

type StateType = string | number

const UserCard = ({user}: UserCardPropsType) => {
    const [state, setState] = useState<StateType[]>([0, 2, 3, '5']);
    const getUserFirstName = (myUser: UserType): string => {
        return myUser.firstName
    }
    useEffect(() => {
        setState((prevState) => [...prevState, 'string', 0, 1, 0]);
        console.log(state);
        console.log(getUserFirstName(user));
    }, []);

    return (
        <div>
            firstName: {user.firstName}
            <br/>
            lastName: {user.lastName}
            <br/>
            {user.patronymic && (
                `patronymic: ${user.patronymic}`
            )}
            <br/>
            date: {user.date}
        </div>
    );
};

export default UserCard;