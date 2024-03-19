/** @jsxImportSource @emotion/react */
import { GridLoader } from "react-spinners";
import * as s from "./style";

function FullSizeLoader({ size }) {
    return (
        <div css={s.layout}>
            <GridLoader color="#36d7b7" size={size} />
        </div>
    );
}

export default FullSizeLoader;