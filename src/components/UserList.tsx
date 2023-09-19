import React, { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "./UserItem";

export interface UserListProps{
    users: IUser[];
}

const UserList: FC<UserListProps> = ({users}) => {
    return(
        <div>
            
        </div>
    )
}

export default UserList;