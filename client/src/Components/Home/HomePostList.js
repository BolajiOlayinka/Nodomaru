import React from "react";
import Post from "./HomePost";
import { AppConsumer } from "../../Context";
import Spinner from "../Spinner";

export default function ServicePostList() {
  return (
    <React.Fragment>
      <AppConsumer>
        {(value) => {
          console.log(value)
          const { AllPost } = value;
          
          if (AllPost === undefined || AllPost.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                {AllPost.AllPost.slice(0, 3).map((item) => (
                  <Post key={item.id} post={item} />
                ))}
              </React.Fragment>
            );
          }
        }}
      </AppConsumer>
    </React.Fragment>
  );
}
