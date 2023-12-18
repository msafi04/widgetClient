import { useState } from "react";

import Popup from "./components/popup/Popup"

function App() {

  const [closePopup, setClosePopup] = useState(false)

  const config = window.bundleConfig
  console.log(config)
  return (
    <div>
      { !closePopup && <Popup closePopup={closePopup} setClosePopup={setClosePopup} config={config} />}
    </div>
  );
}

export default App;
