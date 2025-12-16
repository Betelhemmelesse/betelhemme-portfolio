// import React from "react";
// import "./MyWork.css";
// import theam from "../../assets/theam.png";
// import mywork_data from "../../assets/mywork_data";
// import arrow from "../../assets/arrow.png";

// const MyWork = () => {
//   const handleWorkClick = (link) => {
//     if (link) {
//       window.open(link, "_blank");
//     }
//   };

//   return (
//     <div id="work" className="mywork">
//       <div className="mywork-title">
//         <h1>My Projects</h1>
//         <img src={theam} alt="" />
//       </div>
//       <div className="mywork-container">
//         {mywork_data.map((work, index) => {
//           return (
//             <img
//               key={index}
//               src={work.w_img}
//               onClick={() => handleWorkClick(work.w_link)}
//               className={work.w_link ? "clickable-work" : ""}
//               alt={work.w_name}
//             />
//           );
//         })}
//       </div>
//       <div className="mywork-showmore">
//         <p>Show More</p>
//         <img src={arrow} alt="" />
//       </div>
//     </div>
//   );
// };

// export default MyWork;

// ------------------------------------------------------------------------------------------
import React, { useState } from "react";
import "./MyWork.css";
import theam from "../../assets/theam.png";
import mywork_data from "../../assets/mywork_data";
import arrow from "../../assets/arrow.png"; // Assuming the arrow can be flipped for "Show Less"

const MyWork = () => {
  // State to manage the number of visible items. Start with 3.
  const [visibleItems, setVisibleItems] = useState(3);
  const initialLimit = 3;
  const totalItems = mywork_data.length;

  const handleWorkClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const showMoreItems = () => {
    // When clicked, show all remaining items
    setVisibleItems(totalItems);
  };

  const showLessItems = () => {
    // When clicked, revert back to the initial limit of 3
    setVisibleItems(initialLimit);
    // Optional: Scroll back to the top of the work section for better UX
    document.getElementById("work").scrollIntoView({ behavior: "smooth" });
  };

  // Determine button visibility conditions
  const allItemsVisible = visibleItems >= totalItems;
  const canShowMore = visibleItems < totalItems;
  const canShowLess = visibleItems > initialLimit;

  // Slice the data array based on the state variable
  const itemsToShow = mywork_data.slice(0, visibleItems);

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theam} alt="" />
      </div>
      <div className="mywork-container">
        {itemsToShow.map((work, index) => {
          return (
            <img
              key={index}
              src={work.w_img}
              onClick={() => handleWorkClick(work.w_link)}
              className={work.w_link ? "clickable-work" : ""}
              alt={work.w_name}
            />
          );
        })}
      </div>

      <div className="mywork-actions">
        {/* Show the "Show More" button only if not all items are visible */}
        {canShowMore && (
          <div className="mywork-showmore" onClick={showMoreItems}>
            <p>Show More</p>
            <img src={arrow} alt="Show more arrow" />
          </div>
        )}

        {/* Show the "Show Less" button only if we have expanded past the initial limit */}
        {canShowLess && (
          <div className="mywork-showmore" onClick={showLessItems}>
            <p>Show Less</p>
            {/* Rotate the arrow image 180 degrees using CSS for "Show Less" */}
            <img src={arrow} alt="Show less arrow" className="rotate-arrow" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWork;
