/**@jsxImportSource @emotion/react */
import * as s from "./style";

function BigCategoryButton({ icon, categoryName, onClick }) {
    return (
        <div css={s.categoryLayout}>
            <button css={s.category} onClick={onClick}>
                <div css={s.imglayout}>{icon}</div>
                <div css={s.categoryTitleLayout}>
                    <h1 css={s.categoryfont}>{categoryName}</h1>
                </div>
            </button>
        </div>
    );
}

export default BigCategoryButton;