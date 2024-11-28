/**@jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { IoMdCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { playDataState } from "../../atoms/playDataAtom";
import { useRecoilState } from "recoil";
import PageModal from "../PageModal/PageModal";
import useCurrentLocation from "../../hooks/useCrruntLocation";

const containerStyle = {
    width: "92%",
    height: "88%",
    border: "3px solid #dbdbdb",
    borderRadius: "30px",
};

function PlayMap() {
    const [playData, setPlayData] = useRecoilState(playDataState);
    const [playLocation, setPlayLocation] = useState({});
    const { location } = useCurrentLocation();
    const [map, setMap] = useState(<></>);
    const navigate = useNavigate();

    useEffect(() => {
        setPlayLocation({
            lat: playData.location.latitude,
            lng: playData.location.longitude,
        });
    }, [playData]);

    const handleCloseClick = () => {
        navigate("/menu/playlist");
    };
    useEffect(() => {
        setMap(() => (
            <LoadScript googleMapsApiKey="AIzaSyBfW0NY0PPlXdijK-njQI4HbCDrDZwy5Ko">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={playLocation}
                    zoom={17}
                >
                    {/* Child components, such as markers, info windows, etc. */}
                    <Marker position={playLocation} />
                    <></>
                </GoogleMap>
            </LoadScript>
        ));
    }, [location]);

    return (
        <PageModal>
            <div css={s.layout}>
                <button css={s.closeButton} onClick={handleCloseClick}>
                    <IoMdCloseCircle />
                </button>
                {map}
            </div>
            ;
        </PageModal>
    );
}

export default PlayMap;