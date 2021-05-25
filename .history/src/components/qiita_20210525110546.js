import { useEffect, useState } from "react";

const Qiita = () => {
    const [articles, setArticles] = useState([]);

    const key = process.env.REACT_APP_QIITA_KEY;
    useEffect(() => {
        fetch('https://qiita.com/api/v2/authenticated_user/items', {method:'GET', 
      headers: {
        'Authorization': 'Bearer ' + key,
        'Content-Type': 'application/json'
      }})
        .then(response => response.json())
        .then(json => {setArticles(json);console.log(articles)}
            )
    },[])
    return (
        <div></div>
    )
}
export default Qiita