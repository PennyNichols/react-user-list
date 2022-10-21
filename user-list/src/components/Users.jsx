import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import User from "./User";

const Users = () => {
    const [data, setData] = useState();
	useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users"
        ).then(data=>data.json()).then(data=>setData(data))
    
    }, [])
    
	return (
		<div>
			{data?.map(({name, email, age, }) => (
				<User data={item} />
			))}
		</div>
	);
};

export default Users;
