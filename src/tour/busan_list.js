import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import BusanItem from "./busan_item";

const BusanList = () => {
    const key = "wZeUZ%2FgZ5NhsFo0K8jkOXzFSj7EGpzIcpkyrin3fjDAj3G1Zx87yjwq8UvfcP2rM%2B9tHF%2FOYfERVHUZXWpz2gw%3D%3D";
    const [tour, SetTour] = useState([]);

    useEffect(() => {
        //비동기 작업 시 사용하는 키워드
        //async : 비동기임을 나타내는 함수
        //await
        const tourData = async () => {
            //try : 오류가 없을 때 실행
            //catch : 오류가 있을 때 실행
            try {
                const tourApi = await axios.get(`https://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=${key}&numOfRows=10&pageNo=1&resultType=json`)
                SetTour(tourApi.data.getAttractionKr.item)
                console.log(tourApi);
                //백틱(``) : 문자열 안에 변수가 있을 때 사용
            } catch (error) {
                alert(error);
            }
        };
        tourData();
    }, [ ]); /* useEffect */
    // [] => tourData() 데이터는 접속했을 떄 한 번만 수행되도록 함

    return (
        <div className="list">
            {/* map : 반복 수행 => tourMap에 tour값이 반복적으로 들어감 */}
            {tour.map((tourMap) => (
                <BusanItem article={tourMap} />
            ))}
        </div>
    )
}

export default BusanList;