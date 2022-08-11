import React from 'react'
import PropTypes from "prop-types"


export const Cardlist = (props) => {
  return (
		<>
			<div className="row row-cols-1 row-cols-md-4 g-4">
				{props.cardList.map((item, index) => (
					<div key={index} className="card">
							<img
								src="https://via.placeholder.com/500x325"
								className="card-img-top"
								alt="placeholder"
							/>
							<div className="card-body">
                <h5 className="card-title d-flex justify-content-center">{item.name}</h5>
                <p className="card-text d-flex justify-content-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary d-flex justify-content-center">Go somewhere</a>
              </div>
					</div>
				))}
			</div>
		</>
  )
  }

  Cardlist.propTypes = {
    cardList: PropTypes.array,
  };

export default Cardlist; 