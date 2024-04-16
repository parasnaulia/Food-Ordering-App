// import { useState, useEffect } from "react";
// import Main from "./Main";
// import Simmer1 from "./Simmer1";
// import Item from "./Item";
// const Body = () => {
//   const [apidata, setApidata] = useState([]);
//   const [real, setreal] = useState([]);
//   const [input, setInput] = useState("");

//   // console.log(real);
//   console.log(apidata);
//   console.log(real);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data1 = await fetch(
//           "https://www.swiggy.com/mapi/homepage/getCards?lat=28.6542&lng=77.2373"
//         );
//         const jsonData = await data1.json();
//         // setApidata(JSON.parse(jsonData));
//         console.log(jsonData.data);
//         // console.log(apidata);

//         setApidata(
//           jsonData?.data?.success?.cards[4]?.gridWidget.gridElements
//             ?.infoWithStyle?.restaurants
//         );
//         setreal(
//           jsonData?.data?.success?.cards[4]?.gridWidget.gridElements
//             ?.infoWithStyle?.restaurants
//         );
//       } catch (error) {
//         console.log("Sorry, there was an error fetching data: " + error);
//       }
//     }

//     fetchData();
//   }, []);

//   return apidata.length === 0 ? (
//     <Simmer1 />
//   ) : (
//     <>
//       <div className="input">
//         <input
//           placeholder="Enter Your Fav item"
//           value={input}
//           onChange={(e) => {
//             setInput(e.target.value);
//           }}
//         />
//         <button
//           onClick={() => {
//             alert("Enfn");
//             const data = real.filter((item) => {
//               return item?.info?.name.toLowerCase() === input.toLowerCase();
//             });
//             setreal(data);
//             console.log(input);
//           }}
//         >
//           Search
//         </button>
//         <button
//           onClick={() => {
//             const data = real.filter((item) => {
//               return item.info.avgRating > 4;
//             });
//             setreal(data);
//             console.log(data);
//           }}
//           className="btn"
//         >
//           Top Rated Resturants
//         </button>
//       </div>
//       <div className="body">
//         {real.map((item, index) => {
//           return (
//             <Link to="/Main" key={index}>
//               <Item item={item} />
//             </Link>
//           );
//         })}
//       </div>
//     </>
//   );
// };
// export default Body;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Main from "./Main";
import Simmer1 from "./Simmer1";
import Item from "./Item";

const Body = () => {
  const [apidata, setApidata] = useState([]);
  const [real, setreal] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data1 = await fetch(
          "https://www.swiggy.com/mapi/homepage/getCards?lat=28.6542&lng=77.2373"
        );
        const jsonData = await data1.json();

        setApidata(
          jsonData?.data?.success?.cards[4]?.gridWidget.gridElements
            ?.infoWithStyle?.restaurants
        );
        setreal(
          jsonData?.data?.success?.cards[4]?.gridWidget.gridElements
            ?.infoWithStyle?.restaurants
        );
      } catch (error) {
        console.log("Sorry, there was an error fetching data: " + error);
      }
    }

    fetchData();
  }, []);

  return apidata.length === 0 ? (
    <Simmer1 />
  ) : (
    <>
      <div className="input">
        <input
          placeholder="Enter Your Fav item"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = real.filter((item) => {
              return item?.info?.name.toLowerCase() === input.toLowerCase();
            });
            setreal(data);
            console.log(input);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            const data = real.filter((item) => {
              return item.info.avgRating > 4;
            });
            setreal(data);
            console.log(data);
          }}
          className="btn"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="body">
        {real.map((item, index) => (
          <Link to={`/Main/${item.info.id}`} key={index}>
            <Item item={item} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
