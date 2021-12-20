import React, { useState } from "react";
import "../../../assets/css/member/mainBook.css";
import "bootstrap/dist/css/bootstrap.css";
const Navbar = React.lazy(() => import("./Navbar"));
const Main = React.lazy(() => import("./Main"));
const Book = React.lazy(() => import("./Book"));
const ThankYou = React.lazy(() => import("./ThankYou"));

const Index = () => {
  const [page, setPage] = useState(0);
  console.log(page)
  return (
    <div>
      <Navbar setPage={setPage} />
      {/* Main */}
      {page === 0 ? <Main setPage={setPage} /> : null}
      {/* Book */}
      {page === 1 ? <Book setPage={setPage} /> : null}
      {/* Thanks */}
      {page === 2 ? <ThankYou /> : null}
    </div>
  );

};

export default Index;
