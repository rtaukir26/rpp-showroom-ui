import React, { useState } from "react";
import { MenuImg } from "../../utils/images";
import { toast } from "react-toastify";

const Menu = ({ menu, mainProducts_forFilter, setProductsData }) => {
  const [activeMenu, setActiveMenu] = useState("all");
  //handle click on category
  const handleClickCategory = (menu) => {
    setActiveMenu(menu);
    let filterData = [];
    filterData = mainProducts_forFilter?.filter(
      (item) => item.category.subCategory === menu
    );

    if (menu === "all") filterData = [...mainProducts_forFilter];

    if (filterData?.length > 0) {
      setProductsData(filterData);
    } else {
      toast.error("No category matches");
    }
  };

  const returnSubCategory = (category) => {
    return (
      <ul className="sub-ul">
        {category[1]?.subCategory?.length > 0 ? (
          <>
            {category[1]?.subCategory.map((subCat) => {
              return (
                <li
                  key={subCat}
                  className={`d-flex align-items-center ${
                    activeMenu === subCat && "active-menu"
                  }`}
                  onClick={() => handleClickCategory(subCat)}
                >
                  {/* <img src={MenuImg["filter"]} alt="engine" /> */}
                  <span>{subCat}</span>
                </li>
              );
            })}
          </>
        ) : (
          <li>No category available</li>
        )}
      </ul>
    );
  };
  return (
    <div className="menu">
      <ul className="main-ul">
        <li
          className={`li-select-all ${activeMenu === "all" && "active-menu"}`}
          onClick={() => handleClickCategory("all")}
        >
          All products
        </li>
        {Object.entries(menu)?.map((category, index) => {
          return (
            <li className="li-heading" key={category[0]}>
              {category[0]}

              {/* sub category html elements */}
              {returnSubCategory(category)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
