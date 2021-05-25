import { useEffect, useState } from "react";
import style from '../styles/qiita.module.scss'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

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
        .then(json => {
            setArticles(json);
            console.log(json)}
            )
    },[])
    let data;
    if(articles.length !== 0) {
        data = articles.map(item => (
        <a href={item.url} className={style.wrapper} target="_blank" rel="noopener noreferrer">
            <h3>{item.title}</h3>
            <div className={style.flex}>
                <img src={item.user.profile_image_url} alt="profile" className={style.profile} />
                <span className={style.username}>@ {item.user.id}</span>
            </div>
            <div className={style.date}><Moment format="YYYY/MM/DD">{item.created_at}</Moment></div>
            <div className={style.flex}>{item.tags.map(i => <span className={style.tags}>{i.name}</span>)}</div>
            <div className={style.blogbody} dangerouslySetInnerHTML={{{__html:${item.body}}}></div>
            </a>))
    } else {
        data = 'Loading...'
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