import {createContext} from "react";

const SchoolMapContext = createContext({
  showOnlyVerifiedUsers: true,
  setShowOnlyVerifiedUsers : () => {},
  numberOfVisibleParents: 5,
});

export default SchoolMapContext