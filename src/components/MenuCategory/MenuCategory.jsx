/**@jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import CategoryButton from "../CategoryButton/CategoryButton";
import * as s from "./style";
import { categoryState } from "../../atoms/categoryAtom";
import { PiHamburger } from "react-icons/pi";
import { LuGlassWater } from "react-icons/lu";
import { FaCrown } from "react-icons/fa";
import { TiThSmall } from "react-icons/ti";

function MenuCategory() {
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
                <h1 css={s.menuFont}>Menu</h1>
                <h1 css={s.categoryFont}>Category</h1>
            </div>
            <div css={s.categoryLayout}>
                <CategoryButton
                    icon={<TiThSmall />}
                    categoryName={"ALL"}
                    onclick={handleAllClick}
                    isChecked={true}
                />
                <CategoryButton
                    icon={<FaCrown />}
                    categoryName={"TOP3"}
                    onclick={handleTop3Click}
                />
                <CategoryButton
                    icon={<PiHamburger />}
                    categoryName={"Burger"}
                    onclick={handleBurgerClick}
                />
                <CategoryButton
                    icon={<LuGlassWater />}
                    categoryName={"Drink"}
                    onclick={handleDrinkClick}
                />
            </div>
        </div>
    );
}

export default MenuCategory;