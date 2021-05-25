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
        .then(json => {setArticles(json);
            console.log(articles)}
            )
    },[])
    let data;
    if(articles.length !== 0) {
        data = articles.map(item => (<div className={style.wrapper}>
            <h3>{item.title}</h3>
            <div className={style.flex}>
                <img src={item.user.profile_image_url} alt="profile" className={style.profile} />
                <span className={style.username}>@ {item.user.id}</span>
            </div>
            <div className={style.date}>{item.created_at}</div>
            <div className={style.flex}>{item.tags.map(i => <span className={style.tags}>{i.name}</span>)}</div>
            <div className={style.blogbody}>{item.body}</div>
            </div>))
    } else {
        data = '<div>Loading...</div>'
    }

    return (
        <div className={style.qiitacontainer}>
            <h2>Qiita Articles</h2>
            <div className={style.flex}>
                {data}
            </div>
        </div>
    )
}
export default Qiita