/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { FaCrown } from "react-icons/fa";
import { LuGlassWater } from "react-icons/lu";
import { TiThSmall } from "react-icons/ti";
import { useRecoilState } from "recoil";
import { categoryState } from "../../atoms/categoryAtom";
import BigCategoryButton from "../BigCategoryButton/BigCategoryButton";
import { LuCoffee } from "react-icons/lu";
import { SiBuymeacoffee } from "react-icons/si";
import { TiCoffee } from "react-icons/ti";

function BigMenuComponent() {
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
                         icon={<LuCoffee />}
                         categoryName={"커피(HOT)"}
                         onclick={handleHotCoffeeClick}
                    />
                </div>
                <div css={s.container}>
                    <BigCategoryButton
                        icon={<TiCoffee />}
                        categoryName={"커피(ICE)"}
                        onclick={handleIceCoffeeClick}
                    />
                </div>
                <div css={s.container}>
                    <BigCategoryButton
                        icon={<SiBuymeacoffee />}
                        categoryName={"스무디"}
                        onclick={handleSmoothieFrappeClick}
                    />
                </div>
                <div css={s.container}>
                    <BigCategoryButton
                        icon={<LuGlassWater />}
                        categoryName={"에이드"}
                        onclick={handleAdeClick}
                    />
                </div>
                <div css={s.container}>
                    <BigCategoryButton
                        icon={<LuGlassWater />}
                        categoryName={"티(Tea)"}
                        onclick={handleTeaClick}
                    />
                </div>
                
            </div>
        </div>
    );
}

export default BigMenuComponent;