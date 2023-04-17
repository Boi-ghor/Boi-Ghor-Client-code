import React from 'react';

const Faq = () => {
  return (
    <div className="items-center">
      <div className="card card-compact bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Frequenty Asked Questions!</h2>
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
              Book BD! what is this?
            </div>
            <div className="collapse-content">
              <p>This is a book shop</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
              What does book bd sell?
            </div>
            <div className="collapse-content">
              <p>It sells books</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
              What kind of books we can find here?
            </div>
            <div className="collapse-content">
              <p>Any kind of books can be found here</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Faq;