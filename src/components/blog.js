import { useEffect, useState } from "react";

const Blog = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const getData = async() => {
            // const blogs =  await dataFetch();
            fetch('https://www.googleapis.com/blogger/v3/blogs/6615732106570907108?key=AIzaSyC1HwiVEcPy_AtdEC39NRcvSpenRFsQdkY', {method:'GET', 
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
                    setBlog(json);
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