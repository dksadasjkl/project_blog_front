/**@jsxImportSource @emotion/react */
import * as s from "./style";

function CategoryButton({ icon, categoryName, onclick, isChecked }) {
    return (
        <>
            <div css={s.categoryLayout}>
                <input
                    type="radio"
                    style={{ display: "none" }}
                    id={categoryName}
                    name="menu"
                    defaultChecked={isChecked}
                />
                <label
                    css={s.category}
                    htmlFor={categoryName}
                    onClick={onclick}
                >
                    <div css={s.imglayout}>{icon}</div>
                    <div css={s.categoryTitleLayout}>
                        <h1 css={s.categoryfont}>{categoryName}</h1>
                    </div>
                </label>
            </div>
        </>
    );
}

export default CategoryButton;