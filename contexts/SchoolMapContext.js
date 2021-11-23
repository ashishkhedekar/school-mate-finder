import {createContext} from "react";

const SchoolMapContext = createContext({
  showOnlyVerifiedUsers: true,
  setShowOnlyVerifiedUsers : () => {},
  numberOfVisibleParents: 5,
  selectedParentIdOnTheMap: -1,
  setSelectedParentIdOnTheMap : () => {},
});

export default SchoolMapContext