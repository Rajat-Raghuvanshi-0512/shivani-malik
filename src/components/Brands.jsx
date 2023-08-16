import texture2 from "../assets/texture-2.webp";
import brands from "../assets/brands.webp";
import brandsDesk from "../assets/brandsDesk.webp";

export function Brands() {
    var brandsimg = brandsDesk;
    if (window.innerWidth < 768) {
        brandsimg = brands;
    }
    return <div className="w-full relative bg-white pb-16 sm:pt-[400px] pt-80 md:pt-72 lg:pt-96 sm:px-[108px] px-7" style={{ backgroundImage: `url(${texture2})` }}>
        <img src={brandsimg} alt="brands" className="w-full sm:2/3" />
    </div>;
}
