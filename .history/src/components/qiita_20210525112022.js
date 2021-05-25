import { useEffect, useState } from "react";
import style from '../styles/qiita.module.scss'
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
    let data;
    if(articles.length !== 0) {
        data = articles.map(item => (<div className={style.wrapper}>
            <h3>{item.title}</h3>
            <span>{item.created_at}</span>
            {item.tags.map(i => <span>{i.name}</span>)}
            <div className={style.body}>{item.body}</div>
            </div>))
    }

    return (
        <div className={style.qiitacontainer}>
            <div className={style.flex}>
                {data}
            </div>
        </div>
    )
}
export default Qiita