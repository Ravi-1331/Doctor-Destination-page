// import HeaderBreadcrumb from "./HeaderBreadcrumb";
// import TitleAndCount from "./TitleAndCount";
// import FilterPanel from "./FilterPanel";
// import DoctorCard from "./DoctorCard";
// import { useState, useEffect } from "react";
// import "./styles.css";

// export default function DoctorsPage() {
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     // Fetch from your backend API
//     fetch("/api/doctors")
//       .then(res => res.json())
//       .then(data => setDoctors(data));
//   }, []);

//   return (
//     <div className="page-container">
//       <HeaderBreadcrumb />
//       <TitleAndCount count={doctors.length} />

//       <div className="page-layout">
//         <FilterPanel onFilter={(filters) => {/* filter logic */}} />
//         <div className="cards-container">
//           {doctors.map(doc => (
//             <DoctorCard key={doc.id} doctor={doc} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
