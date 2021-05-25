import { useEffect } from "react";

const Qiita = () => {
    const key = process.env.REAC_APP_QIITA_KEY;
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