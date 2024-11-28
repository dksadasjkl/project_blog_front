/**@jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { playDataListState } from "../../atoms/playDataListAtom";
import { playDataState } from "../../atoms/playDataAtom";

function PlayList() {
    const [playListData, setPlayListData] = useRecoilState(playDataListState);
    const [playData, setPlayData] = useRecoilState(playDataState);
    const [onClick, setOnClick] = useState("");
    const navigate = useNavigate();
    const handlePageClick = () => {
        navigate("/menu/playlist/map");
    };

    const handleSelectClick = (id) => {
        const playList = playListData.filter((data) => data.id === id)[0];

        if (playListData.id !== playList?.id) {
            setPlayData(() => playList);
        }
    };

    useEffect(() => {
        setPlayData(playListData[0]);
    }, [playListData]);

    return (
        <div css={s.layout}>
            <div css={s.listContainer}>
                <ul css={s.listLayout}>
                    {playListData.map((data, index) => (
                        <li
                            value={index}
                            css={s.list(playData?.id === data?.id)}
                            key={data.id}
                            onClick={() => handleSelectClick(data.id)}
                        >
                            {data.displayName.text}
                        </li>
                    ))}
                </ul>
            </div>
            <div css={s.contentLayout}>
                <div css={s.container}>
                    {/* <div css={s.top}> */}
                    <button css={s.mapButton} onClick={handlePageClick}>
                        지도 보기
                    </button>
                    {/* </div> */}
                    <div css={s.bodyContainer}>
                        {playData && (
                            <>
                                <div css={s.name}>
                                    {playData.displayName?.text !== undefined
                                        ? playData?.displayName?.text
                                        : "정보없음"}
                                </div>
                                {playData.currentOpeningHours !== undefined ? (
                                    playData.currentOpeningHours.openNow ===
                                    true ? (
                                        <span
                                            css={s.openNow(
                                                playData.currentOpeningHours
                                                    .openNow
                                            )}
                                        >
                                            영업 중
                                        </span>
                                    ) : (
                                        <span
                                            css={s.openNow(
                                                playData.currentOpeningHours
                                                    .openNow
                                            )}
                                        >
                                            영업 종료
                                        </span>
                                    )
                                ) : (
                                    ""
                                )}
                                <div css={s.text}>
                                    <FaStar css={s.star} />{" "}
                                    {playData.rating !== undefined
                                        ? playData?.rating
                                        : "정보없음"}
                                </div>
                                <div css={s.text}>
                                    <MdPlace css={s.icon} />{" "}
                                    {playData.formattedAddress !== undefined
                                        ? playData?.formattedAddress
                                        : "정보없음"}
                                </div>
                                <div css={s.text}>
                                    <IoIosPhonePortrait css={s.icon} />{" "}
                                    {playData.nationalPhoneNumber !== undefined
                                        ? playData?.nationalPhoneNumber
                                        : "정보없음"}
                                </div>
                                <div css={s.time}>
                                    <FaRegClock css={s.icon} />{" "}
                                    <ul css={s.liLayout}>
                                        {playData.currentOpeningHours !==
                                        undefined
                                            ? playData?.currentOpeningHours.weekdayDescriptions.map(
                                                  (hours, index) => (
                                                      <li key={index}>
                                                          {hours}
                                                      </li>
                                                  )
                                              )
                                            : "정보없음"}
                                    </ul>
                                </div>
                                <div css={s.review}>
                                    <p>Review</p>
                                    <ul css={s.reviewLayout}>
                                        {playData?.reviews !== undefined
                                            ? playData?.reviews?.map(
                                                  (review, index) => (
                                                      <li key={index}>
                                                          {review?.text?.text}
                                                      </li>
                                                  )
                                              )
                                            : "정보없음"}
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayList;