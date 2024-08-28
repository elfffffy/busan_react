
const BusanItem = ({ article }) => {
    const {
        MAIN_TITLE,
        TITLE,
        SUBTITLE,
        ADDR1,
        MAIN_IMG_NORMAL,
        HOMEPAGE_URL
    } = article

    return (
        <div className="item">
            <div className="title">
                <h1>{MAIN_TITLE}</h1>
                <button className="heart">저장</button>
            </div>
            <figure>
                <img src={MAIN_IMG_NORMAL} alt="이미지" />
            </figure>

            <div className="text">
                <h3>{TITLE}</h3>
                <h4>{SUBTITLE}</h4>
                <p>{ADDR1}</p>
            </div>{/* .text end */}

            {HOMEPAGE_URL && <a href={HOMEPAGE_URL} target="_blank" rel="noreferrer">바로가기</a>}

        </div> /* .item end */
    )
}

export default BusanItem;