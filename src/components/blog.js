import { useEffect, useState } from "react";

const Blog = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const getData = async() => {
            // const blogs =  await dataFetch();
            fetch('https://api.github.com/users/octocat/orgs', {method:'GET', 
            headers: {
                // 'Authorization': 'Bearer ' + key,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            mode: 'cors',
            })
            
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    // setBlog(json);
                })
          };

          getData();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div>{blog}</div>
    )
}

export default Blog