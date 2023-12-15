import { useState } from "react";

import Popup from "./components/popup/Popup"

function App() {

  const [closePopup, setClosePopup] = useState(false)
  return (
    <div>
      { !closePopup && <Popup closePopup={closePopup} setClosePopup={setClosePopup} />}
    </div>
  );
}

export default App;
