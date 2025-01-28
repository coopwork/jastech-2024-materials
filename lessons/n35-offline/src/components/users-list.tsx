import UserCard from "./user-card.tsx";
import {USERS} from "../constants/users.ts";
import {useEffect} from "react";

type AutomobileBrandType = 'Lada' | 'Zaz' | 'Mazda';

type oneType = {
    firstName: string
}
type twoType = {
    lastName: string
}

type UserType = oneType & twoType & {
    firstName: number
    patronymic: string
}

const user: oneType & twoType = {
    firstName: 'John',
    lastName: 'Doe',
}

const userTwo: UserType = {
    firstName: 'John',
    lastName: 'Doe'

}

interface IOne {
    firstName: string
    lastName: string
}

interface IUser extends IOne {
    patronymic: string
    date: string
}

const myUser: IUser = {}

enum Enum {
    One = 'one',
    Two = 'two',
    Three = 'three'
}

const UsersList = () => {
    const check = (text: AutomobileBrandType) => {
        console.log(text);
    }

    useEffect(() => {
        check('')
    }, []);
    return (
        <div>
            {USERS?.map((user, index) => (
                <UserCard
                    key={index}
                    user={user}
                />
            ))}
        </div>
    );
};

export default UsersList;