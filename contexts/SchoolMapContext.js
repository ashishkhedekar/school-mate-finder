import {createContext} from "react";

const SchoolMapContext = createContext({
  showOnlyVerifiedUsers: false,
  setShowOnlyVerifiedUsers : () => {}

});

export default SchoolMapContext