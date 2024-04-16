// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// const Main = () => {
//   const [apidata, setApidata] = useState([]);
//   const [main, setMain] = useState([]);
//   //   const [real, setData] = useState([]);
//   console.log(apidata);
//   const { id } = useParams();
//   //   console.log("The Uniaue id for easch product is" + id);
//   useEffect(() => {
//     async function fetching() {
//       const data = await fetch(
//         "https://www.swiggy.com/mapi/homepage/getCards?lat=28.6542&lng=77.2373"
//       );
//       const jsondata = await data.json();
//       // console.log(jsondata);
//       setApidata(
//         jsondata?.data?.success?.cards[4]?.gridWidget.gridElements
//           ?.infoWithStyle?.restaurants
//       );
//     }
//     const idea = apidata.filter((item) => {
//       return item.info.id === id;
//     });
//     setMain(idea);

//     fetching();
//   }, []);

//   console.log(main);

//   const data = useParams();
//   console.log(data);
//   return (
//     <>
//       <div className="swig">
//         <div className="innerSwig">
//           <div>{main?.info?.name}</div>
//           <div>Address of resultrant</div>
//           <div>Chicken kabab haldiram</div>
//           <div>This is Beast brother</div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Main;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Main = () => {
  const [apidata, setApidata] = useState([]);
  const [main, setMain] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetching() {
      try {
        const data = await fetch(
          "https://www.swiggy.com/mapi/homepage/getCards?lat=28.6542&lng=77.2373"
        );
        const jsondata = await data.json();
        setApidata(
          jsondata?.data?.success?.cards[4]?.gridWidget.gridElements
            ?.infoWithStyle?.restaurants
        );
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetching();
  }, []); // Run the effect only once on component mount

  useEffect(() => {
    // Filter the data based on the id when apidata is updated
    const idea = apidata.filter((item) => item.info.id === id);
    console.log("this is my api fetch logic");
    setMain(idea);
  }, [apidata]); // Re-run the effect when apidata or id changes

  console.log(main[0]);
  console.log(main[0]);

  return (
    <>
      <div className="swig">
        <div className="innerSwig">
          <div>
            <h1> {main[0]?.info?.name} </h1>
          </div>
          <div>
            <h1>{main[0]?.info?.areaName}</h1>
          </div>
          <div>
            {" "}
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                main[0]?.info?.cloudinaryImageId
              }
              alt="No image"
              style={{ height: "50%", width: "50%" }}
            />
          </div>
          <div>This is Best brother</div>
        </div>
      </div>
    </>
  );
};

export default Main;
