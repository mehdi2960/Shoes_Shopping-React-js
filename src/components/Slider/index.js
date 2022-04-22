import React from "react";
import S1 from "../../assets/images/S1.png";
import Carousel from "react-material-ui-carousel";
import S4 from "../../assets/images/S4.png";
import S5 from "../../assets/images/S5.png";
import Item from "./Item";

export default function Index() {
    const data = [
      {
        id: 1,
        title: "کفش اول",
        image: S1,
        price: "70,000",
        subTitle: "این زیر عنوان کفش است",
        discount: "25",
      },
      {
        id: 2,
        title: "کفش دوم",
        image: S4,
        price: "70,000",
        subTitle: "این زیر عنوان کفش است",
        discount: "25",
      },
      {
        id: 3,
        title: "کفش سوم",
        image: S5,
        price: "70,000",
        subTitle: "این زیر عنوان کفش است",
        discount: "25",
      },
    ];

  return (
      <Carousel>
        {data.map((item) => (
          <Item key={item.id} item={item}/>
        ))}
      </Carousel>
  );
}
