// import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
export default function GoToBtn(screenName) {
  console.log(screenName);
  let history = useHistory();
  history.push("/new-post/-1")
  // const href = useHref();
  // href("/new-post")
  // console.log(href)
 // useHref="/new-post/-1"
  // document.getElementById("clickMeToNavigate").click()
  return null;
}
