import { useEffect } from "react";

const usePageTitle = (text) => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = text;
  }, [text]);
};

export default usePageTitle;
