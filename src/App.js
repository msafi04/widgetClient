import { useState, useEffect } from "react";

import Popup from "./components/popup/Popup";
import useAxios from "./hooks/useAxios";
import useUrlTime from "./hooks/useUrlTime";

// https://github.com/msafi04/widgetClient.git

function App() {
  const [closePopup, setClosePopup] = useState(true);

  // const { isActive, totalActiveTime } = useUrlTime();

  // useEffect(() => {
  //   console.log(isActive, totalActiveTime)
  // }, [isActive, totalActiveTime])

  const bundleConfig = window.bundleConfig;
  // console.log(bundleConfig);
  const customerId = "12345678";

  const { response, error, isLoading } = useAxios({
    method: "POST",
    url: "/survey/get",
    // data: { id: bundleConfig?.productId, customerId: bundleConfig?.userId}
    data: { id: "659cc3a2f4496379825c23ac", customerId: customerId },
  });

  useEffect(() => {
    if (isLoading) setClosePopup(false);
  }, [isLoading]);

  return (
    <div>
      {!closePopup && response && (
        <Popup
          closePopup={closePopup}
          setClosePopup={setClosePopup}
          config={response}
          productId={"659cc3a2f4496379825c23ac"}
          customerId={customerId}
        />
      )}
    </div>
  );
}

export default App;
