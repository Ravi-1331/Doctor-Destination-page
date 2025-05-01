// File: app/specialties/general-physician-internal-medicine/Filters.jsx
import styles from './Filters.module.css';

export default function Filters({ setFilters }) {
  const handleChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.filters}>
      <select name="gender" onChange={handleChange}>
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <select name="experience" onChange={handleChange}>
        <option value="">Experience</option>
        <option value="1">1 year</option>
        <option value="5">5+ years</option>
        <option value="10">10+ years</option>
      </select>
      <select name="maxFee" onChange={handleChange}>
        <option value="">Max Fee</option>
        <option value="300">Under 300</option>
        <option value="500">Under 500</option>
        <option value="1000">Under 1000</option>
      </select>
      <select name="specialty" onChange={handleChange}>
        <option value="">Specialty</option>
        <option value="General Physician">General Physician</option>
        <option value="Internal Medicine">Internal Medicine</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Pediatrician">Pediatrician</option>
        <option value="Neurologist">Neurologist</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="ENT">ENT</option>
        <option value="Dentist">Dentist</option>
        <option value="Orthopedic">Orthopedic</option>
      </select>
      <select name="location" onChange={handleChange}>
        <option value="">Location</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Chennai">Chennai</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Ranchi">Ranchi</option>
        <option value="Jaipur">Jaipur</option>
        <option value="Pune">Pune</option>
        <option value="Ahmedabad">Ahmedabad</option>
      </select>
    </div>
  );
}
