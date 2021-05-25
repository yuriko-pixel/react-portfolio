import { useEffect, useState, useMemo } from "react";
import style from '../styles/qiita.module.scss'
import Moment from 'react-moment';

const Qiita = () => {
    const [articles, setArticles] = useState([]);

    const key = process.env.REACT_APP_QIITA_KEY;
    const dataFetch = ()=> {
        fetch('https://qiita.com/api/v2/authenticated_user/items', {method:'GET', 
            headers: {
                'Authorization': 'Bearer ' + key,
                'Content-Type': 'application/json'
            }})
                .then(response => response.json())
                .then(json => {
                    setArticles(json);}
                    )
    };
    useEffect(() => {
        const data = async() => {
            const blogs =  await dataFetch();
            setArticles(blogs);
          };
          data();
    },[])
    
    if(articles.length !== 0) {
        data = articles.map(item => (
        <a href={item.url} className={style.wrapper} target="_blank" rel="noopener noreferrer" key={Math.random()}>
            <h3>{item.title}</h3>
            <div className={style.flex}>
                <img src={item.user.profile_image_url} alt="profile" className={style.profile} />
                <span className={style.username}>@ {item.user.id}</span>
            </div>
            <div className={style.date}><Moment format="YYYY/MM/DD">{item.created_at}</Moment></div>
            <div className={style.flex}>{item.tags.map(i => <span className={style.tags}>{i.name}</span>)}</div>
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