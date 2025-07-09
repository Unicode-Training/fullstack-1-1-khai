import Header from "./components/Header";

const App = () => {
  const user = {
    address: "Hà Nội",
    position: "Developer",
  };
  return (
    <div>
      <Header name="Hoàng An" email="hoangan.web@gmail.com" {...user} />
      <h1>Hello anh em</h1>
      <h2>Học React không khó</h2>
    </div>
  );
};

export default App;
