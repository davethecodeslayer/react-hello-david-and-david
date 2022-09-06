import React from 'react'

export const Jumbotron = () => {
  return (
    <>
      <div className="px-4 pb-4 mb-4 bg-light rounded-3">
        <div className="container-fluid pb-5">
          <h1 className="display-3 fw-bold">A Warm Welcome!</h1>
          <p className="fs-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            labore dignissimos. Ducimus odit qui ipsum, labore praesentium
            repellat facere magni deleniti vero quis distinctio laudantium,
            totam tenetur voluptatum veniam recusandae!
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Call to Action!
          </button>
        </div>
      </div>
    </>
  );
}
export default Jumbotron;