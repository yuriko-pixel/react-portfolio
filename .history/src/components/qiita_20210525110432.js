import { useEffect, useState } from "react";

const Qiita = () => {
    const [articles, setArticles] = useState([]);

    const key = process.env.REACT_APP_QIITA_KEY;
    console.log(key)
    useEffect(() => {
        fetch('https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=10', {method:'GET', 
      headers: {
        'Authorization': 'Bearer ' + key,
        'Content-Type': 'application/json; charser=UTF-8'
      }})
        .then(response => response.json())
        .then(json => {setArticles(json)}
            )
    },[])
    return (
        <div></div>
    )
}
export default Qiita