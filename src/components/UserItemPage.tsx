import React, {FC, useEffect, useState} from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useParams } from "react-router-dom";
import { type } from "os";
import { useNavigate } from "react-router-dom";


type UserItemPageParams = {
    id: string;
}

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)

    const params = useParams<UserItemPageParams>()

    const navigate = useNavigate()


    useEffect(() => {
        fetchUser();
  }, [])

  async function fetchUser() {
    try{
          const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
          setUser(response.data)
    } catch(e){
          alert(e);
    }
  }

    return(
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>Page user {user?.name}</h1>
            <div>
                <p>Email: {user?.email}</p>
                <p>Address: {user?.address.city}, {user?.address.street}, {user?.address.zipcode} </p>
            </div>
        </div>
    )
}

export default UserItemPage