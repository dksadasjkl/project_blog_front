import { useState, useEffect } from "react";

const useCurrentLocation = (options = {}) => {
    // location 정보 저장
    const [location, setLocation] = useState({
        latitude: -3.745,
        longitude: -38.523,
    });
    // 에러 메세지 저장
    const [error, setError] = useState();

    // Geolocation의 `getCurrentPosition` 메소드에 대한 성공 callback 핸들러
    const handleSuccess = (pos) => {
        const { latitude, longitude } = pos.coords;

        setLocation({
            latitude,
            longitude,
        });
    };

    // Geolocation의 `getCurrentPosition` 메소드에 대한 실패 callback 핸들러
    const handleError = (error) => {
        setError(error.message);
    };

    useEffect(() => {
        const { geolocation } = window.navigator;

        // 사용된 브라우저에서 지리적 위치(Geolocation)가 정의되지 않은 경우 오류로 처리합니다.
        if (!geolocation) {
            setError("Geolocation is not supported.");
            return;
        }

        // Geolocation API 호출
        geolocation.getCurrentPosition(handleSuccess, handleError, options);
    }, [options]);

    return { location, error };
};

export default useCurrentLocation;