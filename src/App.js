import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      {contacts.map((item, i) => (
        <Contact key={contacts[i].phone} data={contacts[i]} />
      ))}
    </div>
  );
};

export default App;
