/**@jsxImportSource @emotion/react */
import { Route, Routes, useNavigate } from "react-router-dom";
import PageModal from "../../components/PageModal/PageModal";
import * as s from "./style";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { playDataListState } from "../../atoms/playDataListAtom";
import { playListDataRequest } from "../../apis/api/playList";
import PlayList from "../../components/PlayList/PlayList";
import PlayMap from "../../components/PlayMap/PlayMap";
import { useEffect } from "react";

function PlayListPage() {
    // useAuthCheck()
    const [playListData, setPlayListData] = useRecoilState(playDataListState);
    const navigate = useNavigate();


    const playListDataQuery = useQuery(
        ["playListDataQuery"],
        () =>
            playListDataRequest({
                includedTypes: ["tourist_attraction"],
                maxResultCount: 10,
                locationRestriction: {
                    circle: {
                        center: {
                            latitude: 35.159774,
                            longitude: 129.162045,
                        },
                        radius: 1000.0,
                    },
                },
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                response.json().then((data) => {
                    console.log("데이터" + data);
                    console.log("데이터 장소" + data.places);
                    setPlayListData(() => data.places);
                });
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const handleSubmitClick = () => {
        navigate("/menu/main");
    };

    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.container}>
                    <PlayList />
                </div>
                <div css={s.buttonBox}>
                    <button css={s.cancel} onClick={handleSubmitClick}>
                        닫기
                    </button>
                </div>
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route path="/map" element={<PlayMap />} />
                </Routes>
            </div>
        </PageModal>
    );
}

export default PlayListPage;