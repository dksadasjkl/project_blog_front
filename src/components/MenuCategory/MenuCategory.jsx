/**@jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import CategoryButton from "../CategoryButton/CategoryButton";
import * as s from "./style";
import { categoryState } from "../../atoms/categoryAtom";
import { LuGlassWater } from "react-icons/lu";
import { LuCoffee } from "react-icons/lu";
import { SiBuymeacoffee } from "react-icons/si";
import { FaCrown } from "react-icons/fa";
import { TiCoffee } from "react-icons/ti";
import { TiThSmall } from "react-icons/ti";

function MenuCategory() {
    const [category, setCategory] = useRecoilState(categoryState);
    const handleAllClick = () => {
        setCategory(1);
    };
    const handleTop3Click = () => {
        setCategory(2);
    };
    const handleHotCoffeeClick = () => {
        setCategory(3);
    };
    const handleIceCoffeeClick = () => {
        setCategory(4);
    };
    const handleSmoothieFrappeClick = () => {
        setCategory(5);
    };
    const handleAdeClick = () => {
        setCategory(6);
    };
    const handleTeaClick = () => {
        setCategory(7);
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
                    icon={<LuCoffee />}
                    categoryName={"커피(HOT)"}
                    onclick={handleHotCoffeeClick}
                />
                <CategoryButton
                    icon={<TiCoffee />}
                    categoryName={"커피(ICE)"}
                    onclick={handleIceCoffeeClick}
                />
                <CategoryButton
                    icon={<SiBuymeacoffee />}
                    categoryName={"스무디"}
                    onclick={handleSmoothieFrappeClick}
                />
                <CategoryButton
                    icon={<LuGlassWater />}
                    categoryName={"에이드"}
                    onclick={handleAdeClick}
                />
                <CategoryButton
                    icon={<LuGlassWater />}
                    categoryName={"티(Tea)"}
                    onclick={handleTeaClick}
                />
            </div>
        </div>
    );
}

export default MenuCategory;