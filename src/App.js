import { useState, useEffect } from "react";

import Popup from "./components/popup/Popup";
import useAxios from "./hooks/useAxios";

// https://github.com/msafi04/widgetClient.git

function App() {
  const [closePopup, setClosePopup] = useState(true);

  const bundleConfig = window.bundleConfig;
  console.log(bundleConfig);

  const { response, error, isLoading } = useAxios({
    method: "POST",
    url: "/widget/get",
    // data: { id: bundleConfig?.productId, customerId: bundleConfig?.userId}
    data: { id: "659cc3a2f4496379825c23ac" },
  });

  useEffect(() => {
    if (isLoading) setClosePopup(false);
  }, [isLoading]);

  return (
    <div>
      {!closePopup && (
        <Popup
          closePopup={closePopup}
          setClosePopup={setClosePopup}
          config={response}
        />
      )}
    </div>
  );
}

export default App;
