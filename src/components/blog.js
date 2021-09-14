import { useEffect, useState } from "react";

const Blog = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const getData = async() => {
            // const blogs =  await dataFetch();
            fetch('https://note.com/api/v2/creators/beljar731/contents?kind=note', {method:'GET', 
            headers: {
                // 'Authorization': 'Bearer ' + key,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            mode: 'cors',
            credentials: 'include'
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
        <div></div>
    )
}

export default Blog