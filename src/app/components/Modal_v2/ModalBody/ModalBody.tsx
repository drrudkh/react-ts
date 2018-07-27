import React from "react";

import "./_modal-body.scss";

const ModalBody: React.SFC = props => {
  return <div className="modal-body">{props.children}</div>;
};

export default ModalBody;
