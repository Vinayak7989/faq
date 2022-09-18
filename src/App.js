import faqs from "./data/faqs";
import Faq from "./components/faqs";

function App() {
  console.log("app", faqs);
  return (
    <div className="faqs">
      <div className="faqHeading">
        <h1 className="heading">FAQ's</h1>
      </div>
      {faqs.map((faq, i) => (
        <Faq faq={faq} key={i} />
      ))}
    </div>
  );
}

export default App;
