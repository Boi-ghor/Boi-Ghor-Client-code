import React, { useEffect, useState } from "react";
import Publishers from "../../Component/NavbarPages/Publishers";
import { LoadAllAlt } from "../../ApiRequest/ApiRequest";
import FullScreenLoader from "../../Component/Common/FullScreenLoader";

const PublishersPage = (props) => {
  let [publishers, SetPublishers] = useState([]);
  useEffect(() => {
    LoadAllAlt("/publishers").then((Result) => {
      SetPublishers(Result);
    });
  }, []);
  if (publishers.length > 0) {
    return (
      <div className="px-6 py-8">
        <div className="glow-border glowing-border border-4 px-6 py-8 mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary">Meet Our Publishers</h1>
            <p className="mt-2 text-primary">
              Unlocking the doors to the world of publishing - Meet Our Publishers. Connecting
              authors with industry experts to bring their stories to life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 justify-items-center align-items-center">
            {publishers.map((publishers) => {
              return (
                <div className="h-auto" key={publishers._id}>
                  <Publishers publishers={publishers} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <FullScreenLoader />
      </div>
    );
  }
};

export default PublishersPage;
