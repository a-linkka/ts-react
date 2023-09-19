import React, { FC } from "react";
import { IUser } from "../types/types";
import { useNavigate } from "react-router-dom";

export interface UserItemProps{
    user: IUser;
    // onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user}) => {

    const navigate = useNavigate()

    return(
            <div onClick={() => navigate(`/users/${user.id}`)} style={{padding: 15, border: '2px solid black'}}>
                    {user.id}. {user.name} прожтивает в городе {user.address?.city} на улице {user.address?.street}
            </div>
    )
}

export default UserItem