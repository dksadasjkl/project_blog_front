/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { FaCrown } from "react-icons/fa";
import { PiHamburger } from "react-icons/pi";
import { LuGlassWater } from "react-icons/lu";
import { TiThSmall } from "react-icons/ti";
import { useRecoilState } from "recoil";
import { categoryState } from "../../atoms/categoryAtom";
import BigCategoryButton from "../BigCategoryButton/BigCategoryButton";

function BigMenuComponent() {
    const [category, setCategory] = useRecoilState(categoryState);
    const handleAllClick = () => {
        setCategory(1);
    };
    const handleTop3Click = () => {
        setCategory(2);
    };
    const handleBurgerClick = () => {
        setCategory(3);
    };
    const handleDrinkClick = () => {
        setCategory(4);
    };
    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1 css={s.menuFont}>메뉴</h1>
                <h1 css={s.categoryFont}>종류</h1>
            </div>
            <div css={s.categoryLayout}>
                <div>
                    <BigCategoryButton
                        icon={<TiThSmall />}
                        categoryName={"전체"}
                        onClick={handleAllClick}
                    />
                </div>
                <div css={s.container}>
                    <BigCategoryButton
                        icon={<FaCrown />}
                        categoryName={"TOP3"}
                        onClick={handleTop3Click}
                    />
                </div>
                <div css={s.container}>
                    <BigCategoryButton
                        icon={<PiHamburger />}
                        categoryName={"버거"}
                        onClick={handleBurgerClick}
                    />
                </div>
                <div css={s.container}>
                    <BigCategoryButton
                        icon={<LuGlassWater />}
                        categoryName={"음료"}
                        onClick={handleDrinkClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default BigMenuComponent;