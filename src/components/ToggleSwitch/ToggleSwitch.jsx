import Switch from "react-switch";
import { useRecoilState } from "recoil";
import { salesModeState } from "../../atoms/salesModeAtom";
import { storeFeedbackSettingState } from "../../atoms/storeFeedbackSettingAtom";
import { storePlaySettingState } from "../../atoms/storePlaySettingAtom";

const ToggleSwitch = ({ width, height, onColor, offColor, state, checked }) => {
    const [salesMode, setSalesMode] = useRecoilState(salesModeState);
    const [storeFeedbackSetting, setStoreFeedbackSetting] = useRecoilState(
        storeFeedbackSettingState
    );
    const [storePlaySetting, setStorePlaySetting] = useRecoilState(
        storePlaySettingState
    );

    const handleChange = (checked) => {
        if (state === "sales") {
            setSalesMode(() => !salesMode);
        } else if (state === "feedback") {
            setStoreFeedbackSetting(() => !storeFeedbackSetting);
        } else if (state === "play") {
            setStorePlaySetting(() => !storePlaySetting);
        }
    };

    return (
        <label>
            <Switch
                height={height}
                width={width}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor={onColor}
                offColor={offColor}
                onChange={handleChange}
                checked={checked}
            />
        </label>
    );
};

export default ToggleSwitch;