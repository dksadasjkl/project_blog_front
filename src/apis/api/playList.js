export const playListDataRequest = async (data) => {
    return await fetch("https://places.googleapis.com/v1/places:searchNearby", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": process.env.REACT_APP_GOOGLE_API_KEY,
            "X-Goog-FieldMask": "*",
        },
        body: JSON.stringify(data),
    });
};