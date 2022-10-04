import React, { useEffect } from "react";
import { Item } from "../../components/Item/Item";
import { Items } from "../../components/Home/Items/Items";
import { PageTitle } from "../../components/core-ui/PageTitle/PageTitle";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchItems } from "../../store/slices/items.slice";
import "./Profile.scss";

type Props = {};

export const Profile = (props: Props) => {
  const { user } = useAppSelector((state) => state.auth);
  const { items } = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className="profile">
      <PageTitle
        title={`Profile of ${user.username}`}
        text="Here you can create new products"
      />
      {/* <div className="create-item">
        <div className="create-item__form">
          <FormItems />
        </div>
      </div> */}
      <div className="your-ads">Your ads</div>
      <Items>
        {items.map((e) => (
          <Item
            key={e.id}
            name={e.name}
            description={e.description}
            price={e.price}
            rating={e.rating}
            id={e.id}
            image={e.image}
          />
        ))}
      </Items>
    </div>
  );
};
