import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RESTAURANT_MENU_API, RESTAURANT_MENU_IMG } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [resMenu, setResMenu] = useState([]);
    const { resId } = useParams();

    useEffect(() => {
        const fetchRestaurantMenu = async () => {
            try {
                const response = await fetch(RESTAURANT_MENU_API + resId);
                const json = await response.json();

                // Restaurant info
                setResInfo(
                    json?.data?.cards?.find((item) => item?.card?.card?.info)
                        ?.card?.card?.info
                );
                // Restaurant menu
                const menuData = json?.data?.cards
                    ?.find((item) => item?.groupedCard)
                    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
                        (item) =>
                            item?.card?.card["@type"]?.includes(
                                "ItemCategory"
                            ) ||
                            item?.card?.card["@type"]?.includes(
                                "NestedItemCategory"
                            )
                    );
                const organisedMenuData = menuData?.map((item) => {
                    const type = item?.card?.card["@type"];
                    const title = item?.card?.card?.title;

                    const itemCards = item?.card?.card?.itemCards || [];
                    const categories = item?.card?.card?.categories || [];

                    if (type?.includes("NestedItemCategory")) {
                        return {
                            title,
                            type: "nested",
                            categories: categories?.map((subcategory) => {
                                return {
                                    title: subcategory?.title,
                                    itemCards: subcategory?.itemCards
                                };
                            })
                        };
                    } else {
                        return {
                            title,
                            type: "item",
                            itemCards
                        };
                    }
                });
                setResMenu(organisedMenuData);
            } catch (err) {
                console.error(err.message);
            }
        };

        fetchRestaurantMenu();
    }, []);

    if (resInfo === null) return <div>Loading...</div>;
    const { name, locality, avgRating } = resInfo;

    return (
        <div className="container max-w-2xl mx-auto my-10">
            {/* Restaurant Menu Info */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p>Locality: {locality}</p>
                <p>Ratings: {avgRating}</p>
            </div>

            {/* Restaurant Menu Categories */}
            {resMenu?.map((category) =>
                category?.type === "item" ? (
                    <ItemCategory key={category?.title} data={category} />
                ) : (
                    <NestedItemCategory key={category?.title} data={category} />
                )
            )}
        </div>
    );
};

const ItemCategory = (props) => {
    const { title, itemCards } = props?.data;

    return (
        <div>
            <h3 className="text-2xl font-bold p-5 border border-black rounded-lg">
                {title}
            </h3>
            <ul className="px-5 py-5 space-y-10">
                {itemCards?.map((item) => (
                    <MenuItem
                        key={item?.card?.info?.id}
                        menuInfo={item?.card?.info}
                    />
                ))}
            </ul>
        </div>
    );
};

const NestedItemCategory = (props) => {
    const { title, categories } = props?.data;

    return (
        <div>
            <h3 className="text-2xl font-bold p-3 rounded-lg">{title}</h3>
            <div className="px-5 py-5 space-y-10">
                {categories?.map((subcategory) => (
                    <div key={subcategory?.title}>
                        <h4 className="font-bold text-xl border border-black rounded-lg p-4">
                            {subcategory?.title}
                        </h4>
                        <ul className="space-y-8 m-4">
                            {subcategory?.itemCards?.map((item) => (
                                <MenuItem
                                    key={item?.card?.info?.id}
                                    menuInfo={item?.card?.info}
                                />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

const MenuItem = (props) => {
    const { name, price, defaultPrice, description, imageId } = props?.menuInfo;

    return (
        <li className="flex justify-between">
            <div className="space-y-1 w-1/2">
                <h4 className="text-lg font-semibold">{name}</h4>
                {price && (
                    <div className="font-medium">
                        Rs {(price / 100)?.toFixed(2)}
                    </div>
                )}
                {defaultPrice && (
                    <div className="font-medium">
                        Rs {(defaultPrice / 100)?.toFixed(2)}
                    </div>
                )}
                {description && (
                    <p className="text-wrap break-words">{description}</p>
                )}
            </div>
            <div className="w-40 h-40">
                <img
                    src={RESTAURANT_MENU_IMG + imageId}
                    alt={name}
                    className="w-40 h-full object-cover rounded-lg"
                />
            </div>
        </li>
    );
};

export default RestaurantMenu;
/*10591 use this restaurant id*/