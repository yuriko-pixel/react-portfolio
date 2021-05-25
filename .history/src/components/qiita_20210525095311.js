import { useEffect } from "react";

const Qiita = () => {
    const key = process.env.REACT_APP_QIITA_KEY;
    console.log(key)
    useEffect(() => {
        fetch('https://qiita.com/api/v2/items', {method:'GET', 
      headers: {
        'Authorization': 'Bearer ' + key,
      }})
        .then(response => response.json())
        .then(json => {console.log(json)}
            )
    },[])
    return (
        <div></div>
    )
}
export default Qiita