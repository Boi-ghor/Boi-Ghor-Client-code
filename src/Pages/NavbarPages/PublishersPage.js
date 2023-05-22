import React, { useContext, useEffect, useState } from "react";
import Publishers from "../../Component/NavbarPages/Publishers";
import { LoadAllAlt } from "../../ApiRequest/ApiRequest";
import { LoaderContext } from "../../context/loader";

const PublishersPage = (props) => {
  const { isLoading } = useContext(LoaderContext);
  let [publishers, SetPublishers] = useState([]);
  useEffect(() => {
    isLoading(true);
    LoadAllAlt("/publishers").then((Result) => {
      SetPublishers(Result);
      isLoading(false);
    });
  }, []);
  return (
    <section className="px-6 my-20">
      <div className="container mx-auto px-3">
        <div class="text-center lg:w-2/3 xl:w-1/2 mx-auto mb-12">
          <h1 class="text-3xl font-semibold mb-4">Meet Our Publishers</h1>
          <p class="text-lg">
            Unlocking the doors to the world of publishing - Meet Our Publishers. Connecting
            authors with industry experts to bring their stories to life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-10 justify-items-center align-items-center">
          {publishers.map((publishers) => {
            return (
              <div className="h-auto" key={publishers._id}>
                <Publishers publishers={publishers} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PublishersPage;
