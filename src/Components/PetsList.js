import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";
import Selector from "./Selector";
import SearchBar from "./SearchBar";

function PetsList() {
  const [query, setQuery] = useState("");
  const [searchType, setsearchType] = useState("");

  const filterPets = pets.filter((pet) => {
    if (pet.name.toLowerCase().includes(query.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  const filterPet = filterPets.filter((pet) => {
    if (pet.type.includes(searchType)) {
      return true;
    } else {
      return false;
    }
  });

  const searchBar = (event) => {
    setQuery(event.target.value);
  };

  const theType = (event) => {
    setsearchType(event.target.value);
  };

  const petList = filterPet.map((pet) => <PetItem pet={pet} key={pet.id} />);

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>

              <SearchBar searchBar={searchBar} />
            </div>
          </div>
        </div>
        <Selector theType={theType} />
        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;

// import { useState } from "react";
// import pets from "../petsData";
// import PetItem from "./PetItem";

// function PetsList() {
//   const [query, setQuery] = useState("");
//   const [searchType, setsearchType] = useState("");

//   const filterPets = pets.filter((pet) => {
//     if (pet.name.toLowerCase().includes(query.toLowerCase())) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   const filterPet = filterPets.filter((pet) => {
//     if (pet.type.includes(searchType)) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   const searchBar = (event) => {
//     setQuery(event.target.value);
//   };

//   const theType = (event) => {
//     setsearchType(event.target.value);
//   };

//   const petList = filterPet.map((pet) => <PetItem pet={pet} key={pet.id} />);

//   return (
//     <section id="doctors" className="doctor-section pt-140">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-xxl-5 col-xl-6 col-lg-7">
//             <div className="section-title text-center mb-30">
//               <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
//                 Fur-ends
//               </h1>
//               <div className="input-group rounded">
//                 <input
//                   type="search"
//                   className="form-control rounded"
//                   placeholder="Search"
//                   aria-label="Search"
//                   aria-describedby="search-addon"
//                   onChange={searchBar}
//                 />
//               </div>
//               <br />
//               Type:
//               <select className="form-select" onChange={theType}>
//                 <option value="" selected>
//                   All
//                 </option>
//                 <option value="Cat">Cat</option>
//                 <option value="Dog">Dog</option>
//                 <option value="Rabbit">Rabbit</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="row justify-content-center">{petList}</div>
//       </div>
//     </section>
//   );
// }

// export default PetsList;
